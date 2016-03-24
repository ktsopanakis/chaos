/* global screenfull */
(function() {
  'use strict';

  angular.module('app.core')
    .controller('appController', appController);

  appController.$inject = [
    '$state',
    '$scope',
    '$rootScope',
    '$log'
  ];

  function appController($state, $scope, $rootScope,$log) {
    $scope.__name = 'appController';
    $log.debug($scope.__name+' has id '+$scope.$id);

    //TODO: toggled values shoudl persist refreshes, store info locally

    //TODO: the listener does not handle F11
    $rootScope.fullScreen = false;
    if (screenfull.enabled) {
      document.addEventListener(screenfull.raw.fullscreenchange, function() {
        $rootScope.fullScreen = screenfull.isFullscreen;
        $rootScope.$apply();
      });
    }

    $rootScope.toggleFullScreen = function() {
      if (screenfull.enabled) {
        if ($rootScope.fullScreen) {
          screenfull.exit();
        } else {
          screenfull.request();
        }
      }
    };

    $rootScope.sidebar = true;
    $rootScope.toggleSidebar = function() {
      if ($rootScope.sidebar) {
        $rootScope.sidebar = false;
      } else {
        $rootScope.sidebar = true;
      }
    };

    $rootScope.quickActions = false;
    $rootScope.toggleQuickActions = function() {
      if ($rootScope.quickActions) {
        $rootScope.quickActions = false;
      } else {
        $rootScope.quickActions = true;
      }
    };

  }
})();
