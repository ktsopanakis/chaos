(function(ng) {
  'use strict';

  ng.module('app.core').directive('breadcrumbDirective', breadcrumbDirective);

  function breadcrumbDirective() {
    return {
      restrict: 'E',
      controller: 'breadcrumbController',
      replace: true,
      templateUrl: 'app/core/layout/breadcrumb.html'
    };
  }
})(angular);
