'use strict';

/**
 * @ngdoc function
 * @name projetAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the projetAngularApp
 */
 angular.module('projetAngularApp')
 .controller('MainCtrl', function ($scope, $http) {
 	$scope.awesomeThings = [
 	'HTML5 Boilerplate',
 	'AngularJS',
 	'Karma'
 	];



  $http.get("data/data.json").success(function(data){
    $scope.data = data;
  });




 	



 });
