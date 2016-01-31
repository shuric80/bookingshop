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
			console.log('booking activate');
			$scope.booking={times :['8-00','8-30',
									'9-00','9-30',
									'10-00','10-30',
									'11-00','11-30',
									'12-00','12-30',
									'13-00','13-30']
						   }
			//	$scope.$watchCollection(function (){ return $scope.booking; }, render);
			
		}

	}
})()
