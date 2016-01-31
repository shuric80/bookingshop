(function (){
	'use strict';

	angular
		.module('app.posts.directives')
		.directive('post', post);

	function post(){
		var directive={
			restrict: 'E',
			scope:{
				post: '='
			},
			templateUrl: '/static/templates/post/post.html'
		};
		return directive;
	}
})();
