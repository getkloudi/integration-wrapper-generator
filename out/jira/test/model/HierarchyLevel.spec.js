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
    instance = new Jira.HierarchyLevel();
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

  describe('HierarchyLevel', function() {
    it('should create an instance of HierarchyLevel', function() {
      // uncomment below and update the code to test HierarchyLevel
      //var instane = new Jira.HierarchyLevel();
      //expect(instance).to.be.a(Jira.HierarchyLevel);
    });

    it('should have the property aboveLevelId (base name: "aboveLevelId")', function() {
      // uncomment below and update the code to test the property aboveLevelId
      //var instane = new Jira.HierarchyLevel();
      //expect(instance).to.be();
    });

    it('should have the property belowLevelId (base name: "belowLevelId")', function() {
      // uncomment below and update the code to test the property belowLevelId
      //var instane = new Jira.HierarchyLevel();
      //expect(instance).to.be();
    });

    it('should have the property externalUuid (base name: "externalUuid")', function() {
      // uncomment below and update the code to test the property externalUuid
      //var instane = new Jira.HierarchyLevel();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Jira.HierarchyLevel();
      //expect(instance).to.be();
    });

    it('should have the property issueTypeIds (base name: "issueTypeIds")', function() {
      // uncomment below and update the code to test the property issueTypeIds
      //var instane = new Jira.HierarchyLevel();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new Jira.HierarchyLevel();
      //expect(instance).to.be();
    });

    it('should have the property projectConfigurationId (base name: "projectConfigurationId")', function() {
      // uncomment below and update the code to test the property projectConfigurationId
      //var instane = new Jira.HierarchyLevel();
      //expect(instance).to.be();
    });

  });

}));
