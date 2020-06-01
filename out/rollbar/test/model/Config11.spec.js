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
    instance = new Rollbar.Config11();
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

  describe('Config11', function() {
    it('should create an instance of Config11', function() {
      // uncomment below and update the code to test Config11
      //var instane = new Rollbar.Config11();
      //expect(instance).to.be.a(Rollbar.Config11);
    });

    it('should have the property messageTemplate (base name: "message_template")', function() {
      // uncomment below and update the code to test the property messageTemplate
      //var instane = new Rollbar.Config11();
      //expect(instance).to.be();
    });

    it('should have the property showMessageButtons (base name: "show_message_buttons")', function() {
      // uncomment below and update the code to test the property showMessageButtons
      //var instane = new Rollbar.Config11();
      //expect(instance).to.be();
    });

    it('should have the property channel (base name: "channel")', function() {
      // uncomment below and update the code to test the property channel
      //var instane = new Rollbar.Config11();
      //expect(instance).to.be();
    });

  });

}));