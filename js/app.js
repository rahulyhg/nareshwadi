// JavaScript Document
var firstapp = angular.module('firstapp', [
  'ngRoute',
  'phonecatControllers',
  'templateservicemod',
    'navigationservice'
]);

firstapp.config(['$routeProvider',
  function ($routeProvider) {
        $routeProvider.
        when('/home', {
            templateUrl: 'views/template.html',
            controller: 'home'
        }).
        when('/shop', {
            templateUrl: 'views/template.html',
            controller: 'shop'
        }).
        when('/contact', {
            templateUrl: 'views/template.html',
            controller: 'contact'
        }).
        when('/gallery', {
            templateUrl: 'views/template.html',
            controller: 'gallery'
        }).
        when('/donate', {
            templateUrl: 'views/template.html',
            controller: 'donate'
        }).
        when('/futureproject', {
            templateUrl: 'views/template.html',
            controller: 'futureproject'
        }).
        when('/whatwedo', {
            templateUrl: 'views/template.html',
            controller: 'whatwedo'
        }).
        when('/about', {
            templateUrl: 'views/template.html',
            controller: 'about'
        }).
      
        otherwise({
            redirectTo: '/home'
        });
  }]);

firstapp.filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});