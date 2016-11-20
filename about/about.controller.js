var app = angular.module('SiteApp');

app.controller('AboutController', AboutController );

AboutController.$inject = [ '$scope', '$rootScope', '$route', '$routeParams', '$location', '$window' ];

function AboutController ($scope, $rootScope, $route, $routeParams, $location, $window ) {

	$scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;

    var vm = this;

}

