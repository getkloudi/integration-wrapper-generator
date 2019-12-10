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
    instance = new Gitlab.RepoCommitDetail();
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

  describe('RepoCommitDetail', function() {
    it('should create an instance of RepoCommitDetail', function() {
      // uncomment below and update the code to test RepoCommitDetail
      //var instane = new Gitlab.RepoCommitDetail();
      //expect(instance).to.be.a(Gitlab.RepoCommitDetail);
    });

    it('should have the property authorEmail (base name: "author_email")', function() {
      // uncomment below and update the code to test the property authorEmail
      //var instane = new Gitlab.RepoCommitDetail();
      //expect(instance).to.be();
    });

    it('should have the property authorName (base name: "author_name")', function() {
      // uncomment below and update the code to test the property authorName
      //var instane = new Gitlab.RepoCommitDetail();
      //expect(instance).to.be();
    });

    it('should have the property authoredDate (base name: "authored_date")', function() {
      // uncomment below and update the code to test the property authoredDate
      //var instane = new Gitlab.RepoCommitDetail();
      //expect(instance).to.be();
    });

    it('should have the property committedDate (base name: "committed_date")', function() {
      // uncomment below and update the code to test the property committedDate
      //var instane = new Gitlab.RepoCommitDetail();
      //expect(instance).to.be();
    });

    it('should have the property committerEmail (base name: "committer_email")', function() {
      // uncomment below and update the code to test the property committerEmail
      //var instane = new Gitlab.RepoCommitDetail();
      //expect(instance).to.be();
    });

    it('should have the property committerName (base name: "committer_name")', function() {
      // uncomment below and update the code to test the property committerName
      //var instane = new Gitlab.RepoCommitDetail();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new Gitlab.RepoCommitDetail();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Gitlab.RepoCommitDetail();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instane = new Gitlab.RepoCommitDetail();
      //expect(instance).to.be();
    });

    it('should have the property parentIds (base name: "parent_ids")', function() {
      // uncomment below and update the code to test the property parentIds
      //var instane = new Gitlab.RepoCommitDetail();
      //expect(instance).to.be();
    });

    it('should have the property shortId (base name: "short_id")', function() {
      // uncomment below and update the code to test the property shortId
      //var instane = new Gitlab.RepoCommitDetail();
      //expect(instance).to.be();
    });

    it('should have the property stats (base name: "stats")', function() {
      // uncomment below and update the code to test the property stats
      //var instane = new Gitlab.RepoCommitDetail();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new Gitlab.RepoCommitDetail();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new Gitlab.RepoCommitDetail();
      //expect(instance).to.be();
    });

  });

}));
