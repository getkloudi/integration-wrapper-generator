/**
 * Rollbar API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
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
    factory(root.expect, root.Rollbar);
  }
}(this, function(expect, Rollbar) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Rollbar.ProjectVersion();
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

  describe('ProjectVersion', function() {
    it('should create an instance of ProjectVersion', function() {
      // uncomment below and update the code to test ProjectVersion
      //var instane = new Rollbar.ProjectVersion();
      //expect(instance).to.be.a(Rollbar.ProjectVersion);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Rollbar.ProjectVersion();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instane = new Rollbar.ProjectVersion();
      //expect(instance).to.be();
    });

    it('should have the property environment (base name: "environment")', function() {
      // uncomment below and update the code to test the property environment
      //var instane = new Rollbar.ProjectVersion();
      //expect(instance).to.be();
    });

    it('should have the property dateCreated (base name: "date_created")', function() {
      // uncomment below and update the code to test the property dateCreated
      //var instane = new Rollbar.ProjectVersion();
      //expect(instance).to.be();
    });

    it('should have the property firstVersionOccurrenceId (base name: "first_version_occurrence_id")', function() {
      // uncomment below and update the code to test the property firstVersionOccurrenceId
      //var instane = new Rollbar.ProjectVersion();
      //expect(instance).to.be();
    });

    it('should have the property firstOccurrenceTimestamp (base name: "first_occurrence_timestamp")', function() {
      // uncomment below and update the code to test the property firstOccurrenceTimestamp
      //var instane = new Rollbar.ProjectVersion();
      //expect(instance).to.be();
    });

    it('should have the property lastOccurrenceId (base name: "last_occurrence_id")', function() {
      // uncomment below and update the code to test the property lastOccurrenceId
      //var instane = new Rollbar.ProjectVersion();
      //expect(instance).to.be();
    });

    it('should have the property lastOccurrenceTimestamp (base name: "last_occurrence_timestamp")', function() {
      // uncomment below and update the code to test the property lastOccurrenceTimestamp
      //var instane = new Rollbar.ProjectVersion();
      //expect(instance).to.be();
    });

    it('should have the property deployedBy (base name: "deployed_by")', function() {
      // uncomment below and update the code to test the property deployedBy
      //var instane = new Rollbar.ProjectVersion();
      //expect(instance).to.be();
    });

    it('should have the property lastDeployTimestamp (base name: "last_deploy_timestamp")', function() {
      // uncomment below and update the code to test the property lastDeployTimestamp
      //var instane = new Rollbar.ProjectVersion();
      //expect(instance).to.be();
    });

    it('should have the property itemStats (base name: "item_stats")', function() {
      // uncomment below and update the code to test the property itemStats
      //var instane = new Rollbar.ProjectVersion();
      //expect(instance).to.be();
    });

    it('should have the property commits (base name: "commits")', function() {
      // uncomment below and update the code to test the property commits
      //var instane = new Rollbar.ProjectVersion();
      //expect(instance).to.be();
    });

  });

}));