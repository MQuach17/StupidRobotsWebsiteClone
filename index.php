<!DOCTYPE html>
<html>

	<head>

		<title>The Stupid Robots</title>
		
		<!-- Angular -->
		<script src="ang/angular/angular.js"></script>
	
		<!-- Angular Route -->
		<script src="ang/angular-route/angular-route.js"></script>
		<script src="ang/angular-aria/angular-aria.js"></script>
		<script src="ang/angular-animate/angular-animate.js"></script>
		<script src="ang/angular-material/angular-material.js"></script>
		
		<!-- Angular Material -->
        <script src="ang/angular-material/angular-material.min.js"></script>
        <link rel="stylesheet" type="text/css" href="ang/angular-material/angular-material.css">  

		<!-- Moment.js -->
		<script src='src/moment/moment.js'></script>

		<!-- Controllers -->
		<script src='script.js'></script>
		<script src='main/main.controller.js'></script>
		<script src='media/media.controller.js'></script>
		<script src='events/events.controller.js'></script>
		<script src='about/about.controller.js'></script>
		<script src='contact/contact.controller.js'></script>

		<!-- Directives -->
		<script src='directives/resize.js'></script>
		<script src='directives/navscroll.js'></script>

		<!-- Style -->
		<link rel="stylesheet" type="text/css" href="style/style.css">

	</head>

	<body ng-app="SiteApp">
		<!-- Main Controller -->
		<div ng-controller="MainController as vm">

			<!-- Top Bar -->
			<div layout="column" layout-align="start start" style='width: 100%; height: {{navHeight}}px;'>
							
				<!-- Picture -->
				<div layout='row' id="navBarPictureBox" style='1px solid black'>
					<!-- <img src="{{vm.navBarPictureSrc}}" id="navBarPicture"> -->
				</div>

				<!-- Nav Bar -->
				<div layout='row' layout-align='space-between center' id='navBar' stickynav ng-class="{stickyNav:sticky}">
			
					<!-- HOME -->
					<div ng-click='vm.setView("Home")' class="nav_item">Home</div>

					<!-- lightening -->
					<div class='bolt_spacer_box'>
						<img src="{{vm.bolt}}"  class='bolt_spacer'>
					</div>

					<!-- MEDIA -->
					<div ng-click='vm.setView("Media")' class="nav_item">Media</div>
				
					<!-- Stupid Robots Nav Logo -->
					<div id="navBarLogoBox" layout='row' logoresize layout-align='center center'>
						<img src="{{vm.stupidRobotsLogoSrc}}" id="navBarLogo" ng-class="{'smallNavLogo' : boolSmall, 'largeNavLogo' : !boolSmall}" >
					</div>
				
					<!-- EVENTS -->
					<div ng-click='vm.setView("Events")' class="nav_item">Events</div>
		
					<!-- lightening -->
					<div class='bolt_spacer_box'>
						<img src="{{vm.bolt}}"  class='bolt_spacer'>
					</div>

					<!-- ABOUT -->
					<div ng-click='vm.setView("About")' class="nav_item">About</div>

				</div><!-- end nav bar -->

			</div>

			<!-- Current View Loaded Here -->
			<div ng-view layout='column' layout-align='start start' style='height: {{windowHeight}}px; ' resizable>


			</div>
	
		</div>
	</body>

</html>	

