(function(ng) {
  'use strict';

  ng.module('app.core').directive('alertDirective', alertDirective);

  function alertDirective() {
    return {
      restrict: 'E',
      controller: 'alertController',
      replace: true,
      templateUrl: 'app/core/layout/alert.html'
    };
  }
})(angular);
