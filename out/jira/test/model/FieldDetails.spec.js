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
    instance = new Jira.FieldDetails();
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

  describe('FieldDetails', function() {
    it('should create an instance of FieldDetails', function() {
      // uncomment below and update the code to test FieldDetails
      //var instane = new Jira.FieldDetails();
      //expect(instance).to.be.a(Jira.FieldDetails);
    });

    it('should have the property clauseNames (base name: "clauseNames")', function() {
      // uncomment below and update the code to test the property clauseNames
      //var instane = new Jira.FieldDetails();
      //expect(instance).to.be();
    });

    it('should have the property custom (base name: "custom")', function() {
      // uncomment below and update the code to test the property custom
      //var instane = new Jira.FieldDetails();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Jira.FieldDetails();
      //expect(instance).to.be();
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instane = new Jira.FieldDetails();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new Jira.FieldDetails();
      //expect(instance).to.be();
    });

    it('should have the property navigable (base name: "navigable")', function() {
      // uncomment below and update the code to test the property navigable
      //var instane = new Jira.FieldDetails();
      //expect(instance).to.be();
    });

    it('should have the property orderable (base name: "orderable")', function() {
      // uncomment below and update the code to test the property orderable
      //var instane = new Jira.FieldDetails();
      //expect(instance).to.be();
    });

    it('should have the property schema (base name: "schema")', function() {
      // uncomment below and update the code to test the property schema
      //var instane = new Jira.FieldDetails();
      //expect(instance).to.be();
    });

    it('should have the property scope (base name: "scope")', function() {
      // uncomment below and update the code to test the property scope
      //var instane = new Jira.FieldDetails();
      //expect(instance).to.be();
    });

    it('should have the property searchable (base name: "searchable")', function() {
      // uncomment below and update the code to test the property searchable
      //var instane = new Jira.FieldDetails();
      //expect(instance).to.be();
    });

  });

}));
