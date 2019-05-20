if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('script.js').then(function(sw) {
      // successful
      console.log('ServiceWorker scope: ', sw.scope);
    }, function(err) {
      // failed
      console.log('ServiceWorker failed: ', err);
    });
  });
}
