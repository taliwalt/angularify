
import angular from 'angular';
import RandomName from './random.name';

export default angular.module('app.services.random-name', [])
  .service('RandomName', RandomName)
  .name;
