;(function() {

    'use strict';

    angular.module("myApp", [])
    	   .config(['PhotoProvider', function(PhotoProvider) {
            PhotoProvider.config('https://jsonplaceholder.typicode.com');
        }]);

})();

