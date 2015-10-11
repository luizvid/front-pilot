(function() {
    'use strict';

    angular
        .module('app.home')
        .controller('Home', Home);

    Home.$inject = ['config', 'logger'];

    function Home(config, logger) {

        /*jshint validthis: true */
        var vm = this;

        vm.title = 'Home';
        vm.signinTxt = 'Junte-se ao melhor site de ...';
        vm.signinBtn = 'CADASTRE-SE';

        activate();

        function activate() {
            logger.success(config.appTitle + ' loaded!', null);
        }
    }
})();