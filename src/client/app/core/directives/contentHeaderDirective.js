(function(ng) {
  'use strict';

  ng.module('app.core').directive('contentHeaderDirective', contentHeaderDirective);

  function contentHeaderDirective() {
    return {
      restrict: 'E',
      controller: 'contentHeaderController',
      replace: true,
      templateUrl: 'app/core/layout/contentHeader.html'
    };
  }
})(angular);
