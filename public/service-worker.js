const STATIC_CACHE_NAME = 'portfolio-app-v1';
const DYNAMIC_CACHE_NAME = 'dynamic-portfolio-app-v1';

const staticUrlsToCache = [ // Arquivos estáticos que raramente mudam
  '/portfolio/',
  '/portfolio/manifest.json',
];

self.addEventListener('install', (event) => {
  console.log('Service Worker instalado.');
  event.waitUntil(
    caches.open(STATIC_CACHE_NAME)
      .then((cache) => cache.addAll(staticUrlsToCache))
  );
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) return cachedResponse;

      // Stale-while-revalidate para recursos estáticos, network-first para dinâmicos
      // Cache estático 
      if (staticUrlsToCache.includes(event.request.url)) return staleWhileRevalidate(event);
      // Cache Dinâmico (API, etc.) - ajusta conforme necessário
      else return networkFirst(event);
    })
  );
});

// Função auxiliar para stale-while-revalidate
function staleWhileRevalidate(event) {
  return caches.open(STATIC_CACHE_NAME).then(cache => {
    return cache.match(event.request).then(response => {
      const fetchPromise = fetch(event.request).then(networkResponse => {
        cache.put(event.request, networkResponse.clone());
        return networkResponse;
      });

      return response || fetchPromise;
    });
  });
}

//Função auxiliar para network-first
function networkFirst(event) {
  return fetch(event.request).then(fetchRes => {
    return caches.open(DYNAMIC_CACHE_NAME).then(cache => {
      cache.put(event.request, fetchRes.clone());
      return fetchRes;
    })
  }).catch(() => {
    return caches.match(event.request)
  })
}

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE_NAME && cacheName !== DYNAMIC_CACHE_NAME) {
            console.log('Limpando cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  event.waitUntil(clients.claim());
});
