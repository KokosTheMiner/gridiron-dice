// Heimserver: liefert die Web-Apps aus und speichert ihre Daten
// wie die Firebase Realtime Database (REST: GET/PUT/PATCH/POST/DELETE auf /db/<pfad>.json).
// Keine Zusatzpakete, nur Node.js.
"use strict";
const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const ROOT = __dirname;
const PORT = Number(process.env.PORT || 80);
const WWW = path.join(ROOT, "www");
const DATA = path.join(ROOT, "data");
const DB_FILE = path.join(DATA, "db.json");
const BACKUP_DIR = path.join(DATA, "backup");
const KEEP_BACKUPS = 30;
const MAX_BODY = 20 * 1024 * 1024;

fs.mkdirSync(BACKUP_DIR, { recursive: true });

function log(...a) { console.log(new Date().toISOString(), ...a); }

/* ---------------- Datenbank im Speicher + Datei ---------------- */
let db = {};
try { db = JSON.parse(fs.readFileSync(DB_FILE, "utf8")) || {}; }
catch (e) { if (e.code !== "ENOENT") { log("db.json defekt – versuche Sicherung", e.message); db = loadNewestBackup(); } }

function loadNewestBackup() {
  const f = fs.readdirSync(BACKUP_DIR).filter(n => n.endsWith(".json")).sort().pop();
  if (!f) return {};
  log("lade Sicherung", f);
  return JSON.parse(fs.readFileSync(path.join(BACKUP_DIR, f), "utf8")) || {};
}

let saveTimer = null;
function scheduleSave() {
  clearTimeout(saveTimer);
  saveTimer = setTimeout(saveNow, 300);
}
function saveNow() {
  clearTimeout(saveTimer); saveTimer = null;
  const tmp = DB_FILE + ".tmp";
  fs.writeFileSync(tmp, JSON.stringify(db));
  fs.renameSync(tmp, DB_FILE);
}

function dailyBackup() {
  const day = new Date().toISOString().slice(0, 10);
  const f = path.join(BACKUP_DIR, `db-${day}.json`);
  // stündlich den aktuellen Stand als Tagessicherung ablegen
  if (Object.keys(db).length || !fs.existsSync(f)) fs.writeFileSync(f, JSON.stringify(db));
  const all = fs.readdirSync(BACKUP_DIR).filter(n => /^db-\d{4}-\d{2}-\d{2}\.json$/.test(n)).sort();
  while (all.length > KEEP_BACKUPS) fs.unlinkSync(path.join(BACKUP_DIR, all.shift()));
}
setInterval(dailyBackup, 60 * 60 * 1000);
setTimeout(dailyBackup, 5000);

/* ---------------- Baum-Hilfen ---------------- */
function parts(p) {
  return p.split("/").filter(Boolean).map(decodeURIComponent);
}
function getAt(keys) {
  let n = db;
  for (const k of keys) {
    if (n === null || typeof n !== "object" || !(k in n)) return null;
    n = n[k];
  }
  return n === undefined ? null : n;
}
function prune(v) {
  // Firebase speichert keine leeren Objekte/null
  if (v === null || typeof v !== "object") return v;
  if (Array.isArray(v)) { const a = v.map(x => { const y = prune(x); return y === undefined ? null : y; }); return a.length ? a : null; }
  const out = {};
  for (const [k, x] of Object.entries(v)) {
    const y = prune(x);
    if (y !== null && y !== undefined) out[k] = y;
  }
  return Object.keys(out).length ? out : null;
}
function setAt(keys, value) {
  value = prune(value);
  if (!keys.length) { db = value || {}; return; }
  let n = db;
  const trail = [];
  for (const k of keys.slice(0, -1)) {
    if (n[k] === null || typeof n[k] !== "object") {
      if (value === null) return; // nichts zu löschen
      n[k] = {};
    }
    trail.push([n, k]);
    n = n[k];
  }
  const last = keys[keys.length - 1];
  if (value === null) delete n[last]; else n[last] = value;
  // leere Elternknoten aufräumen
  for (let i = trail.length - 1; i >= 0; i--) {
    const [parent, k] = trail[i];
    if (parent[k] && typeof parent[k] === "object" && !Object.keys(parent[k]).length) delete parent[k];
    else break;
  }
}
function serverValues(v) {
  if (v && typeof v === "object") {
    if (v[".sv"] === "timestamp" && Object.keys(v).length === 1) return Date.now();
    for (const k of Object.keys(v)) v[k] = serverValues(v[k]);
  }
  return v;
}
// Push-IDs wie Firebase (zeitlich sortierbar)
const PUSH_CHARS = "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
let lastPush = 0, lastRand = [];
function pushId() {
  let now = Date.now(); const dup = now === lastPush; lastPush = now;
  const t = new Array(8);
  for (let i = 7; i >= 0; i--) { t[i] = PUSH_CHARS[now % 64]; now = Math.floor(now / 64); }
  if (!dup) lastRand = Array.from(crypto.randomBytes(12), b => b % 64);
  else { let i = 11; while (i >= 0 && lastRand[i] === 63) { lastRand[i] = 0; i--; } if (i >= 0) lastRand[i]++; }
  return t.join("") + lastRand.map(i => PUSH_CHARS[i]).join("");
}

