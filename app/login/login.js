(function() {
    'use strict';

    angular
        .module('app.login')
        .controller('Login', Login);

    Login.$inject = ['config', 'logger'];

    function Login(config, logger) {

        /*jshint validthis: true */
        var vm = this;

        vm.title = 'Login';
        vm.welcome = 'Bem vindo! Se ainda não tem cadastro, <a href="#">cadastre-se agora grátis</a>!';

        activate();

        function activate() {
            logger.success(config.appTitle + ' loaded!', null);
        }
    }
})();