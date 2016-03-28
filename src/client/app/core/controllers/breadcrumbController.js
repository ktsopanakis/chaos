(function(ng) {
  'use strict';

  ng.module('app.core')
    .controller('breadcrumbController', breadcrumbController);

  breadcrumbController.$inject = [
    '$rootScope',
    '$scope',
    '$log'
  ];

  function breadcrumbController($rootScope, $scope, $log) {
    $scope.__name = 'breadcrumbController';
    $log.debug($scope.__name + ' has id ' + $scope.$id);
  }

})(angular);
