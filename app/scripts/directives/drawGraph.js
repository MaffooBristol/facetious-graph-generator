'use strict';

angular.module('fggApp')
  .filter('uppercase', function() {
    return function(text) {
      return text.toUpperCase();
    };
  });

angular.module('fggApp')
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

        // Snap.load('svgs/test_cube.svg', function (f) {
        //   s.append(f);
        // });

        var coords = scope.Coords;

        var line = s.polyline(coords.bankrupt._points);

        var timeout = setTimeout(function() {
          line.animate({points: coords.success._points}, 500);
        }, 2000)

        line.attr({
          fill: 'transparent',
          stroke: '#f00',
          strokeWidth: 5
        });
      }
    }
  });
