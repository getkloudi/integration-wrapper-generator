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
    instance = new Jira.IssuePickerSuggestionsIssueType();
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

  describe('IssuePickerSuggestionsIssueType', function() {
    it('should create an instance of IssuePickerSuggestionsIssueType', function() {
      // uncomment below and update the code to test IssuePickerSuggestionsIssueType
      //var instane = new Jira.IssuePickerSuggestionsIssueType();
      //expect(instance).to.be.a(Jira.IssuePickerSuggestionsIssueType);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Jira.IssuePickerSuggestionsIssueType();
      //expect(instance).to.be();
    });

    it('should have the property issues (base name: "issues")', function() {
      // uncomment below and update the code to test the property issues
      //var instane = new Jira.IssuePickerSuggestionsIssueType();
      //expect(instance).to.be();
    });

    it('should have the property label (base name: "label")', function() {
      // uncomment below and update the code to test the property label
      //var instane = new Jira.IssuePickerSuggestionsIssueType();
      //expect(instance).to.be();
    });

    it('should have the property msg (base name: "msg")', function() {
      // uncomment below and update the code to test the property msg
      //var instane = new Jira.IssuePickerSuggestionsIssueType();
      //expect(instance).to.be();
    });

    it('should have the property sub (base name: "sub")', function() {
      // uncomment below and update the code to test the property sub
      //var instane = new Jira.IssuePickerSuggestionsIssueType();
      //expect(instance).to.be();
    });

  });

}));
