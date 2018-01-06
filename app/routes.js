routes.$inject = ['$urlRouterProvider', '$stateProvider', '$locationProvider'];

export default function routes($urlRouterProvider, $stateProvider, $locationProvider) {
	let home = {
		name: 'home',
		url: '/',
		template: require('./views/home/index.html'),
		controller: 'HomeController',
		controllerAs: 'Home'
	}

	let demo = {
		name: 'demo',
		url: '/demo',
		template: require('./views/demo/index.html'),
		constroller: 'DemoController',
		constrollerAs: 'Demo'
	}

	let about = {
		name: 'about',
		url: '/about',
		template: require('./views/about/index.html'),
		controller: 'AboutController',
		controllerAs: 'About'
	}

	// $locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');

	$stateProvider.state(home);
	$stateProvider.state(demo);
	$stateProvider.state(about);
}
