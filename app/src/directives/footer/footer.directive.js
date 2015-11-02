'use strict';

export default function footerDirective() {
  return {
    restrict: 'E',
    templateUrl: 'directives/footer/footer.html',
    link( scope, elem, attrs){
      scope.mssg = "Footer Directive";
    }
  };
}
