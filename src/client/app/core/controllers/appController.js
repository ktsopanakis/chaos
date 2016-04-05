/* global screenfull,$ */
(function() {
  'use strict';

  angular.module('app.core')
    .controller('appController', appController);

  appController.$inject = [
    '$state',
    '$scope',
    '$rootScope',
    '$log',
    'localStorageService',
    '$translate',
    'controllerInitService'
  ];

  function appController($state, $scope, $rootScope, $log, localStorageService, $translate, controllerInitService) {
    /* jshint -W040 */
    controllerInitService.init(this, $scope, false);
    $rootScope.$on('$includeContentLoaded', function(event, templateName) {
      $log.debug(templateName + ' was loaded(ng-include)');
    });
    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
      $log.debug('$on $stateChangeStart from "' + fromState.name + '" to "' + toState.name + '"');
      $('footer').hide();
    });
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
      $log.debug('$on $stateChangeSuccess from "' + fromState.name + '" to "' + toState.name + '"');
      setTimeout(
        function() {
          $('footer').show();
        }, 500
      );
    });

    //TODO: localStorage service that stores information on the server, and reproduces them in next login

    if (localStorageService.get('lang') !== null) {
      $translate.use(localStorageService.get('lang'));
    }

    $rootScope.changeLanguage = function(langKey) {
      //TODO: language preference should be stored, and used in future also

      $log.debug('changing languade to ' + langKey);
      localStorageService.set('lang', langKey);
      $translate.use(langKey);
    };

    //TODO: the 3 bellow $rootscope settings follow the same patern, they should be coded DRY instead of this.
    //TODO: the listener does not handle F11

    $rootScope.fullScreen = false;
    if (screenfull.enabled) {
      document.addEventListener(screenfull.raw.fullscreenchange, function() {
        $rootScope.fullScreen = screenfull.isFullscreen;
        $rootScope.$apply();
      });
    }

    $rootScope.toggleFullScreen = function(checkbox) {
      $log.debug('toggleFullScreen');
      if (checkbox) {
        localStorageService.set('fullScreen', $rootScope.fullScreen);
        if (screenfull.enabled) {
          if ($rootScope.fullScreen) {
            screenfull.request();
          } else {
            screenfull.exit();
          }
        }
      } else {
        if (screenfull.enabled) {
          if ($rootScope.fullScreen) {
            screenfull.exit();
          } else {
            screenfull.request();
          }
        }
      }
    };

    if (localStorageService.get('sidebar') !== null) {
      $rootScope.sidebar = localStorageService.get('sidebar');
    } else {
      $rootScope.sidebar = true;
      localStorageService.set('sidebar', true);
    }

    $rootScope.toggleSidebar = function(checkbox) {
      $log.debug('toggleSidebar');
      if (checkbox) {
        localStorageService.set('sidebar', $rootScope.sidebar);
      } else {
        if ($rootScope.sidebar) {
          $rootScope.sidebar = false;
          localStorageService.set('sidebar', false);
        } else {
          $rootScope.sidebar = true;
          localStorageService.set('sidebar', true);
        }
      }

    };

    if (localStorageService.get('quickActions') !== null) {
      $rootScope.quickActions = localStorageService.get('quickActions');
    } else {
      $rootScope.quickActions = false;
      localStorageService.set('quickActions', false);
    }

    $rootScope.toggleQuickActions = function(checkbox) {
      $log.debug('toggleQuickActions');
      if (checkbox) {
        localStorageService.set('quickActions', $rootScope.quickActions);
      } else {
        if ($rootScope.quickActions) {
          $rootScope.quickActions = false;
          localStorageService.set('quickActions', false);
        } else {
          $rootScope.quickActions = true;
          localStorageService.set('quickActions', true);
        }
      }
    };
  }
})();
