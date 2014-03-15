'use strict';

angular.module('facetiousGraphGeneratorApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
