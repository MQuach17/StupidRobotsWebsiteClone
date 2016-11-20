var app = angular.module('SiteApp');

app.controller('ContactController', ContactController );

ContactController.$inject = [ '$scope', '$rootScope', '$route', '$routeParams', '$location', '$window' ];

function ContactController ($scope, $rootScope, $route, $routeParams, $location, $window ) {

	$scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;

    var vm = this;

}

