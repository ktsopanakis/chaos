(function() {
  'use strict';

  angular.module('app.core')
    .controller('appController', appController);

  appController.$inject = [
    '$state',
    '$scope',
    '$rootScope'
  ];

  function appController($state, $scope, $rootScope) {
    $scope.global = $rootScope;

  }
})();
