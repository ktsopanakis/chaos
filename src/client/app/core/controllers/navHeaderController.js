(function(ng) {
  'use strict';

  ng.module('app.core')
    .controller('navHeaderController', navHeaderController);

  navHeaderController.$inject = [
    '$rootScope',
    '$scope',
    '$log'
  ];

  function navHeaderController($rootScope, $scope,$log) {
    $scope.__name = 'navHeaderController';
    $log.debug($scope.__name+' has id '+$scope.$id);
  }

})(angular);
