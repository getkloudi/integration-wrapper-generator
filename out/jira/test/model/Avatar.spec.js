/**
 * The Jira Cloud platform REST API
 * Jira Cloud platform REST API documentation
 *
 * The version of the OpenAPI document: 1001.0.0-SNAPSHOT
 * Contact: ecosystem@atlassian.com
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
    factory(root.expect, root.Jira);
  }
}(this, function(expect, Jira) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Jira.Avatar();
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

  describe('Avatar', function() {
    it('should create an instance of Avatar', function() {
      // uncomment below and update the code to test Avatar
      //var instane = new Jira.Avatar();
      //expect(instance).to.be.a(Jira.Avatar);
    });

    it('should have the property fileName (base name: "fileName")', function() {
      // uncomment below and update the code to test the property fileName
      //var instane = new Jira.Avatar();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Jira.Avatar();
      //expect(instance).to.be();
    });

    it('should have the property isDeletable (base name: "isDeletable")', function() {
      // uncomment below and update the code to test the property isDeletable
      //var instane = new Jira.Avatar();
      //expect(instance).to.be();
    });

    it('should have the property isSelected (base name: "isSelected")', function() {
      // uncomment below and update the code to test the property isSelected
      //var instane = new Jira.Avatar();
      //expect(instance).to.be();
    });

    it('should have the property isSystemAvatar (base name: "isSystemAvatar")', function() {
      // uncomment below and update the code to test the property isSystemAvatar
      //var instane = new Jira.Avatar();
      //expect(instance).to.be();
    });

    it('should have the property owner (base name: "owner")', function() {
      // uncomment below and update the code to test the property owner
      //var instane = new Jira.Avatar();
      //expect(instance).to.be();
    });

    it('should have the property urls (base name: "urls")', function() {
      // uncomment below and update the code to test the property urls
      //var instane = new Jira.Avatar();
      //expect(instance).to.be();
    });

  });

}));