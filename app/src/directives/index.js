
import angular from 'angular';
import greetingDirective from './greeting/greeting.directive.js';

export default angular.module('app.directives', [])
  .directive('greeting', greetingDirective)
  .name;
