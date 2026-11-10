// Look-Kamera: offline nutzbar + Ziel im Android-Teilen-Menü.
const CACHE = 'lookcam-v2';
const FILES = ['./', 'index.html', 'manifest.webmanifest', 'icon.svg', 'icon-192.png', 'icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE && k !== 'lookcam-share').map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  // „Teilen → Look-Kamera“: Foto zwischenlegen und die App damit öffnen
  if (e.request.method === 'POST' && url.pathname.endsWith('/share')) {
    e.respondWith((async () => {
      try {
        const fd = await e.request.formData();
        const f = fd.getAll('photo').find(x => x && x.size);
        if (f) {
          const c = await caches.open('lookcam-share');
          await c.put('shared-photo', new Response(f, {headers: {'content-type': f.type || 'image/jpeg', 'x-name': encodeURIComponent(f.name || 'foto.jpg')}}));
        }
      } catch (err) {}
      return Response.redirect(new URL('./?shared=1', self.registration.scope).href, 303);
    })());
    return;
  }
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  e.respondWith(
    fetch(e.request).then(r => {
      const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r;
    }).catch(() => caches.match(e.request, {ignoreSearch: true}))
  );
});
