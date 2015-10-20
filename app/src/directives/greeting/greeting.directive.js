'use strict';

export default function greeting() {
  return {
    restrict: 'E',
    scope: {
      name: '='
    },
    templateUrl: 'directives/greeting/greeting.html'
  };
}
