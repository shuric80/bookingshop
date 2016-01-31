(function (){
	'use strict';

	angular
		.module('thinkster.authentication.controllers')
		.controller('RegisterController',RegisterController);

	RegisterController.$inject = ['$location','$scope','Autentication'];

	function RegisterController($location, $scope, Autentication){
		var vm = this;
		vm.register=register;

		function register(){
			Autentication.register(vm.email, vm.password, vm.username);
		}
	}
})();

