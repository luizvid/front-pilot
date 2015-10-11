(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('Shell', Shell);

    Shell.$inject = ['config', 'logger'];

    function Shell(config, logger) {
        /*jshint validthis: true */
        var vm = this;

        vm.title = config.appTitle;
        vm.about = 'Sobre nós';
        vm.joinus = 'Junte-se a nós';
        vm.login = 'Entrar';
        vm.signin = 'Cadastre-se';

        vm.browserupgrade = config.browserupgrade;

        activate();

        function activate() {
            logger.success(config.appTitle + ' loaded!', null);
        }

    }
})();