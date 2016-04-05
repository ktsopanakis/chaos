/* global $ */
(function(ng) {
  'use strict';

  ng.module('examples').controller('examplesController',
    examplesController);
  examplesController.$inject = [
    '$scope',
    '$log',
    '$translate',
    '$rootScope',
    '$resource',
    'controllerInitService'
  ];

  function examplesController($scope,
    $log,
    $translate,
    $rootScope,
    $resource,
    controllerInitService
  ) {
    /* jshint -W040 */
    controllerInitService.init(this, $scope, true);
  }
})(angular);
