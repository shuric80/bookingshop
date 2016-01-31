(function () {
  'use strict';

  angular
    .module('app.layout.controllers')
    .controller('IndexController', IndexController);

  IndexController.$inject = ['$scope', 'Authentication', 'Booking', 'Snackbar'];

  /**
   * @namespace IndexController
   */
  function IndexController($scope, Authentication, Posts, Snackbar) {
    var vm = this;

    vm.isAuthenticated = Authentication.isAuthenticated();
   // vm.posts = [];

    activate();

    /**
     * @name activate
     * @desc Actions to be performed when this controller is instantiated
     * @memberOf thinkster.layout.controllers.IndexController
     */
    function activate() {
     // Posts.all().then(postSuccessFn, postErrorFn);

//		$scope.$on('post.created', function (event, post) {
//		    vm.posts.unshift(post);
   // };

  //    $scope.$on('post.created.error', function () {
   //     vm.posts.shift();
  //    });


      /**
       * @name postsSuccessFn
       * @desc Update thoughts array on view
       */
		function postSuccessFn(data, status, headers, config) {
//			console.log('salon success');
//			vm.posts = data.data;
//			console.debug(vm.posts);
		};


      /**
       * @name postsErrorFn
       * @desc Show snackbar with error
       */
		function postErrorFn(data, status, headers, config) {
			
  //      Snackbar.error(data.error);
      }
    }
  }
})();
