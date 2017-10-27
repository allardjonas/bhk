(function () {
	'use strict';
	angular.module('myApp')
		.controller('contactController', contactController);

	/*addApplicationController.$inject = ['addApplicationFactory', '$location', 'logService'];*/
	contactController.$inject = ['contactFactory', 'toastr', '$window'];

	function contactController(contactFactory, toastr, $window) {

		var vm = this;
    vm.content = "Beste mevrouw Denivel, "
    vm.mail = mail;
		vm.enableBtn = enableBtn;

		vm.disabled = true;

    function mail(){
    		contactFactory.mail(vm.name, vm.email, vm.subject, vm.content)
    			.then(function(response){
						toastr.success('Het bericht werd succesvol verzonden', 'Bedankt!');
						$window.location.href = '#/home';
    			})
					.catch(function(response){
						toastr.error('Gelieve telefonisch contact op te nemen', 'Er is een probleem opgetreden!');
					})
    }

		function enableBtn(){
    		vm.disabled = false;
    }

	}
})();
