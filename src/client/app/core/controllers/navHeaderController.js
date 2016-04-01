(function(ng) {
  'use strict';

  ng.module('app.core')
    .controller('navHeaderController', navHeaderController);

  navHeaderController.$inject = [
    '$rootScope',
    '$scope',
    '$log',
    'controllerInitService',
    'navigation',
  ];

  function navHeaderController(
    $rootScope,
    $scope,
    $log,
    controllerInitService,
    navigation) {
    /* jshint -W040 */
    controllerInitService.init(this, $scope, false);
    $scope.headerNavItems = navigation.navItems;
  }

})(angular);
