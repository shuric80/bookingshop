( function() {
	'use strict';

	angular
		.module('thinkster',[
			'thinkster.config',
			'thinkster.routers',
			'thinkster.authentication'
		])
		.run(run);

	run.$inject = ['$http'];

	function run($http){
		$http.default.xsrfHeaderName = 'X-CSRFToken';
		$http.default.xsrfCookieName = 'csrftoken';
	}
	
	angular
		.module('thinkster.routes',['ngRoute']);
	angular
		.module('thinkster.config',[]);
	
})();

