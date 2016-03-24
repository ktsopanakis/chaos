(function(ng) {
  'use strict';

  ng.module('app.core')
    .controller('quickActionsController', quickActionsController);

  quickActionsController.$inject = ['$rootScope',
    '$scope'
  ];

  function quickActionsController($rootScope, $scope) {

    $scope.global = $rootScope;
  }

})(angular);
