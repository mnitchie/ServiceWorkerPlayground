if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/serviceWorker.js').then(function(registration) {
            console.log('ServiceWorker registration successful!');
            console.log(registration);
        }).catch(function(error) {
            console.log('ServiceWorker registration failed');
            console.log(error);
        });
    });
}