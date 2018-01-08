routes.$inject = ['$urlRouterProvider', '$stateProvider', '$locationProvider'];

export default function routes($urlRouterProvider, $stateProvider, $locationProvider) {
	let home = {
		name: 'home',
		url: '/',
		template: require('./views/home/index.html'),
		controller: 'HomeController',
		controllerAs: 'Home'
	}

	let guide = {
		name: 'guide',
		url: '/guide',
		template: require('./views/guide/index.html'),
		controller: 'GuideController',
		controllerAs: 'Guide'
	}

	let about = {
		name: 'about',
		url: '/about',
		template: require('./views/about/index.html'),
		controller: 'AboutController',
		controllerAs: 'About'
	}


	// 使用html5Mode需要在<head></head>添加添加 <base href="/"> 标签
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');

	$stateProvider.state(home);
	$stateProvider.state(guide);
	$stateProvider.state(about);
}
