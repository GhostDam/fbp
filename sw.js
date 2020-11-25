
self.addEventListener('install', function(event) {
      event.waitUntil(
        caches.open('cache01') 
        .then(function(cache) {
          cache.addAll([
            './',
            'index.html',
            'game.html',
            'js/main.js',
            'js/game.js',
            'css/master.css',
            'css/game.css',
            'librerias/bootstrap.css',
            'librerias/jquery.js'
          ]);
        })
      );
        return self.clients.claim()
    });
    // Cache, falling back to network
    self.addEventListener('fetch', function(event) {
      event.respondWith(
        caches.match(event.request)
        .then(function(response) {
          return response
        })
      );
    });
