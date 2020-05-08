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
    instance = new Jira.InlineObject13();
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

  describe('InlineObject13', function() {
    it('should create an instance of InlineObject13', function() {
      // uncomment below and update the code to test InlineObject13
      //var instane = new Jira.InlineObject13();
      //expect(instance).to.be.a(Jira.InlineObject13);
    });

    it('should have the property groupname (base name: "groupname")', function() {
      // uncomment below and update the code to test the property groupname
      //var instane = new Jira.InlineObject13();
      //expect(instance).to.be();
    });

    it('should have the property projectId (base name: "projectId")', function() {
      // uncomment below and update the code to test the property projectId
      //var instane = new Jira.InlineObject13();
      //expect(instance).to.be();
    });

    it('should have the property projectRoleId (base name: "projectRoleId")', function() {
      // uncomment below and update the code to test the property projectRoleId
      //var instane = new Jira.InlineObject13();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new Jira.InlineObject13();
      //expect(instance).to.be();
    });

  });

}));