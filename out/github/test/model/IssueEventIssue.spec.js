/**
 * GitHub
 * Powerful collaboration, code review, and code management for open source and private projects. 
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
    factory(root.expect, root.Github);
  }
}(this, function(expect, Github) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Github.IssueEventIssue();
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

  describe('IssueEventIssue', function() {
    it('should create an instance of IssueEventIssue', function() {
      // uncomment below and update the code to test IssueEventIssue
      //var instane = new Github.IssueEventIssue();
      //expect(instance).to.be.a(Github.IssueEventIssue);
    });

    it('should have the property assignee (base name: "assignee")', function() {
      // uncomment below and update the code to test the property assignee
      //var instane = new Github.IssueEventIssue();
      //expect(instance).to.be();
    });

    it('should have the property body (base name: "body")', function() {
      // uncomment below and update the code to test the property body
      //var instane = new Github.IssueEventIssue();
      //expect(instance).to.be();
    });

    it('should have the property closedAt (base name: "closed_at")', function() {
      // uncomment below and update the code to test the property closedAt
      //var instane = new Github.IssueEventIssue();
      //expect(instance).to.be();
    });

    it('should have the property comments (base name: "comments")', function() {
      // uncomment below and update the code to test the property comments
      //var instane = new Github.IssueEventIssue();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new Github.IssueEventIssue();
      //expect(instance).to.be();
    });

    it('should have the property htmlUrl (base name: "html_url")', function() {
      // uncomment below and update the code to test the property htmlUrl
      //var instane = new Github.IssueEventIssue();
      //expect(instance).to.be();
    });

    it('should have the property labels (base name: "labels")', function() {
      // uncomment below and update the code to test the property labels
      //var instane = new Github.IssueEventIssue();
      //expect(instance).to.be();
    });

    it('should have the property milestone (base name: "milestone")', function() {
      // uncomment below and update the code to test the property milestone
      //var instane = new Github.IssueEventIssue();
      //expect(instance).to.be();
    });

    it('should have the property _number (base name: "number")', function() {
      // uncomment below and update the code to test the property _number
      //var instane = new Github.IssueEventIssue();
      //expect(instance).to.be();
    });

    it('should have the property pullRequest (base name: "pull_request")', function() {
      // uncomment below and update the code to test the property pullRequest
      //var instane = new Github.IssueEventIssue();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instane = new Github.IssueEventIssue();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new Github.IssueEventIssue();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instane = new Github.IssueEventIssue();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new Github.IssueEventIssue();
      //expect(instance).to.be();
    });

    it('should have the property user (base name: "user")', function() {
      // uncomment below and update the code to test the property user
      //var instane = new Github.IssueEventIssue();
      //expect(instance).to.be();
    });

  });

}));
