(function(){
	'use strict';
	angular
		.module('app.profiles.controllers')
		.controller('ProfileController',ProfileController);

	ProfileController.$inject=['$location','$routeParams','Profile','Snackbar'];

	function ProfileController($location,$routeParams,Profile,Snackbar){
		var vm =this;
	
		vm.profile = undefined;
	//	vm.posts=[];
		
		activate();
		function activate(){
			
			var username=$routeParams.username.substr(1);
	
			Profile.get(username).then(profileSuccesFn, profileErrorFn);
	//		Posts.get(username).then(postsSuccessFn, postsErrorFn);

			function profileSuccesFn(data, status,headers, config){
				vm.profile =data.data;
				//console.log(vm.profile);
			              }

			function profileErrorFn(data, status,  headers, config){
				$location.url('/');
				Snackbar.error('That user does not exist.');
			}

	//		function postsSuccessFn(data, status, headers, config){
	//			vm.posts =data.data;
	//		}
//
//			function postsErrorFn(data, status, headers, config){
//				Snackbar.error('Error');
//			}
		}
	}
})();
