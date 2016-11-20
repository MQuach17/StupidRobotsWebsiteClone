var app = angular.module('SiteApp');

app.controller('MainController', MainController );

MainController.$inject = [ '$scope', '$rootScope', '$route', '$routeParams', '$location', '$window' ];

function MainController ($scope, $rootScope, $route, $routeParams, $location, $window ) {

	$scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;

    var vm = this;

}

