if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('PWA/src/scripts/service-worker.js')
      .then(registration => {
        console.log('Service Worker registered with scope:', registration.scope);
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
    }