import angular from 'angular';
import uirouter from 'angular-ui-router';
import uibootstrap from 'angular-ui-bootstrap';
import nganimate from 'angular-animate';

import AboutCtlr from './about.controller';
import route from './about.route';

export default angular.module('app.pages.about', [ uirouter, uibootstrap, nganimate])
  .config(route)
  .controller('AboutController', AboutCtlr)
  .name;
