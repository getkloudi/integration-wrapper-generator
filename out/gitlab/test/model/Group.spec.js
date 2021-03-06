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
    instance = new Gitlab.Group();
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

  describe('Group', function() {
    it('should create an instance of Group', function() {
      // uncomment below and update the code to test Group
      //var instane = new Gitlab.Group();
      //expect(instance).to.be.a(Gitlab.Group);
    });

    it('should have the property avatarUrl (base name: "avatar_url")', function() {
      // uncomment below and update the code to test the property avatarUrl
      //var instane = new Gitlab.Group();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new Gitlab.Group();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Gitlab.Group();
      //expect(instance).to.be();
    });

    it('should have the property lfsEnabled (base name: "lfs_enabled")', function() {
      // uncomment below and update the code to test the property lfsEnabled
      //var instane = new Gitlab.Group();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new Gitlab.Group();
      //expect(instance).to.be();
    });

    it('should have the property path (base name: "path")', function() {
      // uncomment below and update the code to test the property path
      //var instane = new Gitlab.Group();
      //expect(instance).to.be();
    });

    it('should have the property requestAccessEnabled (base name: "request_access_enabled")', function() {
      // uncomment below and update the code to test the property requestAccessEnabled
      //var instane = new Gitlab.Group();
      //expect(instance).to.be();
    });

    it('should have the property statistics (base name: "statistics")', function() {
      // uncomment below and update the code to test the property statistics
      //var instane = new Gitlab.Group();
      //expect(instance).to.be();
    });

    it('should have the property visibilityLevel (base name: "visibility_level")', function() {
      // uncomment below and update the code to test the property visibilityLevel
      //var instane = new Gitlab.Group();
      //expect(instance).to.be();
    });

    it('should have the property webUrl (base name: "web_url")', function() {
      // uncomment below and update the code to test the property webUrl
      //var instane = new Gitlab.Group();
      //expect(instance).to.be();
    });

  });

}));
