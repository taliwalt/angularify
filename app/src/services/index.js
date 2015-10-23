import angular from 'angular';
import RandomName from './RandomName';
import EncryptDecrypt from './EncryptDecrypt';

export default angular.module('app.services', [RandomName, EncryptDecrypt])
  .name;
