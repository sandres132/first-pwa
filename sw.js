

self.addEventListener('fetch', event => {

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

    const resp = fetch( event.request )
        .then( resp => resp.ok ? resp : fetch('img/main.jpg'));

    event.respondWith( resp );

});
