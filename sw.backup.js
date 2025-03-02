
// Ciclo de vida del SW

self.addEventListener('install', event => {

    // Descargar assets
    // Creamos un cache
    // Guardamos en cache los 
    console.log('SW: Instalando');
    
    const instalacion = new Promise((resolve, reject) => {

        setTimeout(() => {
            console.log('SW: Instalaciones terminadas');
            self.skipWaiting();
            resolve();
        }, 1);

    });

    event.waitUntil(instalacion);

});

// cuando el service worker toma el control de la aplicación
self.addEventListener('activate', event => {

    // Borrar cache viejo

    console.log('SW: Activo y listo para controlar la app');

});

//Fetch manejo de peticiones http
self.addEventListener('fetch', event => {
    
    // Aplicar estrategias del cache
    console.log('SW:', event.request.url);

    if ( event.request.url.includes('https://reqres.in/') ) {
        const resp = new Response(`{ ok: false, mensaje: 'jajaja' }`);
        event.respondWith( resp );
    }

});