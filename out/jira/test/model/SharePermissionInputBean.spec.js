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
    instance = new Jira.SharePermissionInputBean();
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

  describe('SharePermissionInputBean', function() {
    it('should create an instance of SharePermissionInputBean', function() {
      // uncomment below and update the code to test SharePermissionInputBean
      //var instane = new Jira.SharePermissionInputBean();
      //expect(instance).to.be.a(Jira.SharePermissionInputBean);
    });

    it('should have the property groupname (base name: "groupname")', function() {
      // uncomment below and update the code to test the property groupname
      //var instane = new Jira.SharePermissionInputBean();
      //expect(instance).to.be();
    });

    it('should have the property projectId (base name: "projectId")', function() {
      // uncomment below and update the code to test the property projectId
      //var instane = new Jira.SharePermissionInputBean();
      //expect(instance).to.be();
    });

    it('should have the property projectRoleId (base name: "projectRoleId")', function() {
      // uncomment below and update the code to test the property projectRoleId
      //var instane = new Jira.SharePermissionInputBean();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new Jira.SharePermissionInputBean();
      //expect(instance).to.be();
    });

  });

}));