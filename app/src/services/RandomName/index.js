import angular from 'angular';
import RandomName from './random.name.service';

export default angular.module('app.services.random-name', [])
  .service('RandomName', RandomName)
  .name;
