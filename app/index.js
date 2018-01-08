import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './commons.scss';

import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import routers from './routes';

import menubar from './components/menubar';

import home from './views/home';
import guide from './views/guide';
import about from './views/about';

angular.module('app', [uirouter, menubar, home, guide, about])
.config(routers);
