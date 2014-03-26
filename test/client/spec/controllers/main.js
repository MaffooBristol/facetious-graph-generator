'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('fccApp'));

  var MainCtrl,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

});

describe('filter', function () {
  beforeEach(module('fccApp'));

  describe('uppercase', function () {
    it('should make it uppercase', inject(function (_filter) {
      expect(_filter('abcde')).toEqual('edcba');
    }));
  });
});
