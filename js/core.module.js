;(function() {

 'use strict';

 angular.module("myApp", [])
        .config(function($provide) {
            $provide.decorator('$http', function($delegate) {

                $delegate.getMyFavouriteUser = function() {
                    return $delegate.get('/posts?id=7').then((response) => console.log(response.data));
                }

                return $delegate;
            });
        })
        .config(function($httpProvider) {
            $httpProvider.defaults.headers.get = {
                'x-client-id': 'top secret client id'
            };
            $httpProvider.interceptors.push('defaultUrl');
        })
        .factory('defaultUrl', function() {
            return {
                request: function(config) {
                    let oldUrl = config.url;
                    if (oldUrl.indexOf('/') == 0) {
                        config.url = 'https://jsonplaceholder.typicode.com' + oldUrl;
                    } 
                    console.log('New url: ', config.url);
                    return config;
                },
                responseError: function(error) {
                    console.log('Error: ', error);
                }
            }
        });
})();
