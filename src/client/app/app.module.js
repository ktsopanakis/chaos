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
        $log.warn('[Missing ' + translationID + ']');
        return '[?' + translationID + ']';
      };
    }])


    //TODO: the translations should be stored inn seperate files
  .config(['$translateProvider', function($translateProvider) {
    var translationsEN = {
      HOME: 'Home',
      DASHBOARD: 'Dashboard',
      EXAMPLES: 'Examples',
      SUBTITLE: 'Subtitle translated by angular trnaslate service',
      'GO TO DASHBOARD': 'Go to dashboard',
      'GO TO EXAMPLES': 'Go to example'
    };
    var translationsGR = {
      HOME: 'Αρχική',
      DASHBOARD: 'Κονσόλα',
      EXAMPLES: 'Παραδείγματα',
      SUBTITLE: 'Υποτιτλος μεταφραζμένος από το angular translate service',
      'GO TO DASHBOARD': 'Πήγαινε στη κονσόλα',
      'GO TO EXAMPLES': 'Πήγαινε σστα παραδείγματα'
    };
    $translateProvider
      .translations('en', translationsEN)
      .translations('gr', translationsGR)
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
        });
    }
  ]);
}(angular));
