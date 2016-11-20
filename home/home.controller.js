var app = angular.module('SiteApp');

app.controller('HomeController', HomeController );

HomeController.$inject = [ '$scope', '$rootScope', '$route', '$routeParams', '$location', '$window' ];

function HomeController ($scope, $rootScope, $route, $routeParams, $location, $window ) {

	$scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;

    var vm = this;

}

