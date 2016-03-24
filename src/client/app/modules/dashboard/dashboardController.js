(function(ng) {
  'use strict';

  ng.module('dashboard').controller('dashboardController',
    dashboardController);
  dashboardController.$inject = ['$scope'];

  function dashboardController($scope) {
    console.log('heree');
  }
})(angular);
