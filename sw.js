// //* Asignar nombre y version de cache
// const CACHE_NAME = 'sistema_calificacion_reportes';
// //* Ficheros a cachear en la aplicacion
// var urlsToCache = [
//     './',
//     './php/calificacion.php',
//     './php/conexion.php',
//     './php/firma.php',
//     './php/guardar.php',
//     './php/querys.php',
//     './php/rguardado.php',
//     './php/vregistro.php',
//     './css/bootstrap.min.css',
//     './css/main.css',
//     './css/normalize.css',
//     './main.js',
//     './js/sign.js',
//     './js/jquery-3.4.1.js',
//     './img/icono 1024x1024.png',
//     './img/favicon.png'
// ];
// //* Evento Install
// //Instalcion del service worker y guardar en cache  los recursos estaticos
// self.addEventListener('install', e => {
//     e.waitUntil(
//         caches.open(CACHE_NAME)
//               .then(async cache => {
//                     try {
//                       await cache.addAll(urlsToCache);
//                       self.skipWaiting();
//                   }
//                   catch (err) {
//                       console.log('No se ha registrado el cache', err);
//                   }
//                 }));

// });
// //* Evento Activate
// self.addEventListener('activate', e => {
//     const cacheWhitelist = [CACHE_NAME];
//     e.waitUntil(
//         caches.keys()
//               .then(cacheNames => {
//                   return Promise.all(
//                       cacheNames.map(cacheName =>{

//                         if(cacheWhitelist.indexOf(cacheName) === -1){
//                             //Borrar elementos que no se necesitan
//                             return caches.delete(cacheName);
//                         }
//                       }));
//               })
//               .then(() => {
//                   //Activar cache
//                   self.clients.claim();
//               }));
//     });
// //* Evento Fetch
// self.addEventListener('fetch', e=> {
//     e.respondWith(
//         caches.match(e.request)
//               .then(res => {
//                   if(res){
//                       //Devuelvo datos desde cache
//                       return res;
//                   }
//                   return fetch(e.request);
//               })
//     );
// });
