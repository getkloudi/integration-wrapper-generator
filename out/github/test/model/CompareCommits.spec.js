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
    factory(root.expect, root.GitHub);
  }
}(this, function(expect, GitHub) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new GitHub.CompareCommits();
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

  describe('CompareCommits', function() {
    it('should create an instance of CompareCommits', function() {
      // uncomment below and update the code to test CompareCommits
      //var instane = new GitHub.CompareCommits();
      //expect(instance).to.be.a(GitHub.CompareCommits);
    });

    it('should have the property aheadBy (base name: "ahead_by")', function() {
      // uncomment below and update the code to test the property aheadBy
      //var instane = new GitHub.CompareCommits();
      //expect(instance).to.be();
    });

    it('should have the property baseCommit (base name: "base_commit")', function() {
      // uncomment below and update the code to test the property baseCommit
      //var instane = new GitHub.CompareCommits();
      //expect(instance).to.be();
    });

    it('should have the property behindBy (base name: "behind_by")', function() {
      // uncomment below and update the code to test the property behindBy
      //var instane = new GitHub.CompareCommits();
      //expect(instance).to.be();
    });

    it('should have the property commits (base name: "commits")', function() {
      // uncomment below and update the code to test the property commits
      //var instane = new GitHub.CompareCommits();
      //expect(instance).to.be();
    });

    it('should have the property diffUrl (base name: "diff_url")', function() {
      // uncomment below and update the code to test the property diffUrl
      //var instane = new GitHub.CompareCommits();
      //expect(instance).to.be();
    });

    it('should have the property files (base name: "files")', function() {
      // uncomment below and update the code to test the property files
      //var instane = new GitHub.CompareCommits();
      //expect(instance).to.be();
    });

    it('should have the property htmlUrl (base name: "html_url")', function() {
      // uncomment below and update the code to test the property htmlUrl
      //var instane = new GitHub.CompareCommits();
      //expect(instance).to.be();
    });

    it('should have the property patchUrl (base name: "patch_url")', function() {
      // uncomment below and update the code to test the property patchUrl
      //var instane = new GitHub.CompareCommits();
      //expect(instance).to.be();
    });

    it('should have the property permalinkUrl (base name: "permalink_url")', function() {
      // uncomment below and update the code to test the property permalinkUrl
      //var instane = new GitHub.CompareCommits();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new GitHub.CompareCommits();
      //expect(instance).to.be();
    });

    it('should have the property totalCommits (base name: "total_commits")', function() {
      // uncomment below and update the code to test the property totalCommits
      //var instane = new GitHub.CompareCommits();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new GitHub.CompareCommits();
      //expect(instance).to.be();
    });

  });

}));
