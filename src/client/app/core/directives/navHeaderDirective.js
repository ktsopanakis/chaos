(function(ng) {
  'use strict';

  ng.module('app.core').directive('navHeaderDirective', navHeaderDirective);

  function navHeaderDirective() {
    return {
      restrict: 'E',
      controller: 'navHeaderController',
      replace: true,
      templateUrl: 'app/core/layout/navHeader.html',
      scope: {}
    };
  }
})(angular);
