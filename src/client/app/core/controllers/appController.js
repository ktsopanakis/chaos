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

    $rootScope.$on('$stateChangeStart', function() {
      $log.debug('stete transition starting');
      $('footer').hide();
    });
    $rootScope.$on('$stateChangeSuccess', function(event) {
      $log.debug('stete transition ending');
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

    $rootScope.toggleFullScreen = function() {
      if (screenfull.enabled) {
        if ($rootScope.fullScreen) {
          screenfull.exit();
        } else {
          screenfull.request();
        }
      }
    };






    if (localStorageService.get('sidebar') !== null) {
      $rootScope.sidebar = localStorageService.get('sidebar');
    } else {
      $rootScope.sidebar = true;
      localStorageService.set('sidebar', true);
    }

    $rootScope.toggleSidebar = function() {
      $log.debug('toggleSidebar');
      if ($rootScope.sidebar) {
        $rootScope.sidebar = false;
        localStorageService.set('sidebar', false);
      } else {
        $rootScope.sidebar = true;
        localStorageService.set('sidebar', true);
      }
    };


    if (localStorageService.get('quickActions') !== null) {
      $rootScope.quickActions = localStorageService.get('quickActions');
    } else {
      $rootScope.quickActions = false;
      localStorageService.set('quickActions', false);
    }

    $rootScope.toggleQuickActions = function() {
      $log.debug('toggleQuickActions');
      if ($rootScope.quickActions) {
        $rootScope.quickActions = false;
        localStorageService.set('quickActions', false);
      } else {
        $rootScope.quickActions = true;
        localStorageService.set('quickActions', true);
      }
    };

  }
})();
