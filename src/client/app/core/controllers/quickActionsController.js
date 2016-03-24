(function(ng) {
  'use strict';

  ng.module('app.core')
    .controller('quickActionsController', quickActionsController);

  quickActionsController.$inject = ['$rootScope',
    '$scope'
  ];

  function quickActionsController($rootScope, $scope) {
    $scope.__name = 'quickActionsController';
    console.log($scope.__name+$scope.$id);
  }

})(angular);
