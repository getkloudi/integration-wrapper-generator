/**
 * Gitlab
 * The platform for modern developers GitLab unifies issues, code review, CI and CD into a single UI
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
    factory(root.expect, root.Gitlab);
  }
}(this, function(expect, Gitlab) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Gitlab.Issue();
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

  describe('Issue', function() {
    it('should create an instance of Issue', function() {
      // uncomment below and update the code to test Issue
      //var instane = new Gitlab.Issue();
      //expect(instance).to.be.a(Gitlab.Issue);
    });

    it('should have the property assignee (base name: "assignee")', function() {
      // uncomment below and update the code to test the property assignee
      //var instane = new Gitlab.Issue();
      //expect(instance).to.be();
    });

    it('should have the property author (base name: "author")', function() {
      // uncomment below and update the code to test the property author
      //var instane = new Gitlab.Issue();
      //expect(instance).to.be();
    });

    it('should have the property confidential (base name: "confidential")', function() {
      // uncomment below and update the code to test the property confidential
      //var instane = new Gitlab.Issue();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new Gitlab.Issue();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new Gitlab.Issue();
      //expect(instance).to.be();
    });

    it('should have the property downvotes (base name: "downvotes")', function() {
      // uncomment below and update the code to test the property downvotes
      //var instane = new Gitlab.Issue();
      //expect(instance).to.be();
    });

    it('should have the property dueDate (base name: "due_date")', function() {
      // uncomment below and update the code to test the property dueDate
      //var instane = new Gitlab.Issue();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Gitlab.Issue();
      //expect(instance).to.be();
    });

    it('should have the property iid (base name: "iid")', function() {
      // uncomment below and update the code to test the property iid
      //var instane = new Gitlab.Issue();
      //expect(instance).to.be();
    });

    it('should have the property labels (base name: "labels")', function() {
      // uncomment below and update the code to test the property labels
      //var instane = new Gitlab.Issue();
      //expect(instance).to.be();
    });

    it('should have the property milestone (base name: "milestone")', function() {
      // uncomment below and update the code to test the property milestone
      //var instane = new Gitlab.Issue();
      //expect(instance).to.be();
    });

    it('should have the property projectId (base name: "project_id")', function() {
      // uncomment below and update the code to test the property projectId
      //var instane = new Gitlab.Issue();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instane = new Gitlab.Issue();
      //expect(instance).to.be();
    });

    it('should have the property subscribed (base name: "subscribed")', function() {
      // uncomment below and update the code to test the property subscribed
      //var instane = new Gitlab.Issue();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new Gitlab.Issue();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instane = new Gitlab.Issue();
      //expect(instance).to.be();
    });

    it('should have the property upvotes (base name: "upvotes")', function() {
      // uncomment below and update the code to test the property upvotes
      //var instane = new Gitlab.Issue();
      //expect(instance).to.be();
    });

    it('should have the property userNotesCount (base name: "user_notes_count")', function() {
      // uncomment below and update the code to test the property userNotesCount
      //var instane = new Gitlab.Issue();
      //expect(instance).to.be();
    });

    it('should have the property webUrl (base name: "web_url")', function() {
      // uncomment below and update the code to test the property webUrl
      //var instane = new Gitlab.Issue();
      //expect(instance).to.be();
    });

  });

}));
