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
    instance = new Jira.InlineResponse2007Records();
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

  describe('InlineResponse2007Records', function() {
    it('should create an instance of InlineResponse2007Records', function() {
      // uncomment below and update the code to test InlineResponse2007Records
      //var instane = new Jira.InlineResponse2007Records();
      //expect(instance).to.be.a(Jira.InlineResponse2007Records);
    });

    it('should have the property associatedItems (base name: "associatedItems")', function() {
      // uncomment below and update the code to test the property associatedItems
      //var instane = new Jira.InlineResponse2007Records();
      //expect(instance).to.be();
    });

    it('should have the property authorKey (base name: "authorKey")', function() {
      // uncomment below and update the code to test the property authorKey
      //var instane = new Jira.InlineResponse2007Records();
      //expect(instance).to.be();
    });

    it('should have the property category (base name: "category")', function() {
      // uncomment below and update the code to test the property category
      //var instane = new Jira.InlineResponse2007Records();
      //expect(instance).to.be();
    });

    it('should have the property changedValues (base name: "changedValues")', function() {
      // uncomment below and update the code to test the property changedValues
      //var instane = new Jira.InlineResponse2007Records();
      //expect(instance).to.be();
    });

    it('should have the property created (base name: "created")', function() {
      // uncomment below and update the code to test the property created
      //var instane = new Jira.InlineResponse2007Records();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new Jira.InlineResponse2007Records();
      //expect(instance).to.be();
    });

    it('should have the property eventSource (base name: "eventSource")', function() {
      // uncomment below and update the code to test the property eventSource
      //var instane = new Jira.InlineResponse2007Records();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Jira.InlineResponse2007Records();
      //expect(instance).to.be();
    });

    it('should have the property objectItem (base name: "objectItem")', function() {
      // uncomment below and update the code to test the property objectItem
      //var instane = new Jira.InlineResponse2007Records();
      //expect(instance).to.be();
    });

    it('should have the property remoteAddress (base name: "remoteAddress")', function() {
      // uncomment below and update the code to test the property remoteAddress
      //var instane = new Jira.InlineResponse2007Records();
      //expect(instance).to.be();
    });

    it('should have the property summary (base name: "summary")', function() {
      // uncomment below and update the code to test the property summary
      //var instane = new Jira.InlineResponse2007Records();
      //expect(instance).to.be();
    });

  });

}));
