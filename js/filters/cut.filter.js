;(function() {
    "use strict";

    angular
        .module("myApp")
        .filter("cut", function() {
            return function(input, max) {

                if (input.length <= max) {
                    return input;
                } else {
                	let separatorIndex, prepareOutput;
                	prepareOutput = input.substr(0, max);
                	separatorIndex = prepareOutput.charAt(prepareOutput.length - 1) == ' ' ? 
                					 prepareOutput.length - 1 :
                	  				(
                	  				prepareOutput.charAt(prepareOutput.lastIndexOf(' ') - 1) == ',' ? 
                	  				prepareOutput.lastIndexOf(',') : prepareOutput.lastIndexOf(' ')
                	  				);
                    return prepareOutput.slice(0,separatorIndex) + '...';
                }

            }
        });
})();
