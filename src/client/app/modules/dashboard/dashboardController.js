/* global $ */
(function(ng) {
  'use strict';

  ng.module('dashboard').controller('dashboardController',
    dashboardController);
  dashboardController.$inject = ['$scope', '$log','controllerInitService'];

  function dashboardController($scope, $log,controllerInitService) {
    controllerInitService.init(this,$scope, true);
  }
})(angular);
