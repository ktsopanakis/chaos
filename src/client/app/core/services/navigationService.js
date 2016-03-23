(function(ng) {
  'use strict';

  ng.module('app.core')
    .factory('navigationService', function() {
      var messages = {};
      messages.list = [];
      messages.add = function(message) {
        messages.list.push(message);
      };
      messages.flush = function(message) {
        messages.list = [];
      };
      return messages;
    });
})(angular);
