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
        vm.signinTxt = 'Lorem ipsum dolor sit amet ...';
        vm.signinBtn = 'CADASTRE-SE';
        vm.appTitle = 'Lorem ipsum dolor sit amet';

        vm.appSubTitle = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu tempus orci.';
        vm.body = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam vitae lectus sed volutpat. Vestibulum lobortis, eros ut mattis semper, dui quam vehicula metus, ut gravida metus urna non eros. Ut vel lectus euismod, blandit lectus quis, ultrices eros. Vivamus malesuada diam at malesuada sagittis. Suspendisse potenti. Proin ut mi nulla. Ut felis lacus, ultricies ut felis id, auctor feugiat tellus. Proin elit ex, efficitur sit amet enim in, efficitur sollicitudin magna. Fusce placerat et dui in auctor. Phasellus eget mattis magna, vitae feugiat felis. Phasellus condimentum, odio et sodales sagittis, dui sapien dapibus magna, eu venenatis ipsum purus nec sapien. Maecenas pharetra interdum imperdiet. Proin mattis a ligula sed iaculis. Sed nec ex rutrum, feugiat dui sit amet, lobortis eros.';
        vm.bodyImgTitle = 'Lorem ipsum dolor';
        activate();

        function activate() {
            logger.success(config.appTitle + ' loaded!', null);
        }
    }
})();