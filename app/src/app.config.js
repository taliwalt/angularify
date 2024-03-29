'use strict';

export default function routing($urlRouterProvider, $locationProvider){
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
}

routing.$inject = ['$urlRouterProvider', '$locationProvider'];
