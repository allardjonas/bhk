(function () {
    'use strict';
    // 1. Module definieren
    angular.module('myApp', ['ngRoute', 'ngMap', 'toastr'])
        .config(moduleConfig)

    // 2. Inject dependencies
    moduleConfig.$inject = ['$routeProvider'];

    // 3. Routes configureren
    function moduleConfig($routeProvider) {

        $routeProvider.when('/', {
            templateUrl: 'views/home.html',
            /*controller: 'homeController',
            controllerAs: 'homeCtrl'*/
        })
            .when('/home', {
                templateUrl: 'views/home.html',
            })
            .when('/diensten', {
                templateUrl: 'views/diensten.html',
            })
            .when('/links', {
                templateUrl: 'views/links.html',
                controller: 'linksController',
                controllerAs: 'linksCtrl'
            })
            .when('/data', {
                templateUrl: 'views/data.html',
            })
            .when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'contactController',
                controllerAs: 'contactCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }
})();
