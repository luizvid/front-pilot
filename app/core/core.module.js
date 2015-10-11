(function() {
    'use strict';

    angular.module('app.core', [
        /* Angular modules */
        'ngRoute', 'ngSanitize', 'ngAnimate',

        /*
         * Our reusable cross app code modules
         */
        'blocks.exception', 'blocks.logger', 'blocks.router'
    ]);
})();
