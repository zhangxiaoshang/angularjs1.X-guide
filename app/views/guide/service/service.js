export default class Http {
	constructor ($http) {
		this.$http = $http
	}

	getLocation (type) {
		return new Promise ((resolve, reject) => {
			this.$http({
				method: 'GET',
				url: 'http://localhost:8080/v1/cities',
				params: {
					type: type
				}
			})
			.then(res => {
				if (res.status === 200) {
					resolve(res.data)					
				} else {
					reject (res)
				}
			}, err => {
				reject(err)
			})
		})
	}
}

Http.$inject = ['$http']