try{self["workbox:core:6.4.1"]&&_()}catch(e){}const e=(e,...s)=>{let r=e;return s.length>0&&(r+=` :: ${JSON.stringify(s)}`),r};class s extends Error{constructor(s,r){super(e(s,r)),this.name=s,this.details=r}}try{self["workbox:routing:6.4.1"]&&_()}catch(e){}const r=e=>e&&"object"==typeof e?e:{handle:e};class a{constructor(e,s,a="GET"){this.handler=r(s),this.match=e,this.method=a}setCatchHandler(e){this.catchHandler=r(e)}}class c extends a{constructor(e,s,r){super((({url:s})=>{const r=e.exec(s.href);if(r&&(s.origin===location.origin||0===r.index))return r.slice(1)}),s,r)}}class i{constructor(){this.i=new Map,this.t=new Map}get routes(){return this.i}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:s}=e,r=this.handleRequest({request:s,event:e});r&&e.respondWith(r)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:s}=e.data,r=Promise.all(s.urlsToCache.map((s=>{"string"==typeof s&&(s=[s]);const r=new Request(...s);return this.handleRequest({request:r,event:e})})));e.waitUntil(r),e.ports&&e.ports[0]&&r.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:s}){const r=new URL(e.url,location.href);if(!r.protocol.startsWith("http"))return;const a=r.origin===location.origin,{params:c,route:i}=this.findMatchingRoute({event:s,request:e,sameOrigin:a,url:r});let n=i&&i.handler;const t=e.method;if(!n&&this.t.has(t)&&(n=this.t.get(t)),!n)return;let o;try{o=n.handle({url:r,request:e,event:s,params:c})}catch(e){o=Promise.reject(e)}const f=i&&i.catchHandler;return o instanceof Promise&&(this.o||f)&&(o=o.catch((async a=>{if(f)try{return await f.handle({url:r,request:e,event:s,params:c})}catch(e){e instanceof Error&&(a=e)}if(this.o)return this.o.handle({url:r,request:e,event:s});throw a}))),o}findMatchingRoute({url:e,sameOrigin:s,request:r,event:a}){const c=this.i.get(r.method)||[];for(const i of c){let c;const n=i.match({url:e,sameOrigin:s,request:r,event:a});if(n)return c=n,(Array.isArray(c)&&0===c.length||n.constructor===Object&&0===Object.keys(n).length||"boolean"==typeof n)&&(c=void 0),{route:i,params:c}}return{}}setDefaultHandler(e,s="GET"){this.t.set(s,r(e))}setCatchHandler(e){this.o=r(e)}registerRoute(e){this.i.has(e.method)||this.i.set(e.method,[]),this.i.get(e.method).push(e)}unregisterRoute(e){if(!this.i.has(e.method))throw new s("unregister-route-but-not-found-with-method",{method:e.method});const r=this.i.get(e.method).indexOf(e);if(!(r>-1))throw new s("unregister-route-route-not-registered");this.i.get(e.method).splice(r,1)}}let n;const t=()=>(n||(n=new i,n.addFetchListener(),n.addCacheListener()),n);function o(e,r,i){let n;if("string"==typeof e){const s=new URL(e,location.href);n=new a((({url:e})=>e.href===s.href),r,i)}else if(e instanceof RegExp)n=new c(e,r,i);else if("function"==typeof e)n=new a(e,r,i);else{if(!(e instanceof a))throw new s("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});n=e}return t().registerRoute(n),n}try{self["workbox:strategies:6.4.1"]&&_()}catch(e){}const f={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null},d={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},g=e=>[d.prefix,e,d.suffix].filter((e=>e&&e.length>0)).join("-"),b=e=>{(e=>{for(const s of Object.keys(d))e(s)})((s=>{"string"==typeof e[s]&&(d[s]=e[s])}))},l=e=>e||g(d.precache),h=e=>e||g(d.runtime);function v(e,s){const r=new URL(e);for(const e of s)r.searchParams.delete(e);return r.href}class u{constructor(){this.promise=new Promise(((e,s)=>{this.resolve=e,this.reject=s}))}}const w=new Set;function p(e){return"string"==typeof e?new Request(e):e}class y{constructor(e,s){this.g={},Object.assign(this,s),this.event=s.event,this.l=e,this.h=new u,this.v=[],this.u=[...e.plugins],this.p=new Map;for(const e of this.u)this.p.set(e,{});this.event.waitUntil(this.h.promise)}async fetch(e){const{event:r}=this;let a=p(e);if("navigate"===a.mode&&r instanceof FetchEvent&&r.preloadResponse){const e=await r.preloadResponse;if(e)return e}const c=this.hasCallback("fetchDidFail")?a.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))a=await e({request:a.clone(),event:r})}catch(e){if(e instanceof Error)throw new s("plugin-error-request-will-fetch",{thrownErrorMessage:e.message})}const i=a.clone();try{let e;e=await fetch(a,"navigate"===a.mode?void 0:this.l.fetchOptions);for(const s of this.iterateCallbacks("fetchDidSucceed"))e=await s({event:r,request:i,response:e});return e}catch(e){throw c&&await this.runCallbacks("fetchDidFail",{error:e,event:r,originalRequest:c.clone(),request:i.clone()}),e}}async fetchAndCachePut(e){const s=await this.fetch(e),r=s.clone();return this.waitUntil(this.cachePut(e,r)),s}async cacheMatch(e){const s=p(e);let r;const{cacheName:a,matchOptions:c}=this.l,i=await this.getCacheKey(s,"read"),n=Object.assign(Object.assign({},c),{cacheName:a});r=await caches.match(i,n);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))r=await e({cacheName:a,matchOptions:c,cachedResponse:r,request:i,event:this.event})||void 0;return r}async cachePut(e,r){const a=p(e);var c;await(c=0,new Promise((e=>setTimeout(e,c))));const i=await this.getCacheKey(a,"write");if(!r)throw new s("cache-put-with-no-response",{url:(n=i.url,new URL(String(n),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var n;const t=await this.m(r);if(!t)return!1;const{cacheName:o,matchOptions:f}=this.l,d=await self.caches.open(o),g=this.hasCallback("cacheDidUpdate"),b=g?await async function(e,s,r,a){const c=v(s.url,r);if(s.url===c)return e.match(s,a);const i=Object.assign(Object.assign({},a),{ignoreSearch:!0}),n=await e.keys(s,i);for(const s of n)if(c===v(s.url,r))return e.match(s,a)}(d,i.clone(),["__WB_REVISION__"],f):null;try{await d.put(i,g?t.clone():t)}catch(e){if(e instanceof Error)throw"QuotaExceededError"===e.name&&await async function(){for(const e of w)await e()}(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:o,oldResponse:b,newResponse:t.clone(),request:i,event:this.event});return!0}async getCacheKey(e,s){const r=`${e.url} | ${s}`;if(!this.g[r]){let a=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))a=p(await e({mode:s,request:a,event:this.event,params:this.params}));this.g[r]=a}return this.g[r]}hasCallback(e){for(const s of this.l.plugins)if(e in s)return!0;return!1}async runCallbacks(e,s){for(const r of this.iterateCallbacks(e))await r(s)}*iterateCallbacks(e){for(const s of this.l.plugins)if("function"==typeof s[e]){const r=this.p.get(s),a=a=>{const c=Object.assign(Object.assign({},a),{state:r});return s[e](c)};yield a}}waitUntil(e){return this.v.push(e),e}async doneWaiting(){let e;for(;e=this.v.shift();)await e}destroy(){this.h.resolve(null)}async m(e){let s=e,r=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(s=await e({request:this.request,response:s,event:this.event})||void 0,r=!0,!s)break;return r||s&&200!==s.status&&(s=void 0),s}}class m{constructor(e={}){this.cacheName=h(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[s]=this.handleAll(e);return s}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const s=e.event,r="string"==typeof e.request?new Request(e.request):e.request,a="params"in e?e.params:void 0,c=new y(this,{event:s,request:r,params:a}),i=this.R(c,r,s);return[i,this.q(i,c,r,s)]}async R(e,r,a){let c;await e.runCallbacks("handlerWillStart",{event:a,request:r});try{if(c=await this.C(r,e),!c||"error"===c.type)throw new s("no-response",{url:r.url})}catch(s){if(s instanceof Error)for(const i of e.iterateCallbacks("handlerDidError"))if(c=await i({error:s,event:a,request:r}),c)break;if(!c)throw s}for(const s of e.iterateCallbacks("handlerWillRespond"))c=await s({event:a,request:r,response:c});return c}async q(e,s,r,a){let c,i;try{c=await e}catch(i){}try{await s.runCallbacks("handlerDidRespond",{event:a,request:r,response:c}),await s.doneWaiting()}catch(e){e instanceof Error&&(i=e)}if(await s.runCallbacks("handlerDidComplete",{event:a,request:r,response:c,error:i}),s.destroy(),i)throw i}}function R(e,s){const r=s();return e.waitUntil(r),r}try{self["workbox:precaching:6.4.1"]&&_()}catch(e){}function q(e){if(!e)throw new s("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const s=new URL(e,location.href);return{cacheKey:s.href,url:s.href}}const{revision:r,url:a}=e;if(!a)throw new s("add-to-cache-list-unexpected-type",{entry:e});if(!r){const e=new URL(a,location.href);return{cacheKey:e.href,url:e.href}}const c=new URL(a,location.href),i=new URL(a,location.href);return c.searchParams.set("__WB_REVISION__",r),{cacheKey:c.href,url:i.href}}class C{constructor(){this.updatedURLs=[],this.notUpdatedURLs=[],this.handlerWillStart=async({request:e,state:s})=>{s&&(s.originalRequest=e)},this.cachedResponseWillBeUsed=async({event:e,state:s,cachedResponse:r})=>{if("install"===e.type&&s&&s.originalRequest&&s.originalRequest instanceof Request){const e=s.originalRequest.url;r?this.notUpdatedURLs.push(e):this.updatedURLs.push(e)}return r}}}class U{constructor({precacheController:e}){this.cacheKeyWillBeUsed=async({request:e,params:s})=>{const r=(null==s?void 0:s.cacheKey)||this.U.getCacheKeyForURL(e.url);return r?new Request(r,{headers:e.headers}):e},this.U=e}}let P,k;async function L(e,r){let a=null;if(e.url){a=new URL(e.url).origin}if(a!==self.location.origin)throw new s("cross-origin-copy-response",{origin:a});const c=e.clone(),i={headers:new Headers(c.headers),status:c.status,statusText:c.statusText},n=r?r(i):i,t=function(){if(void 0===P){const e=new Response("");if("body"in e)try{new Response(e.body),P=!0}catch(e){P=!1}P=!1}return P}()?c.body:await c.blob();return new Response(t,n)}class E extends m{constructor(e={}){e.cacheName=l(e.cacheName),super(e),this.P=!1!==e.fallbackToNetwork,this.plugins.push(E.copyRedirectedCacheableResponsesPlugin)}async C(e,s){const r=await s.cacheMatch(e);return r||(s.event&&"install"===s.event.type?await this.k(e,s):await this.L(e,s))}async L(e,r){let a;const c=r.params||{};if(!this.P)throw new s("missing-precache-entry",{cacheName:this.cacheName,url:e.url});{const s=c.integrity,i=e.integrity,n=!i||i===s;a=await r.fetch(new Request(e,{integrity:i||s})),s&&n&&(this.S(),await r.cachePut(e,a.clone()))}return a}async k(e,r){this.S();const a=await r.fetch(e);if(!await r.cachePut(e,a.clone()))throw new s("bad-precaching-response",{url:e.url,status:a.status});return a}S(){let e=null,s=0;for(const[r,a]of this.plugins.entries())a!==E.copyRedirectedCacheableResponsesPlugin&&(a===E.defaultPrecacheCacheabilityPlugin&&(e=r),a.cacheWillUpdate&&s++);0===s?this.plugins.push(E.defaultPrecacheCacheabilityPlugin):s>1&&null!==e&&this.plugins.splice(e,1)}}E.defaultPrecacheCacheabilityPlugin={cacheWillUpdate:async({response:e})=>!e||e.status>=400?null:e},E.copyRedirectedCacheableResponsesPlugin={cacheWillUpdate:async({response:e})=>e.redirected?await L(e):e};class S{constructor({cacheName:e,plugins:s=[],fallbackToNetwork:r=!0}={}){this._=new Map,this.O=new Map,this.H=new Map,this.l=new E({cacheName:l(e),plugins:[...s,new U({precacheController:this})],fallbackToNetwork:r}),this.install=this.install.bind(this),this.activate=this.activate.bind(this)}get strategy(){return this.l}precache(e){this.addToCacheList(e),this.W||(self.addEventListener("install",this.install),self.addEventListener("activate",this.activate),this.W=!0)}addToCacheList(e){const r=[];for(const a of e){"string"==typeof a?r.push(a):a&&void 0===a.revision&&r.push(a.url);const{cacheKey:e,url:c}=q(a),i="string"!=typeof a&&a.revision?"reload":"default";if(this._.has(c)&&this._.get(c)!==e)throw new s("add-to-cache-list-conflicting-entries",{firstEntry:this._.get(c),secondEntry:e});if("string"!=typeof a&&a.integrity){if(this.H.has(e)&&this.H.get(e)!==a.integrity)throw new s("add-to-cache-list-conflicting-integrities",{url:c});this.H.set(e,a.integrity)}if(this._.set(c,e),this.O.set(c,i),r.length>0){const e=`Workbox is precaching URLs without revision info: ${r.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}install(e){return R(e,(async()=>{const s=new C;this.strategy.plugins.push(s);for(const[s,r]of this._){const a=this.H.get(r),c=this.O.get(s),i=new Request(s,{integrity:a,cache:c,credentials:"same-origin"});await Promise.all(this.strategy.handleAll({params:{cacheKey:r},request:i,event:e}))}const{updatedURLs:r,notUpdatedURLs:a}=s;return{updatedURLs:r,notUpdatedURLs:a}}))}activate(e){return R(e,(async()=>{const e=await self.caches.open(this.strategy.cacheName),s=await e.keys(),r=new Set(this._.values()),a=[];for(const c of s)r.has(c.url)||(await e.delete(c),a.push(c.url));return{deletedURLs:a}}))}getURLsToCacheKeys(){return this._}getCachedURLs(){return[...this._.keys()]}getCacheKeyForURL(e){const s=new URL(e,location.href);return this._.get(s.href)}getIntegrityForCacheKey(e){return this.H.get(e)}async matchPrecache(e){const s=e instanceof Request?e.url:e,r=this.getCacheKeyForURL(s);if(r){return(await self.caches.open(this.strategy.cacheName)).match(r)}}createHandlerBoundToURL(e){const r=this.getCacheKeyForURL(e);if(!r)throw new s("non-precached-url",{url:e});return s=>(s.request=new Request(e),s.params=Object.assign({cacheKey:r},s.params),this.strategy.handle(s))}}const O=()=>(k||(k=new S),k);class x extends a{constructor(e,s){super((({request:r})=>{const a=e.getURLsToCacheKeys();for(const c of function*(e,{ignoreURLParametersMatching:s=[/^utm_/,/^fbclid$/],directoryIndex:r="index.html",cleanURLs:a=!0,urlManipulation:c}={}){const i=new URL(e,location.href);i.hash="",yield i.href;const n=function(e,s=[]){for(const r of[...e.searchParams.keys()])s.some((e=>e.test(r)))&&e.searchParams.delete(r);return e}(i,s);if(yield n.href,r&&n.pathname.endsWith("/")){const e=new URL(n.href);e.pathname+=r,yield e.href}if(a){const e=new URL(n.href);e.pathname+=".html",yield e.href}if(c){const e=c({url:i});for(const s of e)yield s.href}}(r.url,s)){const s=a.get(c);if(s){return{cacheKey:s,integrity:e.getIntegrityForCacheKey(s)}}}}),e.strategy)}}var H;b({prefix:"armoria-charges"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),H={},function(e){O().precache(e)}([{url:"charges/agnusDei.svg",revision:"d56f196f8c8e940d15ba874c788adf92"},{url:"charges/anchor.svg",revision:"8f35b5a26b8dd74682950c4a69cf945d"},{url:"charges/angel.svg",revision:"7c29ff95fd4f3dfdf051b7c3c8e26385"},{url:"charges/annulet.svg",revision:"60b2199b6dbf4b25324fccf4ea4abd59"},{url:"charges/anvil.svg",revision:"02f67d46f7e18048b103f8bfc6178d1f"},{url:"charges/apple.svg",revision:"efedc2088a763166fe82cce098a2feed"},{url:"charges/arbalest.svg",revision:"110d714f07cc5e13dd63ff909f7f1233"},{url:"charges/archer.svg",revision:"ea295aa0eb1230f1d7585975b3b2a59c"},{url:"charges/armillarySphere.svg",revision:"5840783cd10b711075c4fad289e65fc3"},{url:"charges/arrow.svg",revision:"79ab404dccda5ceec07aa7b38d18e52c"},{url:"charges/arrowsSheaf.svg",revision:"628ff23c0e493ae14601f381a340e72b"},{url:"charges/attire.svg",revision:"60770f0d21092a1e8f5f5f7f00f4411e"},{url:"charges/axe.svg",revision:"0d5f58425980b8c5124f8e4447e49579"},{url:"charges/badgerStatant.svg",revision:"8b8cd4f72ed898712cdb7474e4098050"},{url:"charges/banner.svg",revision:"b177ad96d786f6f9d14aa022345cf9b2"},{url:"charges/basilisk.svg",revision:"fddb673073401ae2e06277f5f57a60a9"},{url:"charges/bearPassant.svg",revision:"49787261f90e0b00e08b2bf3ad69c787"},{url:"charges/bearRampant.svg",revision:"25552de82f16ba5c3ae23e77f7fe4661"},{url:"charges/bee.svg",revision:"ad3110ac1a1c8950fe0a9d134719604b"},{url:"charges/bell.svg",revision:"7964ac66a3e09d65c496b574f17054d1"},{url:"charges/billet.svg",revision:"6075324eccc5b5bb69b26457c82b67f4"},{url:"charges/boarHeadErased.svg",revision:"26f59ca3f95c314be5e5457ae1c3ccec"},{url:"charges/boarRampant.svg",revision:"cee489cd6e815db58eddd42a4e1303c1"},{url:"charges/boat.svg",revision:"dce34117e66c47ff62ea7069c173195e"},{url:"charges/boat2.svg",revision:"7b72c5fca6aa07a475eaa532ab5682f4"},{url:"charges/bookClosed.svg",revision:"4c379ccde39e692167ae78ee55b0030d"},{url:"charges/bookOpen.svg",revision:"f9d04332503a91e12d12c0e541beb483"},{url:"charges/bow.svg",revision:"38698f57b4e1b513f1d8695733fbd8e0"},{url:"charges/bowWithArrow.svg",revision:"1d36776a0ee951fe36e797b6c8520966"},{url:"charges/bridge.svg",revision:"3454be645836fa125fc1f362bb6b37af"},{url:"charges/bucket.svg",revision:"1bd062f63bfb59973135771f25441602"},{url:"charges/buckle.svg",revision:"169bf884e73eba2206716ac66d290e2e"},{url:"charges/bugleHorn.svg",revision:"cadccbad8fbcb0f56804602749247c83"},{url:"charges/bugleHorn2.svg",revision:"293e60f383d12230d3a54231660dbbe5"},{url:"charges/bullHeadCaboshed.svg",revision:"1782fa1038427358d96f5f31756d574b"},{url:"charges/bullPassant.svg",revision:"7f0b350c67d747643937d1c222cd1208"},{url:"charges/butterfly.svg",revision:"6e6dd077bf19fe51e16400e0999065ea"},{url:"charges/camel.svg",revision:"cf497aecf6756eee524b43f2adea98c8"},{url:"charges/cancer.svg",revision:"8c884ff072a792e76428a6bd331cf123"},{url:"charges/cannon.svg",revision:"744b9e6774a1248f05f487a62bcf084a"},{url:"charges/caravel.svg",revision:"21d03f4e2ee8dd8e70d9f4c911b14e53"},{url:"charges/carreau.svg",revision:"c1f7eadf64562c77abbe3aa48acc606f"},{url:"charges/castle.svg",revision:"8575110acce4bd2641bf5b67e0f5f6ec"},{url:"charges/catPassantGuardant.svg",revision:"d63553c0e078c8bd84a44cef0aee100e"},{url:"charges/cavalier.svg",revision:"83c035ebcbf80fb0a66e9fe4aa119073"},{url:"charges/chain.svg",revision:"d7abac34f4cfac0820549ab0dafce3f8"},{url:"charges/chalice.svg",revision:"c9c435c7840eb4665adcf4263aaa3093"},{url:"charges/cinquefoil.svg",revision:"ad3c4f8b8c12009b7eac4443364b749f"},{url:"charges/cock.svg",revision:"b983d55504d074a69abf788085c79dac"},{url:"charges/column.svg",revision:"5da5172d8489088312ddf0efa69bddcc"},{url:"charges/compassRose.svg",revision:"10dcc9a098ae0347bcf00e60db813ef6"},{url:"charges/cowHorns.svg",revision:"c9776c85fe53fe80b6b5483615b2bfc8"},{url:"charges/cowStatant.svg",revision:"dbbff2d42eb267bc1fd89e59e1917963"},{url:"charges/crescent.svg",revision:"eaeeebced72c1fc1f63256070bedec67"},{url:"charges/crocodile.svg",revision:"b853d5a7fa5d95ac1aa5ed104f2bc13c"},{url:"charges/crosier.svg",revision:"e858eaf3a4eebc4480282451fcd7f478"},{url:"charges/crossAnkh.svg",revision:"4cf9e70dee54a466e70c46530e42b902"},{url:"charges/crossArrowed.svg",revision:"477c882b3502fe332bb7e820171c6ee9"},{url:"charges/crossAvellane.svg",revision:"2f7a47ddc7788d95e3e488985200d50e"},{url:"charges/crossBiparted.svg",revision:"ecb8adddb031df7e55521eec8cf5d34e"},{url:"charges/crossBottony.svg",revision:"93b40cb28b1132920b4171c2f957a20b"},{url:"charges/crossBurgundy.svg",revision:"c3a1c54858586a8dd099a6e874b4782d"},{url:"charges/crossCalvary.svg",revision:"e9b01e85582584cf8bc5828a40e4302c"},{url:"charges/crossCarolingian.svg",revision:"e31316419758e4a3f8349facec6982fc"},{url:"charges/crossCeltic.svg",revision:"d8f18487ea9e776274ac7ed3ce13f42b"},{url:"charges/crossCeltic2.svg",revision:"73ef09de83d0ce5b02e9689bd3e5aac6"},{url:"charges/crossCercelee.svg",revision:"a1f2a9f17726d3ee0d9536932e9a3e95"},{url:"charges/crossClechy.svg",revision:"675b6a2205c955718aaa713aa94ce357"},{url:"charges/crossDouble.svg",revision:"258babe91c05ed934ce52de95f94fe08"},{url:"charges/crossErminee.svg",revision:"656ac48e0cf4e4eafd373e722e92b148"},{url:"charges/crossFitchy.svg",revision:"40e26f85f7d2af26d525fb3a7bdc7c06"},{url:"charges/crossFleury.svg",revision:"153aac757467e6619cffbbaa0f8db4a1"},{url:"charges/crossFormee.svg",revision:"ad821adcb40f6bbed283e9cd59ad948d"},{url:"charges/crossFormee2.svg",revision:"3e4199512d81aa3c2d5e46539aa7da3b"},{url:"charges/crossFourchy.svg",revision:"0cfb8c850e93d1c2a17967f50ea87c6b"},{url:"charges/crossGamma.svg",revision:"cdf04b586fe5b8858e1e9cd7cf639c9f"},{url:"charges/crossHummetty.svg",revision:"5c33334dea486f30a8b508ef07bb47a0"},{url:"charges/crossJerusalem.svg",revision:"9591b00c54d9ec40b137e7a4afc7ba5e"},{url:"charges/crossLatin.svg",revision:"5c1ae6bbd80169fbcfba6b817a956ad7"},{url:"charges/crosslet.svg",revision:"d0947e5ff1d9c6249a8f18359043211d"},{url:"charges/crossMaltese.svg",revision:"1b860515a8f30d34a3ef47178b937c5a"},{url:"charges/crossMoline.svg",revision:"57a0f211fc0613aadf79ee599e87a58d"},{url:"charges/crossOccitan.svg",revision:"3ca460ae8c030497fbbc177871587fa3"},{url:"charges/crossOrthodox.svg",revision:"53c208a874c8ac0404b9b9f055c40697"},{url:"charges/crossPatonce.svg",revision:"e18a4655f52e84dcdf7648a4c499a61e"},{url:"charges/crossPatriarchal.svg",revision:"f49b59a59638776f1e17d7383b688588"},{url:"charges/crossPattee.svg",revision:"69a959751f5ae2e19173f850339cec13"},{url:"charges/crossPatteeAlisee.svg",revision:"9e0834e50a6f35485262e4d32c06bc5b"},{url:"charges/crossPommy.svg",revision:"8c555e2e1871a0d70307f8495090dbb2"},{url:"charges/crossPotent.svg",revision:"06eeb39d7819df7ce038c350eb579ecc"},{url:"charges/crossSaltire.svg",revision:"0e71e22f01cbb1ca35c2aa6af7325f3e"},{url:"charges/crossSantiago.svg",revision:"f0b46d5ecba75fa0b05a8e32222d6555"},{url:"charges/crossTau.svg",revision:"d6be4bd8aa7095f9cd4793581e5d2049"},{url:"charges/crossTemplar.svg",revision:"4e3fe21b8e53d6435c6e4ebe2b808397"},{url:"charges/crossTriquetra.svg",revision:"382d468e4ebd705096344a7460f74090"},{url:"charges/crossVoided.svg",revision:"5b2b7217715a2489d8538d059d6cbdb3"},{url:"charges/crown.svg",revision:"732d558e5396e06cab832cc3c381c198"},{url:"charges/crown2.svg",revision:"68599ac155586db2041720a9bd6e79e7"},{url:"charges/deerHeadCaboshed.svg",revision:"93e98baee48ab7239b265a22f2a1a200"},{url:"charges/delf.svg",revision:"fd12cec26d197aa17c74e7c9a3cfaabc"},{url:"charges/dolphin.svg",revision:"7946459992a9c6915baec2e812d92c68"},{url:"charges/donkeyHeadCaboshed.svg",revision:"deba78c3321e12a155b55b7950b1daa8"},{url:"charges/dove.svg",revision:"300e1045783da785ce6cfb233f169d26"},{url:"charges/doveDisplayed.svg",revision:"aae0fce8b28d401c4278b3655feeb1d9"},{url:"charges/dragonfly.svg",revision:"418f328af11d347a23d8aa6b090762b2"},{url:"charges/dragonPassant.svg",revision:"7d71130367c273883040b55d191ad299"},{url:"charges/dragonRampant.svg",revision:"ca4b2d9b391b2120aeff9ac4fdf1332e"},{url:"charges/drakkar.svg",revision:"697fe1e63849f2175c1170be05606327"},{url:"charges/drawingCompass.svg",revision:"ae6b31d67ce79b2ad5f4be207ea73881"},{url:"charges/drum.svg",revision:"02ba139da8a4162845250e3912c20316"},{url:"charges/duck.svg",revision:"27be31f853a5cb1670567d14dbd5271f"},{url:"charges/eagle.svg",revision:"33c407ee4dc5cf9d79ee93b2ed23d7b7"},{url:"charges/eagleTwoHeads.svg",revision:"fedae7377f0257e2bcd215eeebbed300"},{url:"charges/elephant.svg",revision:"7502d659d015211d3cb5b23fa3066ee2"},{url:"charges/elephantHeadErased.svg",revision:"0b1e8c064e9b5d2fb047d8582846e532"},{url:"charges/escallop.svg",revision:"36f8f2e7f8abca974053165cf85811f1"},{url:"charges/estoile.svg",revision:"08affb2242d8b1351d3e31ad43ae75f2"},{url:"charges/falchion.svg",revision:"707e546889156ea43d16cd0a0bbeab38"},{url:"charges/falcon.svg",revision:"71be2a7e0f5075ba729cc693d8eaffea"},{url:"charges/fan.svg",revision:"d39b1f7be4fe015d757616f187d5bd91"},{url:"charges/fasces.svg",revision:"b1bec441f50cc9b7f403baebeb620e39"},{url:"charges/feather.svg",revision:"8d37e255debd6471cda86a7ccdd9fa7c"},{url:"charges/fleurDeLis.svg",revision:"b475d00b79cda89d42e1992dd9cf1183"},{url:"charges/fly.svg",revision:"53ae3370c423bcf278b2b060babb8693"},{url:"charges/foot.svg",revision:"e187f287ad2bc5388ccf2aa4b9529120"},{url:"charges/fountain.svg",revision:"1b7cc86f9730d83ce7fbb7e19287faa1"},{url:"charges/frog.svg",revision:"ea3dab3e7867653e094f586147ea4860"},{url:"charges/fusil.svg",revision:"1f166f0392cc0f00be9906e6ef59e69c"},{url:"charges/garb.svg",revision:"9ed324657e7b412cea6c51b65b40718c"},{url:"charges/gauntlet.svg",revision:"eb08623f7d44b857522c8a02f8278fe4"},{url:"charges/goat.svg",revision:"b7186a18319c69d615219437aeba74cc"},{url:"charges/goutte.svg",revision:"43178240051cf896b0551fac75571d08"},{url:"charges/grapeBunch.svg",revision:"0bb5af2e64ef2e9ebcb4ac3c0d71e344"},{url:"charges/greyhoundCourant.svg",revision:"460957a1ebce697c2f826a7c0fb45dfc"},{url:"charges/greyhoundRampant.svg",revision:"ca5230d8865cb76f0223305d0ea2d7bf"},{url:"charges/greyhoundSejant.svg",revision:"a79760051bd9e60f628e102922db7803"},{url:"charges/griffinPassant.svg",revision:"70a28e048defa50687781ae26f3d3bdd"},{url:"charges/griffinRampant.svg",revision:"88c1d76669da94e5a4b784398e228c21"},{url:"charges/hand.svg",revision:"6bb89504e5c893c4a7e122b6ef2d97ab"},{url:"charges/harp.svg",revision:"a9ed5054b4d99b850e913828ccc44627"},{url:"charges/hatchet.svg",revision:"b61f8295cf812a9b215d5cfb2539a622"},{url:"charges/head.svg",revision:"9ff370710de93d64be77514d03d28266"},{url:"charges/headWreathed.svg",revision:"d7adcaa686288e8663c36d7140ca03b7"},{url:"charges/heart.svg",revision:"2551bd08932278e8f2a33f67dba370b1"},{url:"charges/hedgehog.svg",revision:"0028b45b132b659ff0bec29997594bb7"},{url:"charges/helmet.svg",revision:"065036f263ab18eceb654793a2f4cd09"},{url:"charges/helmetCorinthian.svg",revision:"18ee0da31f2d6505f22080044719e379"},{url:"charges/helmetGreat.svg",revision:"0c89dc1be0fc38ea6e195af4b4a54ad7"},{url:"charges/heron.svg",revision:"2b377ee3bd90162ef5733d6b61280358"},{url:"charges/hindStatant.svg",revision:"20f94f8ab1b5877a1ac39db013a5d58d"},{url:"charges/horseHeadCouped.svg",revision:"7b8ba9138e095f15b057e46f8558be60"},{url:"charges/horsePassant.svg",revision:"bb2c97724272f598ed8997f028108cec"},{url:"charges/horseRampant.svg",revision:"9931c1509fd655cae4e688c6ff8d7708"},{url:"charges/horseSalient.svg",revision:"7d769af4a0953c76c0edb92d09456d45"},{url:"charges/horseshoe.svg",revision:"1ef182da98ada0cebbd8f1fcd300d06d"},{url:"charges/hourglass.svg",revision:"a323b955825710ab50374bf33207716e"},{url:"charges/key.svg",revision:"57598a511ae1016b96ecb6f1c95a33a3"},{url:"charges/ladder.svg",revision:"4c174b18e2eac48a424b9e1eb3307774"},{url:"charges/ladybird.svg",revision:"cad76592cb7bc39fbcf2e20015309327"},{url:"charges/lamb.svg",revision:"4387b9610c1629528ba59437daaa82f3"},{url:"charges/lambPassantReguardant.svg",revision:"a12b529494ab1625f2cdf32911f9a5dc"},{url:"charges/laurelWreath.svg",revision:"8bc52194531dd56bd8dce4d372ccbe61"},{url:"charges/lighthouse.svg",revision:"7c4b643645c8b86eba92169474f57c77"},{url:"charges/lionHeadCaboshed.svg",revision:"2cf6cf8ea1c44868decfb39b89320720"},{url:"charges/lionHeadErased.svg",revision:"045222718644411fa3b16ec0cfab55cf"},{url:"charges/lionPassant.svg",revision:"870f6e462d8bd395ffc9d2a6ddb77e7f"},{url:"charges/lionPassantGuardant.svg",revision:"086f126aeb6aeb68bff77499b088856a"},{url:"charges/lionRampant.svg",revision:"7f1f67ad52581c671347cc1a5ef2f78c"},{url:"charges/lionSejant.svg",revision:"2161cd66c3568452452d868dbf96e206"},{url:"charges/lizard.svg",revision:"ea168729e8f366b9a1c78bc0bac0ab3e"},{url:"charges/lochaberAxe.svg",revision:"cf0fa8f8a86619c126a40b88b8aaa31b"},{url:"charges/log.svg",revision:"fd3e36a8c06db26297a4a8a6b375418c"},{url:"charges/lozenge.svg",revision:"4e00b4165c12f55b2688eff90cf478cc"},{url:"charges/lozengeFaceted.svg",revision:"50b9575960cbf414865eb6bab04c15bd"},{url:"charges/lozengePloye.svg",revision:"f3b12988a2501f5bc8b5b65e78b7962f"},{url:"charges/lute.svg",revision:"7d2c0eec16a5747d14353ee0fd62fc8e"},{url:"charges/lymphad.svg",revision:"660063fdf1b771eed4eb7259e92d163f"},{url:"charges/lyre.svg",revision:"1adbb894af312e080cd618e501c0163b"},{url:"charges/mallet.svg",revision:"66ffe7356e592ddec67798046092a944"},{url:"charges/mantle.svg",revision:"d4e6e2780c25c103c52da5cdfcc80a3a"},{url:"charges/mapleLeaf.svg",revision:"964e992a0c209228c4f6325c00410af1"},{url:"charges/martenCourant.svg",revision:"6b0e79a596f8a646a030fd917660ed78"},{url:"charges/mascle.svg",revision:"44174648ffa8597f2c29e32ce015f63b"},{url:"charges/mastiffStatant.svg",revision:"8c6e2506de27912869a3d7f66b313fa1"},{url:"charges/mitre.svg",revision:"6797104b8dfde7a69902724ca75c0d2d"},{url:"charges/monk.svg",revision:"ce616cc8edc2d856d7a1b03117145e75"},{url:"charges/moonInCrescent.svg",revision:"3a5f6ddf6d21f001f41dfbe7ef8efb8a"},{url:"charges/mullet.svg",revision:"5548239879030971b660e2db3ab464d8"},{url:"charges/mullet10.svg",revision:"5bb4426e6842e222bc1f04aebecee851"},{url:"charges/mullet4.svg",revision:"d65979490dcefbf2c5fe5bd3e8a020e3"},{url:"charges/mullet6.svg",revision:"dd83dbf8e110c66ca5aed4be0df45d29"},{url:"charges/mullet6Faceted.svg",revision:"ba470d7d9b527ef56237ace1f6c136a8"},{url:"charges/mullet6Pierced.svg",revision:"210df42221478bdf05f26153d770b109"},{url:"charges/mullet7.svg",revision:"5e5aedc678d1e512047c1b98b28c3634"},{url:"charges/mullet8.svg",revision:"b085ecd0ce519c63d4f63c26bcea3946"},{url:"charges/mulletFaceted.svg",revision:"dd7c689c8ee58ddfbec6e6bab72332a3"},{url:"charges/mulletPierced.svg",revision:"bc0689199922a518eaa74702dad10d20"},{url:"charges/oak.svg",revision:"59ea08903a4bb844bf337f69fa455de8"},{url:"charges/orb.svg",revision:"0060ec84490c5743fd69d5fa252fb39d"},{url:"charges/owl.svg",revision:"41525b7e57acd6689d86535ac56461da"},{url:"charges/owlDisplayed.svg",revision:"47185f51b3500fc1360dee71f89d9591"},{url:"charges/palmTree.svg",revision:"8a80bb7323d9bac846a999b684b55aa1"},{url:"charges/parrot.svg",revision:"0af18ec60deb35b2750ab25c9fc48f6d"},{url:"charges/peacock.svg",revision:"b1356f6f4f7977830695559c370c35ff"},{url:"charges/peacockInPride.svg",revision:"613ede01fe5aec25f2335bdbc37d5d3d"},{url:"charges/pear.svg",revision:"dbec49697715fd38cfd2ca8b00dee3e3"},{url:"charges/pegasus.svg",revision:"c0b422603bff2cb9936659024ef7dce8"},{url:"charges/pike.svg",revision:"4e2808307cf34dd0134a233e0e3c1fdb"},{url:"charges/pineCone.svg",revision:"d5847b8ca9b718838b64582bd1fa7066"},{url:"charges/pineTree.svg",revision:"4404d4e8fb01837a3e56173693b6f69d"},{url:"charges/pique.svg",revision:"815f9678633b318c4cc5bc636704836b"},{url:"charges/plaice.svg",revision:"cb74c9b666b9ece0cf69fe03f5d6aef1"},{url:"charges/plough.svg",revision:"32b1be88ade6d3b602f746f0b5318126"},{url:"charges/porcupine.svg",revision:"f73a00e0764c264f63e91f47124adb79"},{url:"charges/pot.svg",revision:"b16e0507aeee017ecaeb03cbd98034bb"},{url:"charges/quatrefoil.svg",revision:"40fcf53f79d1d703271bd96b8c233f3b"},{url:"charges/rabbitSejant.svg",revision:"cc3320814b54cc7d359d9275aea1415b"},{url:"charges/rake.svg",revision:"3fe399acf66b5edf41f924ee81db477b"},{url:"charges/ramHeadErased.svg",revision:"e2c40cb4da89792aaee898ef7a29cf71"},{url:"charges/ramPassant.svg",revision:"2a303b2c9acdd270f0e6a949641cc024"},{url:"charges/ramsHorn.svg",revision:"964e5353f42fcc4d641fd5f323523a6c"},{url:"charges/rapier.svg",revision:"3a215164c762d4c9d64346e0ab2027be"},{url:"charges/ratRampant.svg",revision:"9d288cbd374f66b9e2602649297b731c"},{url:"charges/raven.svg",revision:"bfd9bfd52b026805f192cf9fc871fa60"},{url:"charges/rhinoceros.svg",revision:"ccea74237c37dbe2615a2fec9baf5edc"},{url:"charges/ribbon1.svg",revision:"7f5afdea68bf331c962f312c7251ce2d"},{url:"charges/ribbon2.svg",revision:"42cb00e88b854610b2e5a9530e42ef40"},{url:"charges/ribbon3.svg",revision:"570b5e5855cd57f166cab5c6580fae47"},{url:"charges/ribbon4.svg",revision:"e2452b3d98b41d9ea4d5bb5944d2b1e5"},{url:"charges/rose.svg",revision:"d63e2818372989a09273c64be876037c"},{url:"charges/roundel.svg",revision:"18ccf3422d8bbd5141577563bfc3d6ac"},{url:"charges/roundel2.svg",revision:"8669bc0ea5c6eef291f9a348567aa60b"},{url:"charges/rustre.svg",revision:"c9070b83a3a2d39f4110f4d8272d1426"},{url:"charges/sabre.svg",revision:"cadb21ecf4db95f8a6d77a70e7776201"},{url:"charges/sabre2.svg",revision:"31f30afd80c37d6495326ada565799ad"},{url:"charges/sabresCrossed.svg",revision:"a9e513c043390433660726394dd76df9"},{url:"charges/sagittarius.svg",revision:"70e18d02d7d43f0c4981299eff0ec92b"},{url:"charges/salmon.svg",revision:"55dcffa981b7b2850a9234f2c021baf2"},{url:"charges/scale.svg",revision:"40c34e1435af70aac4cfd9578f797f17"},{url:"charges/scaleImbalanced.svg",revision:"68cf100be9edc44717eed3e7248f6605"},{url:"charges/sceptre.svg",revision:"4f5905afd08f3c75a1f96d421e02e147"},{url:"charges/scissors.svg",revision:"bc39a4d080cb30a49383e1510413d143"},{url:"charges/scorpion.svg",revision:"f3a6f74fbfd218707300a79c866a8a99"},{url:"charges/scrollClosed.svg",revision:"f50b761c8b73a8f2fdd1cb79da29e699"},{url:"charges/scythe.svg",revision:"1f8122b7043795246e9a94aab11ff17e"},{url:"charges/serpent.svg",revision:"88ec048fb0566c2536b7ea0d51c7ba58"},{url:"charges/sextifoil.svg",revision:"6088b7c14dfa6c3ce0598f6d8ce6db0c"},{url:"charges/shield.svg",revision:"2cbeb0535d8449c867f25d48dbf637b5"},{url:"charges/shipWheel.svg",revision:"ffc5231be67d3ff4fb9a757da297a585"},{url:"charges/sickle.svg",revision:"ca19ac6a6e85542177306e8b14106bbc"},{url:"charges/skull.svg",revision:"e2594c8ac876ef7ce4794509e5ece573"},{url:"charges/snail.svg",revision:"8bcc53b7be76724857dc62dd1bea7ce7"},{url:"charges/snake.svg",revision:"11854dab4227fdbb033546ec79fd6e5c"},{url:"charges/snowflake.svg",revision:"f143f52dd26c54ac90f901a03b1e624e"},{url:"charges/spear.svg",revision:"08f2aa68505e7a823c49ebbdbb108191"},{url:"charges/spiral.svg",revision:"6e0aecd43a12e04b8643c7e487af158f"},{url:"charges/squirrel.svg",revision:"49868c96cfc22426e8aa6ef5d744ff99"},{url:"charges/stagPassant.svg",revision:"ef1385ab420bb23a27a5861d9cf61ff0"},{url:"charges/stagsAttires.svg",revision:"09d13c38a48b0167fc847e1807433c06"},{url:"charges/stirrup.svg",revision:"c3ca3527426c808ab6688395b3bf03bf"},{url:"charges/sun.svg",revision:"13c112565aff0702cc6b1060f7d68e14"},{url:"charges/sunInSplendour.svg",revision:"013cfef6341912d4016a3fa200d5eb3d"},{url:"charges/sunInSplendour2.svg",revision:"388900c5cc98ff39d5c49b0b86a0368b"},{url:"charges/swallow.svg",revision:"e9680fac042548f73e67a141515f1334"},{url:"charges/swan.svg",revision:"0cfc8013bffe115dc8b441860c97c9a7"},{url:"charges/swanErased.svg",revision:"c5bb151834b75072ab4455f6e04a0f5f"},{url:"charges/sword.svg",revision:"bac11c60f125137b0b3da4595d4bac94"},{url:"charges/talbotPassant.svg",revision:"f055256d935a61205388854fa10fc291"},{url:"charges/talbotSejant.svg",revision:"7dafdc3ed949d4b0106c0034974d545e"},{url:"charges/template.svg",revision:"82c6a01fcb9ac0dc274bc73525fd1bf0"},{url:"charges/tower.svg",revision:"1fe2ff4415861089553d11dee1dd90dc"},{url:"charges/tree.svg",revision:"d547b60288de96298869939da69eddc4"},{url:"charges/trefle.svg",revision:"4526fe827b998831b50d9ade445361b9"},{url:"charges/trefoil.svg",revision:"7c63327b1a8023c38e33e95c2a0223ef"},{url:"charges/triangle.svg",revision:"a3fbbc28cd8c6f1fb33859911e0c656b"},{url:"charges/trianglePierced.svg",revision:"516db921194b747c3c82fdcf0fc674da"},{url:"charges/trowel.svg",revision:"6858d38b6b1522ef2e3a44e6136a0de3"},{url:"charges/unicornRampant.svg",revision:"9128a224da6c1c77074d79201d2448f3"},{url:"charges/wasp.svg",revision:"95dac0adb6610d1400d80920b0cbf22d"},{url:"charges/wheatStalk.svg",revision:"16d9ca4d411efc69caba5f9e9ff309e2"},{url:"charges/wheel.svg",revision:"fd0ba978acd07567ffe26ee842b2eba0"},{url:"charges/windmill.svg",revision:"d344c396db5a2f073b5d9c3cd1be9b46"},{url:"charges/wing.svg",revision:"5f907bab505e9be11aba793300b50697"},{url:"charges/wingSword.svg",revision:"03f5ff1453058404282617fb5e43c8db"},{url:"charges/wolfHeadErased.svg",revision:"1183380964d0bbea251042413b332dbf"},{url:"charges/wolfPassant.svg",revision:"43775349cd84874eed290cb48f60b313"},{url:"charges/wolfRampant.svg",revision:"5258490da3fed26d8fc077042ccf9523"},{url:"charges/wolfStatant.svg",revision:"aba47a7f9cb418df89151911d1ba3dbe"},{url:"charges/wyvern.svg",revision:"b1e081c6535d8e918792d0c54fc5cb9c"},{url:"charges/wyvernWithWingsDisplayed.svg",revision:"75f08d4353ced05a088203d80c2926cb"}]),function(e){const s=O();o(new x(s,e))}(H),self.addEventListener("activate",(e=>{const s=l();e.waitUntil((async(e,s="-precache-")=>{const r=(await self.caches.keys()).filter((r=>r.includes(s)&&r.includes(self.registration.scope)&&r!==e));return await Promise.all(r.map((e=>self.caches.delete(e)))),r})(s).then((e=>{})))})),o(/\.(js|css|html|json)$/,new class extends m{constructor(e={}){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(f)}async C(e,r){const a=r.fetchAndCachePut(e).catch((()=>{}));let c,i=await r.cacheMatch(e);if(i);else try{i=await a}catch(e){e instanceof Error&&(c=e)}if(!i)throw new s("no-response",{url:e.url,error:c});return i}}({cacheName:"armoria-app",plugins:[]}),"GET");
//# sourceMappingURL=sw.js.map
