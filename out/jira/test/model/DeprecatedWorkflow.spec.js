/**
 * The Jira Cloud platform REST API
 * Jira Cloud platform REST API documentation
 *
 * The version of the OpenAPI document: 1001.0.0-SNAPSHOT
 * Contact: ecosystem@atlassian.com
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
    instance = new Jira.DeprecatedWorkflow();
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

  describe('DeprecatedWorkflow', function() {
    it('should create an instance of DeprecatedWorkflow', function() {
      // uncomment below and update the code to test DeprecatedWorkflow
      //var instane = new Jira.DeprecatedWorkflow();
      //expect(instance).to.be.a(Jira.DeprecatedWorkflow);
    });

    it('should have the property _default (base name: "default")', function() {
      // uncomment below and update the code to test the property _default
      //var instane = new Jira.DeprecatedWorkflow();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new Jira.DeprecatedWorkflow();
      //expect(instance).to.be();
    });

    it('should have the property lastModifiedDate (base name: "lastModifiedDate")', function() {
      // uncomment below and update the code to test the property lastModifiedDate
      //var instane = new Jira.DeprecatedWorkflow();
      //expect(instance).to.be();
    });

    it('should have the property lastModifiedUser (base name: "lastModifiedUser")', function() {
      // uncomment below and update the code to test the property lastModifiedUser
      //var instane = new Jira.DeprecatedWorkflow();
      //expect(instance).to.be();
    });

    it('should have the property lastModifiedUserAccountId (base name: "lastModifiedUserAccountId")', function() {
      // uncomment below and update the code to test the property lastModifiedUserAccountId
      //var instane = new Jira.DeprecatedWorkflow();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new Jira.DeprecatedWorkflow();
      //expect(instance).to.be();
    });

    it('should have the property scope (base name: "scope")', function() {
      // uncomment below and update the code to test the property scope
      //var instane = new Jira.DeprecatedWorkflow();
      //expect(instance).to.be();
    });

    it('should have the property steps (base name: "steps")', function() {
      // uncomment below and update the code to test the property steps
      //var instane = new Jira.DeprecatedWorkflow();
      //expect(instance).to.be();
    });

  });

}));
