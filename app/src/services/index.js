import angular from 'angular';
import RandomNameService from './RandomName';

export default angular.module('app.services', [RandomNameService])
  .name;
