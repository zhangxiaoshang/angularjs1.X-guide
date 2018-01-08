export default class ServiceController {
	constructor ($scope, http) {
		this.name = 'ServiceController'

		http.getCityList()
	}
}

