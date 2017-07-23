;(function() {

'use strict';

angular
    .module("myApp")
    .service("Photo", Photo);

Photo.$inject = ['$http', 'apiUrl'];

function Photo($http,apiUrl) {

    this.getAll = function () {
        return $http({
            method: "GET",
            url: apiUrl + "/photos"
        })
    }

}
})();