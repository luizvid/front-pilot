(function() {
    'use strict';

    angular
        .module('app.about')
        .run(appRun);

    appRun.$inject = ['routehelper'];

    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/about',
                config: {
                    templateUrl: 'app/about/about.html',
                    controller: 'About',
                    controllerAs: 'vm',
                    title: 'Sobre nós',
                    settings: {
                        nav: 2,
                        content: 'Sobre nós'
                    }
                }
            }
        ];
    }
})();