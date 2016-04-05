/* global $ */
(function(ng) {
  'use strict';

  ng.module('examples').controller('examplesFormController',
    examplesFormController);
  examplesFormController.$inject = [
    '$scope',
    '$log',
    '$translate',
    '$rootScope',
    '$resource',
    'controllerInitService'
  ];

  function examplesFormController($scope,
    $log,
    $translate,
    $rootScope,
    $resource,
    controllerInitService
  ) {
    /* jshint -W040 */
    controllerInitService.init(this, $scope, true);

    // KTS
    $('.select2').select2();
    //iCheck for checkbox and radio inputs
    $('input[type="checkbox"].minimal, input[type="radio"].minimal').iCheck({
      checkboxClass: 'icheckbox_minimal-blue',
      radioClass: 'iradio_minimal-blue'
    });
    //Red color scheme for iCheck
    $('input[type="checkbox"].minimal-red, input[type="radio"].minimal-red').iCheck({
      checkboxClass: 'icheckbox_minimal-red',
      radioClass: 'iradio_minimal-red'
    });
    //Flat red color scheme for iCheck
    $('input[type="checkbox"].flat-red, input[type="radio"].flat-red').iCheck({
      checkboxClass: 'icheckbox_flat-green',
      radioClass: 'iradio_flat-green'
    });
    //Colorpicker
    $('.my-colorpicker1').colorpicker();
    //color picker with addon
    $('.my-colorpicker2').colorpicker();

    //Datemask dd/mm/yyyy
    $('#datemask').inputmask('dd/mm/yyyy', {
      'placeholder': 'dd/mm/yyyy'
    });
    //Datemask2 mm/dd/yyyy
    $('#datemask2').inputmask('mm/dd/yyyy', {
      'placeholder': 'mm/dd/yyyy'
    });
    //Money Euro
    $('[data-mask]').inputmask();

  }
})(angular);
