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
    instance = new Jira.FilterSharingApi();
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

  describe('FilterSharingApi', function() {
    describe('filterDefaultShareScopeGet', function() {
      it('should call filterDefaultShareScopeGet successfully', function(done) {
        //uncomment below and update the code to test filterDefaultShareScopeGet
        //instance.filterDefaultShareScopeGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('filterDefaultShareScopePut', function() {
      it('should call filterDefaultShareScopePut successfully', function(done) {
        //uncomment below and update the code to test filterDefaultShareScopePut
        //instance.filterDefaultShareScopePut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('filterIdPermissionGet', function() {
      it('should call filterIdPermissionGet successfully', function(done) {
        //uncomment below and update the code to test filterIdPermissionGet
        //instance.filterIdPermissionGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('filterIdPermissionPermissionIdDelete', function() {
      it('should call filterIdPermissionPermissionIdDelete successfully', function(done) {
        //uncomment below and update the code to test filterIdPermissionPermissionIdDelete
        //instance.filterIdPermissionPermissionIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('filterIdPermissionPermissionIdGet', function() {
      it('should call filterIdPermissionPermissionIdGet successfully', function(done) {
        //uncomment below and update the code to test filterIdPermissionPermissionIdGet
        //instance.filterIdPermissionPermissionIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('filterIdPermissionPost', function() {
      it('should call filterIdPermissionPost successfully', function(done) {
        //uncomment below and update the code to test filterIdPermissionPost
        //instance.filterIdPermissionPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
