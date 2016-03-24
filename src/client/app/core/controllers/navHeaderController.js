(function(ng) {
  'use strict';

  ng.module('app.core')
    .controller('navHeaderController', navHeaderController);

  navHeaderController.$inject = ['$rootScope',
    '$scope'
  ];

  function navHeaderController($rootScope, $scope) {

    $scope.global = $rootScope;
  }

})(angular);
