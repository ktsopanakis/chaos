(function(ng) {
  'use strict';

  ng.module('app.core')
    .controller('quickActionsController', quickActionsController);

  quickActionsController.$inject = [
    '$rootScope',
    '$scope',
    '$log',
    'controllerInitService'
  ];

  function quickActionsController($rootScope, $scope, $log, controllerInitService) {
    /* jshint -W040 */
    controllerInitService.init(this, $scope, false);
  }

})(angular);
