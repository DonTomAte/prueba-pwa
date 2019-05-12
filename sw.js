;
const CACHE_NAME = 'v1_don_tom_pwa',
urlsToCache = [
    './',
    'href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons',
    'href="https://cdn.jsdelivr.net/npm/vuetify/dist/vuetify.min.css',
    './script.js',
    '.././images/ProgramadorFitness.png'
]

self.addEventListener('install',e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache =>{
            return cache.addAll(urlsToCache)
            .then(()=>self.skipWaiting())
        })
        .catch(err => console.log("Nos fallo el registro de cache :( ",err))
    )
})
// SIN CONEXION
self.addEventListener('activate', e => {
    const cacheWhiteList = [CACHE_NAME]
    e.waitUntil(
        caches.keys()
        .then(cachesNames => {
            cachesNames.map(cacheName => {
                if (cacheWhiteList.indexOf(cacheName) === -1)
                    return caches.delete(cacheName);
            })
        })
        .then(()=>self.clients.claim())
    )
})
self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request)
        .then(res =>{
            if(res){
                return res
            }

            return fetch(e.request)
        })
    )
})
