// console.log("Testing service-worker.js file...");

// install service worker, add files to precache and use the cache
    // start the dev server with this command `npm run start:dev`

// constants
const APP_PREFIX = 'Budget-Tracker';
const VERSION = 'version_01';
const CACHE_NAME = APP_PREFIX + VERSION;

// files to cache
const FILES_TO_CACHE = [
    "../index.html",   
    "../css/styles.css",
    "../js/icons/icon_512x512.png"
  ];

// add event listener for install 
self.addEventListener('install', function (e) {
    e.waitUntil(
      caches.open(CACHE_NAME).then(function (cache) {
        console.log('installing cache : ' + CACHE_NAME)
        return cache.addAll(FILES_TO_CACHE)
      })
    )
  });

// add event listener for activate, to manage cache
self.addEventListener('activate', function(e) {
    e.waitUntil(
      caches.keys().then(function(keyList) {
        let cacheKeeplist = keyList.filter(function(key) {
          return key.indexOf(APP_PREFIX);
        });
        cacheKeeplist.push(CACHE_NAME);
  
        return Promise.all(
          keyList.map(function(key, i) {
            if (cacheKeeplist.indexOf(key) === -1) {
              console.log('deleting cache : ' + keyList[i]);
              return caches.delete(keyList[i]);
            }
          })
        );
      })
    );
  });

// add event listener for fetch, to check if cached, for offline functionality
  self.addEventListener('fetch', function (e) {
    console.log('fetch request : ' + e.request.url)
    e.respondWith(
      caches.match(e.request).then(function (request) {
        if (request) { 
          console.log('responding w/ cache : ' + e.request.url)
          return request
        } else {       
          console.log('file is not cached, so fetching : ' + e.request.url)
          return fetch(e.request)
        }        
      })
    )
  })


