

if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw.js');
}

if ( window.caches ) {
    // cabe mencionar que todo lo del caches son promesas, entonces se puede usar el .then

    // abre el archivo en cache prueba-1 si existe, si no existe lo crea en cache
    caches.open('prueba-1');

    // abre el archivo en cache prueba-2 si existe, si no existe lo crea en cache
    caches.open('prueba-2');

    // verifica si existe prueba-3 en cache
    // caches.has('prueba-3').then( console.log )

    // borra el cache prueba-2, si existe envia un true, si no existe envia un false
    // caches.delete('prueba-2').then( console.log )

    caches.open('cache-v1.1').then( cache => {
        
        // agrega algo al cache, es un metodo void
        // cache.add('/index.html');

        // agregar todo lo contenido en el arreglo en el cache, es un metodo void
        cache.addAll([
            '/index.html',
            '/css/style.css',
            '/img/main.jpg',
        ]).then( () => {
            // cache.keys().then( console.log )

            // para borrar algo de este cache en especifico
            // cache.delete('/img/main.jpg')
            //     .then( resp => console.log('borrar img: ', resp));
            
            // reemplazar algun archivo en cache, si no existe lo crea con el contenido en el new response
            // cache.put('/css/style.css', new Response(`
            //     html, body {
            //         height: 100%;
            //         background-color: #1D2125;
            //     }
            //     `, {
            //         headers: {
            //             'Content-Type': 'text/css'
            //         }
            //     }))

        })

        // leer un archivo que se encuentre en el cache
        // cache.match('/index.html')
        //     .then( res => {
        //         res.text().then( console.log )
        //     })

    })

    // obtener todos los caches que existen en cache storage
    caches.keys().then( keys => {
        console.log(keys);
        
    })


}