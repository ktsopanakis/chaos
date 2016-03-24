(function(ng) {
  'use strict';

  ng.module('app', [
    'app.core',
    'examples',
    'dashboard'
  ]);


  ng.module('app')

  .config(['$logProvider', function($logProvider) {
    $logProvider.debugEnabled(true);
  }])

  .config(['localStorageServiceProvider', function(localStorageServiceProvider) {
    localStorageServiceProvider
      .setPrefix('app')
      .setStorageType('localStorage') //sessionStorage is the otrher option
      .setNotify(true, true);
  }])

  .config([
    '$stateProvider',
    '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');
      $stateProvider
        .state('home', {
          data: {
            displayName: 'Home',
            subTitle: 'Home',
            requireGuest: false,
            icon: 'glyphicon-road'
          },
          url: '/',
          templateUrl: 'app/core/layout/home.html',
          controller: 'homeController'
        });
    }
  ]);
}(angular));


//$rootScope = angular.element(document).scope()
