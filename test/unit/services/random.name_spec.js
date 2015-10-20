import srvc from '../../../app/src/services/RandomName';

describe('Unit: RandomName Service', function() {

  let service;

  beforeEach(angular.mock.module(srvc));

  beforeEach(angular.mock.inject(function(RandomName) {
    service = RandomName;
  }));

  it('should exist', function() {
    expect(service).toBeDefined();
  });

});
