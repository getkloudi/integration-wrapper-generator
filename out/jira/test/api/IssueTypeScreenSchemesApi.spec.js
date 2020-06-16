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
    instance = new Jira.IssueTypeScreenSchemesApi();
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

  describe('IssueTypeScreenSchemesApi', function() {
    describe('issuetypescreenschemeGet', function() {
      it('should call issuetypescreenschemeGet successfully', function(done) {
        //uncomment below and update the code to test issuetypescreenschemeGet
        //instance.issuetypescreenschemeGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('issuetypescreenschemeMappingGet', function() {
      it('should call issuetypescreenschemeMappingGet successfully', function(done) {
        //uncomment below and update the code to test issuetypescreenschemeMappingGet
        //instance.issuetypescreenschemeMappingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('issuetypescreenschemeProjectGet', function() {
      it('should call issuetypescreenschemeProjectGet successfully', function(done) {
        //uncomment below and update the code to test issuetypescreenschemeProjectGet
        //instance.issuetypescreenschemeProjectGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('issuetypescreenschemeProjectPut', function() {
      it('should call issuetypescreenschemeProjectPut successfully', function(done) {
        //uncomment below and update the code to test issuetypescreenschemeProjectPut
        //instance.issuetypescreenschemeProjectPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
