;(function () {

    'use strict';

    angular
        .module('myApp')
        .controller('DashboardCtrl', DashboardCtrl);

    DashboardCtrl.$inject = ['FakeData'];

    function DashboardCtrl(FakeData) {

        let vm = this;

        vm.model = {
            photos: []
        };
        FakeData.getPhotos().then(response => vm.model.photos = response.data);
        FakeData.getUsers();
        FakeData.getTodos();
        FakeData.getMyFavoriteUser();
    }
})();
