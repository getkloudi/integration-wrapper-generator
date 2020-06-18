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
    instance = new Jira.WorkflowRules();
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

  describe('WorkflowRules', function() {
    it('should create an instance of WorkflowRules', function() {
      // uncomment below and update the code to test WorkflowRules
      //var instane = new Jira.WorkflowRules();
      //expect(instance).to.be.a(Jira.WorkflowRules);
    });

    it('should have the property conditions (base name: "conditions")', function() {
      // uncomment below and update the code to test the property conditions
      //var instane = new Jira.WorkflowRules();
      //expect(instance).to.be();
    });

    it('should have the property postFunctions (base name: "postFunctions")', function() {
      // uncomment below and update the code to test the property postFunctions
      //var instane = new Jira.WorkflowRules();
      //expect(instance).to.be();
    });

    it('should have the property validators (base name: "validators")', function() {
      // uncomment below and update the code to test the property validators
      //var instane = new Jira.WorkflowRules();
      //expect(instance).to.be();
    });

  });

}));