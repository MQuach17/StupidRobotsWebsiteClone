(function(angular) {
  'use strict';
angular.module('SiteApp', ['ngRoute','ngMaterial'])
.run(function($rootScope) {
})
.config(function($routeProvider, $locationProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'home/home.html',
    controller: 'MainController',
    controllerAs: 'vm'
  })
  .when('/Home', {
    templateUrl: 'home/home.html',
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
  .when('/ContactUs', {
	templateUrl: 'contact/contact.html',
	controller: 'ContactController',
	controllerAs: 'vm'
  })
  .when('/About', {
	templateUrl: 'about/about.html',
	controller: 'AboutController',
	controllerAs: 'vm'
  })
.otherwise({
    redirectTo: '/home.html'
  });
})
.run(function($rootScope, $location, $window) {

    $rootScope.$on( "$routeChangeStart", function(event, next, current) {

    });

    angular.element(window).on("resize", function() {
        $rootScope.$apply();
    });

});
})(window.angular);
