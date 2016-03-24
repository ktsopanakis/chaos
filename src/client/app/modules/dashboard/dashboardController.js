(function(ng) {
  'use strict';

  ng.module('dashboard').controller('dashboardController',
    dashboardController);
  dashboardController.$inject = ['$scope','$log'];

  function dashboardController($scope,$log) {
    $scope.__name = 'dashboardController';
    $log.debug($scope.__name+' has id '+$scope.$id);
  }
})(angular);
