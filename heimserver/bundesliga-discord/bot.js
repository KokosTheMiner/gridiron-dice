#!/usr/bin/env node
/* Bundesliga-Tippspiel → Discord (nur Nachrichten per Webhook)
   Läuft dauerhaft auf dem Heimserver, prüft alle 10 Minuten und postet in den Kanal:
   - "Spieltag X ist offen"         (sobald ein neuer Spieltag tippbar ist)
   - Erinnerung 24 h und 2 h vor der Sperre (mit Namen, wer noch fehlt)
   - "Tippabgabe geschlossen"
   - Spieltagssieger + Tipper-Tabelle + Bundesliga-Tabelle (wenn alle Spiele beendet sind)
   Daten: OpenLigaDB (Spielplan/Ergebnisse/Tabelle), Firebase (Spieler/Tipps)
   Konfiguration: config.json  {"webhook": "https://discord.com/api/webhooks/..."}  (geheim, NICHT ins Git!)
   Aufruf: node bot.js            → Dauerbetrieb
           node bot.js --dry      → einmal prüfen, nur anzeigen, nichts posten
           node bot.js --test     → Testnachricht in den Kanal
           node bot.js --table    → Bundesliga-Tabelle jetzt einmal posten
           node bot.js --init     → alles bisher Fällige als "erledigt" markieren, ohne zu posten */
"use strict";
const fs = require("fs");
const path = require("path");

const DIR = __dirname;
const CFG = JSON.parse(fs.readFileSync(path.join(DIR, "config.json"), "utf8"));
const STATE_FILE = path.join(DIR, "state.json");
const C = {
  site: "https://kokostheminer.github.io/gridiron-dice/bundesliga/",
  firebase: "https://nfl-tippspiel-df32c-default-rtdb.europe-west1.firebasedatabase.app",
  base: "tippspiel/freunde/bl",
  lockMinutes: 60,
  doubleMax: 2, mwMax: 1, mwMult: 3,
  matchdays: 34,
  remindHours: [24, 2],
  intervalMinutes: 10,
  ...CFG
};
const OLDB = "https://api.openligadb.de";
const args = process.argv.slice(2);
const DRY = args.includes("--dry"), INIT = args.includes("--init");

