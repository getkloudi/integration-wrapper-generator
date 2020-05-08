/**
 * Jira
 * The Jira Cloud Platform REST API
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
    factory(root.expect, root.Jira);
  }
}(this, function(expect, Jira) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Jira.InlineResponse2017();
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

  describe('InlineResponse2017', function() {
    it('should create an instance of InlineResponse2017', function() {
      // uncomment below and update the code to test InlineResponse2017
      //var instane = new Jira.InlineResponse2017();
      //expect(instance).to.be.a(Jira.InlineResponse2017);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Jira.InlineResponse2017();
      //expect(instance).to.be();
    });

    it('should have the property isDeletable (base name: "isDeletable")', function() {
      // uncomment below and update the code to test the property isDeletable
      //var instane = new Jira.InlineResponse2017();
      //expect(instance).to.be();
    });

    it('should have the property isSelected (base name: "isSelected")', function() {
      // uncomment below and update the code to test the property isSelected
      //var instane = new Jira.InlineResponse2017();
      //expect(instance).to.be();
    });

    it('should have the property isSystemAvatar (base name: "isSystemAvatar")', function() {
      // uncomment below and update the code to test the property isSystemAvatar
      //var instane = new Jira.InlineResponse2017();
      //expect(instance).to.be();
    });

    it('should have the property urls (base name: "urls")', function() {
      // uncomment below and update the code to test the property urls
      //var instane = new Jira.InlineResponse2017();
      //expect(instance).to.be();
    });

  });

}));
