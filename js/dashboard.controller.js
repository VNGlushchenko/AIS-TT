;(function () {

    'use strict';

    angular
        .module('myApp')
        .controller('DashboardCtrl', DashboardCtrl);

    DashboardCtrl.$inject = ['Photo'];

    function DashboardCtrl(Photo) {

        let vm = this;

        vm.model = {
            photos: []
        };
        Photo.getAll().then(response => vm.model.photos = response.data);
    }
})();
