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
    instance = new Jira.ProjectRolesApi();
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

  describe('ProjectRolesApi', function() {
    describe('projectProjectIdOrKeyRoleGet', function() {
      it('should call projectProjectIdOrKeyRoleGet successfully', function(done) {
        //uncomment below and update the code to test projectProjectIdOrKeyRoleGet
        //instance.projectProjectIdOrKeyRoleGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('projectProjectIdOrKeyRoleIdGet', function() {
      it('should call projectProjectIdOrKeyRoleIdGet successfully', function(done) {
        //uncomment below and update the code to test projectProjectIdOrKeyRoleIdGet
        //instance.projectProjectIdOrKeyRoleIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('projectProjectIdOrKeyRoledetailsGet', function() {
      it('should call projectProjectIdOrKeyRoledetailsGet successfully', function(done) {
        //uncomment below and update the code to test projectProjectIdOrKeyRoledetailsGet
        //instance.projectProjectIdOrKeyRoledetailsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('roleGet', function() {
      it('should call roleGet successfully', function(done) {
        //uncomment below and update the code to test roleGet
        //instance.roleGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('roleIdDelete', function() {
      it('should call roleIdDelete successfully', function(done) {
        //uncomment below and update the code to test roleIdDelete
        //instance.roleIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('roleIdGet', function() {
      it('should call roleIdGet successfully', function(done) {
        //uncomment below and update the code to test roleIdGet
        //instance.roleIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('roleIdPost', function() {
      it('should call roleIdPost successfully', function(done) {
        //uncomment below and update the code to test roleIdPost
        //instance.roleIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('roleIdPut', function() {
      it('should call roleIdPut successfully', function(done) {
        //uncomment below and update the code to test roleIdPut
        //instance.roleIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('rolePost', function() {
      it('should call rolePost successfully', function(done) {
        //uncomment below and update the code to test rolePost
        //instance.rolePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));