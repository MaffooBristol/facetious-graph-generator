'use strict';

angular.module('fggApp')
  .controller('StepsCtrl', function ($scope, Coords, $routeParams) {
    $scope.id = $routeParams.id;
    $scope.id_next = parseInt($routeParams.id) + 1;

    $scope.Coords = Coords;
  });

