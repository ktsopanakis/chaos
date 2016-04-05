/* global $ */
(function(ng) {
  'use strict';

  ng.module('examples').controller('examplesFormController',
    examplesFormController);
  examplesFormController.$inject = [
    '$scope',
    '$log',
    '$translate',
    '$rootScope',
    '$resource',
    'controllerInitService'
  ];

  function examplesFormController($scope,
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
