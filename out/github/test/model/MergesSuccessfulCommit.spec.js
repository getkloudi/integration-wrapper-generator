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
    instance = new Github.MergesSuccessfulCommit();
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

  describe('MergesSuccessfulCommit', function() {
    it('should create an instance of MergesSuccessfulCommit', function() {
      // uncomment below and update the code to test MergesSuccessfulCommit
      //var instane = new Github.MergesSuccessfulCommit();
      //expect(instance).to.be.a(Github.MergesSuccessfulCommit);
    });

    it('should have the property author (base name: "author")', function() {
      // uncomment below and update the code to test the property author
      //var instane = new Github.MergesSuccessfulCommit();
      //expect(instance).to.be();
    });

    it('should have the property commentCount (base name: "comment_count")', function() {
      // uncomment below and update the code to test the property commentCount
      //var instane = new Github.MergesSuccessfulCommit();
      //expect(instance).to.be();
    });

    it('should have the property committer (base name: "committer")', function() {
      // uncomment below and update the code to test the property committer
      //var instane = new Github.MergesSuccessfulCommit();
      //expect(instance).to.be();
    });

    it('should have the property message (base name: "message")', function() {
      // uncomment below and update the code to test the property message
      //var instane = new Github.MergesSuccessfulCommit();
      //expect(instance).to.be();
    });

    it('should have the property tree (base name: "tree")', function() {
      // uncomment below and update the code to test the property tree
      //var instane = new Github.MergesSuccessfulCommit();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new Github.MergesSuccessfulCommit();
      //expect(instance).to.be();
    });

  });

}));
