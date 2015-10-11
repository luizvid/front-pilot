(function() {
    'use strict';

    angular
        .module('app.home')
        .controller('Home', Home);

    Home.$inject = ['logger'];

    function Home(logger) {

        /*jshint validthis: true */
        var vm = this;

        vm.title = 'Home';

        activate();

        function activate() {
        }
    }
})();