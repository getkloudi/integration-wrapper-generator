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
    instance = new Gitlab.Contributor();
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

  describe('Contributor', function() {
    it('should create an instance of Contributor', function() {
      // uncomment below and update the code to test Contributor
      //var instane = new Gitlab.Contributor();
      //expect(instance).to.be.a(Gitlab.Contributor);
    });

    it('should have the property additions (base name: "additions")', function() {
      // uncomment below and update the code to test the property additions
      //var instane = new Gitlab.Contributor();
      //expect(instance).to.be();
    });

    it('should have the property commits (base name: "commits")', function() {
      // uncomment below and update the code to test the property commits
      //var instane = new Gitlab.Contributor();
      //expect(instance).to.be();
    });

    it('should have the property deletions (base name: "deletions")', function() {
      // uncomment below and update the code to test the property deletions
      //var instane = new Gitlab.Contributor();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instane = new Gitlab.Contributor();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new Gitlab.Contributor();
      //expect(instance).to.be();
    });

  });

}));