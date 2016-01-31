(function(){
	'use strict';
	angular
		.module('app.posts.controllers')
		.controller('NewPostController',NewPostController);

	NewPostController.$inject=['$rootScope','$scope','Authentication','Snackbar','Posts'];

	function NewPostController($rootScope, $scope, Authentication, Snackbar, Posts){
		var vm=this;
		vm.submit=submit;

		function submit(){
			$rootScope.$broadcast('post.created', {
                title:vm.title,
				content:vm.content,
			user:{
					user: Authentication.getAuthenticatedAccount().username
			}				
			});
			$scope.closeThisDialog();
		
			Posts.create(vm.title, vm.content).then(createPostSuccessFn,createPostErrorFn);
			function createPostSuccessFn(data, status,headers,config){
				Snackbar.show('Created.Done');
			}
			function createPostErrorFn(data,status,headers,config){
				$rootScope.$broadcast('post.created.error');
				Snackbar.error(data.error);
			}
		}
	}
})();
