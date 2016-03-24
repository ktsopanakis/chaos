(function(ng) {
  'use strict';

  ng.module('examples').controller('examplesController',
    examplesController);
  examplesController.$inject = [
    '$scope',
    '$log'
  ];

  function examplesController($scope, $log) {
    $scope.__name = 'dashboardController';
    $log.debug($scope.__name + ' has id ' + $scope.$id);
  }
})(angular);
