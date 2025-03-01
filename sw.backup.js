

self.addEventListener('fetch', event => {

    // if( event.request.url.includes('.jpg') ){
    //     console.log( event.request.url );

    //     // let photo = fetch('img/main.jpg');
    //     // let photo = fetch( event.request.url );
    //     let photo = fetch( event.request );

    //     event.respondWith( photo );
    // }

    // if ( event.request.url.includes('style.css') ) {
    //     let respuesta = new Response(`
    //         body {
    //             background-color: red !important;
    //             color: pink;
    //         }
    //     `, {
    //         headers: {
    //             'Content-Type': 'text/css'
    //         }
    //     });

    //     event.respondWith( respuesta );
    // }

    // if ( event.request.url.includes('main.jpg') ) {
    //     let fotoReq = fetch( 'img/main-patas-arriba.jpg' );
    //     event.respondWith( fotoReq );
    // }
});
