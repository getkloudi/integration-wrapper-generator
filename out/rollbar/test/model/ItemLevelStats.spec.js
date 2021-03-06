/**
 * Rollbar API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
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
    factory(root.expect, root.Rollbar);
  }
}(this, function(expect, Rollbar) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Rollbar.ItemLevelStats();
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

  describe('ItemLevelStats', function() {
    it('should create an instance of ItemLevelStats', function() {
      // uncomment below and update the code to test ItemLevelStats
      //var instane = new Rollbar.ItemLevelStats();
      //expect(instance).to.be.a(Rollbar.ItemLevelStats);
    });

    it('should have the property debug (base name: "debug")', function() {
      // uncomment below and update the code to test the property debug
      //var instane = new Rollbar.ItemLevelStats();
      //expect(instance).to.be();
    });

    it('should have the property info (base name: "info")', function() {
      // uncomment below and update the code to test the property info
      //var instane = new Rollbar.ItemLevelStats();
      //expect(instance).to.be();
    });

    it('should have the property warning (base name: "warning")', function() {
      // uncomment below and update the code to test the property warning
      //var instane = new Rollbar.ItemLevelStats();
      //expect(instance).to.be();
    });

    it('should have the property error (base name: "error")', function() {
      // uncomment below and update the code to test the property error
      //var instane = new Rollbar.ItemLevelStats();
      //expect(instance).to.be();
    });

    it('should have the property critical (base name: "critical")', function() {
      // uncomment below and update the code to test the property critical
      //var instane = new Rollbar.ItemLevelStats();
      //expect(instance).to.be();
    });

  });

}));
