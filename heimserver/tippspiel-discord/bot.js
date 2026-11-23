#!/usr/bin/env node
/* NFL-Tippspiel → Discord (Variante A: nur Nachrichten per Webhook)
   Läuft dauerhaft auf dem Heimserver, prüft alle 10 Minuten und postet in den Kanal:
   - "Woche X ist offen"            (sobald eine neue Woche tippbar ist)
   - Erinnerung 24 h und 2 h vor der Sperre (mit Namen, wer noch fehlt)
   - "Tippabgabe geschlossen"
   - Wochensieger + Saisontabelle   (wenn alle Spiele der Woche beendet sind)
   Konfiguration: config.json (Webhook-URL ist geheim, gehört NICHT ins Git!)
   Aufruf: node bot.js            → Dauerbetrieb
           node bot.js --dry      → einmal prüfen, nur anzeigen, nichts posten
           node bot.js --test     → Testnachricht in den Kanal
           node bot.js --init     → alles bisher Fällige als "erledigt" markieren, ohne zu posten */
"use strict";
const fs = require("fs");
const path = require("path");

const DIR = __dirname;
const CFG = JSON.parse(fs.readFileSync(path.join(DIR, "config.json"), "utf8"));
const STATE_FILE = path.join(DIR, "state.json");
const C = {
  site: "https://kokostheminer.github.io/gridiron-dice/tippspiel/",
  firebase: "https://nfl-tippspiel-df32c-default-rtdb.europe-west1.firebasedatabase.app",
  group: "freunde",
  lockMinutes: 60,
  doubleMax: 2, specialMax: 1, tripleFrom: "2-12",
  remindHours: [24, 2],
  intervalMinutes: 10,
  ...CFG
};
const ESPN = "https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard";
const args = process.argv.slice(2);
const DRY = args.includes("--dry"), INIT = args.includes("--init");

