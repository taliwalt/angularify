'use strict';

export default function routes($stateProvider){
  $stateProvider
  .state('home', {
      url: '/',
      templateUrl: "pages/home/home.html",
      controller: 'HomeController',
      controllerAs: 'home'
    });
}

routes.$inject = ['$stateProvider'];
