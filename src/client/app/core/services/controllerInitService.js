/* global $ */
(function(ng) {
  'use strict';

  ng.module('app.core')
    .factory('controllerInitService', ['$log', function($log) {
      var result = {
        init: function(controller, scope, adminLTEreset) {
          $log.debug(controller.constructor.name + ' has id ' + scope.$id);
          if (adminLTEreset) {
            if ($.AdminLTE.layout !== undefined) {
              $.AdminLTE.layout.activate();
            }
          }
          scope.__name = controller.constructor.name;
        }
      };

      return result;

    }]);
})(angular);
