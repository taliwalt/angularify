
import angular from 'angular';
import greetingDirective from './greeting/greeting.directive.js';
import footerComponent from './footer/footer.directive.js';

export default angular.module('app.directives', [])
  .directive('greeting', greetingDirective)
  .directive('footerComponent', footerComponent)
  .name;
