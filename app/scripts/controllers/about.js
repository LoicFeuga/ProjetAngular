'use strict';

/**
 * @ngdoc function
 * @name projetAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the projetAngularApp
 */

angular.module('projetAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
