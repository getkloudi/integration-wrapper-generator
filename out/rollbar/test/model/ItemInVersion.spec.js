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
    instance = new Rollbar.ItemInVersion();
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

  describe('ItemInVersion', function() {
    it('should create an instance of ItemInVersion', function() {
      // uncomment below and update the code to test ItemInVersion
      //var instane = new Rollbar.ItemInVersion();
      //expect(instance).to.be.a(Rollbar.ItemInVersion);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Rollbar.ItemInVersion();
      //expect(instance).to.be();
    });

    it('should have the property projectId (base name: "project_id")', function() {
      // uncomment below and update the code to test the property projectId
      //var instane = new Rollbar.ItemInVersion();
      //expect(instance).to.be();
    });

    it('should have the property counter (base name: "counter")', function() {
      // uncomment below and update the code to test the property counter
      //var instane = new Rollbar.ItemInVersion();
      //expect(instance).to.be();
    });

    it('should have the property environment (base name: "environment")', function() {
      // uncomment below and update the code to test the property environment
      //var instane = new Rollbar.ItemInVersion();
      //expect(instance).to.be();
    });

    it('should have the property platform (base name: "platform")', function() {
      // uncomment below and update the code to test the property platform
      //var instane = new Rollbar.ItemInVersion();
      //expect(instance).to.be();
    });

    it('should have the property framework (base name: "framework")', function() {
      // uncomment below and update the code to test the property framework
      //var instane = new Rollbar.ItemInVersion();
      //expect(instance).to.be();
    });

    it('should have the property hash (base name: "hash")', function() {
      // uncomment below and update the code to test the property hash
      //var instane = new Rollbar.ItemInVersion();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new Rollbar.ItemInVersion();
      //expect(instance).to.be();
    });

    it('should have the property firstOccurrenceId (base name: "first_occurrence_id")', function() {
      // uncomment below and update the code to test the property firstOccurrenceId
      //var instane = new Rollbar.ItemInVersion();
      //expect(instance).to.be();
    });

    it('should have the property firstOccurrenceTimestamp (base name: "first_occurrence_timestamp")', function() {
      // uncomment below and update the code to test the property firstOccurrenceTimestamp
      //var instane = new Rollbar.ItemInVersion();
      //expect(instance).to.be();
    });

    it('should have the property activatingOccurrenceId (base name: "activating_occurrence_id")', function() {
      // uncomment below and update the code to test the property activatingOccurrenceId
      //var instane = new Rollbar.ItemInVersion();
      //expect(instance).to.be();
    });

    it('should have the property lastActivatedTimestamp (base name: "last_activated_timestamp")', function() {
      // uncomment below and update the code to test the property lastActivatedTimestamp
      //var instane = new Rollbar.ItemInVersion();
      //expect(instance).to.be();
    });

    it('should have the property lastResolvedTimestamp (base name: "last_resolved_timestamp")', function() {
      // uncomment below and update the code to test the property lastResolvedTimestamp
      //var instane = new Rollbar.ItemInVersion();
      //expect(instance).to.be();
    });

    it('should have the property lastMutedTimestamp (base name: "last_muted_timestamp")', function() {
      // uncomment below and update the code to test the property lastMutedTimestamp
      //var instane = new Rollbar.ItemInVersion();
      //expect(instance).to.be();
    });

    it('should have the property lastOccurrenceId (base name: "last_occurrence_id")', function() {
      // uncomment below and update the code to test the property lastOccurrenceId
      //var instane = new Rollbar.ItemInVersion();
      //expect(instance).to.be();
    });

    it('should have the property lastOccurrenceTimestamp (base name: "last_occurrence_timestamp")', function() {
      // uncomment below and update the code to test the property lastOccurrenceTimestamp
      //var instane = new Rollbar.ItemInVersion();
      //expect(instance).to.be();
    });

    it('should have the property totalOccurrences (base name: "total_occurrences")', function() {
      // uncomment below and update the code to test the property totalOccurrences
      //var instane = new Rollbar.ItemInVersion();
      //expect(instance).to.be();
    });

    it('should have the property lastModifiedBy (base name: "last_modified_by")', function() {
      // uncomment below and update the code to test the property lastModifiedBy
      //var instane = new Rollbar.ItemInVersion();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new Rollbar.ItemInVersion();
      //expect(instance).to.be();
    });

    it('should have the property level (base name: "level")', function() {
      // uncomment below and update the code to test the property level
      //var instane = new Rollbar.ItemInVersion();
      //expect(instance).to.be();
    });

    it('should have the property integrationsData (base name: "integrations_data")', function() {
      // uncomment below and update the code to test the property integrationsData
      //var instane = new Rollbar.ItemInVersion();
      //expect(instance).to.be();
    });

    it('should have the property assignedUserId (base name: "assigned_user_id")', function() {
      // uncomment below and update the code to test the property assignedUserId
      //var instane = new Rollbar.ItemInVersion();
      //expect(instance).to.be();
    });

    it('should have the property groupItemId (base name: "group_item_id")', function() {
      // uncomment below and update the code to test the property groupItemId
      //var instane = new Rollbar.ItemInVersion();
      //expect(instance).to.be();
    });

    it('should have the property groupStatus (base name: "group_status")', function() {
      // uncomment below and update the code to test the property groupStatus
      //var instane = new Rollbar.ItemInVersion();
      //expect(instance).to.be();
    });

    it('should have the property firstInVersionOccurrenceId (base name: "first_in_version_occurrence_id")', function() {
      // uncomment below and update the code to test the property firstInVersionOccurrenceId
      //var instane = new Rollbar.ItemInVersion();
      //expect(instance).to.be();
    });

    it('should have the property firstInVersionOccurrenceTimestamp (base name: "first_in_version_occurrence_timestamp")', function() {
      // uncomment below and update the code to test the property firstInVersionOccurrenceTimestamp
      //var instane = new Rollbar.ItemInVersion();
      //expect(instance).to.be();
    });

    it('should have the property lastInVersionOccurrenceId (base name: "last_in_version_occurrence_id")', function() {
      // uncomment below and update the code to test the property lastInVersionOccurrenceId
      //var instane = new Rollbar.ItemInVersion();
      //expect(instance).to.be();
    });

    it('should have the property lastInVersionOccurrenceTimestamp (base name: "last_in_version_occurrence_timestamp")', function() {
      // uncomment below and update the code to test the property lastInVersionOccurrenceTimestamp
      //var instane = new Rollbar.ItemInVersion();
      //expect(instance).to.be();
    });

    it('should have the property occurrencesInVersion (base name: "occurrences_in_version")', function() {
      // uncomment below and update the code to test the property occurrencesInVersion
      //var instane = new Rollbar.ItemInVersion();
      //expect(instance).to.be();
    });

    it('should have the property peopleInVersion (base name: "people_in_version")', function() {
      // uncomment below and update the code to test the property peopleInVersion
      //var instane = new Rollbar.ItemInVersion();
      //expect(instance).to.be();
    });

  });

}));
