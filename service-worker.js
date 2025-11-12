const CACHE_NAME = 'string-art-v' + '20250108-004'; // Update this timestamp when you make changes
const urlsToCache = [
  'index.html',
  'manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.7.0/p5.min.js'
];

// Install service worker and skip waiting to activate immediately
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting()) // Force immediate activation
  );
});

// Fetch from cache with network-first strategy for HTML
self.addEventListener('fetch', event => {
  // For HTML files, try network first, then cache
  if (event.request.url.endsWith('.html') || event.request.url.endsWith('/')) {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          // Cache the new version
          const responseClone = response.clone();
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseClone);
          });
          return response;
        })
        .catch(() => caches.match(event.request))
    );
  } else {
    // For other files, use cache first
    event.respondWith(
      caches.match(event.request)
        .then(response => response || fetch(event.request))
    );
  }
});

// Clean up old caches and take control immediately
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim()) // Take control immediately
  );
});
