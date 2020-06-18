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
    instance = new Jira.TimeTrackingConfiguration();
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

  describe('TimeTrackingConfiguration', function() {
    it('should create an instance of TimeTrackingConfiguration', function() {
      // uncomment below and update the code to test TimeTrackingConfiguration
      //var instane = new Jira.TimeTrackingConfiguration();
      //expect(instance).to.be.a(Jira.TimeTrackingConfiguration);
    });

    it('should have the property defaultUnit (base name: "defaultUnit")', function() {
      // uncomment below and update the code to test the property defaultUnit
      //var instane = new Jira.TimeTrackingConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property timeFormat (base name: "timeFormat")', function() {
      // uncomment below and update the code to test the property timeFormat
      //var instane = new Jira.TimeTrackingConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property workingDaysPerWeek (base name: "workingDaysPerWeek")', function() {
      // uncomment below and update the code to test the property workingDaysPerWeek
      //var instane = new Jira.TimeTrackingConfiguration();
      //expect(instance).to.be();
    });

    it('should have the property workingHoursPerDay (base name: "workingHoursPerDay")', function() {
      // uncomment below and update the code to test the property workingHoursPerDay
      //var instane = new Jira.TimeTrackingConfiguration();
      //expect(instance).to.be();
    });

  });

}));