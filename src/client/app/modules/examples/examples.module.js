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
              displayName: 'Examples',
              subTitle: 'Home',
              requireGuest: false,
              icon: 'glyphicon-road'
            },
            //requireLogin: true,
            url: '/examples',
            templateUrl: 'app/modules/examples/examples.html',
            controller: 'examplesController'
          })
          .state('bootstrapExamples', {
            data: {
              displayName: 'Bootstrap Examples',
              subTitle: '',
              icon: 'glyphicon-road'
            },
            //requireLogin: true,
            url: '/bootstrapExamples',
            templateUrl: 'app/modules/examples/bootstrapExamples.html',
            controller: 'bootstrapExamplesController'
          })
          .state('formExamples', {
            data: {
              displayName: 'Form Examples',
              subTitle: '',
              icon: 'glyphicon-road'
            },
            //requireLogin: true,
            url: '/formExamples',
            templateUrl: 'app/modules/examples/exampleForm.html',
            controller: 'examplesFormController'
          });
      }
    ])

  .config(['navigationProvider', function(navigationProvider) {
    navigationProvider.addHeaderNavItem({
      name: 'EXAMPLES',
      children: [{
        name: 'EXAMPLE',
        uisref: 'examples'
      }, {
        name: 'BOOTSTRAP EXAMPLES',
        uisref: 'bootstrapExamples'
      }, {
        name: 'FORM EXAMPLES',
        uisref: 'formExamples'
      }]
    });
  }]);
}(angular));
