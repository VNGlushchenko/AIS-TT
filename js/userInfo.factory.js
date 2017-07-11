;(function () {

    'use strict';

    angular
        .module('myApp')
        .factory('userInfoFactory', userInfoFactory);

    userInfoFactory.inject = ['$http'];

    function userInfoFactory($http) {

        let model = {
            userData: {},
            apiUrl: 'https://jsonplaceholder.typicode.com/users/1'
        };

        getUserData().then(
        response => model.userData = response.data
    	);

        function getUserData() {
            return $http.get(model.apiUrl);
        }

        function setUserData(newUserData) {
            return $http.put(model.apiUrl, newUserData);
        }
        
        return {
                userData: model.userData,
                setUserData: setUserData
            }

    }

})();