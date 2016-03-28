/* global screenfull */
(function() {
  'use strict';

  angular.module('app')
    .controller('homeController', homeController);

  homeController.$inject = [
    '$state',
    '$scope',
    '$rootScope',
    '$log'
  ];

  function homeController($state, $scope, $rootScope, $log) {
    $scope.__name = 'homeController';
    $log.debug($scope.__name + ' has id ' + $scope.$id);
  }
})();
