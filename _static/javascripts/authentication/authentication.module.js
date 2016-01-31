(function (){
	'use strict';

	angular
		.module('thinkster.authentication', [
			'thinkster.authentication.controllers',
			'thinkster.services'
		]);
	angular
		.module('thinkster.autentication.controllers',[]);

	angular
		.module('thinkster.authentication.services',['ngCookies']);
})();
