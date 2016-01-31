(function(){
	'use strict'
	angular
		.module('app.posts.services')
		.factory('Posts',Posts);

	Posts.$inject = ['$http'];

	function Posts($http){
		var Posts ={
			all:all,
			create:create,
			get:get,
			edit:edit,
			view:view
		};
		return Posts;

		function all(){
			return $http.get('/api/v1/posts/');
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

		function create(title, content){
			return $http.post('/api/v1/posts/',{
            				title:title,
							content:content,
			});
		}

		function get(username){
			return $http.get('/api/v1/posts/'+username+'/posts/');
		}
		function view(id){
			return $http.get('/api/v1/posts/'+id+'/')
		}
	}
})()
