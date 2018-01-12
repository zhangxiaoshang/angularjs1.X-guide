import './index.scss'

import routes from './routes'
import GuideController from './controller.js'

import dataBind from './dataBind'
import service from './service'
import directive from './directive'

export default angular.module('app.guide', [dataBind, service, directive])
.config(routes)
.controller('GuideController', GuideController)
.name