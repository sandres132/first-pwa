
// Ciclo de vida del sw

// const CACHE_NAME = 'cache-v1'

const CACHE_STATIC_NAME = 'static-v2';
const CACHE_DYNAMIC_NAME = 'dynamic-v1';
const CACHE_INMUTABLE_NAME ='inmutable-v1';

const CACHE_DYNAMIC_LIMIT = 50;

function limpiarCache( cacheName, numeroItems ) {

    caches.open( cacheName )
        .then( cache => {

            return cache.keys()
                .then( keys => {

                    if ( keys.length > numeroItems ) {
                        cache.delete( keys[0] )
                            .then( limpiarCache( cacheName, numeroItems ) )
                    }
                });

        })

}

self.addEventListener('install', e => {

    const cacheProm = caches.open( CACHE_STATIC_NAME )
        .then( cache => {

            return cache.addAll([
                '/',
                '/index.html',
                '/img/main.jpg',
                '/css/style.css',
                '/js/app.js',
                '/img/no-img.jpg'
            ]);
        });

    const cacheInmutable = [ 
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'
    ]

    const cacheprom2 = caches.open( CACHE_INMUTABLE_NAME )
        .then( cache => {
            cache.addAll( cacheInmutable )
        })

    const respPromises = Promise.all([ cacheProm, cacheprom2 ])
    
    e.waitUntil( respPromises )

});

self.addEventListener('fetch', e => {

    // 1 - cache only: es usada cuando queremos que toda la app sea servida desde el cache
    // e.respondWith( caches.match( e.request ) )

    // 2 - cache with network fallback then cache: este intenta leer primero el cache si no encuentra lo el request intenta leer el request en la network y guarda el request en cache para su posterior uso
    // const respuesta = caches.match( e.request )
    //     .then( res => {

    //         if ( res ) return res;

    //         // si pasa aqui es porque el request no existe en cache entonces hay que ir a la web
    //         return fetch( e.request )
    //                     .then( newResp => {

    //                         caches.open( CACHE_DYNAMIC_NAME )
    //                             .then( cache => {
    //                                 cache.put( e.request, newResp );
    //                                 limpiarCache( CACHE_DYNAMIC_NAME, CACHE_DYNAMIC_LIMIT );
    //                             });

    //                         return newResp.clone();
    //                     });
    //     });

    // e.respondWith( respuesta );

    // 3 - network with cache fallback
    // const respuesta = fetch( e.request ).then( res => {

    //     if ( !res ) return caches.match( e.request );

    //     caches.open( CACHE_DYNAMIC_NAME )
    //         .then( cache => {
    //             cache.put( e.request, res );
    //             limpiarCache( CACHE_DYNAMIC_NAME, CACHE_DYNAMIC_LIMIT )
    //         })

    //     return res.clone()
    // }).catch( err => {
    //     return caches.match( e.request );
    // })

    // e.respondWith( respuesta );

    // 4 - cache with network update: es util cuando el rendimiento es critico, las actualizaciones siempre estaran un paso atras
    // if( e.request.url.includes('bootstrap')) {
    //     return e.respondWith( caches.match( e.request ) );
    // }

    // const respuesta = caches.open( CACHE_STATIC_NAME ).then( cache => {

    //     fetch( e.request ).then( newRes => cache.put( e.request, newRes ))

    //     return cache.match( e.request );
    // });

    // e.respondWith( respuesta );

    // 5 - cache and network race: brinda la primera respuesta que se obtenga

    const respuesta = new Promise( (resolve, reject ) => {
        let rechazada = false;

        const falloUnaVez = () => {

            if ( rechazada ) {
                if ( /\.(png|jpg)$/i.test( e.request.url )) {
                    resolve( caches.match( '/img/no-img.jpg' ) );
                } else {
                    reject( 'No se encontro respuesta' );
                }
            } else {
                rechazada = true;
            }
        }

        fetch( e.request ).then( res => {

            res.ok ? resolve(res) : falloUnaVez();

        }).catch( falloUnaVez )

        caches.match( e.request ).then( res => {

            res ? resolve( res ) : falloUnaVez();

        }).catch( falloUnaVez );

    })

    e.respondWith( respuesta );


})