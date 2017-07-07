;(function() {
    "use strict";

    angular
        .module("myApp")
        .filter("orderStatus", function() {
            return function(input, status) {

                let output = input.filter(function(element) {
                    return element.status == status;
                })
                    return output;
                } 
        });
})();