;(function() {

'use strict';

angular
    .module("myApp")
    .provider("Photo", ['$http', function Photo($http) {
	let apiUrl = '';
    this.config = function(url) {
    	apiUrl = url;
    }

    this.$get = function() {
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
}]);

})();