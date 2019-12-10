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
    instance = new Gitlab.Pipeline();
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

  describe('Pipeline', function() {
    it('should create an instance of Pipeline', function() {
      // uncomment below and update the code to test Pipeline
      //var instane = new Gitlab.Pipeline();
      //expect(instance).to.be.a(Gitlab.Pipeline);
    });

    it('should have the property beforeSha (base name: "before_sha")', function() {
      // uncomment below and update the code to test the property beforeSha
      //var instane = new Gitlab.Pipeline();
      //expect(instance).to.be();
    });

    it('should have the property committedAt (base name: "committed_at")', function() {
      // uncomment below and update the code to test the property committedAt
      //var instane = new Gitlab.Pipeline();
      //expect(instance).to.be();
    });

    it('should have the property coverage (base name: "coverage")', function() {
      // uncomment below and update the code to test the property coverage
      //var instane = new Gitlab.Pipeline();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new Gitlab.Pipeline();
      //expect(instance).to.be();
    });

    it('should have the property duration (base name: "duration")', function() {
      // uncomment below and update the code to test the property duration
      //var instane = new Gitlab.Pipeline();
      //expect(instance).to.be();
    });

    it('should have the property finishedAt (base name: "finished_at")', function() {
      // uncomment below and update the code to test the property finishedAt
      //var instane = new Gitlab.Pipeline();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Gitlab.Pipeline();
      //expect(instance).to.be();
    });

    it('should have the property ref (base name: "ref")', function() {
      // uncomment below and update the code to test the property ref
      //var instane = new Gitlab.Pipeline();
      //expect(instance).to.be();
    });

    it('should have the property sha (base name: "sha")', function() {
      // uncomment below and update the code to test the property sha
      //var instane = new Gitlab.Pipeline();
      //expect(instance).to.be();
    });

    it('should have the property startedAt (base name: "started_at")', function() {
      // uncomment below and update the code to test the property startedAt
      //var instane = new Gitlab.Pipeline();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new Gitlab.Pipeline();
      //expect(instance).to.be();
    });

    it('should have the property tag (base name: "tag")', function() {
      // uncomment below and update the code to test the property tag
      //var instane = new Gitlab.Pipeline();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instane = new Gitlab.Pipeline();
      //expect(instance).to.be();
    });

    it('should have the property user (base name: "user")', function() {
      // uncomment below and update the code to test the property user
      //var instane = new Gitlab.Pipeline();
      //expect(instance).to.be();
    });

    it('should have the property yamlErrors (base name: "yaml_errors")', function() {
      // uncomment below and update the code to test the property yamlErrors
      //var instane = new Gitlab.Pipeline();
      //expect(instance).to.be();
    });

  });

}));