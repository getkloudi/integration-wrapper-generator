/**
 * GitHub
 * Powerful collaboration, code review, and code management for open source and private projects. 
 *
 * The version of the OpenAPI document: v3
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
    factory(root.expect, root.Github);
  }
}(this, function(expect, Github) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Github.Issue();
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

  describe('Issue', function() {
    it('should create an instance of Issue', function() {
      // uncomment below and update the code to test Issue
      //var instane = new Github.Issue();
      //expect(instance).to.be.a(Github.Issue);
    });

    it('should have the property assignee (base name: "assignee")', function() {
      // uncomment below and update the code to test the property assignee
      //var instane = new Github.Issue();
      //expect(instance).to.be();
    });

    it('should have the property body (base name: "body")', function() {
      // uncomment below and update the code to test the property body
      //var instane = new Github.Issue();
      //expect(instance).to.be();
    });

    it('should have the property labels (base name: "labels")', function() {
      // uncomment below and update the code to test the property labels
      //var instane = new Github.Issue();
      //expect(instance).to.be();
    });

    it('should have the property milestone (base name: "milestone")', function() {
      // uncomment below and update the code to test the property milestone
      //var instane = new Github.Issue();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new Github.Issue();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new Github.Issue();
      //expect(instance).to.be();
    });

    it('should have the property _number (base name: "number")', function() {
      // uncomment below and update the code to test the property _number
      //var instane = new Github.Issue();
      //expect(instance).to.be();
    });

  });

}));
