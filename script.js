if (navigator.serviceWorker) {
    navigator.serviceWorker.register('./sw.js');
}
if (window.caches) {
    caches.open('micache-v2').then(cache => {
        //aniadir cache
        let linksToCache = [
            './',
            './script.js'
        ]
        cache.addAll(linksToCache).then(()=> 
             cache.delete('/')
        )
    })
}