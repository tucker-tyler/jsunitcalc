var app = angular.module("testApp", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "view/main.htm"
  })
  .when("/temperature", {
    templateUrl : "view/temperature.htm"
  })
  .when("/weight", {
    templateUrl : "view/weight.htm"
  })
  .when("/distance", {
    templateUrl : "view/distance.htm"
  });
});