(function() {

    angular.module('app', [
        /*
         * Everybody has access to these.
         */
        'app.core',
        //'app.widgets',

        /*
         * Feature areas
         */
        //'app.avengers',
        //'app.dashboard',
        'app.layout',
        'app.home',
        'app.login'
    ]);
})();