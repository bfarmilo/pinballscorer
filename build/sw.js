"use strict";var precacheConfig=[["/pinballscorer/23f21e3c6909d2e3799caa9fc9a3f7fb.ogg","23f21e3c6909d2e3799caa9fc9a3f7fb"],["/pinballscorer/7b87f7facc356fac2e149c55475faecd.ogg","7b87f7facc356fac2e149c55475faecd"],["/pinballscorer/8281309efaa5353aee5fe62a3eb711e8.ogg","8281309efaa5353aee5fe62a3eb711e8"],["/pinballscorer/adb6e23ba56bf13d4398420a3e849164.ogg","adb6e23ba56bf13d4398420a3e849164"],["/pinballscorer/assets/OFL.txt","5096248a0ad125929b038a264f57b570"],["/pinballscorer/assets/PressStart2P-Regular.ttf","ccb1dfce06ad3883f8e3b5ae011aa795"],["/pinballscorer/assets/bell.ogg","7b87f7facc356fac2e149c55475faecd"],["/pinballscorer/assets/buzz.ogg","23f21e3c6909d2e3799caa9fc9a3f7fb"],["/pinballscorer/assets/favicon.ico","53ac170e970ad034a55ee15ce198708c"],["/pinballscorer/assets/icons/android-chrome-192x192.png","59e221032ab061cad83b6ce2bcddbde8"],["/pinballscorer/assets/icons/android-chrome-512x512.png","cf3fdf7af60a294d6d3f48cb7ad82488"],["/pinballscorer/assets/icons/apple-touch-icon.png","a0e46feb3cc577478b127936e739dd08"],["/pinballscorer/assets/icons/favicon-16x16.png","d712b605ed58419c7e6d4ab885d147b7"],["/pinballscorer/assets/icons/favicon-32x32.png","2f7ce797cf8f198dedb9a9f38b7ef13b"],["/pinballscorer/assets/icons/mstile-150x150.png","ba817517b2c4e1ba1ce802c4d4fafdb4"],["/pinballscorer/assets/reset.ogg","8281309efaa5353aee5fe62a3eb711e8"],["/pinballscorer/assets/up.ogg","adb6e23ba56bf13d4398420a3e849164"],["/pinballscorer/bundle.1cdb4.js","afa9bb2e80be77084220c1825d752e83"],["/pinballscorer/favicon.ico","53ac170e970ad034a55ee15ce198708c"],["/pinballscorer/index.html","35265c49854d1b11f96e3571138c7792"],["/pinballscorer/manifest.json","181aa98510ddd72614f0d84a6b41d94f"],["/pinballscorer/route-home.chunk.2750b.js","5412ded0c0e5d8840bd92d002a2e2098"],["/pinballscorer/route-profile.chunk.4be01.js","1041c075de150e3e38f1ad1fef81a5e6"],["/pinballscorer/style.8efc1.css","62742c966166a023c49c6fa2cae04039"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=a),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,n,r){var t=new URL(e);return r&&t.pathname.match(r)||(t.search+=(t.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(n)),t.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var n=new URL(a).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,a){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],n=e[1],r=new URL(a,self.location),t=createCacheKey(r,hashParamName,n,!1);return[r.toString(),t]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!a.has(n)){var r=new Request(n,{credentials:"same-origin"});return fetch(r).then(function(a){if(!a.ok)throw new Error("Request for "+n+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(n,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!a.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),a=urlsToCacheKeys.has(n));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("index.html",self.location).toString(),a=urlsToCacheKeys.has(n)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});