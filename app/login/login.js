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
        vm.welcome = 'Bem vindo! Se ainda não tem cadastro, <a href="#/signin">cadastre-se agora grátis</a>!';
        vm.facebookLogin = " LOGIN FACEBOOK";
        vm.googleLogin = " LOGIN GOOGLE";
        vm.loginLabel = "Login";
        vm.passLabel = "Senha";
        vm.submitLabel = "ENTRAR";
        vm.keepLogged = "Continuar conectado";


        activate();

        function activate() {
            logger.success(config.appTitle + ' loaded!', null);
        }
    }
})();