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
    instance = new Jira.InlineResponse20037Fields();
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

  describe('InlineResponse20037Fields', function() {
    it('should create an instance of InlineResponse20037Fields', function() {
      // uncomment below and update the code to test InlineResponse20037Fields
      //var instane = new Jira.InlineResponse20037Fields();
      //expect(instance).to.be.a(Jira.InlineResponse20037Fields);
    });

    it('should have the property attachment (base name: "attachment")', function() {
      // uncomment below and update the code to test the property attachment
      //var instane = new Jira.InlineResponse20037Fields();
      //expect(instance).to.be();
    });

    it('should have the property comment (base name: "comment")', function() {
      // uncomment below and update the code to test the property comment
      //var instane = new Jira.InlineResponse20037Fields();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new Jira.InlineResponse20037Fields();
      //expect(instance).to.be();
    });

    it('should have the property issuelinks (base name: "issuelinks")', function() {
      // uncomment below and update the code to test the property issuelinks
      //var instane = new Jira.InlineResponse20037Fields();
      //expect(instance).to.be();
    });

    it('should have the property project (base name: "project")', function() {
      // uncomment below and update the code to test the property project
      //var instane = new Jira.InlineResponse20037Fields();
      //expect(instance).to.be();
    });

    it('should have the property subTasks (base name: "sub-tasks")', function() {
      // uncomment below and update the code to test the property subTasks
      //var instane = new Jira.InlineResponse20037Fields();
      //expect(instance).to.be();
    });

    it('should have the property timetracking (base name: "timetracking")', function() {
      // uncomment below and update the code to test the property timetracking
      //var instane = new Jira.InlineResponse20037Fields();
      //expect(instance).to.be();
    });

    it('should have the property updated (base name: "updated")', function() {
      // uncomment below and update the code to test the property updated
      //var instane = new Jira.InlineResponse20037Fields();
      //expect(instance).to.be();
    });

    it('should have the property watcher (base name: "watcher")', function() {
      // uncomment below and update the code to test the property watcher
      //var instane = new Jira.InlineResponse20037Fields();
      //expect(instance).to.be();
    });

    it('should have the property worklog (base name: "worklog")', function() {
      // uncomment below and update the code to test the property worklog
      //var instane = new Jira.InlineResponse20037Fields();
      //expect(instance).to.be();
    });

  });

}));
