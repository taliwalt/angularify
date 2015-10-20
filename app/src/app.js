
import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config.js';
import pages from './pages';
import templates from './templates.js';

angular.module('app', [uirouter, pages, templates])
  .config(routing);
