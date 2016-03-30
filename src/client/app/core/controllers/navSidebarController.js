(function(ng) {
  'use strict';

  ng.module('app.core')
    .controller('navSidebarController', navSidebarController);

  navSidebarController.$inject = [
    '$rootScope',
    '$scope',
    '$log',
    'controllerInitService'
  ];

  function navSidebarController($rootScope, $scope, $log,controllerInitService) {
    /* jshint -W040 */
    controllerInitService.init(this, $scope, false);  }

})(angular);
