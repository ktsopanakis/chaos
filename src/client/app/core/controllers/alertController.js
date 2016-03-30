(function(ng) {
  'use strict';

  ng.module('app.core')
    .controller('alertController', alertController);

  alertController.$inject = [
    '$rootScope',
    '$scope',
    '$log',
    'controllerInitService'
  ];

  function alertController($rootScope, $scope, $log, controllerInitService) {
    /* jshint -W040 */
    controllerInitService.init(this, $scope, false);
  }

})(angular);
