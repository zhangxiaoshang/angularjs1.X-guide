import './index.scss';

function menubar () {
	return {
		restrict: 'E',
		scope: {},
		template: require('./index.html')
	}
}

export default angular.module('directives.menubar', [])
.directive('menubar', menubar)
.name;