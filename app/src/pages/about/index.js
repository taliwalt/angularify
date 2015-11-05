import angular from 'angular';
import uirouter from 'angular-ui-router';

import AboutCtlr from './about.controller';
import route from './about.route';

export default angular.module('app.pages.about', [])
  .config(route)
  .controller('AboutController', AboutCtlr)
  .name;
