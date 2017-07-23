;(function() {

'use strict';

angular
    .module("myApp")
    .provider("Photo", function () {
	let apiUrl = '';
    this.setUrl = function(url) {
    	apiUrl = url;
    }

    this.$get = ['$http', function($http) {
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
    }]
});

})();