'use strict';

angular.module('facetiousGraphGeneratorApp')
  .controller('StepsCtrl', function ($scope, $routeParams) {
    $scope.id = $routeParams.id;
    $scope.id_next = parseInt($routeParams.id) + 1;
  });

