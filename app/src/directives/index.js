
import angular from 'angular';
import greetingDirective from './greeting';

export default angular.module('app.directives', [greetingDirective])
  .name;
