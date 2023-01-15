const CACHE_NAME = "version-1";
const urlsToCache = ['index.html', 'offline.html'];

//This below self means the service worker itself which is equal to 'this' because 'this' in the ServiceWorker file represents ServiceWorker
const self = this;

// Install SW
// we have to add EventListener to our service worker when it is tried to installed we must be able to fetch data from our cache

//In this eventlistener we are adding the urls of our site in the cache of the browser when it is installed 
// First we are opening/creating the cache by taking a name and then we are adding our all the html files to the cache (cache = users browser storage) when it is installed
self.addEventListener('install',(event)=>{
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache)=>{
                console.log("Opened Cache");

                return cache.addAll(urlsToCache);
            })
    )
});



//Listen for requests
// is wale eventListener meh we are trying to match the search request from the api and trying to fetch it and if it is not fetching(means there is no network connection) then we are returning offline.html as a error 
self.addEventListener('fetch',(event)=>{
    event.respondWith(
        caches.match(event.request)
            .then(()=>{
                return fetch(event.request)
                    .catch(()=> caches.match('offline.html'))
            })
    )
});


// Deleting the Previous Versions and Keeping only the Latest one 
//Activate the SW
self.addEventListener('activate',(event)=>{
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);

    Event.waitUntil(
        caches.keys().then((cachNames)=> Promise.all(
           cachNames.map((cacheName)=>{
            if(!cacheWhitelist.includes(cacheName))
            {
                return caches.delete(cacheName);
            }
           }) 
        ))
    )


});