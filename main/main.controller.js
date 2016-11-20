var app = angular.module('SiteApp');

app.controller('MainController', MainController );

MainController.$inject = [ '$scope', '$rootScope', '$route', '$routeParams', '$location', '$window' ];

function MainController ($scope, $rootScope, $route, $routeParams, $location, $window ) {

	$scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
	console.log('Main');

    var vm = this;

	// img
	vm.navBarPictureSrc = 'http://stupid-robots.s3.amazonaws.com/top_nav_picture.png';
	vm.stupidRobotsLogoSrc = 'http://stupid-robots.s3.amazonaws.com/stupid_robots_logo.png';
	vm.bolt = 'http://stupid-robots.s3.amazonaws.com/bolt.png';
	
	vm.setView = setView;

	function setView( page )
	{
		console.log(page);
		$location.path(page);
	}	

}

