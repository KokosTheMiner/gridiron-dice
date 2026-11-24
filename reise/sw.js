// Reisetagebuch – Offline-Speicher (App, Karten) und Benachrichtigungen
const APP = "rt-app-v2", TILES = "rt-tiles-v1", MAX_TILES = 3000;
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
  if (url.pathname.includes("/reise-api/")) return; // Abgleich + Fotos immer direkt
  if (url.hostname === "tile.openstreetmap.org") {
    e.respondWith(caches.open(TILES).then(async c => {
      const hit = await c.match(url.href); if (hit) return hit;
      try { const r = await fetch(url.href, { mode: "cors" }); if (r.ok) { c.put(url.href, r.clone()); if (Math.random() < 0.05) trimTiles(c); } return r; }
      catch (x) { return new Response("", { status: 504 }); }
    }));
    return;
  }
  if (url.hostname === "unpkg.com" || url.hostname === "cdn.jsdelivr.net") {
    e.respondWith(caches.match(req).then(h => h || fetch(req).then(r => { if (r.ok) { const cl = r.clone(); caches.open(APP).then(c => c.put(req, cl)); } return r; })));
    return;
  }
  if (url.origin === location.origin) {
    e.respondWith(caches.open(APP).then(async c => {
      const hit = await c.match(req, { ignoreSearch: true });
      const net = fetch(req).then(r => { if (r.ok) c.put(req, r.clone()); return r; }).catch(() => hit);
      return hit || net;
    }));
  }
});

self.addEventListener("push", e => {
  let m = {}; try { m = e.data.json(); } catch (x) { m = { title: "Reisetagebuch", body: e.data && e.data.text() }; }
  e.waitUntil(self.registration.showNotification(m.title || "Reisetagebuch", { body: m.body || "", icon: "icon-192.png", badge: "icon-192.png", tag: m.tag || "rt", renotify: true, data: { url: m.url || "./" } }));
});
self.addEventListener("notificationclick", e => {
  e.notification.close();
  const url = new URL((e.notification.data && e.notification.data.url) || "./", self.registration.scope).href;
  e.waitUntil(self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(list => {
    for (const c of list) if (c.url.startsWith(self.registration.scope)) { c.postMessage({ url }); return c.focus(); }
    return self.clients.openWindow(url);
  }));
});
