'use strict';
/**
 * @ngdoc overview
 * @name projetAngularApp
 * @description
 * # projetAngularApp
 *
 * Main module of the application.
 */

 var myApp = angular.module('projetAngularApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch'
  ])
 .config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  })
  .when('/Contact', {
    templateUrl: 'views/contact.html',
    controller: 'ContactCtrl'
  })
  .when('/Profil', {
    templateUrl: 'views/profil.html',
    controller: 'ProfilCtrl'
  })
  .when('/Education', {
    templateUrl: 'views/education.html',
    controller: 'EducationCtrl'
  })
  .when('/Portfolio', {
    templateUrl: 'views/portfolio.html',
    controller: 'PortfolioCtrl'
  })
  .when('/Expérience', {
    templateUrl: 'views/experience.html',
    controller: 'ExperienceCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });


});



 myApp.controller('Ctrl', function ($scope,$http,$location ) {
  $scope.awesomeThings = [
  'HTML5 Boilerplate',
  'AngularJS',
  'Karma'
  ];


  $scope.changeView = function(view){
            $location.path(view); // path not hash
         }




        $http.get("data/data.json").success(function(data){
          $scope.data = data;
        });









          $scope.goToProfil = function() {
            $(".v-container").animate({"margin-left":"50vh"},500);

            changerTailleSauf(1);
          };
          $scope.goToEducation = function() {
            $(".v-container").animate({"margin-left":"-30vh"},500);

            changerTailleSauf(2);
          };
          $scope.goToExperience = function() {
            $(".v-container").animate({"margin-left":"-110vh"},1000);

            changerTailleSauf(3);
          };
          $scope.goToPortfolio = function() {
            $(".v-container").animate({"margin-left":"-190vh"},1000);


            changerTailleSauf(4);
          };
          $scope.goToContact = function() {
            $(".v-container").animate({"margin-left":"-260vh"},1000);

            changerTailleSauf(5);
          };

        });






 $(document).ready(function() {
    $('html, body, *').mousewheel(function(e, delta) {
        this.scrollLeft -= (delta * 40);
        e.preventDefault();
    });
});











function changerTailleSauf($scope, Data){
  for(var j = 1; j < 6;i++){
    if(j != Data){
      $("#v-menu-"+$injector+"").animate({"width":"300px","height":"300px","margin-top":"150px"},500);
    }else{

      $("#v-menu-"+j+"").animate({"width":"400px","height":"400px","margin-top":"100px"},500);
    }
  }
}

