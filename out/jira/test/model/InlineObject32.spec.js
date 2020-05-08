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
    instance = new Jira.InlineObject32();
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

  describe('InlineObject32', function() {
    it('should create an instance of InlineObject32', function() {
      // uncomment below and update the code to test InlineObject32
      //var instane = new Jira.InlineObject32();
      //expect(instance).to.be.a(Jira.InlineObject32);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Jira.InlineObject32();
      //expect(instance).to.be();
    });

    it('should have the property inward (base name: "inward")', function() {
      // uncomment below and update the code to test the property inward
      //var instane = new Jira.InlineObject32();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new Jira.InlineObject32();
      //expect(instance).to.be();
    });

    it('should have the property outward (base name: "outward")', function() {
      // uncomment below and update the code to test the property outward
      //var instane = new Jira.InlineObject32();
      //expect(instance).to.be();
    });

  });

}));
