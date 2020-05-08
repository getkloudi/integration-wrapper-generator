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
    instance = new Jira.InlineObject30();
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

  describe('InlineObject30', function() {
    it('should create an instance of InlineObject30', function() {
      // uncomment below and update the code to test InlineObject30
      //var instane = new Jira.InlineObject30();
      //expect(instance).to.be.a(Jira.InlineObject30);
    });

    it('should have the property comment (base name: "comment")', function() {
      // uncomment below and update the code to test the property comment
      //var instane = new Jira.InlineObject30();
      //expect(instance).to.be();
    });

    it('should have the property inwardIssue (base name: "inwardIssue")', function() {
      // uncomment below and update the code to test the property inwardIssue
      //var instane = new Jira.InlineObject30();
      //expect(instance).to.be();
    });

    it('should have the property outwardIssue (base name: "outwardIssue")', function() {
      // uncomment below and update the code to test the property outwardIssue
      //var instane = new Jira.InlineObject30();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new Jira.InlineObject30();
      //expect(instance).to.be();
    });

  });

}));
