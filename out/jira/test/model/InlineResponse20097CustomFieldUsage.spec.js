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
    instance = new Jira.InlineResponse20097CustomFieldUsage();
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

  describe('InlineResponse20097CustomFieldUsage', function() {
    it('should create an instance of InlineResponse20097CustomFieldUsage', function() {
      // uncomment below and update the code to test InlineResponse20097CustomFieldUsage
      //var instane = new Jira.InlineResponse20097CustomFieldUsage();
      //expect(instance).to.be.a(Jira.InlineResponse20097CustomFieldUsage);
    });

    it('should have the property customFieldId (base name: "customFieldId")', function() {
      // uncomment below and update the code to test the property customFieldId
      //var instane = new Jira.InlineResponse20097CustomFieldUsage();
      //expect(instance).to.be();
    });

    it('should have the property fieldName (base name: "fieldName")', function() {
      // uncomment below and update the code to test the property fieldName
      //var instane = new Jira.InlineResponse20097CustomFieldUsage();
      //expect(instance).to.be();
    });

    it('should have the property issueCountWithVersionInCustomField (base name: "issueCountWithVersionInCustomField")', function() {
      // uncomment below and update the code to test the property issueCountWithVersionInCustomField
      //var instane = new Jira.InlineResponse20097CustomFieldUsage();
      //expect(instance).to.be();
    });

  });

}));