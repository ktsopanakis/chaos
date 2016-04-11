/* global screenfull,$ */
(function() {
  'use strict';

  angular.module('app')
    .controller('homeController', homeController);

  homeController.$inject = [
    '$state',
    '$scope',
    '$rootScope',
    '$log',
    'controllerInitService'
  ];

  function homeController($state, $scope, $rootScope, $log, controllerInitService) {
    /* jshint -W040 */
    controllerInitService.init(this, $scope, true);
    $scope.title = 'sometitle';
  }
})();
