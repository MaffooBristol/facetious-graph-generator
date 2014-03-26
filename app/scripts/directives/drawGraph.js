'use strict';

angular.module('facetiousGraphGeneratorApp')
  .directive('piechart', function() {
    return {
      link: function(scope, element, attrs) {
        console.log('Linked piechart directive...');

        var s = Snap(element[0]);
        s.attr({width: 400, height: 300});
        var background = s.rect(0, 0, 400, 300);
        background.attr({
          fill: '#eee'
        });
        // var circle = s.circle(150, 150, 100);
        // circle.drag();

        // Snap.load('svgs/test_cube.svg', function (f) {
        //   s.append(f);
        // });

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

        var line = s.polyline(coords.bankrupt._points);

        var timeout = setTimeout(function() {
          line.animate({points: coords.success._points}, 500);
          //
        }, 2000)

        line.attr({
          fill: 'transparent',
          stroke: '#f00',
          strokeWidth: 5
        });
      }
    }
  });
