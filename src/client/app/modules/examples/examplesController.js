/* global $ */
(function(ng) {
  'use strict';

  ng.module('examples').controller('examplesController',
    examplesController);
  examplesController.$inject = [
    '$scope',
    '$log',
    '$translate',
    '$rootScope',
    '$resource',
    'controllerInitService'
  ];

  function examplesController($scope,
    $log,
    $translate,
    $rootScope,
    $resource,
    controllerInitService
    ) {

    /* jshint -W040 */
    controllerInitService.init(this, $scope, true);



    /*
        //TODO: there has to be a better way, instead of writing it 2 times for translate service
        $translate('SUBTITLE').then(function(subtitle) {
          $scope.subtitle = subtitle;
        });
        $rootScope.$on('$translateChangeSuccess', function() {
          $translate('SUBTITLE').then(function(subtitle) {
            $scope.subtitle = subtitle;
          });
        });

        var User = $resource('/user/:userId', {
          userId: '@id'
        });
        User.get({
          userId: 123
        }, function(user) {
          user.abc = true;
          user.$save();
        }, function(error) {
          $log.error(error);
        });
        var user2 = new User({
          userId: 13,
          somethign: 'test'
        });
        user2.$save(
          function(a) {
            $log.log('Object saved');
          },
          function(error) {
            $log.error(error);
          }

        );*/

  }
})(angular);
