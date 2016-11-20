var app = angular.module('SiteApp');

app.controller('MediaController', MediaController );

MediaController.$inject = [ '$scope', '$rootScope', '$route', '$routeParams', '$location', '$window' ];

function MediaController ($scope, $rootScope, $route, $routeParams, $location, $window ) {

	$scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;

    var vm = this;

}

