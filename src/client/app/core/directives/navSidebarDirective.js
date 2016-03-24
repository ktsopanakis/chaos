(function(ng) {
  'use strict';

  ng.module('app.core').directive('navSidebarDirective', navSidebarDirective);

  function navSidebarDirective() {
    return {
      restrict: 'E',
      controller: 'navSidebarController',
      replace: true,
      templateUrl: 'app/core/layout/navSidebar.html',
      scope: {}
    };
  }
})(angular);
