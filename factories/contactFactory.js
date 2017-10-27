// usersFactory.js
(function () {
	'use strict';

	angular.module('myApp')
		.factory('contactFactory', contactFactory);

	contactFactory.$inject = ['$http', '$q'];

	// haal users op van de API
	function contactFactory($http, $q) {
		var factory = {};

		factory.mail = function(name, email, subject, content) {
			var d = $q.defer();
			$http.post("http://www.bhk-denivel.be/email", { name: name, email: email, subject: subject, content: content})
				.then(function(data, status, headers){
					d.resolve(data);
				})
				.catch(function(data, status){
					d.reject(data);
				});
				return d.promise;
		}

		return factory;

	}

})();
