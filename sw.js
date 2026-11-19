/* Funciona sin señal: guarda la app en el celular. Cambiar VERSION en cada actualización (y ?v= en index.html). */
var VERSION = 'evop-v14';
var ARCHIVOS = ['./', 'index.html', 'plantilla.js?v=14', 'datos.js?v=14', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png'];
self.addEventListener('install', function (e) { e.waitUntil(caches.open(VERSION).then(function (c) { /* cache: 'reload' para no copiar al SW archivos viejos de la caché HTTP del navegador */ return c.addAll(ARCHIVOS.map(function (u) { return new Request(u, { cache: 'reload' }); })); })); self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(caches.keys().then(function (k) { return Promise.all(k.filter(function (x) { return x !== VERSION; }).map(function (x) { return caches.delete(x); })); })); self.clients.claim(); });
self.addEventListener('fetch', function (e) {
  if (e.request.method !== 'GET') return;
  /* primero la red (para recibir actualizaciones); sin señal, la copia guardada */
  e.respondWith(fetch(e.request).then(function (r) { var c = r.clone(); caches.open(VERSION).then(function (x) { x.put(e.request, c); }); return r; })
    .catch(function () { return caches.match(e.request, { ignoreSearch: true }); }));
});
