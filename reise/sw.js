// Reisetagebuch – Offline-Speicher: App-Dateien und angesehene Kartenkacheln
const APP = "rt-app-v1", TILES = "rt-tiles-v1", MAX_TILES = 3000;
const CORE = ["./", "index.html", "manifest.webmanifest", "icon.svg", "icon-192.png", "icon-512.png",
  "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css", "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js",
  "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png", "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(APP).then(c => Promise.all(CORE.map(u => c.add(u).catch(() => {})))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== APP && k !== TILES).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

async function trimTiles(c) { const ks = await c.keys(); for (let i = 0; i < ks.length - MAX_TILES; i++) await c.delete(ks[i]); }

self.addEventListener("fetch", e => {
  const req = e.request; if (req.method !== "GET") return;
  const url = new URL(req.url);
  // Kartenkacheln: zuerst aus dem Speicher (offline nutzbar), immer als CORS-Antwort
  if (url.hostname === "tile.openstreetmap.org") {
    e.respondWith(caches.open(TILES).then(async c => {
      const hit = await c.match(url.href); if (hit) return hit;
      try { const r = await fetch(url.href, { mode: "cors" }); if (r.ok) { c.put(url.href, r.clone()); if (Math.random() < 0.05) trimTiles(c); } return r; }
      catch (x) { return new Response("", { status: 504 }); }
    }));
    return;
  }
  // Leaflet: zuerst Speicher
  if (url.hostname === "unpkg.com") {
    e.respondWith(caches.match(req).then(h => h || fetch(req).then(r => { const cl = r.clone(); caches.open(APP).then(c => c.put(req, cl)); return r; })));
    return;
  }
  // App selbst: sofort aus dem Speicher, im Hintergrund aktualisieren
  if (url.origin === location.origin) {
    e.respondWith(caches.open(APP).then(async c => {
      const hit = await c.match(req, { ignoreSearch: true });
      const net = fetch(req).then(r => { if (r.ok) c.put(req, r.clone()); return r; }).catch(() => hit);
      return hit || net;
    }));
  }
  // alles andere (Firebase, Wetter, Ortssuche) geht direkt ins Netz
});
