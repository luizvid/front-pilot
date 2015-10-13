(function() {
    'use strict';

    angular
        .module('app.signin')
        .run(appRun);

    appRun.$inject = ['routehelper'];

    function appRun(routehelper) {
        routehelper.configureRoutes(getRoutes());
    }

    function getRoutes() {
        return [
            {
                url: '/signin',
                config: {
                    templateUrl: 'app/signin/signin.html',
                    controller: 'Signin',
                    controllerAs: 'vm',
                    title: 'Login',
                    settings: {
                        nav: 12,
                        content: 'CADASTRE-SE'
                    }
                }
            }
        ];
    }
})();