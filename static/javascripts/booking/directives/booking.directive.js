(function (){
	'use strict';

	angular
		.module('app.booking.directives')
		.directive('booking', booking);

	function booking(){
		var directive={
			restrict: 'E',
			scope:{
				booking: '='
			},
			templateUrl: '/static/templates/booking/booking.html'
		};
		return directive;
	}
})();
