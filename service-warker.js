self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("tts-cache").then(cache => {
      return cache.addAll([
        "tts-superapp.html",
        "manifest.json",
        "icon-192.png",
        "icon-512.png"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});

