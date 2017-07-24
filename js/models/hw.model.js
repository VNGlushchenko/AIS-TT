;(function() {

'use strict';

angular
    .module("myApp")
    .factory("FakeData", FakeData);

FakeData.$inject = ['$http'];

function FakeData($http) {

    let obj = {
        getPhotos: getPhotos,
        getUsers: getUsers,
        getTodos: getTodos,
        getMyFavoriteUser: getMyFavoriteUser
    };

    function getPhotos() {
        return $http({
            method: "GET",
            url: "/photos"
        })
    }

    function getUsers() {
        return $http({
            method: "GET",
            url: "/users"
        })
    }

    function getTodos() {
        return $http({
            method: "GET",
            url: "/todos"
        })
    }

    function getMyFavoriteUser() {
        return $http.getMyFavouriteUser();
    }

    return obj;
}
})();