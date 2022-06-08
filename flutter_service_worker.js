'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "4df630574bc70f44b848d60bc6499d1d",
".git/config": "b1ac7553d4986b4979d025792102bd44",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "0565a54b08c7371e8a5600940ed18d8f",
".git/GITGUI_MSG": "2123cc9587419766490712513e598f1d",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "85d4a9750d2af64bf2d171aa4c298d15",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d496d38539f5b70544eec7e642c76b0e",
".git/logs/refs/heads/master": "d496d38539f5b70544eec7e642c76b0e",
".git/logs/refs/remotes/Breviary/main": "8ee2351cdde6891513e590cc2bd1b890",
".git/logs/refs/remotes/Breviary/master": "bf70d3af7acdda7fca4bcf3976fb3a69",
".git/objects/0b/5ffd9bb5b1d9c0e79e87ac08f2e0c11c794099": "2db0f3ea29fb4b61474bf2176488d89f",
".git/objects/0b/ee0086d05b7f84990d59d3746cf4f91c26c596": "edbbe6aedc40abdcb85dbbfa74314d47",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/f207ea19cf573ffc1fcc88666c123605ab0f11": "76ef7898fe0f635e099390ed89447553",
".git/objects/1a/c323913757f2888d116ebe6404516034ab7d4e": "fb1b268395768028495e8f485f641b10",
".git/objects/1d/54b5d6426d4f44d81153c7ce2c16681ded4d9d": "743dcb35ca2397108412c0ec148c611a",
".git/objects/20/1138c34fd53d78ea06370c8180f52fea8db1ad": "dce7680b497887ddb21e18d32e50bbfe",
".git/objects/24/9dc0947c583061f4f2bcddcf45423a83fa5eb5": "fd5e5f3a81b28ef910c39acd8b1e84ae",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/27/bae5d78766bb5b79608d15dcc47ad2d4921813": "c93e313c8e6654820f0b4db2c62984aa",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/4154efb218eb1986da97a71881ed76123c2513": "99d8a5c96d08242733f7dda03a6efe12",
".git/objects/30/706fb34f48a560ae2f4738f4be512ef042a6cc": "dced2932ff1005c77252203e866db7dc",
".git/objects/30/8281864cf7aaef1aa22f96f7b35ae1a9e0b6d8": "a51b1c22fb2106f53da3314dabda82fd",
".git/objects/30/8b5dfc8d07f2be08f104aee27e7981c4b5c9ef": "981f88d0d9f5611ecb3b0a707421b2bb",
".git/objects/35/c705bb94da4639d0ad22d9e7001b82bdfb16bf": "08a147803aea0b1f18e01b79b00a16a6",
".git/objects/36/a321ac5af23c86cc4dec554e531415211583bb": "d05f2332ae1ed413353b8e8ed18a308f",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3e/f5b2e8f3e72c6534efa38997a52d2e05974f8f": "8385383bef165a1fef3408029ee93bce",
".git/objects/46/3bd70bdd04ebaa936b060d9a8ffd5b1510ac5e": "65400fa8b85b2bac76a58c478cb5a32c",
".git/objects/49/66842d91b302491e6696e644f163ec569b29c3": "6c07915663d93714ce17480ab587135d",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4d/5000cb2c6fd37645bbb73d1e336ffff071d4a3": "c576963e38dc8df904b59ec2c78a4245",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/5b/3e82680c617d7b9c5467006bd81e75735a7906": "620d11de76bd43d57ee541ab06ec9388",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/7b/95de9d3739f7beccca45b9ed715f1deecfca22": "a2aad624848cdf67f03f442f423d4355",
".git/objects/80/c7984f80f346fd71fb392f32b1cc5157489423": "7691deeda37032e5a446ca1a302e6bd5",
".git/objects/80/f1dd6e449bd13e61b42929f9f8ad0fff726aff": "429a2a0453d139a1cd47b6232a10d5c4",
".git/objects/81/b6f221b83dd0eef1c4687a3a973043983c35e2": "45d159a253c27227f7e752bfab869c6c",
".git/objects/84/ba67296cc1ebafbd1f22484a922de5e864d31d": "021b29d0c2c32959e476e30af595708a",
".git/objects/89/8c454fb6fe50c7f05cdc2db89df05001d7789a": "f59660eb83869db55bb29a29b3834420",
".git/objects/8d/2b950a30728db8967ec8cabb0a77ae2951863f": "4d032bc606c0c01b31b98e60e6b3dd52",
".git/objects/90/729f9b38a48bd2d30d58d8ab05b1da8417ead0": "949aed78093f2f2848b621d3f2bb8961",
".git/objects/92/495ff79b0c40ffb47c9f7383e5f010d8a2d4e5": "faff9f589289c4999101cb4f59bc2bfe",
".git/objects/95/b41919dde1dc1a78b603db9a3fbfea05bdfd34": "4895121c81d945d34e170f80eca9345d",
".git/objects/96/89ea151b67b36d95e12b209cfa1d78487a8db7": "3cc735a76769ac8cb0fcee2777c1906b",
".git/objects/a0/a733444ea38fe48b5739cf2b15a82a9a500f76": "270499cc8a0c72a5ec9863d89b3b1c60",
".git/objects/a4/5226fc973207ca772637a045a48fe127eae8c8": "a58145a2fe6a58265540633215030cc4",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/b3/012e654bab1fb51568917b7d733ee7d1a6c056": "d3e0464ebaff1ccb20e6860ac596fadd",
".git/objects/c5/ed2856e7bda0e1c10bb90100907173ba2ddb37": "5ce383ff69aa7bdf715a69fa6c56a7e3",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d0/85368706190031c021a66213f574f62f7d71b0": "a4d798141222fb56854c9f4d092b1e48",
".git/objects/d8/d750299ece40efbaa772bf9102b3b955894088": "b8294383754189a0c9f222ff13457f5b",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/ae8fc002b95a821d5cafb52af51832094b8a18": "03c61f9766de1427f234f34d957ad11c",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/f5/2d6c06053cab709de0e369eecd39ff67ac607b": "d5305734dca404f410724cbffc6220e0",
".git/objects/pack/pack-ef9ae05ad70bca49d32169a265a594ba2d38ef97.idx": "a0eae3ae03168201c24b307a41ab81b9",
".git/objects/pack/pack-ef9ae05ad70bca49d32169a265a594ba2d38ef97.pack": "44d9ab52fb7f2a91b6728549f5e1f463",
".git/ORIG_HEAD": "a9c2e28a7495907baaf9b45ea8b9f20d",
".git/refs/heads/master": "a86d07f6548f776f62a224767d6c24a7",
".git/refs/remotes/Breviary/main": "e0232f730762da0cb84a77fd8f68374b",
".git/refs/remotes/Breviary/master": "a86d07f6548f776f62a224767d6c24a7",
".git/sourcetreeconfig.json": "5f696da4d0217c539be9dba93582d646",
"assets/AssetManifest.json": "a182d1f92d785bf27af8ceedd1ae22a1",
"assets/assets/fullCalendar.xlsx": "887b9393115e227b1acc711253e10737",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "2f4e6b543129c078b03d3de15d4489b6",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "e6a47b6fc03e9c0d03a72ff2b00b8014",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "35171a9050f401d9d99af6df81d7a451",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "6452c22e0f06199183c9fa3d434bb38b",
"icons/Icon-512.png": "e7e09d25f3318b711e457c5517748df3",
"icons/Icon-maskable-192.png": "1ab00c9b9d034448c3ff31deb177d836",
"icons/Icon-maskable-512.png": "590a5051d71d89039de4b109251788be",
"index.html": "1f526163a84573db415c08463809e4b1",
"/": "1f526163a84573db415c08463809e4b1",
"main.dart.js": "97dca2d761f56664cc815f81d808d32c",
"manifest.json": "5377612ecc8d9189c26956cda9b447e9",
"splash/lamb.jpg": "abdc0651a3554e4ea4ea7d95ccbdb3ef",
"splash/splash.js": "c6a271349a0cd249bdb6d3c4d12f5dcf",
"splash/style.css": "8327a119a599f3bd070470049ad2e7e5",
"splash/styles.css": "520e7df1c7dec2533af3d94486203637",
"version.json": "4fcafdddb93ddc53c2103073e7596acb"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
