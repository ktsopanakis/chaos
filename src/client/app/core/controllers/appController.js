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

    // hides the footer, so that during the transition it will not appear on top
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

    var setToggleValue = function($rootScope, localStorageService, name, verb, defaultValue) {
      if (localStorageService.get(name) !== null) {
        $rootScope[name] = localStorageService.get(name);
      } else {
        $rootScope[name] = defaultValue;
        localStorageService.set(name, defaultValue);
      }

      $rootScope[verb] = function(checkbox) {
        $log.debug(verb);
        if (checkbox) {
          localStorageService.set(name, $rootScope[name]);
        } else {
          if ($rootScope[name]) {
            $rootScope[name] = defaultValue;
            localStorageService.set(name, defaultValue);
          } else {
            $rootScope[name] = !defaultValue;
            localStorageService.set(name, !defaultValue);
          }
        }
      };
    };

    setToggleValue($rootScope, localStorageService, 'quickActions', 'toggleQuickActions', false);
    setToggleValue($rootScope, localStorageService, 'sidebar', 'toggleSidebar', true);

    //TODO: the listener does not handle F11 and it almost fits the above toggles but needds work
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

  }
})();
