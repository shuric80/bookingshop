(function(){
	'use strict';
	angular
		.module('app.booking.controllers')
		.controller('BookingController', BookingController);
	BookingController.$inject = ['$scope'];
	function BookingController($scope){
		var vm =this;
		activate();
		function activate(){
			
			vm.booking = 'booking test';
		//	$scope.$watchCollection(function (){ return $scope.booking; }, render);
	
		}

				}
	})()
