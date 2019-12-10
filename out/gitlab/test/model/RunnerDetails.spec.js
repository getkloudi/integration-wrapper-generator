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
    instance = new Gitlab.RunnerDetails();
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

  describe('RunnerDetails', function() {
    it('should create an instance of RunnerDetails', function() {
      // uncomment below and update the code to test RunnerDetails
      //var instane = new Gitlab.RunnerDetails();
      //expect(instance).to.be.a(Gitlab.RunnerDetails);
    });

    it('should have the property active (base name: "active")', function() {
      // uncomment below and update the code to test the property active
      //var instane = new Gitlab.RunnerDetails();
      //expect(instance).to.be();
    });

    it('should have the property architecture (base name: "architecture")', function() {
      // uncomment below and update the code to test the property architecture
      //var instane = new Gitlab.RunnerDetails();
      //expect(instance).to.be();
    });

    it('should have the property contactedAt (base name: "contacted_at")', function() {
      // uncomment below and update the code to test the property contactedAt
      //var instane = new Gitlab.RunnerDetails();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new Gitlab.RunnerDetails();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Gitlab.RunnerDetails();
      //expect(instance).to.be();
    });

    it('should have the property isShared (base name: "is_shared")', function() {
      // uncomment below and update the code to test the property isShared
      //var instane = new Gitlab.RunnerDetails();
      //expect(instance).to.be();
    });

    it('should have the property locked (base name: "locked")', function() {
      // uncomment below and update the code to test the property locked
      //var instane = new Gitlab.RunnerDetails();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new Gitlab.RunnerDetails();
      //expect(instance).to.be();
    });

    it('should have the property platform (base name: "platform")', function() {
      // uncomment below and update the code to test the property platform
      //var instane = new Gitlab.RunnerDetails();
      //expect(instance).to.be();
    });

    it('should have the property projects (base name: "projects")', function() {
      // uncomment below and update the code to test the property projects
      //var instane = new Gitlab.RunnerDetails();
      //expect(instance).to.be();
    });

    it('should have the property revision (base name: "revision")', function() {
      // uncomment below and update the code to test the property revision
      //var instane = new Gitlab.RunnerDetails();
      //expect(instance).to.be();
    });

    it('should have the property runUntagged (base name: "run_untagged")', function() {
      // uncomment below and update the code to test the property runUntagged
      //var instane = new Gitlab.RunnerDetails();
      //expect(instance).to.be();
    });

    it('should have the property tagList (base name: "tag_list")', function() {
      // uncomment below and update the code to test the property tagList
      //var instane = new Gitlab.RunnerDetails();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instane = new Gitlab.RunnerDetails();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instane = new Gitlab.RunnerDetails();
      //expect(instance).to.be();
    });

  });

}));