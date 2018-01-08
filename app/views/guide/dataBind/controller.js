export default class DataBindController {
	constructor ($scope) {
		$scope.qty = 1
		$scope.cost = 2

		this.qty = 2
		this.cost = 3

		console.log("====== DataBindController 中的 $scope ======")
		console.log($scope)
		console.log("====== 可以看到，绑定到别名上的变量，相当于将别名绑定$scope上，然后将其他变量绑定到这个别名对象上 ======")
	}
}

DataBindController.$inject = ['$scope']