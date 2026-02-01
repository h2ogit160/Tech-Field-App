self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("tech-field-v12.4").then((cache) =>
      cache.addAll(["./index.html"])
    )
  );
  self.skipWaiting();
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
