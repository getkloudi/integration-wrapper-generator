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
    instance = new Jira.InlineResponse20037FieldsTimetracking();
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

  describe('InlineResponse20037FieldsTimetracking', function() {
    it('should create an instance of InlineResponse20037FieldsTimetracking', function() {
      // uncomment below and update the code to test InlineResponse20037FieldsTimetracking
      //var instane = new Jira.InlineResponse20037FieldsTimetracking();
      //expect(instance).to.be.a(Jira.InlineResponse20037FieldsTimetracking);
    });

    it('should have the property originalEstimate (base name: "originalEstimate")', function() {
      // uncomment below and update the code to test the property originalEstimate
      //var instane = new Jira.InlineResponse20037FieldsTimetracking();
      //expect(instance).to.be();
    });

    it('should have the property originalEstimateSeconds (base name: "originalEstimateSeconds")', function() {
      // uncomment below and update the code to test the property originalEstimateSeconds
      //var instane = new Jira.InlineResponse20037FieldsTimetracking();
      //expect(instance).to.be();
    });

    it('should have the property remainingEstimate (base name: "remainingEstimate")', function() {
      // uncomment below and update the code to test the property remainingEstimate
      //var instane = new Jira.InlineResponse20037FieldsTimetracking();
      //expect(instance).to.be();
    });

    it('should have the property remainingEstimateSeconds (base name: "remainingEstimateSeconds")', function() {
      // uncomment below and update the code to test the property remainingEstimateSeconds
      //var instane = new Jira.InlineResponse20037FieldsTimetracking();
      //expect(instance).to.be();
    });

    it('should have the property timeSpent (base name: "timeSpent")', function() {
      // uncomment below and update the code to test the property timeSpent
      //var instane = new Jira.InlineResponse20037FieldsTimetracking();
      //expect(instance).to.be();
    });

    it('should have the property timeSpentSeconds (base name: "timeSpentSeconds")', function() {
      // uncomment below and update the code to test the property timeSpentSeconds
      //var instane = new Jira.InlineResponse20037FieldsTimetracking();
      //expect(instance).to.be();
    });

  });

}));
