(function(angular) {
  'use strict';
angular.module('SiteApp', ['ngRoute','ngMaterial'])
.run(function($rootScope) {
  /**
  * Nav to social media page
  * @param String name - name of social media site
  * 
  **/
  $rootScope.openSocialMediaLink = function(name){
    var facebook_link = 'https://www.facebook.com/thestupidrobots/';
    var instagram_link = 'https://www.instagram.com/thestupidrobots/';
    var twitter_link = '';    
    var loc;
    if( name == 'facebook' )
    {
      loc = facebook_link;

    } else if( name == 'instagram' ) {

      loc = instagram_link;

    } else if( name == 'twitter' ) {
      
      loc = twitter_link;
    } else {
      
    }

    // open tab
    if( typeof loc !== 'undefined' )
    {
      window.open(loc,'_blank');
    }
  };
})
.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'main/home.html',
    controller: 'MainController',
    controllerAs: 'vm'
  })
  .when('/index.php', {
    templateUrl: 'main/home.html',
    controller: 'MainController',
    controllerAs: 'vm'
  })
  .when('/Home', {
    templateUrl: 'main/home.html',
    controller: 'MainController',
    controllerAs: 'vm'
  })
  .when('/Media', {
    templateUrl: 'media/media.html',
    controller: 'MediaController',
    controllerAs: 'vm'
  })
  .when('/Events', {
    templateUrl: 'events/events.html',
	controller: 'EventsController',
	controllerAs: 'vm'
  })
  .when('/Contact', {
	templateUrl: 'contact/contact.html',
	controller: 'ContactController',
	controllerAs: 'vm'
  })
  .when('/About', {
	templateUrl: 'about/about.html',
	controller: 'AboutController',
	controllerAs: 'vm'
  })
})
.run(function($rootScope, $location, $window) {

    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
		console.log(current);
    });

    angular.element(window).on("resize", function() {
        $rootScope.$apply();
    });

});
})(window.angular);
