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
    instance = new Jira.IssueLinkTypesApi();
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

  describe('IssueLinkTypesApi', function() {
    describe('issueLinkTypeGet', function() {
      it('should call issueLinkTypeGet successfully', function(done) {
        //uncomment below and update the code to test issueLinkTypeGet
        //instance.issueLinkTypeGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('issueLinkTypeIssueLinkTypeIdDelete', function() {
      it('should call issueLinkTypeIssueLinkTypeIdDelete successfully', function(done) {
        //uncomment below and update the code to test issueLinkTypeIssueLinkTypeIdDelete
        //instance.issueLinkTypeIssueLinkTypeIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('issueLinkTypeIssueLinkTypeIdGet', function() {
      it('should call issueLinkTypeIssueLinkTypeIdGet successfully', function(done) {
        //uncomment below and update the code to test issueLinkTypeIssueLinkTypeIdGet
        //instance.issueLinkTypeIssueLinkTypeIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('issueLinkTypeIssueLinkTypeIdPut', function() {
      it('should call issueLinkTypeIssueLinkTypeIdPut successfully', function(done) {
        //uncomment below and update the code to test issueLinkTypeIssueLinkTypeIdPut
        //instance.issueLinkTypeIssueLinkTypeIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('issueLinkTypePost', function() {
      it('should call issueLinkTypePost successfully', function(done) {
        //uncomment below and update the code to test issueLinkTypePost
        //instance.issueLinkTypePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
