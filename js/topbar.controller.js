;(function () {

    'use strict';

    angular
        .module('myApp')
        .controller('TopbarCtrl', TopbarCtrl);

    TopbarCtrl.$inject = ['userInfoFactory'];

    function TopbarCtrl(userInfoFactory) {

        let vm = this;

        vm.model = userInfoFactory;

    }

})();
