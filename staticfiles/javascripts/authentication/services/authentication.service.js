/**
 *Authentication
 */

(function () {
	'use strict',

	angular
		.module('app.authentication.services')
		.factory('Authentication',Authentication);

	Authentication.$inject=['$cookies','$http'];

	function Authentication($cookies, $http){
		var Authentication={
			getAuthenticatedAccount:getAuthenticatedAccount,
			isAuthenticated:isAuthenticated,
			setAuthenticatedAccount:setAuthenticatedAccount,
			unauthenticate:unauthenticate,
			login:login,
			register:register,
			logout:logout,
			
		};
		return Authentication;

		function getAuthenticatedAccount(){
			if(!$cookies.get('account')){
				return;
			}
			return JSON.parse($cookies.get('account'));
		}

		function isAuthenticated(){
			return !!$cookies.get('account');
		}

		function register(email, password, username) {
			return $http.post('/api/v1/accounts/',{
				username:username,
				password:password,
				email:email				
			}).then(registerSuccessFn, registerErrorFn);

			function registerSuccessFn(data, status, headers, config){
				Authentication.login(email, password);
			}

			function registerErrorFn(data, status, headers, config){
				console.error('Epic failure!');
			}
		}
		function login( email, password){
			return $http.post('/api/v1/auth/login/',{
				email:email, password:password
			}).then(loginSuccessFn, loginErrorFn);

			function loginSuccessFn(data, status, header, config){
				Authentication.setAuthenticatedAccount(data.data);
				window.location='/';
			}
			function loginErrorFn(data, status, header, config){
				console.error('Epic failure!');
			}
		}
		function logout(){
			return $http.post('/api/v1/auth/logout/')
				.then(logoutSuccessFn, logoutErrorFn);
			
			function logoutErrorFn(data, status, headers,config){
				console.error('Epic failure!');
			}

			function logoutSuccessFn(data, status, headers, config){
				Authentication.unauthenticate();
				window.location ='/';
			}
		}

		function setAuthenticatedAccount(account){
			$cookies.put('account',JSON.stringify(account));
		}

		function unauthenticate(){
			delete $cookies.remove('account');
		}
	}
})();
