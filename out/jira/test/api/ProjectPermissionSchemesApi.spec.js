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
    instance = new Jira.ProjectPermissionSchemesApi();
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

  describe('ProjectPermissionSchemesApi', function() {
    describe('projectProjectKeyOrIdIssuesecuritylevelschemeGet', function() {
      it('should call projectProjectKeyOrIdIssuesecuritylevelschemeGet successfully', function(done) {
        //uncomment below and update the code to test projectProjectKeyOrIdIssuesecuritylevelschemeGet
        //instance.projectProjectKeyOrIdIssuesecuritylevelschemeGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('projectProjectKeyOrIdPermissionschemeGet', function() {
      it('should call projectProjectKeyOrIdPermissionschemeGet successfully', function(done) {
        //uncomment below and update the code to test projectProjectKeyOrIdPermissionschemeGet
        //instance.projectProjectKeyOrIdPermissionschemeGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('projectProjectKeyOrIdPermissionschemePut', function() {
      it('should call projectProjectKeyOrIdPermissionschemePut successfully', function(done) {
        //uncomment below and update the code to test projectProjectKeyOrIdPermissionschemePut
        //instance.projectProjectKeyOrIdPermissionschemePut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('projectProjectKeyOrIdSecuritylevelGet', function() {
      it('should call projectProjectKeyOrIdSecuritylevelGet successfully', function(done) {
        //uncomment below and update the code to test projectProjectKeyOrIdSecuritylevelGet
        //instance.projectProjectKeyOrIdSecuritylevelGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
