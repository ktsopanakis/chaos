/* global screenfull */
(function() {
  'use strict';

  //TODO: in header navigation, active selection in both dropdon and main menu to ui-sref-active="active"


  angular.module('app')
    .controller('settingsController', settingsController);

  settingsController.$inject = [
    '$state',
    '$scope',
    '$rootScope',
    '$log',
    'controllerInitService'
  ];

  function settingsController($state, $scope, $rootScope, $log, controllerInitService) {
    /* jshint -W040 */
    controllerInitService.init(this, $scope, false);
  }
})();
