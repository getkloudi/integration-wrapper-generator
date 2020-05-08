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
    instance = new Jira.InlineObject29();
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

  describe('InlineObject29', function() {
    it('should create an instance of InlineObject29', function() {
      // uncomment below and update the code to test InlineObject29
      //var instane = new Jira.InlineObject29();
      //expect(instance).to.be.a(Jira.InlineObject29);
    });

    it('should have the property author (base name: "author")', function() {
      // uncomment below and update the code to test the property author
      //var instane = new Jira.InlineObject29();
      //expect(instance).to.be();
    });

    it('should have the property comment (base name: "comment")', function() {
      // uncomment below and update the code to test the property comment
      //var instane = new Jira.InlineObject29();
      //expect(instance).to.be();
    });

    it('should have the property properties (base name: "properties")', function() {
      // uncomment below and update the code to test the property properties
      //var instane = new Jira.InlineObject29();
      //expect(instance).to.be();
    });

    it('should have the property started (base name: "started")', function() {
      // uncomment below and update the code to test the property started
      //var instane = new Jira.InlineObject29();
      //expect(instance).to.be();
    });

    it('should have the property timeSpent (base name: "timeSpent")', function() {
      // uncomment below and update the code to test the property timeSpent
      //var instane = new Jira.InlineObject29();
      //expect(instance).to.be();
    });

    it('should have the property timeSpentSeconds (base name: "timeSpentSeconds")', function() {
      // uncomment below and update the code to test the property timeSpentSeconds
      //var instane = new Jira.InlineObject29();
      //expect(instance).to.be();
    });

    it('should have the property updateAuthor (base name: "updateAuthor")', function() {
      // uncomment below and update the code to test the property updateAuthor
      //var instane = new Jira.InlineObject29();
      //expect(instance).to.be();
    });

    it('should have the property visibility (base name: "visibility")', function() {
      // uncomment below and update the code to test the property visibility
      //var instane = new Jira.InlineObject29();
      //expect(instance).to.be();
    });

  });

}));
