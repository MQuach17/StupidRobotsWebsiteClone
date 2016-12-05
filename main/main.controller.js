var app = angular.module('SiteApp');

app.controller('MainController', MainController );

MainController.$inject = [ '$scope', '$rootScope', '$route', '$routeParams', '$location', '$window' ];

function MainController ($scope, $rootScope, $route, $routeParams, $location, $window ) {

	$scope.$route = $route;
    $scope.$location = $location;
    $scope.$routeParams = $routeParams;
	console.log('Main');

    var vm = this;

	vm.setView = setView;

	// Nav Bar Images
	vm.navBarPictureSrc = 'http://stupid-robots.s3.amazonaws.com/top_nav_picture.png';
	vm.stupidRobotsLogoSrc = 'http://stupid-robots.s3.amazonaws.com/stupid_robots_logo.png';
	vm.bolt = 'http://stupid-robots.s3.amazonaws.com/bolt.png';
	

	// Home Images
	vm.bolt_background = 'https://s3.amazonaws.com/stupid-robots/background_bolts.png';
	vm.left_arrow = 'https://s3.amazonaws.com/stupid-robots/left_arrow.png';
	vm.right_arrow = 'https://s3.amazonaws.com/stupid-robots/right_arrow.png';


	// Home Info
	//
	// Upcoming Events
	vm.upcoming_events = [
		{
			name: 'Event 1',
			venue_name: 'Venue A',
			datetime: new Date()
		},{
			name: 'Event 2',
			venue_name: 'Venue B',
			datetime: new Date('09/03/2017')
		},{
			name: 'Event 3',
			venue_name: 'Venue C',
			datetime: new Date('11/30/2017')
		},{
			name: 'Event 4',
			venue_name: 'Venue D',
			datetime: new Date('1/1/2017')
		},{
			name: 'Event 5',
			venue_name: 'Venue E',
			datetime: new Date('2/5/2017')
		},{
            name: 'Event 6',
            venue_name: 'Venue E',
            datetime: new Date('2/5/2017')
        },{
            name: 'Event 7',
            venue_name: 'Venue E',
            datetime: new Date('2/5/2017')
        }
	
	];

	// format dates
	for( var i = 0; i < vm.upcoming_events.length; i++ )
	{
		vm.upcoming_events[i].datetime = moment( vm.upcoming_events[i].datetime ).format('MM/DD @ h:mm a');
	}

	// Tag Line
	vm.tag_line = 'Get stupid with us';

	// Bio
	vm.home_bio = 'Crafted by the idle hands of a crazed and mysterious inventor Dr Leo Shtupid, the Stupid Robots have been an affront to nature since their inception. After spending years in desolate solitude, Dr Shtupid felt the need to entertain himself. He began converting household appliances into autonomous, music-making devices in order to create algorithmically perfect songs.';

	vm.home_bio_2 = 'The underlying algorithms, however, included a disastrous flaw, resulting in erratic originality. The Robots began to groove shamelessly, party enthusiastically, and improvise freely. They had become self aware. Although Dr Shtupid was deeply disappointed by his monstrous creation, he felt unable to decommission them. Instead, he decided to let them loose on the world at large to complete their prime directive: entertainment.';

	// Media Player
	vm.media_link = 'https://www.youtube.com/embed/BHRUO-gcokM';



	function setView( page )
	{
		console.log(page);
		$location.path(page);
	}	


}

