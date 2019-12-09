/**
 * Bitbucket
 * Code against the Bitbucket API to automate simple tasks, embed Bitbucket data into your own site, build mobile or desktop apps, or even add custom UI add-ons into Bitbucket itself using the Connect framework.
 *
 * The version of the OpenAPI document: 2.0
 * Contact: support@bitbucket.org
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
    factory(root.expect, root.Bitbucket);
  }
}(this, function(expect, Bitbucket) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Bitbucket.PipelineRefTarget();
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

  describe('PipelineRefTarget', function() {
    it('should create an instance of PipelineRefTarget', function() {
      // uncomment below and update the code to test PipelineRefTarget
      //var instane = new Bitbucket.PipelineRefTarget();
      //expect(instance).to.be.a(Bitbucket.PipelineRefTarget);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new Bitbucket.PipelineRefTarget();
      //expect(instance).to.be();
    });

    it('should have the property commit (base name: "commit")', function() {
      // uncomment below and update the code to test the property commit
      //var instane = new Bitbucket.PipelineRefTarget();
      //expect(instance).to.be();
    });

    it('should have the property refName (base name: "ref_name")', function() {
      // uncomment below and update the code to test the property refName
      //var instane = new Bitbucket.PipelineRefTarget();
      //expect(instance).to.be();
    });

    it('should have the property refType (base name: "ref_type")', function() {
      // uncomment below and update the code to test the property refType
      //var instane = new Bitbucket.PipelineRefTarget();
      //expect(instance).to.be();
    });

    it('should have the property selector (base name: "selector")', function() {
      // uncomment below and update the code to test the property selector
      //var instane = new Bitbucket.PipelineRefTarget();
      //expect(instance).to.be();
    });

  });

}));
