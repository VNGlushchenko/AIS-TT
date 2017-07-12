angular
    .module("myApp")
    .factory("Photo", Photo);

Photo.$inject = ['$http', 'apiUrl'];

function Photo($http,apiUrl) {

    let photo = {
        getAll: getAll,
        getOne: getOne
    };

    function getAll() {
        return $http({
            method: "GET",
            url: apiUrl + "/photos"
        })
    }

    function getOne(photoId) {
        return $http({
            method: "GET",
            url: apiUrl + `/photos/${photoId}`
        });
    }

    return photo;
}
