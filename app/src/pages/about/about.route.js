'use strict';

export default function route($stateProvider) {
  $stateProvider
  .state('about', {
    url: '/about',
    templateUrl: 'pages/about/about.html',
    controller: 'AboutController',
    controllerAs: 'about'
  });
}

route.$inject = ['$stateProvider'];
