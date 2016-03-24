(function(ng) {
  'use strict';

  ng.module('dashboard').controller('dashboardController',
    dashboardController);
  dashboardController.$inject = ['$scope'];

  function dashboardController($scope) {
    $scope.__name = 'dashboardController';
    console.log($scope.__name+$scope.$id);
  }
})(angular);
