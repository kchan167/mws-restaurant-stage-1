self.addEventListener('install', function (event) {
  // Perform install steps
});
var staticCacheName = 'restaurant-v0';
var urlToCache = [
    '/',
    'index.html',
    'restaurant.html',
    'css/styles.css',
    'js/dbhelper.js',
    'js/main.js',
    'js/restaurant_info.js',
    'data/restaurants.json',
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg',
    'img/7.jpg',
    'img/8.jpg',
    'img/9.jpg',
    'img/10.jpg',
];

// Install service worker
self.addEventListener('install', function(event) {
    console.log('service worker installed');
    event.waitUntil(
        caches.open(staticCacheName).then(function(cache) {
            console.log('Service worker is caching.');
            return cache.addAll(urlToCache);
        })
    );
});

// Delete old cache
self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promise.all(
                cacheNames.filter(function(cacheName) {
                    return cacheName.startsWith('restaurant-') &&
                           cacheName != staticCacheName;
                }).map(function(cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});

// Update new cache
function update(request) {
    return caches.open(staticCacheName).then(function(cache) {
        return fetch(request).then(function(response) {
            return cache.put(request, response);
        })
    });
};

// Register service worker
self.addEventListener('fetch', function(event) {
    console.log(event.request);
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        })
        .catch(function(error) {
            console.log(error, event.request)
        })
    );
    event.waitUntil(update(event.request));
});

self.addEventListener('message', function(event) {
    if(event.data.action === 'skipWaiting') {
        self.skipWaiting();
    }
});
