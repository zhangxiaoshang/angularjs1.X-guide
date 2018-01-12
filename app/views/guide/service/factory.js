Factory.$inject = ['$http']

function Factory($http) {
	return {
		getHotCities: type => {
			return new Promise((resolve, reject) => {
				$http({
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
							reject(res)
						}
					}, err => {
						reject(err)
					})
			})
		}
	}
}

export { Factory as default }