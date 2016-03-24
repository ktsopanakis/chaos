(function(ng) {
  'use strict';

  ng.module('examples', [
    'app'
  ]);

  ng.module('app')
    .config([
      '$stateProvider',
      function($stateProvider) {
        $stateProvider
          .state('examples', {
            data: {
              displayName:'Examples',
              subTitle: 'Home',
              requireGuest: false,
              icon: 'glyphicon-road'
            },
            //requireLogin: true,
            url: '/examples',
            templateUrl: 'app/modules/examples/examples.html',
            controller: 'examplesController'
          });
      }
    ]);

}(angular));
