;(function () {

    'use strict';

    angular
        .module('myApp')
        .controller('DashboardCtrl', DashboardCtrl);

    DashboardCtrl.$inject = ['userInfoFactory'];

    function DashboardCtrl(userInfoFactory) {

        let vm = this;

        vm.model = {
            //userModel: userInfoFactory,
            disabled: true,
            newUserData: {}
        };


        vm.menu = {
            updateUser: updateUser
        };
        
        function updateUser() {
            userInfoFactory.setUserData(vm.model.newUserData).
            finally(() => vm.model.disabled = true);
            }
        
        userInfoFactory.getUserData().then(
        response => vm.model.newUserData = angular.copy(response));
}
})();
