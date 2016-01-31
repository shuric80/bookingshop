(function () {
	'use strict';

	angular
		.module('app.booking.directives')
		.directive('bookings', bookings);
	function bookings() {
		console.log('bookings');
		var directive = {
			controller: 'BookingController',
			controllerAs: 'vm',
			restrict: 'E',
			scope: {
				bookings: '='
			},
			templateUrl: '/static/templates/booking/bookings.html'
		};

		return directive;
	}
})();
