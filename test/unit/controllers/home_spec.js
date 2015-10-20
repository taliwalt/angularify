import home from '../../../app/src/pages/home';

describe('Controller: Home', function() {
  let $controller;

  beforeEach(angular.mock.module(home));

  beforeEach(angular.mock.inject(function(_$controller_) {
    $controller = _$controller_;
  }));

  it('should exist', function() {
    expect($controller('HomeController')).toBeDefined();
  });

  it('name is initialized to World', function() {
    let ctrl = $controller('HomeController');
    expect(ctrl.name).toBe('World');
  });

  it('should have a mynamecode variable equal to 65c1c47a50f516dc8bbafdd0bbf86895', function() {
    expect($controller('HomeController').mynamecode).toEqual('65c1c47a50f516dc8bbafdd0bbf86895');
  });

  it('should have a \<project\> variable equal to \'AngularJS Project Built With Browserify Using ES6 Technology.\'', function() {
    expect($controller('HomeController').project).toEqual('AngularJS Project Built With Browserify Using ES6 Technology.');
  });
});
