angular
    .module("myApp")
    .factory("Photo", Photo);

Photo.$inject = ['$http', 'apiUrl'];

function Photo($http,apiUrl) {

    let photo = {
        photos: [],
        getAll: getAll,
        getOne: getOne
    };

    getAll().then(
        response => photo.photos = response.data
    );

    function getAll() {
        return $http({
            method: "GET",
            url: apiUrl + "/photos"
        });
    }

    function getOne(photoId) {
        return $http({
            method: "GET",
            url: apiUrl + `/photos/${photoId}`
        });
    }

    return photo;
}
