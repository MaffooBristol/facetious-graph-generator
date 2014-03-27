'use strict';

angular.module('fggApp')
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
