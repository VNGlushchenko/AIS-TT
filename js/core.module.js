;(function() {

    'use strict';

    angular.module("myApp", [])
    	   .config(['PhotoProvider', function(PhotoProvider) {
            PhotoProvider.setUrl('https://jsonplaceholder.typicode.com');
        }]);

})();

