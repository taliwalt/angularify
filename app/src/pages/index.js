import angular from 'angular';
import home from './home';
import about from './about';

export default angular.module('app.pages', [home, about])
  .name;
