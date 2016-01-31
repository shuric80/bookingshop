(function(){
	'use strict'
	angular
		.module('app.booking.services')
		.factory('Booking',Booking);

	Booking.$inject = ['$http'];

	function Booking($http){
		var Booking ={
			all:all,
			create:create,
			get:get,
			edit:edit,
			view:view
		};
		return Booking;

		function all(){
			return $http.get('/api/v1/booking/');
		}
		function test(){
			return $http.get('/test/');
		}
        function edit(title, content){
			return $http.post('/api/v1/posts/edit/',{
				//		title:title,
				//		content:content,
				//		visible:visible
			});
		}

		function create(user, time, client, phone_client){
			return $http.post('/api/v1/booking/',{
				     		user:user,
		            		time:time,
				            client:client,
				            phone:phone
		  });
		}

		function get(username){
			return $http.get('/api/v1/accounts/'+username+'/booking/');
		}
		function view(id){
			return $http.get('/api/v1/booking/'+id+'/')
		}
	}
})()
