/* global _translations */
(function(ng) {
  'use strict';

  ng.module('app', [
    'app.core',
    'examples',
    'dashboard'
  ]);

  ng.module('app')
    .factory('appCustomHandlerFactory', ['$log', function($log) {
      return function(translationID, uses) {
        $log.warn('[Missing ' + translationID + ' for ' + uses + ']');
        return '[' + uses + '?' + translationID + ']';
      };
    }])

  .config(['$resourceProvider', function($resourceProvider) {
    // Don't strip trailing slashes from calculated URLs
    $resourceProvider.defaults.stripTrailingSlashes = false;
  }])

  .config(['$translateProvider', function($translateProvider) {
    $translateProvider
      .translations('en', _translations.EN)
      .translations('gr', _translations.GR)
      .preferredLanguage('en')
      .useMissingTranslationHandler('appCustomHandlerFactory')
      .useSanitizeValueStrategy('sanitizeParameters');
  }])

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
        })
        .state('settings', {
          data: {
            displayName: 'Settings',
            subTitle: 'Settings',
            requireGuest: false,
            icon: 'glyphicon-road'
          },
          url: '/settings',
          templateUrl: 'app/core/layout/settings.html',
          controller: 'settingsController'
        });
    }
  ]);
}(angular));
