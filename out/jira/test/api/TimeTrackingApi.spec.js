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
    instance = new Jira.TimeTrackingApi();
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

  describe('TimeTrackingApi', function() {
    describe('configurationTimetrackingGet', function() {
      it('should call configurationTimetrackingGet successfully', function(done) {
        //uncomment below and update the code to test configurationTimetrackingGet
        //instance.configurationTimetrackingGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('configurationTimetrackingListGet', function() {
      it('should call configurationTimetrackingListGet successfully', function(done) {
        //uncomment below and update the code to test configurationTimetrackingListGet
        //instance.configurationTimetrackingListGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('configurationTimetrackingOptionsGet', function() {
      it('should call configurationTimetrackingOptionsGet successfully', function(done) {
        //uncomment below and update the code to test configurationTimetrackingOptionsGet
        //instance.configurationTimetrackingOptionsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('configurationTimetrackingOptionsPut', function() {
      it('should call configurationTimetrackingOptionsPut successfully', function(done) {
        //uncomment below and update the code to test configurationTimetrackingOptionsPut
        //instance.configurationTimetrackingOptionsPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('configurationTimetrackingPut', function() {
      it('should call configurationTimetrackingPut successfully', function(done) {
        //uncomment below and update the code to test configurationTimetrackingPut
        //instance.configurationTimetrackingPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
