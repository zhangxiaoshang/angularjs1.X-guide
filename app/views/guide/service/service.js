export default class Http {
	constructor ($http) {
		this.$http = $http
	}

	getCityList () {
		this.$http({
			method: 'GET',
			url: 'http://localhost:8080/v2/loc/list',
			params: {
				at:'4758392320.25754',
				token:'PK4hYodeNjMRbxP24orb'
			}
		})
		.then(res => {
			console.log(res)
		}, err => {
			console.log(err)
		})
	}
}

Http.$inject = ['$http']