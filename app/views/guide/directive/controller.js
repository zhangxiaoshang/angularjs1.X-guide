export default class DirectiveController {
	constructor ($scope) {
		$scope.$on('init code', (event, code) => {
			$scope.$apply(this.code = code)
		})
	}
}

DirectiveController.$inject = ['$scope']