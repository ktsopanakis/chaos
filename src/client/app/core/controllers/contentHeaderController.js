(function(ng) {
  'use strict';

  ng.module('app.core')
    .controller('contentHeaderController', contentHeaderController);

  contentHeaderController.$inject = [
    '$rootScope',
    '$scope',
    '$log',
    'controllerInitService'
  ];

  function contentHeaderController($rootScope, $scope, $log,controllerInitService) {
    controllerInitService.init(this,$scope,false);
  }

})(angular);
