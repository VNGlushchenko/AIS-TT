;(function () {

    'use strict';

    angular
        .module('myApp')
        .controller('DashboardCtrl', DashboardCtrl);

    DashboardCtrl.$inject = ['userInfoFactory'];

    function DashboardCtrl(userInfoFactory) {

        let vm = this;

        vm.model = {
            userModel: userInfoFactory,
            disabled: true
        };

        vm.menu = {
            updateUser: updateUser
        };
        
        function updateUser() {
            userInfoFactory.setUserData(vm.model.userModel).
            finally(() => vm.model.disabled = true);
            }
        }

})();
