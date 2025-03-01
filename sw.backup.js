

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
    
    // event.respondWith( 
    //     fetch( event.request )
    //         .then( resp => {

    //             if ( resp.ok ) {
    //                 return resp;
    //             } else {
    //                 return fetch('img/main.jpg');
    //             }
    //
    //             simplificacion del if else
    //             if ( resp.ok ) return resp; 
    //             else return fetch('img/main.jpg');
    //         })

            // simplificacion del .then
            // .then( resp => {
            //     return resp.ok ? resp : fetch('img/main.jpg');
            // });
    // )

    // const resp = fetch( event.request )
    //     .then( resp => resp.ok ? resp : fetch('img/main.jpg'));

    // event.respondWith( resp );
});
