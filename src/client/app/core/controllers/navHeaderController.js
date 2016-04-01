(function(ng) {
  'use strict';

  ng.module('app.core')
    .controller('navHeaderController', navHeaderController);

  navHeaderController.$inject = [
    '$rootScope',
    '$scope',
    '$log',
    'controllerInitService',
    'navigationService'

  ];

  function navHeaderController($rootScope, $scope, $log, controllerInitService,navigationService) {
    /* jshint -W040 */
    controllerInitService.init(this, $scope, false);
    $scope.headerNavItems = navigationService.headerNavItems;
  }

})(angular);
