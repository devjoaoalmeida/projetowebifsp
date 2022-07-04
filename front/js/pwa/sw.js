const CACHE_NAME = "servtech-v8";
const assets = [
    "/",
    "./instalar.js",
    "./manifest.json",
    "../main.js",
    "../api/delete.js",
    "../api/get.js",
    "../api/post.js",
    "../api/update.js",
    "../funções/slider.js",
    "../funções/funcoes.js",
    "../modal/modal_login.js",
    "../modal/login/cad_login.js",
    "../modal/login/login.js",
    "../modal/login/senha.js",
    "../pages/home.js",
    "../pages/lista_servicos.js",
    "../pages/perfil_cliente.js",
    "../pages/perfil_empresa.js",
    "../pages/sobre.js",
    "/front/css/main.css",
    "/front/css/modal/cadlogin_style.css",
    "/front/css/modal/login_style.css",
    "/front/css/modal/modal_style.css",
    "/front/css/modal/orcamento_style.css",
    "/front/css/pages/home_style.css",
    "/front/css/pages/lista_style.css",
    "/front/css/pages/perfil_style.css",
    "/front/css/pages/sobre_style.css"
];

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
            console.log('[Service Worker] Caching all: app shell and content');
        return cache.addAll(assets);
      })
    );
  });

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== CACHE_NAME) {
                    return caches.delete(key);
                }
            }));
        })
    );
});