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
    instance = new Jira.InlineObject27();
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

  describe('InlineObject27', function() {
    it('should create an instance of InlineObject27', function() {
      // uncomment below and update the code to test InlineObject27
      //var instane = new Jira.InlineObject27();
      //expect(instance).to.be.a(Jira.InlineObject27);
    });

    it('should have the property fields (base name: "fields")', function() {
      // uncomment below and update the code to test the property fields
      //var instane = new Jira.InlineObject27();
      //expect(instance).to.be();
    });

    it('should have the property historyMetadata (base name: "historyMetadata")', function() {
      // uncomment below and update the code to test the property historyMetadata
      //var instane = new Jira.InlineObject27();
      //expect(instance).to.be();
    });

    it('should have the property properties (base name: "properties")', function() {
      // uncomment below and update the code to test the property properties
      //var instane = new Jira.InlineObject27();
      //expect(instance).to.be();
    });

    it('should have the property transition (base name: "transition")', function() {
      // uncomment below and update the code to test the property transition
      //var instane = new Jira.InlineObject27();
      //expect(instance).to.be();
    });

    it('should have the property update (base name: "update")', function() {
      // uncomment below and update the code to test the property update
      //var instane = new Jira.InlineObject27();
      //expect(instance).to.be();
    });

  });

}));
