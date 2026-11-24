// Reisetagebuch-Modul für den Heimserver
// - gemeinsames Tagebuch: Abgleich (Sync) zwischen mehreren Handys pro Reise
// - Fotos: App-Version (verkleinert) + Originale im Samba-Ordner (/srv/reise) für die Bearbeitung am PC
// - bearbeitete Fotos aus "2 Bearbeitet" und zusätzliche Fotos aus "3 Weitere Fotos" werden übernommen
// - Hintergrund-GPS (OwnTracks / GPSLogger): Punkte werden nur während einer Reise gespeichert
// - Push-Benachrichtigungen (Web Push, ohne Zusatzpakete): Tagebuch-Erinnerung, GPS-Erinnerung,
//   "Partner hat geschrieben", neue Kommentare von Freunden
"use strict";
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const DATA = path.join(__dirname, "data", "reise");
const APPDIR = path.join(__dirname, "data", "reise-app");
const BK = path.join(DATA, "backup");
const SHARE = process.env.REISE_SHARE || path.join(__dirname, "data", "reise-fotos");
const GLOBAL_FILE = path.join(DATA, "global.json");
const FIREBASE = "https://nfl-tippspiel-df32c-default-rtdb.europe-west1.firebasedatabase.app/tippspiel/reise";
const PUBLIC_URL = "https://heimserver.tail3903ae.ts.net";
const STORES = new Set(["trips", "entries", "texts", "photos", "plan", "money", "track"]);
const ID = /^[a-z0-9]{6,32}$/;
const MAX_FILE = 60 * 1024 * 1024;
const IMG = /\.(jpe?g|png|webp)$/i;

process.umask(0o002);
for (const d of [DATA, APPDIR, BK]) fs.mkdirSync(d, { recursive: true });
try { fs.mkdirSync(SHARE, { recursive: true }); } catch (e) {}
const log = (...a) => console.log(new Date().toISOString(), "[reise]", ...a);

/* ---------------- Speicher ---------------- */
let G = { tokens: {}, subs: {} };
try { G = Object.assign(G, JSON.parse(fs.readFileSync(GLOBAL_FILE, "utf8"))); } catch (e) {}
const trips = {};
const dirty = new Set(); let gDirty = false, flushTimer = null;
function tripFile(id) { return path.join(DATA, id + ".json"); }
function loadTrip(id) {
  if (trips[id]) return trips[id];
  if (!ID.test(id || "")) return null;
  try { return trips[id] = JSON.parse(fs.readFileSync(tripFile(id), "utf8")); } catch (e) { return null; }
}
function touch(t) { if (t) dirty.add(t.id); else gDirty = true; clearTimeout(flushTimer); flushTimer = setTimeout(flush, 400); }
function writeJson(f, v) { const tmp = f + ".tmp"; fs.writeFileSync(tmp, JSON.stringify(v)); fs.renameSync(tmp, f); }
function flush() {
  for (const id of dirty) if (trips[id]) writeJson(tripFile(id), trips[id]);
  dirty.clear();
  if (gDirty) { writeJson(GLOBAL_FILE, G); gDirty = false; }
}
for (const f of fs.readdirSync(DATA)) if (/^[a-z0-9]+\.json$/.test(f) && f !== "global.json") loadTrip(f.slice(0, -5));

function backupTrips() {
  const day = new Date().toISOString().slice(0, 10);
  for (const t of Object.values(trips)) {
    fs.writeFileSync(path.join(BK, `${t.id}-${day}.json`), JSON.stringify(t));
    const all = fs.readdirSync(BK).filter(n => n.startsWith(t.id + "-")).sort();
    while (all.length > 14) fs.unlinkSync(path.join(BK, all.shift()));
  }
}
setInterval(backupTrips, 60 * 60 * 1000); setTimeout(backupTrips, 20000);

