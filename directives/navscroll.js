var app = angular.module('SiteApp');
/**
 * * Handles resizing of logo when scrolled past the cover photo
 * * 
 * */
app.directive("logoresize", function($window){
	return function(scope, element, attrs){
		angular.element($window).bind("scroll",function(){
			console.log("scrolling");
			if(this.pageYOffset >= 500){
				scope.boolSmall = true;
				console.log("past cover");
			}
			else{
				scope.boolSmall = false;
				console.log("back to cover");
			}
			scope.$apply();
		})
	}
});
app.directive("stickynav", function($window){
	return function(scope, element, attrs){
		angular.element($window).bind("scroll",function(){
			console.log("scrolling");
			if(this.pageYOffset >= 500){
				scope.sticky = true;
				console.log("past cover");
			}
			else{
				scope.sticky = false;
				console.log("back to cover");
			}
			scope.$apply();
		})
	}
});