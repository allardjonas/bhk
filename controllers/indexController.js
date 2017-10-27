// usersController.js
(function () {
	'use strict';
	angular.module('myApp')
		.controller('indexController', indexController);

	indexController.$inject = ['$scope', '$window'];

	function indexController($scope, $window) {

		$scope.redirectToFb = function () {
        $window.open('https://www.facebook.com', '_blank');
    };

		$scope.redirectToLi = function () {
        $window.open('https://www.linkedin.com', '_blank');
    };
	}
})();
