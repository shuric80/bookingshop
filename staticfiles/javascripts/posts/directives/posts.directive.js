(function(){
	'use strict';

	angular
		.module('app.posts.directives')
		.directive('posts',posts);

	function posts(){
		var directive = {
			controller: 'PostsController',
			controllerAs: 'vm',
			restrict: 'E',
			scope:{
				posts: '='
			},
			templateUrl: '/static/templates/post/posts.html'
		};
		return directive;
	}	
})();
