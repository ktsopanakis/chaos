(function(ng) {
  'use strict';

  ng.module('app.core')
    .controller('navSidebarController', navSidebarController);

  navSidebarController.$inject = [
    '$rootScope',
    '$scope',
    '$log',
    'controllerInitService'
  ];

  function navSidebarController($rootScope, $scope, $log, controllerInitService) {
    /* jshint -W040 */
    controllerInitService.init(this, $scope, false);
  }

})(angular);

//TODO: whne an open one is chenged to a closed one menu,
//or when you navigat not from the sidebar, the result is not expected
