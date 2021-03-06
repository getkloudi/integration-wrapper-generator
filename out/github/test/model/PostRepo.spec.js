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
    instance = new Github.PostRepo();
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

  describe('PostRepo', function() {
    it('should create an instance of PostRepo', function() {
      // uncomment below and update the code to test PostRepo
      //var instane = new Github.PostRepo();
      //expect(instance).to.be.a(Github.PostRepo);
    });

    it('should have the property autoInit (base name: "auto_init")', function() {
      // uncomment below and update the code to test the property autoInit
      //var instane = new Github.PostRepo();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new Github.PostRepo();
      //expect(instance).to.be();
    });

    it('should have the property gitignoreTemplate (base name: "gitignore_template")', function() {
      // uncomment below and update the code to test the property gitignoreTemplate
      //var instane = new Github.PostRepo();
      //expect(instance).to.be();
    });

    it('should have the property hasDownloads (base name: "has_downloads")', function() {
      // uncomment below and update the code to test the property hasDownloads
      //var instane = new Github.PostRepo();
      //expect(instance).to.be();
    });

    it('should have the property hasIssues (base name: "has_issues")', function() {
      // uncomment below and update the code to test the property hasIssues
      //var instane = new Github.PostRepo();
      //expect(instance).to.be();
    });

    it('should have the property hasWiki (base name: "has_wiki")', function() {
      // uncomment below and update the code to test the property hasWiki
      //var instane = new Github.PostRepo();
      //expect(instance).to.be();
    });

    it('should have the property homepage (base name: "homepage")', function() {
      // uncomment below and update the code to test the property homepage
      //var instane = new Github.PostRepo();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new Github.PostRepo();
      //expect(instance).to.be();
    });

    it('should have the property _private (base name: "private")', function() {
      // uncomment below and update the code to test the property _private
      //var instane = new Github.PostRepo();
      //expect(instance).to.be();
    });

    it('should have the property teamId (base name: "team_id")', function() {
      // uncomment below and update the code to test the property teamId
      //var instane = new Github.PostRepo();
      //expect(instance).to.be();
    });

  });

}));
