const cacheName = "2048-ai-v1";

const filesToCache = [
  "/",
  "/index.html",
  "/style/main.css",
  "/ai.js",
  "/js/animframe_polyfill.js",
  "/js/application.js",
  "/js/game_manager.js",
  "/js/grid.js",
  "/js/html_actuator.js",
  "/js/keyboard_input_manager.js",
  "/js/local_storage_manager.js",
  "/js/tile.js",
  "/favicon.ico",
  "/meta/apple-touch-icon.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
