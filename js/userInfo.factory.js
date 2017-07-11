;(function () {

    'use strict';

    angular
        .module('myApp')
        .factory('userInfoFactory', userInfoFactory);

    userInfoFactory.inject = ['$http'];

    function userInfoFactory($http) {

        let apiUrl = 'https://jsonplaceholder.typicode.com/users/1';
        let model = {
            userData: {},
            getUserData: getUserData,
            setUserData: setUserData
        };

        function getUserData() {
            return $http.get(apiUrl).then(response => model.userData = response.data);
        }

        function setUserData(newUserData) {
            return $http.put(apiUrl, newUserData).then(response => model.userData = response.data);
        }
        
        return model;

    }

})();