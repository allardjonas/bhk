// usersController.js
(function () {
	'use strict';
	angular.module('myApp')
		.controller('linksController', linksController);

	linksController.$inject = ['$scope', '$window'];

	function linksController($scope, $window) {

		$scope.redirectToNbb = function () {
        $window.open('https://www.nbb.be', '_blank');
    };

		$scope.redirectToFgov = function () {
        $window.open('http://www.ejustice.just.fgov.be/cgi/welcome.pl', '_blank');
    };

		$scope.redirectToBibf = function () {
        $window.open('http://www.bibf.be', '_blank');
    };

		$scope.redirectToIbr = function () {
        $window.open('http://www.ibr-ire.be', '_blank');
    };

		$scope.redirectToCnc = function () {
        $window.open('http://www.cnc-cbn.be', '_blank');
    };

		$scope.redirectToKbo = function () {
        $window.open('http://kbopub.economie.fgov.be/kbopub/zoeknummerform.html', '_blank');
    };

		$scope.redirectToFinancien = function () {
        $window.open('http://financien.belgium.be', '_blank');
    };

		$scope.redirectToJustitie = function () {
        $window.open('http://justitie.belgium.be', '_blank');
    };

		$scope.redirectToTax = function () {
        $window.open('http://ec.europa.eu/taxation_customs/vies/', '_blank');
    };

		$scope.redirectToGm = function () {
        $window.open('https://financien.belgium.be/nl/gestructureerde-mededeling', '_blank');
    };

	}
})();
