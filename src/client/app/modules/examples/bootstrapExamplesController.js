(function(ng) {
  'use strict';

  ng.module('examples').controller('bootstrapExamplesController',
    bootstrapExamplesController);
  bootstrapExamplesController.$inject = [
    '$scope',
    '$log',
    '$translate',
    '$rootScope',
    'controllerInitService'
  ];

  function bootstrapExamplesController($scope, $log, $translate, $rootScope,controllerInitService) {
    /* jshint -W040 */
    controllerInitService.init(this, $scope, true);
  }
})(angular);
