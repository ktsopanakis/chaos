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


  //TODO: the translations should be stored inn seperate files
  .config(['$translateProvider', function($translateProvider) {
    var translationsEN = {
      HOME: 'Home',
      DASHBOARD: 'Dashboard',
      EXAMPLES: 'Examples',
      SUBTITLE: 'Subtitle translated by angular trnaslate service',
      'GO TO DASHBOARD': 'Go to dashboard',
      'GO TO EXAMPLES': 'Go to example',
      'OPTIONS':'Options',
      FULLSCREEN:'Fullscreen',
      SIDEBAR:'Sidebar',
      'QUICK ACTIONS':'Quick Actions',
      'SELECT LANGUAGE':'Select Language',
      'SETTINGS':'Settings',
      'BOOTSTRAP EXAMPLES':'Bootstrap Examples'
    };
    var translationsGR = {
      HOME: 'Αρχική',
      DASHBOARD: 'Κονσόλα',
      EXAMPLES: 'Παραδείγματα',
      SUBTITLE: 'Υποτιτλος μεταφραζμένος από το angular translate service',
      'GO TO DASHBOARD': 'Πήγαινε στη κονσόλα',
      'GO TO EXAMPLES': 'Πήγαινε σστα παραδείγματα',
      'OPTIONS':'Επιλογές',
      FULLSCREEN:'Πλήρης οθόνη',
      SIDEBAR:'Αριστερή μπάρα',
      'QUICK ACTIONS':'Γρήγορες ενέργειες',
      'SELECT LANGUAGE':'Επιλογή Γλώσσας',
      'SETTINGS':'Ρυθμίσεις',
      'BOOTSTRAP EXAMPLES':'Παραδειγματα Bootstrap'

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
