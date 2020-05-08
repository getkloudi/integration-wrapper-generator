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
    instance = new Jira.IssueIssueIdOrKeyRemotelinkObjectStatusIcon();
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

  describe('IssueIssueIdOrKeyRemotelinkObjectStatusIcon', function() {
    it('should create an instance of IssueIssueIdOrKeyRemotelinkObjectStatusIcon', function() {
      // uncomment below and update the code to test IssueIssueIdOrKeyRemotelinkObjectStatusIcon
      //var instane = new Jira.IssueIssueIdOrKeyRemotelinkObjectStatusIcon();
      //expect(instance).to.be.a(Jira.IssueIssueIdOrKeyRemotelinkObjectStatusIcon);
    });

    it('should have the property link (base name: "link")', function() {
      // uncomment below and update the code to test the property link
      //var instane = new Jira.IssueIssueIdOrKeyRemotelinkObjectStatusIcon();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new Jira.IssueIssueIdOrKeyRemotelinkObjectStatusIcon();
      //expect(instance).to.be();
    });

    it('should have the property url16x16 (base name: "url16x16")', function() {
      // uncomment below and update the code to test the property url16x16
      //var instane = new Jira.IssueIssueIdOrKeyRemotelinkObjectStatusIcon();
      //expect(instance).to.be();
    });

  });

}));
