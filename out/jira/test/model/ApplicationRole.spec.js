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
    instance = new Jira.ApplicationRole();
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

  describe('ApplicationRole', function() {
    it('should create an instance of ApplicationRole', function() {
      // uncomment below and update the code to test ApplicationRole
      //var instane = new Jira.ApplicationRole();
      //expect(instance).to.be.a(Jira.ApplicationRole);
    });

    it('should have the property defaultGroups (base name: "defaultGroups")', function() {
      // uncomment below and update the code to test the property defaultGroups
      //var instane = new Jira.ApplicationRole();
      //expect(instance).to.be();
    });

    it('should have the property defined (base name: "defined")', function() {
      // uncomment below and update the code to test the property defined
      //var instane = new Jira.ApplicationRole();
      //expect(instance).to.be();
    });

    it('should have the property groups (base name: "groups")', function() {
      // uncomment below and update the code to test the property groups
      //var instane = new Jira.ApplicationRole();
      //expect(instance).to.be();
    });

    it('should have the property hasUnlimitedSeats (base name: "hasUnlimitedSeats")', function() {
      // uncomment below and update the code to test the property hasUnlimitedSeats
      //var instane = new Jira.ApplicationRole();
      //expect(instance).to.be();
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instane = new Jira.ApplicationRole();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new Jira.ApplicationRole();
      //expect(instance).to.be();
    });

    it('should have the property numberOfSeats (base name: "numberOfSeats")', function() {
      // uncomment below and update the code to test the property numberOfSeats
      //var instane = new Jira.ApplicationRole();
      //expect(instance).to.be();
    });

    it('should have the property platform (base name: "platform")', function() {
      // uncomment below and update the code to test the property platform
      //var instane = new Jira.ApplicationRole();
      //expect(instance).to.be();
    });

    it('should have the property remainingSeats (base name: "remainingSeats")', function() {
      // uncomment below and update the code to test the property remainingSeats
      //var instane = new Jira.ApplicationRole();
      //expect(instance).to.be();
    });

    it('should have the property selectedByDefault (base name: "selectedByDefault")', function() {
      // uncomment below and update the code to test the property selectedByDefault
      //var instane = new Jira.ApplicationRole();
      //expect(instance).to.be();
    });

    it('should have the property userCount (base name: "userCount")', function() {
      // uncomment below and update the code to test the property userCount
      //var instane = new Jira.ApplicationRole();
      //expect(instance).to.be();
    });

    it('should have the property userCountDescription (base name: "userCountDescription")', function() {
      // uncomment below and update the code to test the property userCountDescription
      //var instane = new Jira.ApplicationRole();
      //expect(instance).to.be();
    });

  });

}));
