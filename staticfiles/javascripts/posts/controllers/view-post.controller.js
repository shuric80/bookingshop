(function(){
	'use strict';
	angular
		.module('app.posts.controllers')
		.controller('ViewPostController',ViewPostController);

	ViewPostController.$inject=['$routeParams','Posts'];

	function ViewPostController( $routeParams, Posts){
		var vm=this;
		activate();
		function activate(){
		    var id = $routeParams.id.substr(1);
			
			Posts.view(id).then(postViewSuccessFn, postViewErrorFn);

			function postViewSuccessFn(data, status, headers, config){
				vm.post = data.data;
			}
			function postViewErrorFn(data, status, headers, config){
			}
       			}
		}
})();
