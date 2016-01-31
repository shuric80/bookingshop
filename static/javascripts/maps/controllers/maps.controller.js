( function (){
	angular
		.module('app.maps.controllers')
		.controller('MapsController',MapsController);
	MapsController.$inject = ['$scope'];
	
	function MapsController($scope){
		console.log('init map');
	};
})();
