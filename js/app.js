

// Detectar si podemos usar Service Workers
if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register('/sw.js')
        .then( reg => {

            // setTimeout(() => {

            //     reg.sync.register('posteo-gatitos');
            //     console.log('Se enviarton fotos de gatitos al server');
                
            // }, 3000 );
            
            Notification.requestPermission().then( result => {
                console.log(result);
                
                reg.showNotification('Hola mundo');
        
            })
        });


}

// Detectar si podemos usar syncmanager
// if( window.SyncManager ) {

// }

// fetch('https://reqres.in/api/users')
//     .then( resp => resp.text() )
//     .then( console.log );

