import angular from 'angular';
import NavbarCtrl from './navbar/navbar.controller.js';
import FooterCtlr from  './footer/footer.controller.js';

export default angular.module('app.shared', [])
  .controller('NavbarCtrl', NavbarCtrl)
  .controller('FooterCtlr', FooterCtlr)
  .name;
