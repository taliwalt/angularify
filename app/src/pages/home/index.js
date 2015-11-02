import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './home.routes.js';
import HomeCtlr from './home.controller.js';
import AppDirectives from '../../directives';
import Services from '../../services';

export default angular.module('app.pages.home', [uirouter, AppDirectives, Services])
  .config(routing)
  .controller('HomeController', HomeCtlr)
  .name;
