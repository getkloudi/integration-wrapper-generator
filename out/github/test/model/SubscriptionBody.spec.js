/**
 * GitHub
 * Powerful collaboration, code review, and code management for open source and private projects. 
 *
 * The version of the OpenAPI document: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.GitHub);
  }
}(this, function(expect, GitHub) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new GitHub.SubscriptionBody();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('SubscriptionBody', function() {
    it('should create an instance of SubscriptionBody', function() {
      // uncomment below and update the code to test SubscriptionBody
      //var instane = new GitHub.SubscriptionBody();
      //expect(instance).to.be.a(GitHub.SubscriptionBody);
    });

    it('should have the property ignored (base name: "ignored")', function() {
      // uncomment below and update the code to test the property ignored
      //var instane = new GitHub.SubscriptionBody();
      //expect(instance).to.be();
    });

    it('should have the property subscribed (base name: "subscribed")', function() {
      // uncomment below and update the code to test the property subscribed
      //var instane = new GitHub.SubscriptionBody();
      //expect(instance).to.be();
    });

  });

}));
