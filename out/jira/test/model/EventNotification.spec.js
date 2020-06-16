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
    instance = new Jira.EventNotification();
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

  describe('EventNotification', function() {
    it('should create an instance of EventNotification', function() {
      // uncomment below and update the code to test EventNotification
      //var instane = new Jira.EventNotification();
      //expect(instance).to.be.a(Jira.EventNotification);
    });

    it('should have the property emailAddress (base name: "emailAddress")', function() {
      // uncomment below and update the code to test the property emailAddress
      //var instane = new Jira.EventNotification();
      //expect(instance).to.be();
    });

    it('should have the property expand (base name: "expand")', function() {
      // uncomment below and update the code to test the property expand
      //var instane = new Jira.EventNotification();
      //expect(instance).to.be();
    });

    it('should have the property field (base name: "field")', function() {
      // uncomment below and update the code to test the property field
      //var instane = new Jira.EventNotification();
      //expect(instance).to.be();
    });

    it('should have the property group (base name: "group")', function() {
      // uncomment below and update the code to test the property group
      //var instane = new Jira.EventNotification();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Jira.EventNotification();
      //expect(instance).to.be();
    });

    it('should have the property notificationType (base name: "notificationType")', function() {
      // uncomment below and update the code to test the property notificationType
      //var instane = new Jira.EventNotification();
      //expect(instance).to.be();
    });

    it('should have the property parameter (base name: "parameter")', function() {
      // uncomment below and update the code to test the property parameter
      //var instane = new Jira.EventNotification();
      //expect(instance).to.be();
    });

    it('should have the property projectRole (base name: "projectRole")', function() {
      // uncomment below and update the code to test the property projectRole
      //var instane = new Jira.EventNotification();
      //expect(instance).to.be();
    });

    it('should have the property user (base name: "user")', function() {
      // uncomment below and update the code to test the property user
      //var instane = new Jira.EventNotification();
      //expect(instance).to.be();
    });

  });

}));
