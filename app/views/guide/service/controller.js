export default class ServiceController {
	constructor($scope, service, factory) {
		this.$scope = $scope
		this.service = service
		this.factory = factory

		this.location = null
		this.hotCities = []

		this.initLocation()
		this.initHotCitiey()
	}

	initLocation () {
		this.service.getLocation('guess')
			.then(result => {
				this.location = result
				this.$scope.$apply()
			}, err => {
				console.log('fail', err)
			})
	}

	initHotCitiey () {
		this.factory.getHotCities('hot')
			.then(result => {
				this.hotCities = result
				this.$scope.$apply()
			})
	}
}

ServiceController.$inject = ['$scope', 'service', 'factory']
