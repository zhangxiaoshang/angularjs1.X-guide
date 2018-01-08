import ServiceController from './controller.js'
import Http from './service.js'

export default angular.module('guide.service', [])
.controller('ServiceController', ServiceController)
.factory('http', Http)
.name