/* global $ */
(function(ng) {
  'use strict';

  //TODO: have to make the   loading screen a bti better

  ng.module('examples').controller('examplesController',
    examplesController);
  examplesController.$inject = [
    '$scope',
    '$log',
    '$translate',
    '$rootScope',
    '$resource'
  ];

  function examplesController($scope, $log, $translate, $rootScope, $resource) {
    $scope.__name = 'examplesController';
    $log.debug($scope.__name + ' has id ' + $scope.$id);

    //TODO: the icons of the forms appear in the first field only, cannot understand why

    $scope.schema = {
      'type': 'object',
      'title': 'Comment',
      'required': [
        'comments'
      ],
      'properties': {
        'comments': {
          'type': 'array',
          'maxItems': 2,
          'items': {
            'type': 'object',
            'properties': {
              'name': {
                'title': 'Name',
                'type': 'string'
              },
              'email': {
                'title': 'Email',
                'type': 'string',
                'pattern': '^\\S+@\\S+$',
                'description': 'Email will be used for evil.'
              },
              'spam': {
                'title': 'Spam',
                'type': 'boolean',
                'default': true
              },
              'comment': {
                'title': 'Comment',
                'type': 'string',
                'maxLength': 20,
                'validationMessage': 'Don\'t be greedy!'
              }
            },
            'required': [
              'name',
              'comment'
            ]
          }
        }
      }
    };

    $scope.form = [{
      'type': 'help',
      'helpvalue': '<h4>Array Example</h4><p>Try adding a couple of forms, reorder by drag\'n\'drop.</p>'
    }, {
      'key': 'comments',
      'add': 'New',
      'style': {
        'add': 'btn-success'
      },
      'items': [
        'comments[].name',
        'comments[].email', {
          'key': 'comments[].spam',
          'type': 'checkbox',
          'title': 'Yes I want spam.',
          'condition': 'model.comments[arrayIndex].email'
        }, {
          'key': 'comments[].comment',
          'type': 'textarea'
        }
      ]
    }, {
      'type': 'submit',
      'style': 'btn-info',
      'title': 'OK'
    }];

    $scope.model = {};


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

    );

  }
})(angular);
