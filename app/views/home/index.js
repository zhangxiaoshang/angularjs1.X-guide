import './index.scss';

import HomeController from './controller.js';

export default angular.module('app.home', [])
.controller('HomeController', HomeController)
.name