(function(ng) {
  'use strict';

  ng.module('examples').controller('examplesController',
    examplesController);
  examplesController.$inject = ['$scope'];

  function examplesController($scope) {
    console.log('heree2');
  }
})(angular);
