import ServiceController from './controller.js'
import Service from './service.js'
import Factory from './factory.js'

export default angular.module('guide.service', [])
.controller('ServiceController', ServiceController)
.service('service', Service)
.factory('factory', Factory)
.name