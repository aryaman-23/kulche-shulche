const CACHE_NAME = 'kulche-shulche-v1';

const URLS_CACHE_ONLY = [
  "/",
];

const URLS_OVER_NETWORK_WITH_CACHE_FALLBACK = [
  "index.html",
];
self.addEventListener("install", (event) => {
    console.log("Service Worker installing.");
    event.waitUntil(
      caches.open(CACHE_NAME).then(function(cache) {
          console.log("Installing web app");
          console.log("caching index and import routes");
          return cache.addAll(URLS_CACHE_ONLY);
      }).catch((err) => {
          // console.log(err);
          // alert('ERROR: ' + err);
          return new Promise((resolve, reject) => {
              reject('ERROR: ' + err);

          });
      })
  );
    // self.skipWaiting();
  });
  
self.addEventListener("activate", (event) => {
    console.log("Service Worker activated.");
    event.waitUntil(
      caches.keys().then(function(cacheNames) {
          return Promise.all(
              cacheNames.map(function(cacheName) {
                  if (CACHE_NAME !== cacheName && cacheName.startsWith("aarvi-bajaj")) {
                      return caches.delete(cacheName);
                  }
              })
          );
      })
    );

});
  
  self.addEventListener("fetch", (event) => {
    console.log("Fetching:", event.request.url);

    const requestURL = new URL(event.request.url);

    if (requestURL.pathname === '/') {
        event.respondWith(getByNetworkFallingBackByCache("index.html"));
    } else if (URLS_OVER_NETWORK_WITH_CACHE_FALLBACK.includes(requestURL.href) || URLS_OVER_NETWORK_WITH_CACHE_FALLBACK.includes(requestURL.pathname)) {
        event.respondWith(getByNetworkFallingBackByCache(event.request));
    } else if (URLS_CACHE_ONLY.includes(requestURL.href) || URLS_CACHE_ONLY.includes(requestURL.pathname)) {
        event.respondWith(getByCacheOnly(event.request));
    }

  });

const getByCacheOnly = (request) => {
  return caches.open(CACHE_NAME).then((cache) => {
      return cache.match(request).then((response) => {
          return response;
      });
  });
};  

const getByNetworkFallingBackByCache = (request, showAlert = false) => {
  return caches.open(CACHE_NAME).then((cache) => {
      return fetch(request).then((networkResponse) => {
          cache.put(request, networkResponse.clone());
          return networkResponse;
      }).catch(() => {
          if (showAlert) {
              alert('You are in offline mode. The data may be outdated.')
          }

          return caches.match(request);
      });
  });
};

self.addEventListener('push', function(event) {
  console.log('[Service Worker] Push Received.');
  console.log(`[Service Worker] Push had this data: "${event.data.text()}"`);

  const title = 'Push Notification Demo';
  const options = {
      body: 'Yay it works.',
      // icon: 'assets/img/sample/avatar/avtar5.jpg',
      // badge: 'assets/img/logo.png'
  };

  event.waitUntil(self.registration.showNotification(title, options));
});
  