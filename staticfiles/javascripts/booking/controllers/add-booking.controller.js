(function(){
	'use strict';
	angular
		.module('app.booking.controllers')
		.controller('addBookingController',addBookingController);

	addBookingController.$inject=['$rootScope','$scope','Authentication','Booking'];

	function addBookingController($rootScope, $scope,  Booking){
		var vm=this;
		vm.submit=submit;

		function submit(){
			$rootScope.$broadcast('booking.add', {
				user:vm.user,
				time:vm.time,
				client:vm.client,
				phone_client:vm.phone_client
              			});
			$scope.closeThisDialog();

			Booking.add(vm.user, vm.time, vm.client, vm.phone_client)
				.then(addBookingSuccessFn,addBookingErrorFn);
			
			function addBookingSuccessFn(data, status,headers,config){
				console.log('Done add booking.')
			}
			
			function addBookingErrorFn(data,status,headers,config){
				$rootScope.$broadcast('booking.add.error');
				console.log(data.error);
			}
		}
	}
})();
