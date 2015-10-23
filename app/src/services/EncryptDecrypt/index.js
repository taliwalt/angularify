import angular from 'angular';
import EncryptDecrypt from './encrypt.decrypt.service';

export default angular.module('app.services.encrypt-decrypt', [])
  .service('EncryptDecrypt', EncryptDecrypt)
  .name;
