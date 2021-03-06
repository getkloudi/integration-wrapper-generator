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
    instance = new Gitlab.MergeRequestChanges();
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

  describe('MergeRequestChanges', function() {
    it('should create an instance of MergeRequestChanges', function() {
      // uncomment below and update the code to test MergeRequestChanges
      //var instane = new Gitlab.MergeRequestChanges();
      //expect(instance).to.be.a(Gitlab.MergeRequestChanges);
    });

    it('should have the property assignee (base name: "assignee")', function() {
      // uncomment below and update the code to test the property assignee
      //var instane = new Gitlab.MergeRequestChanges();
      //expect(instance).to.be();
    });

    it('should have the property author (base name: "author")', function() {
      // uncomment below and update the code to test the property author
      //var instane = new Gitlab.MergeRequestChanges();
      //expect(instance).to.be();
    });

    it('should have the property changes (base name: "changes")', function() {
      // uncomment below and update the code to test the property changes
      //var instane = new Gitlab.MergeRequestChanges();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new Gitlab.MergeRequestChanges();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new Gitlab.MergeRequestChanges();
      //expect(instance).to.be();
    });

    it('should have the property downvotes (base name: "downvotes")', function() {
      // uncomment below and update the code to test the property downvotes
      //var instane = new Gitlab.MergeRequestChanges();
      //expect(instance).to.be();
    });

    it('should have the property forceRemoveSourceBranch (base name: "force_remove_source_branch")', function() {
      // uncomment below and update the code to test the property forceRemoveSourceBranch
      //var instane = new Gitlab.MergeRequestChanges();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Gitlab.MergeRequestChanges();
      //expect(instance).to.be();
    });

    it('should have the property iid (base name: "iid")', function() {
      // uncomment below and update the code to test the property iid
      //var instane = new Gitlab.MergeRequestChanges();
      //expect(instance).to.be();
    });

    it('should have the property labels (base name: "labels")', function() {
      // uncomment below and update the code to test the property labels
      //var instane = new Gitlab.MergeRequestChanges();
      //expect(instance).to.be();
    });

    it('should have the property mergeCommitSha (base name: "merge_commit_sha")', function() {
      // uncomment below and update the code to test the property mergeCommitSha
      //var instane = new Gitlab.MergeRequestChanges();
      //expect(instance).to.be();
    });

    it('should have the property mergeStatus (base name: "merge_status")', function() {
      // uncomment below and update the code to test the property mergeStatus
      //var instane = new Gitlab.MergeRequestChanges();
      //expect(instance).to.be();
    });

    it('should have the property mergeWhenBuildSucceeds (base name: "merge_when_build_succeeds")', function() {
      // uncomment below and update the code to test the property mergeWhenBuildSucceeds
      //var instane = new Gitlab.MergeRequestChanges();
      //expect(instance).to.be();
    });

    it('should have the property milestone (base name: "milestone")', function() {
      // uncomment below and update the code to test the property milestone
      //var instane = new Gitlab.MergeRequestChanges();
      //expect(instance).to.be();
    });

    it('should have the property projectId (base name: "project_id")', function() {
      // uncomment below and update the code to test the property projectId
      //var instane = new Gitlab.MergeRequestChanges();
      //expect(instance).to.be();
    });

    it('should have the property sha (base name: "sha")', function() {
      // uncomment below and update the code to test the property sha
      //var instane = new Gitlab.MergeRequestChanges();
      //expect(instance).to.be();
    });

    it('should have the property shouldRemoveSourceBranch (base name: "should_remove_source_branch")', function() {
      // uncomment below and update the code to test the property shouldRemoveSourceBranch
      //var instane = new Gitlab.MergeRequestChanges();
      //expect(instance).to.be();
    });

    it('should have the property sourceBranch (base name: "source_branch")', function() {
      // uncomment below and update the code to test the property sourceBranch
      //var instane = new Gitlab.MergeRequestChanges();
      //expect(instance).to.be();
    });

    it('should have the property sourceProjectId (base name: "source_project_id")', function() {
      // uncomment below and update the code to test the property sourceProjectId
      //var instane = new Gitlab.MergeRequestChanges();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instane = new Gitlab.MergeRequestChanges();
      //expect(instance).to.be();
    });

    it('should have the property subscribed (base name: "subscribed")', function() {
      // uncomment below and update the code to test the property subscribed
      //var instane = new Gitlab.MergeRequestChanges();
      //expect(instance).to.be();
    });

    it('should have the property targetBranch (base name: "target_branch")', function() {
      // uncomment below and update the code to test the property targetBranch
      //var instane = new Gitlab.MergeRequestChanges();
      //expect(instance).to.be();
    });

    it('should have the property targetProjectId (base name: "target_project_id")', function() {
      // uncomment below and update the code to test the property targetProjectId
      //var instane = new Gitlab.MergeRequestChanges();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new Gitlab.MergeRequestChanges();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instane = new Gitlab.MergeRequestChanges();
      //expect(instance).to.be();
    });

    it('should have the property upvotes (base name: "upvotes")', function() {
      // uncomment below and update the code to test the property upvotes
      //var instane = new Gitlab.MergeRequestChanges();
      //expect(instance).to.be();
    });

    it('should have the property userNotesCount (base name: "user_notes_count")', function() {
      // uncomment below and update the code to test the property userNotesCount
      //var instane = new Gitlab.MergeRequestChanges();
      //expect(instance).to.be();
    });

    it('should have the property webUrl (base name: "web_url")', function() {
      // uncomment below and update the code to test the property webUrl
      //var instane = new Gitlab.MergeRequestChanges();
      //expect(instance).to.be();
    });

    it('should have the property workInProgress (base name: "work_in_progress")', function() {
      // uncomment below and update the code to test the property workInProgress
      //var instane = new Gitlab.MergeRequestChanges();
      //expect(instance).to.be();
    });

  });

}));
