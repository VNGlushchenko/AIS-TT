;(function () {

    'use strict';

    angular
        .module('myApp')
        .controller('DashboardCtrl', DashboardCtrl);

    DashboardCtrl.$inject = ['userInfoFactory'];

    function DashboardCtrl(userInfoFactory) {

        let vm = this;

        vm.model = {
            userData: userInfoFactory.userData,
            disabled: true
        };

        vm.menu = {
            updateUser: updateUser
        };
        
        function updateUser() {
            userInfoFactory.setUserData(vm.model.userData);
            }
        }

})();
