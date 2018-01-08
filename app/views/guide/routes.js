routes.$inject = ['$urlRouterProvider', '$stateProvider', '$locationProvider']

export default function routes ($urlRouterProvider, $stateProvider) {
	let dataBind = {
		name: 'guide.dataBind',
		url: '/dataBind',
		template: require('./dataBind/index.html'),
		controller: 'DataBindController',
		controllerAs: 'DataBind'
	}

	let service = {
		name: 'guide.service',
		url: '/service',
		template: require('./service/index.html'),
		controller: 'ServiceController',
		controllerAs: 'Service'
	}

	$urlRouterProvider.otherwise('/')

	$stateProvider.state(dataBind)
	$stateProvider.state(service)
}