(function(){
	'use strict';
	angular
		.module('app.booking', [
			'app.booking.controllers',
			'app.booking.directives',
			'app.booking.services'
		]);
	angular
		.module('app.booking.controllers', []);
	angular
		.module('app.booking.directives', ['ngDialog']);
	angular
		.module('app.booking.services', []);
	
})();
