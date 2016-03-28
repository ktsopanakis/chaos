(function(ng) {
  'use strict';

  ng.module('app.core')
    .controller('quickActionsController', quickActionsController);

  quickActionsController.$inject = [
    '$rootScope',
    '$scope',
    '$log'
  ];

  function quickActionsController($rootScope, $scope, $log) {
    $scope.__name = 'quickActionsController';
    $log.debug($scope.__name + ' has id ' + $scope.$id);
  }

})(angular);
