'use strict';
var x = 123;
angular.module('fggApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'partials/login',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
        templateUrl: 'partials/signup',
        controller: 'SignupCtrl'
      })
      .when('/settings', {
        templateUrl: 'partials/settings',
        controller: 'SettingsCtrl',
        authenticate: true
      })
      .when('/step/:id', {
        templateUrl: 'partials/steps',
        controller: 'StepsCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

    // Intercept 401s and redirect you to login
    $httpProvider.interceptors.push(['$q', '$location', function($q, $location) {
      return {
        'responseError': function(response) {
          if (response.status === 401) {
            $location.path('/login');
            return $q.reject(response);
          }
          else {
            return $q.reject(response);
          }
        }
      };
    }]);
  })
  .run(function ($rootScope, $location, Auth) {

    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$routeChangeStart', function (event, next) {

      if (next.authenticate && !Auth.isLoggedIn()) {
        $location.path('/login');
      }
    });
  })
  .factory('Coords', function() {
    var coords = {};
    coords.bankrupt = {};
    coords.bankrupt._meta = {
      title: 'Bankrupt'
    , category: 'lines'
    , weight: 0
    }
    coords.bankrupt._points = [
      [20, 20]
    , [80, 40]
    , [140, 100]
    , [200, 110]
    , [260, 140]
    , [320, 160]
    , [380, 290]
    ];

    coords.success = {};
    coords.success._meta = {
      title: 'Success'
    , category: 'lines'
    , weight: 1
    }
    coords.success._points = [
      [20, 280]
    , [80, 260]
    , [140, 200]
    , [200, 190]
    , [260, 160]
    , [320, 140]
    , [380, 10]
    ];
    return coords;
  });
