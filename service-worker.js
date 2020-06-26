const cacheName = 'cache-v';
const precacheResources = [
  '/',
  '/index.html',
  '/css/internalyze-c172325c063499ba83dddb5a46f.webflow.css',
  '/css/normalize.css',
  '/css/webflow.css',
  '/js/webflow.js',
  '/images/62372-computer-neon-instagram-icons-hd-image-free-png.png',
  '/images/62372-computer-neon-instagram-icons-hd-image-free-png-p-800.png',
  '/images/62372-computer-neon-instagram-icons-hd-image-free-png-p-1080.png',
  '/images/62372-computer-neon-instagram-icons-hd-image-free-png-p-1600.png',
  '/images/62372-computer-neon-instagram-icons-hd-image-free-png-p-2000.png',
  '/images/Arrow.png',
  '/images/Arrow_green.png',
  '/images/Arrow-p-130x130q80.png',
  '/images/cropped.png',
  '/images/cropped.svg',
  '/images/cropped_1.svg',
  '/images/cropped_2.svg',
  '/images/cropped-p-500.png',
  '/images/cropped-p-800.png',
  '/images/cropped-p-1080.png',
  '/images/cropped-p-1600.png',
  '/images/favicon.png',
  '/images/logo_long.png',
  '/images/logo_long-p-130x130q80.png',
  '/images/logo_long-p-500.png',
  '/images/logo_long-p-800.png',
  '/images/logo_long-p-1080.png',
  '/images/logo_long-p-1600.png',
  '/images/logo_long-p-2000.png',
  '/images/noun_constructions_PaidWhite.png',
  '/images/noun_constructions_PaidWhite-p-130x130q80.png',
  '/images/noun_constructions_PaidWhite-p-500.png',
  '/images/noun_launch_2217254.png',
  '/images/noun_launch_2217254-p-130x130q80.png',
  '/images/noun_launch_2217254-p-500.png',
  '/images/noun_shake-hand_1546237.png',
  '/images/noun_shake-hand_1546237-p-130x130q80.png',
  '/images/noun_shake-hand_1546237-p-500.png',
  '/images/png-twitter-logo-twitter-in-png-2500.png',
  'images/png-twitter-logo-twitter-in-png-2500-p-500.png',
  'images/png-twitter-logo-twitter-in-png-2500-p-800.png',
  'images/png-twitter-logo-twitter-in-png-2500-p-1080.png',
  'images/png-twitter-logo-twitter-in-png-2500-p-1600.png',
  'images/png-twitter-logo-twitter-in-png-2500-p-2000.png',
  'images/webclip.jpg'  
];

self.addEventListener('install', event => {
  console.log('Service worker install event!');
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => {
        return cache.addAll(precacheResources);
      })
  );
});

self.addEventListener('activate', event => {
  console.log('Service worker activate event!');
});

self.addEventListener('fetch', event => {
  console.log('Fetch intercepted for:', event.request.url);
  event.respondWith(caches.match(event.request)
    .then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }
        return fetch(event.request);
      })
    );
});