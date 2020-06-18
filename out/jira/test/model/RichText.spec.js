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
    instance = new Jira.RichText();
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

  describe('RichText', function() {
    it('should create an instance of RichText', function() {
      // uncomment below and update the code to test RichText
      //var instane = new Jira.RichText();
      //expect(instance).to.be.a(Jira.RichText);
    });

    it('should have the property emptyAdf (base name: "emptyAdf")', function() {
      // uncomment below and update the code to test the property emptyAdf
      //var instane = new Jira.RichText();
      //expect(instance).to.be();
    });

    it('should have the property valueSet (base name: "valueSet")', function() {
      // uncomment below and update the code to test the property valueSet
      //var instane = new Jira.RichText();
      //expect(instance).to.be();
    });

  });

}));