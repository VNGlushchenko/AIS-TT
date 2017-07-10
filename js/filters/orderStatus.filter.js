;(function () {
    "use strict";

    angular
        .module("myApp")
        .filter("orderStatus", function () {
            return function (input, status) {
                if (status === 'all') {
                    return input;
                } else {
                    return input.filter(function (element) {
                        return element.status === status;
                    });
                }
            }

        });
})();