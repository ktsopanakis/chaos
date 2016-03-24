/* global screenfull */
(function() {
  'use strict';

  angular.module('app.core')
    .controller('homeController', homeController);

  homeController.$inject = [
    '$state',
    '$scope',
    '$rootScope'
  ];

  function homeController($state, $scope, $rootScope) {
    $scope.__name = 'homeController';
    console.log($scope.__name+$scope.$id);
  }
})();
