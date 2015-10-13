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
        'app.login',
        'app.signin',
        'app.about'
    ]);
})();
console.log('test');