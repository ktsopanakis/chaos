(function(ng) {
  'use strict';

  ng.module('dashboard', [
    'app'
  ]);

  ng.module('app')
    .config([
      '$stateProvider',
      '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {
        $stateProvider
          .state('dashboard', {
            data: {
              displayName: 'Exam',
              subTitle: 'Home',
              requireGuest: false,
              icon: 'glyphicon-road'
            },
            //requireLogin: true,
            url: '/dashboard',
            templateUrl: 'app/modules/dashboard/dashboard.html',
            controller: 'dashboardController'
          });
      }
    ]);

}(angular));
