(function(ng) {
  'use strict';

  ng.module('app.core')
    .controller('navSidebarController', navSidebarController);

  navSidebarController.$inject = ['$rootScope',
    '$scope'
  ];

  function navSidebarController($rootScope, $scope) {
    $scope.__name = 'navSidebarController';
    console.log($scope.__name+$scope.$id);
  }

})(angular);
