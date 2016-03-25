(function(ng) {
  'use strict';

  ng.module('app.core')
    .controller('alertController', alertController);

  alertController.$inject = [
    '$rootScope',
    '$scope',
    '$log'
  ];

  function alertController($rootScope, $scope, $log) {
    $scope.__name = 'alertController';
    $log.debug($scope.__name + ' has id ' + $scope.$id);
  }

})(angular);
