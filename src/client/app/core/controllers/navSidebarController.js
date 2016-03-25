(function(ng) {
  'use strict';

  ng.module('app.core')
    .controller('navSidebarController', navSidebarController);

  navSidebarController.$inject = [
    '$rootScope',
    '$scope',
    '$log'
  ];

  function navSidebarController($rootScope, $scope, $log) {
    $scope.__name = 'navSidebarController';
    $log.debug($scope.__name + ' has id ' + $scope.$id);
  }

})(angular);
