(function() {
    'use strict';

    angular
        .module('app.home')
        .run(appRun);

    appRun.$inject = ['routehelper'];

    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/',
                config: {
                    templateUrl: 'app/home/home.html',
                    controller: 'Home',
                    controllerAs: 'vm',
                    title: 'Home'
                }
            }
        ];
    }
})();