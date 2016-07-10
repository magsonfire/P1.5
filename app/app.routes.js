	// create the module and name it mcPort
	var mcPort = angular.module('mcPort', ['ngRoute']);

	// configure our routes
	mcPort.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'app/components/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'app/components/about.html',
				controller  : 'aboutController'
			})

			// route for the portfolio page
			.when('/portfolio', {
				templateUrl : 'app/components/portfolio.html',
				controller  : 'portfolioController'
			})

			// route for the case-studies page
			.when('/testimonials', {
				templateUrl : 'app/components/case-studies.html',
				controller  : 'case-studiesController'
			})

			// route for the contact page
			.when('/contact', {
				templateUrl : 'app/components/contact.html',
				controller  : 'contactController'
			});
	});

	// create the controller and inject Angular's $scope
	mcPort.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	mcPort.controller('aboutController', function($scope) {
		$scope.message = 'Put things here';
	});

	mcPort.controller('portfolioController', function($scope) {
		$scope.message = 'Works';
	});

	mcPort.controller('case-studiesController', function($scope) {
		$scope.message = 'Case Studies and Clientele';
	});

	mcPort.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});