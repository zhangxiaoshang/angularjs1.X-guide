import DirectiveController from './controller.js'
import TimerButton from './directive.js'
import RandomCode from './service.js'

export default angular.module('guide.directive', [])
.controller('DirectiveController', DirectiveController)
.service('RandomCode', RandomCode)
.directive('timerButton', TimerButton)
.name
