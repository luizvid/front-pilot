(function() {
    'use strict';

    angular
        .module('app.signin')
        .controller('Signin', Signin);

    Signin.$inject = ['config', 'logger'];

    function Signin(config, logger) {

        /*jshint validthis: true */
        var vm = this;

        vm.title = 'Cadastro';
        vm.welcome = 'Bem vindo! Se você já possui um cadastro, <a href="#/login">clique aqui para entrar</a>!';
        vm.facebookSignin = " CADASTRAR COM FACEBOOK";
        vm.googleSignin = " CADASTRAR COM GOOGLE";
        vm.fillForm = 'Ou preencha com os seus dados abaixo:';
        vm.nameLabel = "Seu nome";
        vm.emailLabel = "Seu e-mail";
        vm.submitLabel = "CADASTRAR";

        activate();

        function activate() {
            logger.success(config.appTitle + ' loaded!', null);
        }
    }
})();