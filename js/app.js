
// forma de verificar si el navegador soporta service workers
// si es así, se registra el service worker
// if ( 'serviceWorker' in navigator ) {
//     navigator.serviceWorker.register( '/sw.js' ).then(function(registration) {
//         console.log('Service Worker registered with scope:', registration.scope);
//     }).catch(function(err) {
//         console.log('Service worker registration failed:', err);
//     });
// }

// otra forma de verificar si el navegador soporta service workers
if ( navigator.serviceWorker ) {
    navigator.serviceWorker.register( '/sw.js' )
        .then( registration => {
            console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch( err => {
            console.log('Service worker registration failed:', err);
        });
}