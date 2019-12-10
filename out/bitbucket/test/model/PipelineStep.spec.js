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
    instance = new Bitbucket.PipelineStep();
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

  describe('PipelineStep', function() {
    it('should create an instance of PipelineStep', function() {
      // uncomment below and update the code to test PipelineStep
      //var instane = new Bitbucket.PipelineStep();
      //expect(instance).to.be.a(Bitbucket.PipelineStep);
    });

    it('should have the property completedOn (base name: "completed_on")', function() {
      // uncomment below and update the code to test the property completedOn
      //var instane = new Bitbucket.PipelineStep();
      //expect(instance).to.be();
    });

    it('should have the property image (base name: "image")', function() {
      // uncomment below and update the code to test the property image
      //var instane = new Bitbucket.PipelineStep();
      //expect(instance).to.be();
    });

    it('should have the property logByteCount (base name: "logByteCount")', function() {
      // uncomment below and update the code to test the property logByteCount
      //var instane = new Bitbucket.PipelineStep();
      //expect(instance).to.be();
    });

    it('should have the property scriptCommands (base name: "script_commands")', function() {
      // uncomment below and update the code to test the property scriptCommands
      //var instane = new Bitbucket.PipelineStep();
      //expect(instance).to.be();
    });

    it('should have the property setupCommands (base name: "setup_commands")', function() {
      // uncomment below and update the code to test the property setupCommands
      //var instane = new Bitbucket.PipelineStep();
      //expect(instance).to.be();
    });

    it('should have the property startedOn (base name: "started_on")', function() {
      // uncomment below and update the code to test the property startedOn
      //var instane = new Bitbucket.PipelineStep();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instane = new Bitbucket.PipelineStep();
      //expect(instance).to.be();
    });

    it('should have the property uuid (base name: "uuid")', function() {
      // uncomment below and update the code to test the property uuid
      //var instane = new Bitbucket.PipelineStep();
      //expect(instance).to.be();
    });

  });

}));