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

  function contentHeaderController($rootScope, $scope, $log, controllerInitService) {
    /* jshint -W040 */
    controllerInitService.init(this, $scope, false);
  }

})(angular);
