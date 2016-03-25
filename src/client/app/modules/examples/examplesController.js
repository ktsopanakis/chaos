(function(ng) {
  'use strict';

  ng.module('examples').controller('examplesController',
    examplesController);
  examplesController.$inject = [
    '$scope',
    '$log',
    '$translate',
    '$rootScope'
  ];

  function examplesController($scope, $log, $translate, $rootScope) {
    $scope.__name = 'dashboardController';
    $log.debug($scope.__name + ' has id ' + $scope.$id);

    //TODO: there has to be a better way, instead of writing it 2 times for translate service
    $translate('SUBTITLE').then(function(subtitle) {
      $scope.subtitle = subtitle;
    });
    $rootScope.$on('$translateChangeSuccess', function() {
      $translate('SUBTITLE').then(function(subtitle) {
        $scope.subtitle = subtitle;
      });
    });
  }
})(angular);
