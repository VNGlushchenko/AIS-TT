;(function () {

    'use strict';

    angular
        .module('myApp')
        .controller('DashboardCtrl', DashboardCtrl);

    DashboardCtrl.$inject = ['userInfoFactory'];

    function DashboardCtrl(userInfoFactory) {

        let vm = this;

        vm.model = {
            disabled: true,
            newUserData: {}
        };

        vm.menu = {
            updateUser: updateUser
        };
        
        userInfoFactory.getUserData().then(
            response => vm.model.newUserData = angular.copy(response)
        );

        function updateUser() {
            userInfoFactory.setUserData(vm.model.newUserData).
            finally(() => vm.model.disabled = true);
            }
        }
})();
