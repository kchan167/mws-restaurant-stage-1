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
/**
* @description Install service worker
* @param {string} 'install'
* @param {function} function(event){}
* @returns {cache} Return the given cache which is added a
*                  series of resulting response objects
*/
self.addEventListener('install', function(event) {
    console.log('service worker installed');
    event.waitUntil(
        caches.open(staticCacheName).then(function(cache) {
            console.log('Service worker is caching.');
            return cache.addAll(urlToCache);
        })
    );
});
/**
* @description Delete old cache
* @param {string} 'activate'
* @param {function} function(event){}
* @returns {caches} Return caches except the given cache
*                   that suppose to be deleted
*/
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

/**
* @description Update new cache
* @param {request} request
* @returns {cache} Return an update cache
*/
function update(request) {
    return caches.open(staticCacheName).then(function(cache) {
        return fetch(request).then(function(response) {
            return cache.put(request, response);
        })
    });
}

/**
* @description Register service worker
* @param {string} 'fetch'
* @param {function} function(event){}
* @returns {Promise} Return a promise containing the response
*/
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

/**
* @description Ensure that updates to the underlying service
*              worker take effect immediately for both the current
*              client and all other active clients
* @param {string} 'message'
* @param {function} function(event){}
*/
self.addEventListener('message', function(event) {
    if(event.data.action === 'skipWaiting') {
        self.skipWaiting();
    }
});
