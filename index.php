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

		<!-- Controllers -->
		<script src='script.js'></script>
		<script src='main/main.controller.js'></script>
		<script src='home/home.controller.js'></script>
		<script src='media/media.controller.js'></script>
		<script src='events/events.controller.js'></script>
		<script src='about/about.controller.js'></script>
		<script src='contact/contact.controller.js'></script>

	</head>

	<body ng-app="SiteApp">
		<!-- Main Controller -->
		<div ng-controller="MainController as vm">
			<!-- Nav Bar -->
			<div>
				<div ng-click='vm.setView("Home")'>Home</div>
				<div ng-click='vm.setView("Media")'>Media</div>
				<div ng-click='vm.setView("Events")'>Events</div>
				<div ng-click='vm.setView("Contact")'>Contact</div>
				<div ng-click='vm.setView("About")'>About</div>
			</div>

			<!-- Current View Loaded Here -->
			<div ng-view></div>
	
		</div>
	</body>

</html>	

