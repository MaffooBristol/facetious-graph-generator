'use strict';

angular.module('fggApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
