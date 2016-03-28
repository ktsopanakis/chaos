(function(ng) {
  'use strict';

  ng.module('app.core').directive('quickActionsDirective', quickActionsDirective);

  function quickActionsDirective() {
    return {
      restrict: 'E',
      controller: 'quickActionsController',
      replace: true,
      templateUrl: 'app/core/layout/quickActions.html'
    };
  }
})(angular);
