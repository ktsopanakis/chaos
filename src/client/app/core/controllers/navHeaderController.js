/* global screenfull */
(function(ng) {
  'use strict';

  ng.module('app.core')
    .controller('navHeaderController', navHeaderController);

  navHeaderController.$inject = [
    '$rootScope',
    '$scope'
  ];

  function navHeaderController($rootScope, $scope) {
    //TODO: the listener does not handle F11
    $scope.global = $rootScope;
    $rootScope.fullScreen = false;
    if (screenfull.enabled) {
      document.addEventListener(screenfull.raw.fullscreenchange, function() {
        $rootScope.fullScreen = screenfull.isFullscreen;
        $rootScope.$apply();
      });
    }

    $scope.toggleFullScreen = function() {
      if (screenfull.enabled) {
        if ($rootScope.fullScreen) {
          screenfull.exit();
        } else {
          screenfull.request();
        }
      }
    };

    $rootScope.sidebar = true;
    $scope.toggleSidebar = function() {
      if ($rootScope.sidebar) {
        $rootScope.sidebar = false;
      } else {
        $rootScope.sidebar = true;
      }
    };

    $rootScope.quickActions = false;
    $scope.toggleQuickActions = function() {
      if ($rootScope.quickActions) {
        $rootScope.quickActions = false;
      } else {
        $rootScope.quickActions = true;
      }
    };
  }

})(angular);
