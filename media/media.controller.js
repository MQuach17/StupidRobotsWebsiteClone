var app = angular.module('SiteApp');

app.controller('MediaController', MediaController );

MediaController.$inject = [ '$scope', '$rootScope', '$route', '$routeParams', '$location', '$window', '$sce' ];

function MediaController ($scope, $rootScope, $route, $routeParams, $location, $window, $sce) {

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

// need to explicitly trust source
    $scope.trustSrc = function(src){
        return $sce.trustAsResourceUrl(src);
    }
// videos
    $scope.videos = [
        {src:"https://www.youtube.com/embed/x9IIfL7hzAo?enablejsapi=1",name:"Lost - The Stupid Robots"},
        {src:"https://www.youtube.com/embed/BHRUO-gcokM?enablejsapi=1",name:"Suburbia - The Stupid Robots"}
    ];
    // default first video
    $scope._VideoIndex = 0;
    // default to first photo
    $scope._PhotoIndex = 0;
    // active Photo index to display
    $scope.isActivePhoto = function(index){
    	return $scope._PhotoIndex === index;
    }

    // active Video index to display
    $scope.isActiveVideo = function(index){
        return $scope._VideoIndex === index;
    }    

    // prev image
    $scope.showPrevPhoto = function(){
    	$scope._PhotoIndex = ($scope._PhotoIndex > 0) ? --$scope._PhotoIndex : $scope.photos.length - 1;
    };

    // next image
    $scope.showNextPhoto = function(){
    	$scope._PhotoIndex = ($scope._PhotoIndex < $scope.photos.length -1) ? ++$scope._PhotoIndex : 0;
    };
    // prev Video
    $scope.showPrevVideo = function(){
        // set new video index, remember the old index to stop the previous video from playing
        var old_index = $scope._VideoIndex;
        $scope._VideoIndex = ($scope._VideoIndex > 0) ? --$scope._VideoIndex : $scope.videos.length - 1;
        var video = document.getElementById("yt-video-"+old_index);
        video.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    };

    // next Video
    $scope.showNextVideo = function(){
        // set new video index, remember the old index to stop the previous video from playing
        var old_index = $scope._VideoIndex;
        $scope._VideoIndex = ($scope._VideoIndex < $scope.videos.length -1) ? ++$scope._VideoIndex : 0;
        var video = document.getElementById("yt-video-"+old_index);
        video.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');  
    };
    // show clicked image
    $scope.showPhoto = function(index){
    	$scope._Index = index;
    }



}

