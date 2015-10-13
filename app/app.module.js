(function() {
    angular.module('app', [
        /*
         * Everybody has access to these.
         */
        'app.core',

        /*
         * Feature areas
         */
        'app.layout',
        'app.home',
        'app.login'
    ]);
})();
console.log('test');