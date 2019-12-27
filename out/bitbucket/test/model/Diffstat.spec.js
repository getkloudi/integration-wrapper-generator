/**
 * Bitbucket API
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
    instance = new Bitbucket.Diffstat();
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

  describe('Diffstat', function() {
    it('should create an instance of Diffstat', function() {
      // uncomment below and update the code to test Diffstat
      //var instane = new Bitbucket.Diffstat();
      //expect(instance).to.be.a(Bitbucket.Diffstat);
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instane = new Bitbucket.Diffstat();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new Bitbucket.Diffstat();
      //expect(instance).to.be();
    });

    it('should have the property linesAdded (base name: "lines_added")', function() {
      // uncomment below and update the code to test the property linesAdded
      //var instane = new Bitbucket.Diffstat();
      //expect(instance).to.be();
    });

    it('should have the property linesRemoved (base name: "lines_removed")', function() {
      // uncomment below and update the code to test the property linesRemoved
      //var instane = new Bitbucket.Diffstat();
      //expect(instance).to.be();
    });

    it('should have the property old (base name: "old")', function() {
      // uncomment below and update the code to test the property old
      //var instane = new Bitbucket.Diffstat();
      //expect(instance).to.be();
    });

    it('should have the property _new (base name: "new")', function() {
      // uncomment below and update the code to test the property _new
      //var instane = new Bitbucket.Diffstat();
      //expect(instance).to.be();
    });

  });

}));