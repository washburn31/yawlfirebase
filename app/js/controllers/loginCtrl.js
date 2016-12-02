'use strict';

angular.module('yawl.controllers.login', []).
    controller('loginCtrl', ['$rootScope', '$location', function ($rootScope, $location) {
        this.loginWith = function (provider) {
            // $rootScope.auth.$login(provider);
             $rootScope.auth.$login(provider);

            // $rootScope.auth.authWithOAuthPopup("github", function (error, authData) {
            //     if (error) {
            //         console.log("Login Failed!", error);
            //     } else {
            //         console.log("Authenticated successfully with payload:", authData);
            //     }
            // });
        },

            $rootScope.$on("user:logout", function () {
                $rootScope.auth.$logout();
                $location.path('/login');
            });
    }]);
