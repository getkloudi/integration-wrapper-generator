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
    instance = new Jira.ScreenTypeIDsBean();
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

  describe('ScreenTypeIDsBean', function() {
    it('should create an instance of ScreenTypeIDsBean', function() {
      // uncomment below and update the code to test ScreenTypeIDsBean
      //var instane = new Jira.ScreenTypeIDsBean();
      //expect(instance).to.be.a(Jira.ScreenTypeIDsBean);
    });

    it('should have the property create (base name: "create")', function() {
      // uncomment below and update the code to test the property create
      //var instane = new Jira.ScreenTypeIDsBean();
      //expect(instance).to.be();
    });

    it('should have the property _default (base name: "default")', function() {
      // uncomment below and update the code to test the property _default
      //var instane = new Jira.ScreenTypeIDsBean();
      //expect(instance).to.be();
    });

    it('should have the property edit (base name: "edit")', function() {
      // uncomment below and update the code to test the property edit
      //var instane = new Jira.ScreenTypeIDsBean();
      //expect(instance).to.be();
    });

    it('should have the property view (base name: "view")', function() {
      // uncomment below and update the code to test the property view
      //var instane = new Jira.ScreenTypeIDsBean();
      //expect(instance).to.be();
    });

  });

}));