const meta = t => (t.recs["trips/" + t.id] || {}).data || {};
const uid = (n = 12) => { const a = "abcdefghijkmnpqrstuvwxyz23456789"; let s = ""; for (const x of crypto.randomBytes(n)) s += a[x % a.length]; return s; };
const ymdTZ = (ms, tz = "Europe/Vienna") => new Intl.DateTimeFormat("sv-SE", { timeZone: tz, year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date(ms));
const hmTZ = (ms, tz = "Europe/Vienna") => new Intl.DateTimeFormat("de-AT", { timeZone: tz, hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).format(new Date(ms));
const safeName = s => String(s || "").replace(/[\\/:*?"<>|\x00-\x1f]+/g, "").replace(/\s+/g, " ").trim().slice(0, 60);

function setRec(t, s, id, data, del, upd) {
  t.recs[s + "/" + id] = { s, id, upd: upd || Date.now(), seq: ++t.seq, ...(del ? { del: 1, data: null } : { data }) };
}

/* ---------------- Ordner für die Fotos (Samba) ---------------- */
function tripDir(t) { return path.join(SHARE, t.folder); }
function ensureFolders(t) {
  try {
    for (const sub of ["1 Originale", "2 Bearbeitet", "3 Weitere Fotos"]) fs.mkdirSync(path.join(tripDir(t), sub), { recursive: true });
    const info = path.join(tripDir(t), "LIES MICH.txt");
    if (!fs.existsSync(info)) fs.writeFileSync(info,
`Reisetagebuch – Fotos dieser Reise\r\n\r\n` +
`1 Originale       Die Fotos aus den Handys in voller Größe (bitte nicht umbenennen).\r\n` +
`2 Bearbeitet      Hier die bearbeiteten Fotos als JPG speichern. Der Dateiname muss den\r\n` +
`                  ursprünglichen Namen enthalten (z. B. IMG_1234_ab12cd34ef56-bearbeitet.jpg).\r\n` +
`                  Die App nimmt dann automatisch die bearbeitete Version – auch fürs Fotobuch.\r\n` +
`3 Weitere Fotos   Fotos von der Kamera hier hineinkopieren – sie erscheinen im Tagebuch\r\n` +
`                  beim richtigen Tag (nach Aufnahmedatum).\r\n` +
`9 Gelöscht        Fotos, die in der App gelöscht wurden (zur Sicherheit aufgehoben).\r\n`);
  } catch (e) { log("Ordner", e.message); }
}
function dayFolder(t, d) {
  const m = meta(t); let n = "";
  if (m.start && d) n = "Tag " + String(Math.round((Date.parse(d) - Date.parse(m.start)) / 864e5) + 1).padStart(2, "0") + " – ";
  return n + (d || "ohne Datum");
}
function moveToTrash(t, rel) {
  try {
    const src = path.join(tripDir(t), rel), dst = path.join(tripDir(t), "9 Gelöscht", path.basename(rel));
    fs.mkdirSync(path.dirname(dst), { recursive: true }); fs.renameSync(src, dst);
  } catch (e) {}
}
function walk(dir, base = dir, out = []) {
  let list = []; try { list = fs.readdirSync(dir, { withFileTypes: true }); } catch (e) { return out; }
  for (const d of list) { const p = path.join(dir, d.name); if (d.isDirectory()) walk(p, base, out); else if (IMG.test(d.name)) out.push(path.relative(base, p)); }
  return out;
}

/* ---------------- EXIF (Aufnahmedatum + GPS) ---------------- */
function exif(buf) {
  try {
    const v = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
    if (v.getUint16(0) !== 0xFFD8) return {};
    let o = 2;
    while (o < v.byteLength - 10) {
      const m = v.getUint16(o); if ((m & 0xFF00) !== 0xFF00) break;
      if (m === 0xFFE1 && v.getUint32(o + 4) === 0x45786966) return tiff(v, o + 10);
      o += 2 + v.getUint16(o + 2);
    }
  } catch (e) {}
  return {};
}
function tiff(v, t) {
  const le = v.getUint16(t) === 0x4949, u16 = o => v.getUint16(o, le), u32 = o => v.getUint32(o, le), SZ = { 1: 1, 2: 1, 3: 2, 4: 4, 5: 8, 7: 1, 9: 4, 10: 8 };
  const ifd = off => { const n = u16(t + off), r = {}; for (let i = 0; i < n; i++) { const e = t + off + 2 + i * 12, type = u16(e + 2), cnt = u32(e + 4); r[u16(e)] = { cnt, vo: (SZ[type] || 1) * cnt > 4 ? t + u32(e + 8) : e + 8 }; } return r; };
  const str = x => { let s = ""; for (let i = 0; i < x.cnt - 1; i++) s += String.fromCharCode(v.getUint8(x.vo + i)); return s; };
  const rat = (x, i) => u32(x.vo + i * 8) / (u32(x.vo + i * 8 + 4) || 1);
  const out = {}, i0 = ifd(u32(t + 4));
  if (i0[0x8769]) { const ex = ifd(u32(i0[0x8769].vo)); if (ex[0x9003]) out.date = str(ex[0x9003]); }
  if (!out.date && i0[0x0132]) out.date = str(i0[0x0132]);
  if (i0[0x8825]) {
    const g = ifd(u32(i0[0x8825].vo));
    if (g[2] && g[4] && g[2].cnt === 3) {
      const dms = x => rat(x, 0) + rat(x, 1) / 60 + rat(x, 2) / 3600; let lat = dms(g[2]), lon = dms(g[4]);
      if (g[1] && String.fromCharCode(v.getUint8(g[1].vo)) === "S") lat = -lat;
      if (g[3] && String.fromCharCode(v.getUint8(g[3].vo)) === "W") lon = -lon;
      if (lat || lon) { out.lat = lat; out.lon = lon; }
    }
  }
  if (out.date) { const m = out.date.match(/(\d{4}):(\d\d):(\d\d) (\d\d):(\d\d):?(\d\d)?/); if (m) out.local = `${m[1]}-${m[2]}-${m[3]}`, out.t = Date.UTC(+m[1], m[2] - 1, +m[3], +m[4], +m[5], +(m[6] || 0)) - 3600e3; }
  return out;
}
function readHead(file, n = 256 * 1024) { const fd = fs.openSync(file, "r"); try { const b = Buffer.alloc(n); const r = fs.readSync(fd, b, 0, n, 0); return b.subarray(0, r); } finally { fs.closeSync(fd); } }

/* ---------------- Bearbeitete + weitere Fotos übernehmen ---------------- */
function scanTrip(t) {
  if (!t.folder) return;
  const dir = tripDir(t); if (!fs.existsSync(dir)) return;
  let changed = false;
  // weitere Fotos (Kamera)
  t.imported = t.imported || {};
  const m = meta(t);
  for (const rel0 of walk(path.join(dir, "3 Weitere Fotos"))) {
    const rel = path.join("3 Weitere Fotos", rel0);
    if (t.imported[rel] || !/\.jpe?g$/i.test(rel)) continue;
    let st; try { st = fs.statSync(path.join(dir, rel)); } catch (e) { continue; }
    if (Date.now() - st.mtimeMs < 20000) continue; // wird evtl. noch kopiert
    const ex = exif(readHead(path.join(dir, rel)));
    const pid = uid(12), d = ex.local || ymdTZ(st.mtimeMs) || m.start;
    const data = { id: pid, trip: t.id, d, t: ex.t || Math.round(st.mtimeMs), cap: "", fav: false, th: null, au: "pc", an: "PC", src: "pc", ed: 0 };
    if (ex.lat != null) { data.lat = ex.lat; data.lon = ex.lon; }
    setRec(t, "photos", pid, data); t.files[pid] = { orig: rel }; t.imported[rel] = pid; changed = true;
    log("weiteres Foto übernommen", t.id, rel);
  }
  // bearbeitete Fotos
  const stems = [];
  for (const [pid, f] of Object.entries(t.files)) if (f.orig) stems.push([path.basename(f.orig).replace(/\.[^.]+$/, "").toLowerCase(), pid]);
  stems.sort((a, b) => b[0].length - a[0].length);
  const seen = new Set();
  for (const rel0 of walk(path.join(dir, "2 Bearbeitet"))) {
    const rel = path.join("2 Bearbeitet", rel0), stem = path.basename(rel0).replace(/\.[^.]+$/, "").toLowerCase();
    let pid = (stem.match(/[a-z0-9]{12}/g) || []).find(c => t.recs["photos/" + c]);
    if (!pid) { const s = stems.find(([s]) => s.length >= 5 && stem.startsWith(s)); if (s) pid = s[1]; }
    if (!pid) continue;
    seen.add(pid);
    let st; try { st = fs.statSync(path.join(dir, rel)); } catch (e) { continue; }
    if (Date.now() - st.mtimeMs < 15000) continue;
    const f = t.files[pid] = t.files[pid] || {};
    const mt = Math.round(st.mtimeMs);
    if (f.edit !== rel || f.editM !== mt) {
      f.edit = rel; f.editM = mt;
      const r = t.recs["photos/" + pid];
      if (r && r.data) { setRec(t, "photos", pid, { ...r.data, ed: mt }); changed = true; log("bearbeitetes Foto", t.id, rel); }
    }
  }
  for (const [pid, f] of Object.entries(t.files)) if (f.edit && !seen.has(pid)) {
    delete f.edit; delete f.editM; const r = t.recs["photos/" + pid];
    if (r && r.data) { setRec(t, "photos", pid, { ...r.data, ed: 0 }); changed = true; }
  }
  if (changed) touch(t);
}
setInterval(() => { for (const t of Object.values(trips)) try { scanTrip(t); } catch (e) { log("scan", e.message); } }, 60000);

/* ---------------- Web Push (RFC 8291 / 8292) ---------------- */
const b64u = b => Buffer.from(b).toString("base64url");
if (!G.vapid) { const e = crypto.createECDH("prime256v1"); e.generateKeys(); G.vapid = { pub: b64u(e.getPublicKey()), priv: b64u(e.getPrivateKey()) }; touch(); }
const vapidKey = (() => { const p = Buffer.from(G.vapid.pub, "base64url"); return crypto.createPrivateKey({ key: { kty: "EC", crv: "P-256", d: G.vapid.priv, x: b64u(p.subarray(1, 33)), y: b64u(p.subarray(33)) }, format: "jwk" }); })();
function vapidJwt(aud) {
  const h = b64u(JSON.stringify({ typ: "JWT", alg: "ES256" })), p = b64u(JSON.stringify({ aud, exp: Math.floor(Date.now() / 1000) + 12 * 3600, sub: PUBLIC_URL }));
  const sig = crypto.sign("sha256", Buffer.from(h + "." + p), { key: vapidKey, dsaEncoding: "ieee-p1363" });
  return h + "." + p + "." + b64u(sig);
}
function encrypt(sub, payload) {
  const ua = Buffer.from(sub.keys.p256dh, "base64url"), auth = Buffer.from(sub.keys.auth, "base64url");
  const e = crypto.createECDH("prime256v1"); e.generateKeys(); const as = e.getPublicKey(), shared = e.computeSecret(ua);
  const hmac = (k, d) => crypto.createHmac("sha256", k).update(d).digest();
  const ikm = hmac(hmac(auth, shared), Buffer.concat([Buffer.from("WebPush: info\0"), ua, as, Buffer.from([1])]));
  const salt = crypto.randomBytes(16), prk = hmac(salt, ikm);
  const cek = hmac(prk, Buffer.from("Content-Encoding: aes128gcm\0\x01")).subarray(0, 16);
  const nonce = hmac(prk, Buffer.from("Content-Encoding: nonce\0\x01")).subarray(0, 12);
  const c = crypto.createCipheriv("aes-128-gcm", cek, nonce);
  const ct = Buffer.concat([c.update(Buffer.concat([Buffer.from(payload), Buffer.from([2])])), c.final(), c.getAuthTag()]);
  const head = Buffer.alloc(21); salt.copy(head, 0); head.writeUInt32BE(4096, 16); head[20] = 65;
  return Buffer.concat([head, as, ct]);
}
async function push(key, msg) {
  const s = G.subs[key]; if (!s) return false;
  try {
    const r = await fetch(s.sub.endpoint, { method: "POST", headers: { TTL: "43200", Urgency: "normal", "Content-Encoding": "aes128gcm", "Content-Type": "application/octet-stream", Authorization: `vapid t=${vapidJwt(new URL(s.sub.endpoint).origin)}, k=${G.vapid.pub}` }, body: encrypt(s.sub, JSON.stringify(msg)) });
    if (r.status === 404 || r.status === 410) { delete G.subs[key]; touch(); log("Push-Abo abgelaufen", s.an); return false; }
    if (!r.ok) log("Push", r.status, await r.text().catch(() => ""));
    return r.ok;
  } catch (e) { log("Push-Fehler", e.message); return false; }
}
const subsOf = tripId => Object.entries(G.subs).filter(([, s]) => s.trip === tripId);

/* Erinnerungen: alle 2 Minuten prüfen */
async function tick() {
  const now = Date.now();
  for (const [key, s] of Object.entries(G.subs)) {
    const t = loadTrip(s.trip); if (!t) continue;
    const m = meta(t), tz = s.tz || "Europe/Vienna", d = ymdTZ(now, tz), hm = hmTZ(now, tz);
    if (!m.start || d < m.start || d > m.end) continue;
    s.last = s.last || {};
    if (s.rem && hm >= s.rem && s.last.rem !== d) {
      s.last.rem = d; touch();
      const wrote = Object.values(t.recs).some(r => r.s === "texts" && r.data && r.data.d === d && r.data.au === s.au && String(r.data.x || "").trim());
      if (!wrote) push(key, { title: "📖 Wie war dein Tag?", body: "Schreib ein paar Zeilen ins Reisetagebuch – morgen weißt du vieles nicht mehr so genau.", url: "./#day=" + d, tag: "rem" });
    }
    if (s.gps && hm >= s.gps && s.last.gps !== d) {
      s.last.gps = d; touch();
      const has = Object.values(t.recs).some(r => r.s === "track" && r.data && r.data.au === s.au && ymdTZ(r.data.t, tz) === d);
      if (!has) push(key, { title: "📍 Route wird nicht aufgezeichnet", body: "Tippe hier, um die Aufzeichnung für heute zu starten.", url: "./#track", tag: "gps" });
    }
  }
}
setInterval(() => tick().catch(e => log("tick", e.message)), 120000);

/* neue Kommentare von Freunden (Firebase) alle 10 Minuten */
async function checkComments() {
  for (const t of Object.values(trips)) {
    const m = meta(t); if (!m.share || !m.share.on || !m.share.code || !subsOf(t.id).length) continue;
    try {
      const c = await (await fetch(`${FIREBASE}/${m.share.code}/c.json`)).json() || {};
      const list = []; for (const [eid, cs] of Object.entries(c)) for (const x of Object.values(cs || {})) if (!x.o) list.push({ ...x, eid });
      list.sort((a, b) => (a.t || 0) - (b.t || 0));
      if (t.comCount == null) { t.comCount = list.length; touch(t); continue; }
      if (list.length > t.comCount) {
        const n = list.length - t.comCount, last = list[list.length - 1];
        t.comCount = list.length; touch(t);
        for (const [key, s] of subsOf(t.id)) if (s.cm !== false) push(key, { title: n > 1 ? `💬 ${n} neue Kommentare` : `💬 ${last.n || "Jemand"} hat kommentiert`, body: String(last.x || "").slice(0, 140), url: "./#comments", tag: "com" });
      } else if (list.length < t.comCount) { t.comCount = list.length; touch(t); }
    } catch (e) {}
  }
}
setInterval(() => checkComments(), 10 * 60000); setTimeout(checkComments, 30000);

/* ---------------- HTTP ---------------- */
function send(res, code, body, type = "application/json; charset=utf-8", extra = {}) {
  res.writeHead(code, { "Content-Type": type, "Access-Control-Allow-Origin": "*", "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,OPTIONS", "Access-Control-Allow-Headers": "Content-Type", "Cache-Control": "no-store", ...extra });
  res.end(body);
}
const json = (res, code, v) => send(res, code, JSON.stringify(v === undefined ? null : v));
function readRaw(req, max = MAX_FILE) {
  return new Promise((resolve, reject) => {
    const chunks = []; let size = 0;
    req.on("data", c => { size += c.length; if (size > max) { reject(new Error("zu groß")); req.destroy(); } else chunks.push(c); });
    req.on("end", () => resolve(Buffer.concat(chunks))); req.on("error", reject);
  });
}
async function readJson(req) { const b = await readRaw(req, 30 * 1024 * 1024); return b.length ? JSON.parse(b.toString("utf8")) : null; }
function keyOk(t, k) { if (!t || !k) return false; const a = Buffer.from(String(t.key)), b = Buffer.from(String(k)); return a.length === b.length && crypto.timingSafeEqual(a, b); }

async function handle(req, res, url) {
  const p = url.pathname.split("/").filter(Boolean).slice(1); // nach "reise-api"
  const q = url.searchParams, M = req.method;

  // Hintergrund-GPS: OwnTracks (POST JSON) oder GPSLogger (GET ?lat=&lon=&time=)
  if (p[0] === "gps" && p[1]) {
    const tok = G.tokens[p[1]]; if (!tok) return json(res, 403, { error: "unbekannt" });
    let pts = [];
    if (M === "POST") { const b = await readJson(req).catch(() => null); for (const x of [].concat(b || [])) if (x && x._type === "location" && x.lat != null) pts.push({ lat: +x.lat, lon: +x.lon, t: (x.tst || Date.now() / 1000) * 1000, acc: x.acc, alt: x.alt }); }
    else if (q.get("lat")) pts.push({ lat: +q.get("lat"), lon: +q.get("lon"), t: q.get("time") ? (Date.parse(q.get("time")) || +q.get("time") * 1000) : Date.now(), acc: +q.get("acc") || undefined, alt: +q.get("alt") || undefined });
    let stored = 0;
    for (const pt of pts) {
      if (!isFinite(pt.lat) || !isFinite(pt.lon) || (pt.acc && pt.acc > 150)) continue;
      const d = ymdTZ(pt.t);
      for (const t of Object.values(trips)) {
        const m = meta(t); if (!t.members || !t.members[tok.au] || !m.start || d < m.start || d > m.end) continue; // nur während der Reise
        const id = `${tok.au}_${Math.round(pt.t)}`;
        const data = { id, trip: t.id, t: Math.round(pt.t), lat: +pt.lat.toFixed(6), lon: +pt.lon.toFixed(6), au: tok.au, an: tok.an, src: "bg" };
        if (pt.acc) data.acc = Math.round(pt.acc); if (pt.alt != null && isFinite(pt.alt)) data.alt = Math.round(pt.alt);
        setRec(t, "track", id, data); touch(t); stored++;
      }
    }
    G.tokens[p[1]].last = Date.now(); if (stored) G.tokens[p[1]].lastStored = Date.now(); touch();
    return send(res, 200, "[]");
  }
  if (p[0] === "gps-token" && M === "POST") {
    const b = await readJson(req); if (!b || !ID.test(b.au || "")) return json(res, 400, { error: "au fehlt" });
    let tok = Object.keys(G.tokens).find(k => G.tokens[k].au === b.au);
    if (!tok) { tok = uid(24); G.tokens[tok] = { au: b.au }; }
    G.tokens[tok].an = String(b.an || "").slice(0, 40); touch();
    return json(res, 200, { token: tok, last: G.tokens[tok].last || null, lastStored: G.tokens[tok].lastStored || null });
  }

  // Push
  if (p[0] === "push") {
    if (p[1] === "key") return json(res, 200, { key: G.vapid.pub });
    const b = await readJson(req); if (!b || !b.sub || !b.sub.endpoint) return json(res, 400, { error: "sub fehlt" });
    const key = crypto.createHash("sha256").update(b.sub.endpoint).digest("hex").slice(0, 24);
    if (p[1] === "sub" && M === "POST") {
      const t = loadTrip(b.trip); if (!keyOk(t, b.k)) return json(res, 403, { error: "Reise unbekannt" });
      G.subs[key] = { sub: b.sub, trip: b.trip, au: b.au, an: b.an, rem: b.rem || null, gps: b.gps || null, tz: b.tz || "Europe/Vienna", cm: b.cm !== false, pa: b.pa !== false, last: (G.subs[key] || {}).last || {} };
      touch(); return json(res, 200, { ok: true });
    }
    if (p[1] === "sub" && M === "DELETE") { delete G.subs[key]; touch(); return json(res, 200, { ok: true }); }
    if (p[1] === "test" && M === "POST") { const ok = await push(key, { title: "✅ Benachrichtigungen funktionieren", body: "So sieht eine Erinnerung vom Reisetagebuch aus.", url: "./" }); return json(res, ok ? 200 : 500, { ok }); }
    return json(res, 404, { error: "?" });
  }

  // Reise-spezifisch: /reise-api/t/<id>/...
  if (p[0] !== "t" || !ID.test(p[1] || "")) return json(res, 404, { error: "Nicht gefunden" });
  const tid = p[1], k = q.get("k");
  let t = loadTrip(tid);
  if (p[2] === "create" && M === "POST") {
    const b = await readJson(req) || {};
    if (t) return keyOk(t, k) ? json(res, 200, { ok: true, existed: true }) : json(res, 403, { error: "Schlüssel falsch" });
    if (!k || k.length < 16) return json(res, 400, { error: "Schlüssel zu kurz" });
    let base = safeName(b.title) || "Reise", folder = base, i = 2;
    while (fs.existsSync(path.join(SHARE, folder))) folder = `${base} ${i++}`;
    t = trips[tid] = { id: tid, key: k, seq: 0, recs: {}, files: {}, imported: {}, members: {}, notes: {}, folder, created: Date.now() };
    ensureFolders(t); touch(t); log("neue Reise", tid, folder);
    return json(res, 200, { ok: true });
  }
  if (!t) return json(res, 404, { error: "Reise gibt es am Heimserver nicht" });
  if (!keyOk(t, k)) return json(res, 403, { error: "Schlüssel falsch" });

  if (p[2] === "changes" && M === "GET") {
    const since = +q.get("since") || 0, LIM = 2500;
    const list = Object.values(t.recs).filter(r => r.seq > since).sort((a, b) => a.seq - b.seq);
    const more = list.length > LIM, out = list.slice(0, LIM);
    return json(res, 200, { seq: more ? out[out.length - 1].seq : t.seq, more, recs: out, folder: t.folder, members: t.members, files: Object.fromEntries(Object.entries(t.files).map(([id, f]) => [id, (f.orig ? "o" : "") + (f.app ? "a" : "") + (f.edit ? "e" : "")])) });
  }
  if (p[2] === "changes" && M === "POST") {
    const b = await readJson(req); if (!b || !Array.isArray(b.recs)) return json(res, 400, { error: "recs fehlen" });
    if (b.au && ID.test(b.au)) { t.members[b.au] = String(b.an || "").slice(0, 40); }
    let n = 0;
    for (const r of b.recs) {
      if (!STORES.has(r.s) || typeof r.id !== "string" || r.id.length > 80 || r.id.includes("/")) continue;
      const key = r.s + "/" + r.id, ex = t.recs[key];
      if (ex && ex.upd > r.upd) continue;
      setRec(t, r.s, r.id, r.data, r.del, r.upd); n++;
      if (r.s === "photos" && r.del && t.files[r.id]) { const f = t.files[r.id]; if (f.orig) moveToTrash(t, f.orig); if (f.edit) moveToTrash(t, f.edit); try { fs.unlinkSync(path.join(APPDIR, t.id, r.id + ".jpg")); } catch (e) {} delete t.files[r.id]; }
      if (r.s === "trips" && r.data && r.data.title && !fs.existsSync(tripDir(t))) ensureFolders(t);
      if (r.s === "texts" && r.data && String(r.data.x || "").trim().length > 20) {
        const nk = `w_${r.data.au}_${r.data.d}`;
        if (!t.notes[nk]) { t.notes[nk] = 1; for (const [key2, s] of subsOf(t.id)) if (s.au !== r.data.au && s.pa !== false) push(key2, { title: `✍️ ${r.data.an || "Jemand"} hat ins Tagebuch geschrieben`, body: String(r.data.x).slice(0, 120), url: "./#day=" + r.data.d, tag: "pa" }); }
      }
    }
    touch(t);
    return json(res, 200, { ok: true, n, seq: t.seq });
  }
  if (p[2] === "file" && p[3] && /^[a-z0-9]{6,32}$/.test(p[3])) {
    const pid = p[3], v = q.get("v") || "best";
    if (M === "PUT") {
      const body = await readRaw(req);
      if (!body.length) return json(res, 400, { error: "leer" });
      const f = t.files[pid] = t.files[pid] || {};
      if (v === "app") { fs.mkdirSync(path.join(APPDIR, t.id), { recursive: true }); fs.writeFileSync(path.join(APPDIR, t.id, pid + ".jpg"), body); f.app = 1; }
      else if (v === "orig") {
        const d = /^\d{4}-\d\d-\d\d$/.test(q.get("d") || "") ? q.get("d") : null;
        const stem = safeName((q.get("name") || "foto").replace(/\.[^.]+$/, "")).replace(/ /g, "_").slice(0, 40) || "foto";
        const ext = (/\.(jpe?g|png|webp|heic)$/i.exec(q.get("name") || "") || [".jpg"])[0].toLowerCase();
        ensureFolders(t);
        const rel = path.join("1 Originale", dayFolder(t, d), `${stem}_${pid}${ext}`);
        fs.mkdirSync(path.join(tripDir(t), path.dirname(rel)), { recursive: true });
        fs.writeFileSync(path.join(tripDir(t), rel), body); f.orig = rel;
      } else return json(res, 400, { error: "v?" });
      touch(t); return json(res, 200, { ok: true });
    }
    if (M === "GET") {
      const f = t.files[pid] || {};
      let file = null;
      const pick = { app: [["app"]], orig: [["orig"]], edit: [["edit"]], best: [["edit"], ["orig"], ["app"]], view: [["app"], ["edit"], ["orig"]] }[v] || [["edit"], ["orig"], ["app"]];
      for (const [w] of pick) {
        if (w === "app" && f.app) { file = path.join(APPDIR, t.id, pid + ".jpg"); break; }
        if (w !== "app" && f[w]) { file = path.join(tripDir(t), f[w]); break; }
      }
      if (!file || !fs.existsSync(file)) return json(res, 404, { error: "Datei fehlt" });
      const ext = path.extname(file).toLowerCase();
      res.writeHead(200, { "Content-Type": ext === ".png" ? "image/png" : ext === ".webp" ? "image/webp" : "image/jpeg", "Access-Control-Allow-Origin": "*", "Cache-Control": "private, max-age=600", "Content-Length": fs.statSync(file).size });
      return fs.createReadStream(file).pipe(res);
    }
  }
  if (p[2] === "scan" && M === "POST") { scanTrip(t); return json(res, 200, { ok: true, seq: t.seq }); }
  if (p[2] === "delete" && M === "POST") { // Reise am Server löschen (Fotos-Ordner bleibt!)
    fs.renameSync(tripFile(t.id), path.join(BK, `${t.id}-geloescht-${Date.now()}.json`)); delete trips[t.id];
    for (const [key, s] of Object.entries(G.subs)) if (s.trip === t.id) delete G.subs[key];
    touch(); return json(res, 200, { ok: true });
  }
  return json(res, 404, { error: "Nicht gefunden" });
}

module.exports = { handle, flush };
