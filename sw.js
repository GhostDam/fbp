// const CACHE_NAME = "Memorial V1.29";         //nombre de cache
// const DataToCache = [                        //datos a guardar
//   './',                                      //requests urls 
//   'index.html',
//   'game.html',
//   'js/main.js',
//   'js/game.js',
//   'css/master.css',
//   'css/game.css',
//   'librerias/bootstrap.css',
//   'librerias/fonts/untitled-font-1.eot',
//   'librerias/fonts/untitled-font-1.svg',
//   'librerias/fonts/untitled-font-1.ttf',
//   'librerias/fonts/untitled-font-1.woff',
//   'librerias/styles.css'
// ];

// self.addEventListener('install', function(event) {
//       //wait until es para evitar que el navegador interrumpa el cache
//       //ya que el evento de instalacion es mas rapido que el cacheo en si
//       event.waitUntil(
//         caches
//           .open(CACHE_NAME) 
//           .then(function(cache) {
//             console.log('abriendo cache');
//             return cache.addAll(DataToCache);
//           })
//           .then(()=> self.skipWaiting())
//       );
// });

// //activate event, es donde se "limpia" la cache vieja
// self.addEventListener('activate', e =>{
//   e.waitUntil(
//     caches.keys().then(cachesNames =>{
//       console.log(cachesNames)
//       return Promise.all(
//         cachesNames.map(cache =>{
//           if (cache!==CACHE_NAME) {
//             console.log('SW cleared from old cache')
//             return caches.delete(cache)
//           }
//         })
//       )
//     })
//   )
// })


// // Cache, falling back to network - fetch events
// self.addEventListener('fetch', function(event) {
//   event.respondWith(
//     caches.match(event.request)
//     .then(function(response) {
//       // Cache hit - return response
//       if(response){
//         return response
//       }
//       return fetch(event.request);
//     })
//   );
// });
