(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('Shell', Shell);

    Shell.$inject = ['config', 'logger', '$route', 'routehelper', '$timeout'];

    function Shell(config, logger, $route, routehelper, $timeout) {
        /*jshint validthis: true */
        var vm = this;
        var routes = routehelper.getRoutes();
        vm.isCurrent = isCurrent;
        vm.title = config.appTitle;
        vm.copyright = '&copy; 2015 - All rights reserved';
        vm.showSplash = true;

        vm.browserupgrade = config.browserupgrade;

        activate();

        function activate() {
            logger.success(config.appTitle + ' loaded!', null);
            getNavRoutes();
        }

        function getNavRoutes() {
            vm.navRoutes = routes.filter(function(r) {
                return r.settings && r.settings.nav;
            }).sort(function(r1, r2) {
                return r1.settings.nav - r2.settings.nav;
            });
            hideSplash();
        }

        function isCurrent(route) {
            if (!route.title || !$route.current || !$route.current.title) {
                return '';
            }
            var menuName = route.title;
            return $route.current.title.substr(0, menuName.length) === menuName ? 'current' : '';
        }

        function hideSplash() {
            //Force a 1 second delay so we can see the splash.
            $timeout(function() {
                vm.showSplash = false;
            }, 1000);
        }
    }
})();