/* ---------------- HTTP ---------------- */
const MIME = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8", ".webmanifest": "application/manifest+json", ".svg": "image/svg+xml",
  ".png": "image/png", ".jpg": "image/jpeg", ".ico": "image/x-icon", ".txt": "text/plain; charset=utf-8",
};

function send(res, code, body, type = "application/json; charset=utf-8") {
  res.writeHead(code, {
    "Content-Type": type,
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,PATCH,POST,DELETE,OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Cache-Control": "no-store",
  });
  res.end(body);
}
function json(res, code, v) { send(res, code, JSON.stringify(v === undefined ? null : v)); }

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = []; let size = 0;
    req.on("data", c => { size += c.length; if (size > MAX_BODY) { reject(new Error("zu groß")); req.destroy(); } else chunks.push(c); });
    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    req.on("error", reject);
  });
}

async function handleDb(req, res, url) {
  let p = url.pathname.slice(3); // nach "/db"
  if (!p.endsWith(".json")) return json(res, 400, { error: "Pfad muss auf .json enden" });
  const keys = parts(p.slice(0, -5));
  const m = req.method;
  if (m === "GET") {
    const v = getAt(keys);
    if (url.searchParams.get("shallow") === "true" && v && typeof v === "object") {
      const o = {}; for (const k of Object.keys(v)) o[k] = (v[k] && typeof v[k] === "object") ? true : v[k];
      return json(res, 200, o);
    }
    return json(res, 200, v);
  }
  if (m === "DELETE") { setAt(keys, null); scheduleSave(); return json(res, 200, null); }
  let body;
  try { const raw = await readBody(req); body = raw.trim() ? JSON.parse(raw) : null; }
  catch (e) { return json(res, 400, { error: "Ungültiges JSON: " + e.message }); }
  body = serverValues(body);
  if (m === "PUT") { setAt(keys, body); scheduleSave(); return json(res, 200, getAt(keys)); }
  if (m === "PATCH") {
    if (!body || typeof body !== "object") return json(res, 400, { error: "PATCH braucht ein Objekt" });
    for (const [k, v] of Object.entries(body)) setAt(keys.concat(parts(k)), v);
    scheduleSave(); return json(res, 200, body);
  }
  if (m === "POST") { const id = pushId(); setAt(keys.concat(id), body); scheduleSave(); return json(res, 200, { name: id }); }
  return json(res, 405, { error: "Methode nicht erlaubt" });
}

function handleStatic(req, res, url) {
  let rel = decodeURIComponent(url.pathname);
  if (rel === "/") return send(res, 200, startPage(), MIME[".html"]);
  let file = path.normalize(path.join(WWW, rel));
  if (!file.startsWith(WWW)) return send(res, 403, "verboten", MIME[".txt"]);
  fs.stat(file, (err, st) => {
    if (!err && st.isDirectory()) {
      if (!rel.endsWith("/")) { res.writeHead(301, { Location: rel + "/" }); return res.end(); }
      file = path.join(file, "index.html");
    }
    fs.readFile(file, (err2, data) => {
      if (err2) return send(res, 404, "Nicht gefunden", MIME[".txt"]);
      res.writeHead(200, { "Content-Type": MIME[path.extname(file).toLowerCase()] || "application/octet-stream", "Cache-Control": "no-cache" });
      res.end(data);
    });
  });
}

function startPage() {
  const apps = fs.existsSync(WWW) ? fs.readdirSync(WWW, { withFileTypes: true }).filter(d => d.isDirectory()).map(d => d.name) : [];
  return `<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Heimserver</title><style>body{font:18px system-ui,sans-serif;max-width:600px;margin:40px auto;padding:0 16px;background:#f6f7f9;color:#222}
a{display:block;padding:14px 18px;margin:10px 0;background:#fff;border-radius:10px;text-decoration:none;color:#1a5fb4;box-shadow:0 1px 3px #0002}
small{color:#666}</style><h1>🏠 Heimserver</h1>${apps.map(a => `<a href="/${a}/">${a}</a>`).join("") || "<p>Noch keine Apps.</p>"}
<p><small>Läuft seit ${new Date(Date.now() - process.uptime() * 1000).toLocaleString("de-AT")}</small></p>`;
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, "http://x");
    if (req.method === "OPTIONS") return send(res, 204, "");
    if (url.pathname === "/db" || url.pathname.startsWith("/db/")) return await handleDb(req, res, url);
    if (url.pathname === "/status") return json(res, 200, { ok: true, uptime: process.uptime(), size: JSON.stringify(db).length });
    if (req.method !== "GET" && req.method !== "HEAD") return json(res, 405, { error: "nur GET" });
    return handleStatic(req, res, url);
  } catch (e) {
    log("Fehler", e.stack || e);
    if (!res.headersSent) json(res, 500, { error: "Serverfehler" });
  }
});

process.on("SIGINT", () => { saveNow(); process.exit(0); });
process.on("SIGTERM", () => { saveNow(); process.exit(0); });
process.on("exit", () => { if (saveTimer) saveNow(); });

server.listen(PORT, () => log(`Heimserver läuft auf Port ${PORT}`));
