/*global browser, by */

'use strict';

describe('E2E: Example', function() {

  beforeEach(function() {
    browser.get('/');
    browser.waitForAngular();
  });

  it('should route correctly', function() {
    expect(browser.getLocationAbsUrl()).toMatch('/');
  });

  it('should show the number defined in the controller', function() {
    var element = browser.findElement(by.css('.name-code'));
    expect(element.getText()).toEqual('65c1c47a50f516dc8bbafdd0bbf86895');
  });

});
