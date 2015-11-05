import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config.js';
import pages from './pages';
import templates from './templates.js';
import AppComponents from './directives';
import shared from './shared';

angular.module('app', [uirouter, pages, templates, AppComponents, shared])
  .config(routing);
