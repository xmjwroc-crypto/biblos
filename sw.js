const CACHE_NAME = 'biblos-v1';
const urlsToCache = [
  './',
  'index.html',
  'app.html',
  'hebrew.html',
  'greek.html',
  'manifest.json',
  'icon-192.png',
  'icon-512.png'
  // Dodaj inne pliki CSS/JS jeśli masz zewnętrzne
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});