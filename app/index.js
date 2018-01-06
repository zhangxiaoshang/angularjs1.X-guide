import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './commons.scss';

import angular from 'angular';
import uirouter from 'angular-ui-router';

import routers from './routes';

import menubar from './components/menubar';
import home from './views/home';
import demo from './views/demo';
import about from './views/about';

angular.module('app', [uirouter, menubar, home, demo, about])
.config(routers);
