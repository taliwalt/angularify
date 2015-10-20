import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes.js';
import homeCtlr from './home.controller.js';
import GreetingDirective from '../../directives/greeting';
import RandomName from '../../services';

export default angular.module('app.pages.home', [uirouter, GreetingDirective, RandomName])
  .config(routing)
  .controller('HomeController', homeCtlr)
  .name;
