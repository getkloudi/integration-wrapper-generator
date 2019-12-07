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
    instance = new GitHub.Repo();
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

  describe('Repo', function() {
    it('should create an instance of Repo', function() {
      // uncomment below and update the code to test Repo
      //var instane = new GitHub.Repo();
      //expect(instance).to.be.a(GitHub.Repo);
    });

    it('should have the property cloneUrl (base name: "clone_url")', function() {
      // uncomment below and update the code to test the property cloneUrl
      //var instane = new GitHub.Repo();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new GitHub.Repo();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new GitHub.Repo();
      //expect(instance).to.be();
    });

    it('should have the property fork (base name: "fork")', function() {
      // uncomment below and update the code to test the property fork
      //var instane = new GitHub.Repo();
      //expect(instance).to.be();
    });

    it('should have the property forks (base name: "forks")', function() {
      // uncomment below and update the code to test the property forks
      //var instane = new GitHub.Repo();
      //expect(instance).to.be();
    });

    it('should have the property forksCount (base name: "forks_count")', function() {
      // uncomment below and update the code to test the property forksCount
      //var instane = new GitHub.Repo();
      //expect(instance).to.be();
    });

    it('should have the property fullName (base name: "full_name")', function() {
      // uncomment below and update the code to test the property fullName
      //var instane = new GitHub.Repo();
      //expect(instance).to.be();
    });

    it('should have the property gitUrl (base name: "git_url")', function() {
      // uncomment below and update the code to test the property gitUrl
      //var instane = new GitHub.Repo();
      //expect(instance).to.be();
    });

    it('should have the property hasDownloads (base name: "has_downloads")', function() {
      // uncomment below and update the code to test the property hasDownloads
      //var instane = new GitHub.Repo();
      //expect(instance).to.be();
    });

    it('should have the property hasIssues (base name: "has_issues")', function() {
      // uncomment below and update the code to test the property hasIssues
      //var instane = new GitHub.Repo();
      //expect(instance).to.be();
    });

    it('should have the property hasWiki (base name: "has_wiki")', function() {
      // uncomment below and update the code to test the property hasWiki
      //var instane = new GitHub.Repo();
      //expect(instance).to.be();
    });

    it('should have the property homepage (base name: "homepage")', function() {
      // uncomment below and update the code to test the property homepage
      //var instane = new GitHub.Repo();
      //expect(instance).to.be();
    });

    it('should have the property htmlUrl (base name: "html_url")', function() {
      // uncomment below and update the code to test the property htmlUrl
      //var instane = new GitHub.Repo();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new GitHub.Repo();
      //expect(instance).to.be();
    });

    it('should have the property language (base name: "language")', function() {
      // uncomment below and update the code to test the property language
      //var instane = new GitHub.Repo();
      //expect(instance).to.be();
    });

    it('should have the property masterBranch (base name: "master_branch")', function() {
      // uncomment below and update the code to test the property masterBranch
      //var instane = new GitHub.Repo();
      //expect(instance).to.be();
    });

    it('should have the property mirrorUrl (base name: "mirror_url")', function() {
      // uncomment below and update the code to test the property mirrorUrl
      //var instane = new GitHub.Repo();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new GitHub.Repo();
      //expect(instance).to.be();
    });

    it('should have the property openIssues (base name: "open_issues")', function() {
      // uncomment below and update the code to test the property openIssues
      //var instane = new GitHub.Repo();
      //expect(instance).to.be();
    });

    it('should have the property openIssuesCount (base name: "open_issues_count")', function() {
      // uncomment below and update the code to test the property openIssuesCount
      //var instane = new GitHub.Repo();
      //expect(instance).to.be();
    });

    it('should have the property organization (base name: "organization")', function() {
      // uncomment below and update the code to test the property organization
      //var instane = new GitHub.Repo();
      //expect(instance).to.be();
    });

    it('should have the property owner (base name: "owner")', function() {
      // uncomment below and update the code to test the property owner
      //var instane = new GitHub.Repo();
      //expect(instance).to.be();
    });

    it('should have the property parent (base name: "parent")', function() {
      // uncomment below and update the code to test the property parent
      //var instane = new GitHub.Repo();
      //expect(instance).to.be();
    });

    it('should have the property _private (base name: "private")', function() {
      // uncomment below and update the code to test the property _private
      //var instane = new GitHub.Repo();
      //expect(instance).to.be();
    });

    it('should have the property pushedAt (base name: "pushed_at")', function() {
      // uncomment below and update the code to test the property pushedAt
      //var instane = new GitHub.Repo();
      //expect(instance).to.be();
    });

    it('should have the property size (base name: "size")', function() {
      // uncomment below and update the code to test the property size
      //var instane = new GitHub.Repo();
      //expect(instance).to.be();
    });

    it('should have the property source (base name: "source")', function() {
      // uncomment below and update the code to test the property source
      //var instane = new GitHub.Repo();
      //expect(instance).to.be();
    });

    it('should have the property sshUrl (base name: "ssh_url")', function() {
      // uncomment below and update the code to test the property sshUrl
      //var instane = new GitHub.Repo();
      //expect(instance).to.be();
    });

    it('should have the property svnUrl (base name: "svn_url")', function() {
      // uncomment below and update the code to test the property svnUrl
      //var instane = new GitHub.Repo();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instane = new GitHub.Repo();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new GitHub.Repo();
      //expect(instance).to.be();
    });

    it('should have the property watchers (base name: "watchers")', function() {
      // uncomment below and update the code to test the property watchers
      //var instane = new GitHub.Repo();
      //expect(instance).to.be();
    });

    it('should have the property watchersCount (base name: "watchers_count")', function() {
      // uncomment below and update the code to test the property watchersCount
      //var instane = new GitHub.Repo();
      //expect(instance).to.be();
    });

  });

}));
