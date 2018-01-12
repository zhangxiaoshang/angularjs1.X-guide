let TimerButton = function (RandomCode) {
	return {
		restrict: 'E',
		template: "<button class='btn btn-primary'>{{btnText}}</button>",
		scope: {
		},
		link: (scope, element, attrs) => {
			scope.btnText = '获取验证码'

			element.bind('click', () => {
				scope.$emit('init code', RandomCode.initCode())
			})
		}
	}
}

export { TimerButton as default }

TimerButton.$inject = ['RandomCode']