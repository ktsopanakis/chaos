(function(ng) {
  'use strict';

  ng.module('app.core')
    .controller('navHeaderController', navHeaderController);

  navHeaderController.$inject = [
    '$rootScope',
    '$scope',
    '$log',
    'controllerInitService'
  ];

  function navHeaderController($rootScope, $scope, $log, controllerInitService) {
    /* jshint -W040 */
    controllerInitService.init(this, $scope, false);
  }

})(angular);
