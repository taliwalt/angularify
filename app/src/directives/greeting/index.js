
import angular from 'angular';
import greeting from './greeting.directive.js';

export default angular.module('app.directives.greeting', [])
  .directive('greeting', greeting)
  .name;
