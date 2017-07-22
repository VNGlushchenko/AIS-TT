;(function() {

'use strict';

angular
    .module("myApp")
    .factory("Photo", Photo);

Photo.$inject = ['$http', 'apiUrl'];

function Photo($http,apiUrl) {

    let photo = {
        getAll: getAll
    };

    function getAll() {
        return $http({
            method: "GET",
            url: apiUrl + "/photos"
        })
    }

    return photo;
}
})();