(function(ng) {
  'use strict';

  ng
    .module('app.core', [
      /* Angular modules */
      'ngAnimate',
      'ngAria',
      'ngSanitize',
      'ngResource',
      'ngRoute',
      'ngCookies',
      'ngMessages',
      'ngTouch',
      /* 3rd-party modules */
      'ui.router',
      'LocalStorageModule'
    ]);

})(angular);
