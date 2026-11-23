// Offline-ondersteuning: bewaart de app (niet de data) op het toestel.
const CACHE = "verkopen-v1";
const SHELL = ["./", "./index.html", "./config.js", "./manifest.webmanifest", "./icon-180.png", "./icon-192.png", "./icon-512.png"];
const ZX = "https://unpkg.com/@zxing/library@0.21.3/umd/index.min.js";

self.addEventListener("install", e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    await c.addAll(SHELL);
    try { await c.put(ZX, await fetch(ZX, { mode: "no-cors" })); } catch (err) {}
    self.skipWaiting();
  })());
});

self.addEventListener("activate", e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== CACHE) await caches.delete(k);
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const own = url.origin === self.location.origin;
  if (!own && url.href !== ZX) return;          // Microsoft/OneDrive-verkeer nooit cachen
  e.respondWith((async () => {
    const c = await caches.open(CACHE);
    const key = req.mode === "navigate" ? "./" : req;
    const cached = await c.match(key, { ignoreSearch: true });
    const net = fetch(req).then(r => {
      if (r && (r.ok || r.type === "opaque")) c.put(key, r.clone());
      return r;
    }).catch(() => cached);
    return cached || net;
  })());
});