/* ---------- Hilfen ---------- */
const log = (...a) => console.log(new Date().toISOString(), ...a);
const fmtFull = new Intl.DateTimeFormat("de-DE", {timeZone: "Europe/Berlin", weekday: "short", day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit"});
const fmtPts = n => (Math.round(n * 10) / 10).toString().replace(".", ",");
const nowD = new Date();
const SEASON = nowD.getMonth() >= 6 ? nowD.getFullYear() : nowD.getFullYear() - 1;
const seasonLabel = s => `${s}/${String(s + 1).slice(2)}`;
const WEEKS = Array.from({length: C.matchdays}, (_, i) => `md${i + 1}`);
const mdNum = k => +k.slice(2);
const weekLabel = k => `${mdNum(k)}. Spieltag`;
const loadState = () => { try { return JSON.parse(fs.readFileSync(STATE_FILE, "utf8")); } catch { return {done: {}}; } };
const saveState = s => fs.writeFileSync(STATE_FILE, JSON.stringify(s, null, 1));

async function getJSON(url) {
  const r = await fetch(url, {headers: {"User-Agent": "tippspiel-discord"}});
  if (!r.ok) throw new Error(`${r.status} bei ${url.split("?")[0]}`);
  return r.json();
}
const fb = p => getJSON(`${C.firebase}/${C.base}/${SEASON}/${p}.json`);

/* ---------- OpenLigaDB ---------- */
async function loadWeek(key) {
  const d = await getJSON(`${OLDB}/getmatchdata/bl1/${SEASON}/${mdNum(key)}`);
  const events = (d || []).map(m => {
    const fin = (m.matchResults || []).find(r => r.resultTypeID === 2);
    let winner = null;
    if (m.matchIsFinished && fin) winner = fin.pointsTeam1 > fin.pointsTeam2 ? "H" : fin.pointsTeam1 < fin.pointsTeam2 ? "A" : "D";
    return {id: String(m.matchID), date: new Date(m.matchDateTimeUTC || m.matchDateTime).getTime(), completed: !!m.matchIsFinished, winner,
      home: m.team1.teamId, away: m.team2.teamId};
  }).sort((a, b) => a.date - b.date);
  return {key, events, lock: events.length ? events[0].date - C.lockMinutes * 60000 : null,
    done: events.length > 0 && events.every(e => e.completed)};
}
async function currentKey() {
  const g = await getJSON(`${OLDB}/getcurrentgroup/bl1`);
  let n = Math.min(C.matchdays, Math.max(1, g.groupOrderID || 1));
  if ((await loadWeek(`md${n}`)).done && n < C.matchdays) n++;
  return `md${n}`;
}
const loadTable = async () => (await getJSON(`${OLDB}/getbltable/bl1/${SEASON}`)) || [];

/* ---------- Wertung (identisch zur Webseite bundesliga/index.html) ---------- */
const isLocked = (wk, now = Date.now()) => wk.lock !== null && now >= wk.lock;
function multiplier(tip, eid) {
  if ((tip.dbl || []).includes(eid)) return 2;
  if (tip.mw === eid) return C.mwMult;
  return 1;
}
function scoreTip(tip, wk) {
  const res = {pts: 0, correct: 0, decided: 0};
  if (!tip) return res;
  const late = !!(tip.ts && wk.lock && tip.ts > wk.lock);
  for (const ev of wk.events) {
    if (!ev.completed) continue;
    res.decided++;
    const pick = tip.picks?.["e" + ev.id];
    if (pick && pick === ev.winner && !late) { res.correct++; res.pts += multiplier(tip, ev.id); }
  }
  return res;
}
function maxPoints(n) {
  const d = Math.min(n, C.doubleMax), h = Math.min(Math.max(n - d, 0), C.mwMax);
  return (n - d - h) + 2 * d + C.mwMult * h;
}
function fillFor(pid, wk, tipsMap, players) {
  if (!isLocked(wk) || !wk.events.length) return null;
  const pts = Object.entries(tipsMap || {}).filter(([id]) => players[id]).map(([, t]) => scoreTip(t, wk).pts);
  if (!pts.length) return Math.ceil(maxPoints(wk.events.length) / 2);
  if (!((players[pid]?.joined || 0) > wk.lock)) return null;
  return Math.round(pts.reduce((a, b) => a + b, 0) / pts.length * 10) / 10;
}
async function tipperTable(players, allTips, curKey) {
  const tipped = Object.keys(allTips).filter(k => /^md\d+$/.test(k)).sort((a, b) => mdNum(a) - mdNum(b));
  const st = {};
  for (const id of Object.keys(players)) st[id] = {name: players[id].name, pts: 0, wins: 0};
  if (!tipped.length) return Object.values(st);
  const from = mdNum(tipped[0]), to = Math.max(mdNum(tipped.at(-1)), mdNum(curKey));
  for (const k of WEEKS.filter(k => mdNum(k) >= from && mdNum(k) <= to)) {
    const wk = await loadWeek(k);
    if (!wk.events.length || !(allTips[k] || isLocked(wk))) continue;
    let best = 0; const scores = {};
    for (const [pid, tip] of Object.entries(allTips[k] || {})) {
      if (!st[pid]) continue;
      const p = scoreTip(tip, wk).pts; scores[pid] = p; st[pid].pts += p; best = Math.max(best, p);
    }
    if (wk.done && best > 0) for (const [pid, p] of Object.entries(scores)) if (p === best) st[pid].wins++;
    for (const pid of Object.keys(st)) {
      if (pid in scores) continue;
      const f = fillFor(pid, wk, allTips[k], players);
      if (f !== null) st[pid].pts += f;
    }
  }
  return Object.values(st).sort((a, b) => b.pts - a.pts || b.wins - a.wins || a.name.localeCompare(b.name));
}

/* ---------- Bundesliga-Tabelle als Textblock ---------- */
const zoneIcon = p => p <= 4 ? "🟨" : p === 5 ? "⬛" : p === 6 ? "⬜" : p === 16 ? "🟥" : p >= 17 ? "🔻" : "▫️";
function ligaEmbed(table, title) {
  const shortName = t => (t.shortName && t.shortName.length > 3 ? t.shortName : t.teamName.replace(/^(1\.\s*)?(FC|SV|SC|TSG|VfB|VfL|FSV|RB)\s+/, ""))
    .replace("Mönchengladbach", "M'gladbach").slice(0, 12);
  const lines = table.map((t, i) => {
    const diff = (t.goalDiff > 0 ? "+" : "") + t.goalDiff;
    return `${zoneIcon(i + 1)}\`${String(i + 1).padStart(2)} ${shortName(t).padEnd(12)} ${String(t.matches).padStart(2)} ${(t.goals + ":" + t.opponentGoals).padStart(5)} ${diff.padStart(3)} ${String(t.points).padStart(3)}\``;
  });
  return {
    title,
    description: `\`   Verein       Sp  Tore Dif Pkt\`\n${lines.join("\n")}\n\n🟨 Champions League · ⬛ Europa League · ⬜ Conference-Quali · 🟥 Relegation · 🔻 Abstieg`
  };
}

/* ---------- Discord ---------- */
const COLORS = {open: 0x7dff3c, remind: 0xffd400, locked: 0xff2a2a, result: 0xffcf3a, liga: 0xd20515, test: 0x2ce8f5};
async function post(kind, embedOrList) {
  const list = (Array.isArray(embedOrList) ? embedOrList : [embedOrList]).map((e, i) => ({color: COLORS[i ? "liga" : kind], url: C.site, ...e}));
  if (DRY || INIT) { for (const e of list) log(`[${INIT ? "init" : "dry"}] ${kind}:`, e.title, "|", (e.description || "").replace(/\n/g, " / ")); return; }
  const body = {username: "Bundesliga-Tippspiel", embeds: list};
  const r = await fetch(C.webhook + "?wait=true", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(body)});
  if (r.status === 429) { const j = await r.json().catch(() => ({})); throw new Error(`Discord Rate-Limit, retry_after ${j.retry_after}`); }
  if (!r.ok) throw new Error(`Discord ${r.status}: ${await r.text()}`);
  log("gepostet:", kind, list[0].title);
}
const medal = i => ["🥇", "🥈", "🥉"][i] || `${i + 1}.`;
const names = list => list.length ? list.join(", ") : "–";

/* ---------- Prüfdurchlauf ---------- */
async function check() {
  const state = loadState();
  const curKey = await currentKey();
  const players = (await fb("players")) || {};
  const allTips = (await fb("tips")) || {};
  const now = Date.now();
  // embedFn liefert: Embed(s) → posten; null → ohne Post als erledigt merken; undefined → später nochmal versuchen
  const once = async (id, kind, embedFn) => {
    if (state.done[id]) return;
    const embed = await embedFn();
    if (embed === undefined) return;
    if (embed) await post(kind, embed);
    if (DRY) return;
    state.done[id] = new Date().toISOString(); saveState(state);
  };

  const i = WEEKS.indexOf(curKey);
  const keys = [WEEKS[i - 1], curKey, WEEKS[i + 1]].filter(Boolean);
  for (const key of keys) {
    const wk = await loadWeek(key);
    if (!wk.events.length) continue;
    const label = weekLabel(key), tips = allTips[key] || {};
    const pids = Object.keys(players);
    const tipped = pids.filter(p => tips[p]).map(p => players[p].name);
    const missing = pids.filter(p => !tips[p] && !((players[p].joined || 0) > wk.lock && isLocked(wk))).map(p => players[p].name);
    const left = wk.lock - now;

    // 1) Spieltag offen (nur wenn Sperre innerhalb der nächsten 8 Tage)
    if (!isLocked(wk, now) && left < 8 * 864e5) {
      await once(`open:${SEASON}:${key}`, "open", () => ({
        title: `⚽ ${label} ist offen – jetzt tippen!`,
        description: `**${wk.events.length} Spiele** · Eingabe wird gesperrt: **${fmtFull.format(wk.lock)} Uhr**\n` +
          `2× Doppelt und 1× 3× Must-Watch nicht vergessen.\n\n👉 [Zum Tippspiel](${C.site})`
      }));
    }
    // 2) Erinnerungen
    for (const h of C.remindHours) {
      if (!isLocked(wk, now) && left <= h * 36e5) {
        await once(`remind${h}:${SEASON}:${key}`, "remind", () => ({
          title: `⏰ Noch ${h} Stunden bis zur Sperre (${label})`,
          description: `Eingabe wird gesperrt: **${fmtFull.format(wk.lock)} Uhr**\n\n` +
            `✅ Getippt: ${names(tipped)}\n❌ Noch offen: **${names(missing)}**\n\n👉 [Jetzt tippen](${C.site})`
        }));
      }
    }
    // 3) Gesperrt (nur kurz nach der Sperre melden)
    if (isLocked(wk, now) && !wk.done && now - wk.lock < 12 * 36e5) {
      await once(`locked:${SEASON}:${key}`, "locked", () => ({
        title: `🔒 Tippabgabe für den ${label} geschlossen`,
        description: `**${tipped.length} von ${pids.length}** haben getippt.\nAb jetzt sind alle Tipps sichtbar – viel Glück! 🍀\n\n👉 [Tipps der anderen ansehen](${C.site})`
      }));
    }
    // 4) Ergebnis + Tipper-Tabelle + Bundesliga-Tabelle
    if (wk.done) {
      await once(`result:${SEASON}:${key}`, "result", async () => {
        // Bundesliga-Tabelle muss den Spieltag schon enthalten (OpenLigaDB rechnet manchmal kurz nach)
        const table = await loadTable();
        const lastKick = Math.max(...wk.events.map(e => e.date));
        const teams = new Set(wk.events.flatMap(e => [e.home, e.away]));
        const upToDate = table.filter(t => teams.has(t.teamInfoId)).every(t => t.matches >= mdNum(key));
        if (!upToDate && now - lastKick < 8 * 36e5) { log(`${label}: Tabelle noch nicht aktuell, warte`); return undefined; }

        const rows = pids.map(p => ({name: players[p].name, tip: tips[p], s: scoreTip(tips[p], wk)}))
          .filter(r => r.tip).sort((a, b) => b.s.pts - a.s.pts || a.name.localeCompare(b.name));
        const best = rows[0]?.s.pts || 0;
        const winners = rows.filter(r => r.s.pts === best && best > 0).map(r => r.name);
        const weekList = rows.slice(0, 10).map((r, j) => `${medal(j)} ${r.name} – **${fmtPts(r.s.pts)}** (${r.s.correct}/${r.s.decided} richtig)`).join("\n") || "Niemand hat getippt.";
        const tt = await tipperTable(players, allTips, curKey);
        const tableList = tt.slice(0, 10).map((r, j) => `${medal(j)} ${r.name} – **${fmtPts(r.pts)}**${r.wins ? " " + "🏆".repeat(Math.min(r.wins, 5)) : ""}`).join("\n") || "–";
        return [{
          title: winners.length ? `🏆 Spieltagssieg ${label}: ${winners.join(", ")} mit ${fmtPts(best)} Punkten!` : `🏁 ${label} ist abgerechnet`,
          description: `**${label}**\n${weekList}\n\n**Tipper-Tabelle ${seasonLabel(SEASON)}**\n${tableList}\n\n👉 [Alle Details](${C.site})`
        }, ligaEmbed(table, `📊 Bundesliga-Tabelle nach dem ${label}`)];
      });
    }
  }
}

async function main() {
  if (args.includes("--test")) {
    await post("test", {title: "👋 Hallo vom Bundesliga-Tippspiel!", description: `Ab jetzt melde ich hier, wenn ein Spieltag offen ist, erinnere vor der Sperre und verkünde nach jedem Spieltag die Sieger, die Tipper-Tabelle und die Bundesliga-Tabelle.\n\n👉 [Zum Tippspiel](${C.site})`});
    return;
  }
  if (args.includes("--table")) {
    await post("liga", ligaEmbed(await loadTable(), `📊 Bundesliga-Tabelle ${seasonLabel(SEASON)}`));
    return;
  }
  if (DRY || INIT) { await check(); return; }
  log("Bundesliga-Tippspiel-Discord gestartet, Intervall", C.intervalMinutes, "Min");
  const run = () => check().catch(e => log("Fehler:", e.message));
  await run();
  setInterval(run, C.intervalMinutes * 60000);
}
main().catch(e => { console.error(e); process.exit(1); });
