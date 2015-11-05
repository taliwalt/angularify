import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.route.js';
import HomeCtlr from './home.controller.js';
import Services from '../../services';

export default angular.module('app.pages.home', [uirouter, Services])
  .config(routing)
  .controller('HomeController', HomeCtlr)
  .name;
