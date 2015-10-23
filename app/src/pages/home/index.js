import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes.js';
import HomeCtlr from './home.controller.js';
import GreetingDirective from '../../directives/greeting';
import Services from '../../services';

export default angular.module('app.pages.home', [uirouter, GreetingDirective, Services])
  .config(routing)
  .controller('HomeController', HomeCtlr)
  .name;
