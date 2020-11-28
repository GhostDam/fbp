const CACHE_NAME = "Memorial V3";         //nombre de cache
const DataToCache = [                     //datos a guardar
  './',
  'index.html',
  'game.html',
  'js/main.js',
  'js/game.js',
  'css/master.css',
  'css/game.css',
  'librerias/bootstrap.css',
  'librerias/jquery.js'
];

self.addEventListener('install', function(event) {
      //perform install steps
      event.waitUntil(
        caches
          .open(CACHE_NAME) 
          .then(function(cache) {
            console.log('abriendo cache');
            return cache.addAll(DataToCache);
          })
      );
});

//activate event, es donde se "limpia" la cache vieja
self.addEventListener('activate', e =>{
  e.waitUntil(
    caches.keys().then(cachesNames =>{
      return Promise.all(
        cachesNames.map(cache =>{
          if (cache!==CACHE_NAME) {
            console.log('SW cleared from old cache')
            return caches.delete(cache)
          }
        })
      )
    })
  )
})


// Cache, falling back to network - fetch events
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
    .then(function(response) {
      // Cache hit - return response
      if(response){
        return response
      }
      return fetch(event.request);
    })
  );
});
