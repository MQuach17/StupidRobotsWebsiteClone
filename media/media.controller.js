var app = angular.module('SiteApp');

app.controller('MediaController', MediaController );

MediaController.$inject = [ '$scope', '$rootScope', '$route', '$routeParams', '$location', '$window' ];

function MediaController ($scope, $rootScope, $route, $routeParams, $location, $window ) {

	$scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;

    var vm = this;
// photos
    $scope.photos = [
    	{src: "https://s3.amazonaws.com/stupid-robots/background_bolts.png",desc:"Image 1"},
		{src: "https://s3.amazonaws.com/stupid-robots/stupid_robots_logo.png",desc:"Image 2"},
    	{src: "https://s3.amazonaws.com/stupid-robots/top_nav_picture.png",desc:"Image 3"}
    ];
    // default to first photo
    $scope._Index = 0;
    // active index
    $scope.isActive = function(index){
    	return $scope._Index === index;
    }

    // prev image
    $scope.showPrev = function(){
    	$scope._Index = ($scope._Index > 0) ? --$scope._Index : $.photos.length - 1;
    };

    // next image
    $scope.showNext = function(){
    	$scope._Index = ($scope._Index < $scope.photos.length -1) ? ++$scope._Index : 0;
    };

    // show clicked image
    $scope.showPhoto = function(index){
    	$scope._Index = index;
    }
}

