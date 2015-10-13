(function() {
    'use strict';

    angular
        .module('app.about')
        .controller('About', About);

    About.$inject = ['config', 'logger'];

    function About(config, logger) {

        /*jshint validthis: true */
        var vm = this;

        vm.title = 'Sobre nós';
        vm.aboutText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque aliquam vitae lectus sed volutpat. Vestibulum lobortis, eros ut mattis semper, dui quam vehicula metus, ut gravida metus urna non eros. Ut vel lectus euismod, blandit lectus quis, ultrices eros. Vivamus malesuada diam at malesuada sagittis. Suspendisse potenti. Proin ut mi nulla. Ut felis lacus, ultricies ut felis id, auctor feugiat tellus. Proin elit ex, efficitur sit amet enim in, efficitur sollicitudin magna. Fusce placerat et dui in auctor. Phasellus eget mattis magna, vitae feugiat felis. Phasellus condimentum, odio et sodales sagittis, dui sapien dapibus magna, eu venenatis ipsum purus nec sapien. Maecenas pharetra interdum imperdiet. Proin mattis a ligula sed iaculis. Sed nec ex rutrum, feugiat dui sit amet, lobortis eros.';

        activate();

        function activate() {
            logger.success(config.appTitle + ' loaded!', null);
        }
    }
})();