var app = angular.module('SiteApp');

app.controller('EventsController', EventsController );

EventsController.$inject = [ '$scope', '$rootScope', '$route', '$routeParams', '$location', '$window' ];

function EventsController ($scope, $rootScope, $route, $routeParams, $location, $window ) {

	$scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;

    var vm = this;

}

