var app = angular.module('SiteApp');

app.controller('MainController', MainController );

MainController.$inject = [ '$scope', '$rootScope', '$route', '$routeParams', '$location', '$window' ];

function MainController ($scope, $rootScope, $route, $routeParams, $location, $window ) {

	$scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
	console.log('Main');

    var vm = this;
	
	vm.setView = setView;

	function setView( page )
	{
		console.log(page);
		$location.path(page);
	}	

}

