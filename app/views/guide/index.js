import dataBind from './dataBind'
import service from './service'

import routes from './routes'
import GuideController from './controller.js'

export default angular.module('app.guide', [dataBind, service])
.config(routes)
.controller('GuideController', GuideController)
.name