/* ---------- Hilfen ---------- */
const log = (...a) => console.log(new Date().toISOString(), ...a);
const fmtFull = new Intl.DateTimeFormat("de-DE", {timeZone: "Europe/Berlin", weekday: "short", day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit"});
const fmtPts = n => (Math.round(n * 10) / 10).toString().replace(".", ",");
const WEEKS = [...Array.from({length: 18}, (_, i) => `2-${i + 1}`), "3-1", "3-2", "3-3", "3-5"];
const weekOrder = k => { const [t, w] = k.split("-").map(Number); return t * 100 + w; };
const weekLabel = k => k.startsWith("2-") ? `Woche ${k.slice(2)}` : ({"3-1": "Wild Card", "3-2": "Divisional Round", "3-3": "Conference Finals", "3-5": "Super Bowl"})[k] || k;
const loadState = () => { try { return JSON.parse(fs.readFileSync(STATE_FILE, "utf8")); } catch { return {done: {}}; } };
const saveState = s => fs.writeFileSync(STATE_FILE, JSON.stringify(s, null, 1));

async function getJSON(url) {
  const r = await fetch(url, {headers: {"User-Agent": "tippspiel-discord"}});
  if (!r.ok) throw new Error(`${r.status} bei ${url.split("?")[0]}`);
  return r.json();
}
const fb = p => getJSON(`${C.firebase}/tippspiel/${C.group}/${p}.json`);

/* ---------- ESPN ---------- */
async function loadWeek(season, key) {
  const [t, w] = key.split("-");
  const d = await getJSON(`${ESPN}?seasontype=${t}&week=${w}&dates=${season}`);
  const events = (d.events || []).map(e => {
    const c = e.competitions[0], st = e.status.type;
    const home = c.competitors.find(x => x.homeAway === "home"), away = c.competitors.find(x => x.homeAway === "away");
    let winner = null;
    if (st.completed) winner = home.winner ? home.team.abbreviation : away.winner ? away.team.abbreviation : "TIE";
    return {id: e.id, date: new Date(e.date).getTime(), completed: st.completed, winner,
      home: home.team.abbreviation, away: away.team.abbreviation};
  }).sort((a, b) => a.date - b.date);
  return {key, events, lock: events.length ? events[0].date - C.lockMinutes * 60000 : null,
    done: events.length > 0 && events.every(e => e.completed)};
}
async function currentWeek() {
  const d = await getJSON(ESPN);
  const t = d.season.type, w = d.week?.number || 1;
  let key = t === 2 ? `2-${w}` : t === 3 ? (w === 4 ? "3-5" : `3-${w}`) : t === 1 ? "2-1" : "3-5";
  if (!WEEKS.includes(key)) key = "2-1";
  return {season: d.season.year, key};
}

/* ---------- Wertung (identisch zur Webseite) ---------- */
const isLocked = (wk, now = Date.now()) => wk.lock !== null && now >= wk.lock;
const spMult = key => weekOrder(key) >= weekOrder(C.tripleFrom) ? 3 : 0.5;
function multiplier(tip, eid, key) {
  if ((tip.dbl || []).includes(eid)) return 2;
  if (tip.half === eid) return spMult(key);
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
    if (pick && pick === ev.winner && !late) { res.correct++; res.pts += multiplier(tip, ev.id, wk.key); }
  }
  return res;
}
function maxPoints(n, key) {
  const d = Math.min(n, C.doubleMax), h = Math.min(Math.max(n - d, 0), C.specialMax);
  return (n - d - h) + 2 * d + spMult(key) * h;
}
function fillFor(pid, wk, tipsMap, players) {
  if (!isLocked(wk) || !wk.events.length) return null;
  const pts = Object.entries(tipsMap || {}).filter(([id]) => players[id]).map(([, t]) => scoreTip(t, wk).pts);
  if (!pts.length) return Math.ceil(maxPoints(wk.events.length, wk.key) / 2);
  if (!((players[pid]?.joined || 0) > wk.lock)) return null;
  return Math.round(pts.reduce((a, b) => a + b, 0) / pts.length * 10) / 10;
}
async function seasonTable(season, players, allTips, curKey) {
  const tipped = Object.keys(allTips).sort((a, b) => weekOrder(a) - weekOrder(b));
  const st = {};
  for (const id of Object.keys(players)) st[id] = {name: players[id].name, pts: 0, wins: 0};
  if (!tipped.length) return Object.values(st);
  const from = weekOrder(tipped[0]), to = Math.max(weekOrder(tipped.at(-1)), weekOrder(curKey));
  for (const k of WEEKS.filter(k => weekOrder(k) >= from && weekOrder(k) <= to)) {
    const wk = await loadWeek(season, k);
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

/* ---------- Discord ---------- */
const COLORS = {open: 0x7dff3c, remind: 0xffd400, locked: 0xff2a2a, result: 0xffcf3a, test: 0x2ce8f5};
async function post(kind, embed) {
  const body = {username: "Tippspiel", embeds: [{color: COLORS[kind], url: C.site, ...embed}]};
  if (DRY || INIT) { log(`[${INIT ? "init" : "dry"}] ${kind}:`, embed.title, "|", (embed.description || "").replace(/\n/g, " / ")); return; }
  const r = await fetch(C.webhook + "?wait=true", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(body)});
  if (r.status === 429) { const j = await r.json().catch(() => ({})); throw new Error(`Discord Rate-Limit, retry_after ${j.retry_after}`); }
  if (!r.ok) throw new Error(`Discord ${r.status}: ${await r.text()}`);
  log("gepostet:", kind, embed.title);
}
const medal = i => ["🥇", "🥈", "🥉"][i] || `${i + 1}.`;
const names = list => list.length ? list.join(", ") : "–";

/* ---------- Prüfdurchlauf ---------- */
async function check() {
  const state = loadState();
  const {season, key: curKey} = await currentWeek();
  const players = (await fb(`${season}/players`)) || {};
  const allTips = (await fb(`${season}/tips`)) || {};
  const now = Date.now();
  const once = async (id, kind, embedFn) => {
    if (state.done[id]) return;
    const embed = await embedFn();
    if (embed) await post(kind, embed);
    if (DRY) return;                       // Probelauf: nichts als erledigt merken
    state.done[id] = new Date().toISOString(); saveState(state);
  };

  // aktuelle Woche, die vorherige (für Ergebnisse) und die nächste (falls die aktuelle schon gesperrt ist)
  const i = WEEKS.indexOf(curKey);
  const keys = [WEEKS[i - 1], curKey, WEEKS[i + 1]].filter(Boolean);
  for (const key of keys) {
    const wk = await loadWeek(season, key);
    if (!wk.events.length) continue;
    const label = weekLabel(key), tips = allTips[key] || {};
    const pids = Object.keys(players);
    const tipped = pids.filter(p => tips[p]).map(p => players[p].name);
    const missing = pids.filter(p => !tips[p] && !((players[p].joined || 0) > wk.lock && isLocked(wk))).map(p => players[p].name);
    const left = wk.lock - now;

    // 1) Woche offen (nur wenn Sperre innerhalb der nächsten 8 Tage)
    if (!isLocked(wk, now) && left < 8 * 864e5) {
      await once(`open:${season}:${key}`, "open", () => ({
        title: `🏈 ${label} ist offen – jetzt tippen!`,
        description: `**${wk.events.length} Spiele** · Eingabe wird gesperrt: **${fmtFull.format(wk.lock)} Uhr**\n` +
          `2× Doppelt und 1× ${spMult(key) === 3 ? "3× Must-Watch" : "½ Halb"} nicht vergessen.\n\n👉 [Zum Tippspiel](${C.site})`
      }));
    }
    // 2) Erinnerungen
    for (const h of C.remindHours) {
      if (!isLocked(wk, now) && left <= h * 36e5) {
        await once(`remind${h}:${season}:${key}`, "remind", () => ({
          title: `⏰ Noch ${h} Stunden bis zur Sperre (${label})`,
          description: `Eingabe wird gesperrt: **${fmtFull.format(wk.lock)} Uhr**\n\n` +
            `✅ Getippt: ${names(tipped)}\n❌ Noch offen: **${names(missing)}**\n\n👉 [Jetzt tippen](${C.site})`
        }));
      }
    }
    // 3) Gesperrt (nur kurz nach der Sperre melden, nicht nachträglich Tage später)
    if (isLocked(wk, now) && !wk.done && now - wk.lock < 12 * 36e5) {
      await once(`locked:${season}:${key}`, "locked", () => ({
        title: `🔒 Tippabgabe für ${label} geschlossen`,
        description: `**${tipped.length} von ${pids.length}** haben getippt.\nAb jetzt sind alle Tipps sichtbar – viel Glück! 🍀\n\n👉 [Tipps der anderen ansehen](${C.site})`
      }));
    }
    // 4) Ergebnis + Tabelle
    if (wk.done) {
      await once(`result:${season}:${key}`, "result", async () => {
        const rows = pids.map(p => ({name: players[p].name, tip: tips[p], s: scoreTip(tips[p], wk)}))
          .filter(r => r.tip).sort((a, b) => b.s.pts - a.s.pts || a.name.localeCompare(b.name));
        const best = rows[0]?.s.pts || 0;
        const winners = rows.filter(r => r.s.pts === best && best > 0).map(r => r.name);
        const weekList = rows.slice(0, 10).map((r, j) => `${medal(j)} ${r.name} – **${fmtPts(r.s.pts)}** (${r.s.correct}/${r.s.decided} richtig)`).join("\n") || "Niemand hat getippt.";
        const table = await seasonTable(season, players, allTips, curKey);
        const tableList = table.slice(0, 10).map((r, j) => `${medal(j)} ${r.name} – **${fmtPts(r.pts)}**${r.wins ? " " + "🏆".repeat(Math.min(r.wins, 5)) : ""}`).join("\n") || "–";
        return {
          title: winners.length ? `🏆 Wochensieg ${label}: ${winners.join(", ")} mit ${fmtPts(best)} Punkten!` : `🏁 ${label} ist abgerechnet`,
          description: `**${label}**\n${weekList}\n\n**Saisontabelle ${season}**\n${tableList}\n\n👉 [Alle Details](${C.site})`
        };
      });
    }
  }
}

async function main() {
  if (args.includes("--test")) {
    await post("test", {title: "👋 Hallo vom Tippspiel!", description: `Ab jetzt melde ich hier, wenn eine Woche offen ist, erinnere vor der Sperre und verkünde die Wochensieger.\n\n👉 [Zum Tippspiel](${C.site})`});
    return;
  }
  if (DRY || INIT) { await check(); return; }
  log("Tippspiel-Discord gestartet, Intervall", C.intervalMinutes, "Min");
  const run = () => check().catch(e => log("Fehler:", e.message));
  await run();
  setInterval(run, C.intervalMinutes * 60000);
}
main().catch(e => { console.error(e); process.exit(1); });
