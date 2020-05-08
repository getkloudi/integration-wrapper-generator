/**
 * Jira
 * The Jira Cloud Platform REST API
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
    factory(root.expect, root.Jira);
  }
}(this, function(expect, Jira) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Jira.InlineObject10();
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

  describe('InlineObject10', function() {
    it('should create an instance of InlineObject10', function() {
      // uncomment below and update the code to test InlineObject10
      //var instane = new Jira.InlineObject10();
      //expect(instance).to.be.a(Jira.InlineObject10);
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new Jira.InlineObject10();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new Jira.InlineObject10();
      //expect(instance).to.be();
    });

    it('should have the property owner (base name: "owner")', function() {
      // uncomment below and update the code to test the property owner
      //var instane = new Jira.InlineObject10();
      //expect(instance).to.be();
    });

    it('should have the property sharePermissions (base name: "sharePermissions")', function() {
      // uncomment below and update the code to test the property sharePermissions
      //var instane = new Jira.InlineObject10();
      //expect(instance).to.be();
    });

    it('should have the property sharedUsers (base name: "sharedUsers")', function() {
      // uncomment below and update the code to test the property sharedUsers
      //var instane = new Jira.InlineObject10();
      //expect(instance).to.be();
    });

    it('should have the property subscriptions (base name: "subscriptions")', function() {
      // uncomment below and update the code to test the property subscriptions
      //var instane = new Jira.InlineObject10();
      //expect(instance).to.be();
    });

  });

}));
