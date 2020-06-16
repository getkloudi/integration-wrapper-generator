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
    instance = new Jira.PageBeanDashboard();
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

  describe('PageBeanDashboard', function() {
    it('should create an instance of PageBeanDashboard', function() {
      // uncomment below and update the code to test PageBeanDashboard
      //var instane = new Jira.PageBeanDashboard();
      //expect(instance).to.be.a(Jira.PageBeanDashboard);
    });

    it('should have the property isLast (base name: "isLast")', function() {
      // uncomment below and update the code to test the property isLast
      //var instane = new Jira.PageBeanDashboard();
      //expect(instance).to.be();
    });

    it('should have the property maxResults (base name: "maxResults")', function() {
      // uncomment below and update the code to test the property maxResults
      //var instane = new Jira.PageBeanDashboard();
      //expect(instance).to.be();
    });

    it('should have the property nextPage (base name: "nextPage")', function() {
      // uncomment below and update the code to test the property nextPage
      //var instane = new Jira.PageBeanDashboard();
      //expect(instance).to.be();
    });

    it('should have the property self (base name: "self")', function() {
      // uncomment below and update the code to test the property self
      //var instane = new Jira.PageBeanDashboard();
      //expect(instance).to.be();
    });

    it('should have the property startAt (base name: "startAt")', function() {
      // uncomment below and update the code to test the property startAt
      //var instane = new Jira.PageBeanDashboard();
      //expect(instance).to.be();
    });

    it('should have the property total (base name: "total")', function() {
      // uncomment below and update the code to test the property total
      //var instane = new Jira.PageBeanDashboard();
      //expect(instance).to.be();
    });

    it('should have the property values (base name: "values")', function() {
      // uncomment below and update the code to test the property values
      //var instane = new Jira.PageBeanDashboard();
      //expect(instance).to.be();
    });

  });

}));
