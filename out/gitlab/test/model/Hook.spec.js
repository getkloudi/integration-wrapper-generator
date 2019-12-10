/**
 * Gitlab
 * The platform for modern developers GitLab unifies issues, code review, CI and CD into a single UI
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
    factory(root.expect, root.Gitlab);
  }
}(this, function(expect, Gitlab) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Gitlab.Hook();
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

  describe('Hook', function() {
    it('should create an instance of Hook', function() {
      // uncomment below and update the code to test Hook
      //var instane = new Gitlab.Hook();
      //expect(instance).to.be.a(Gitlab.Hook);
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new Gitlab.Hook();
      //expect(instance).to.be();
    });

    it('should have the property enableSslVerification (base name: "enable_ssl_verification")', function() {
      // uncomment below and update the code to test the property enableSslVerification
      //var instane = new Gitlab.Hook();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Gitlab.Hook();
      //expect(instance).to.be();
    });

    it('should have the property pushEvents (base name: "push_events")', function() {
      // uncomment below and update the code to test the property pushEvents
      //var instane = new Gitlab.Hook();
      //expect(instance).to.be();
    });

    it('should have the property tagPushEvents (base name: "tag_push_events")', function() {
      // uncomment below and update the code to test the property tagPushEvents
      //var instane = new Gitlab.Hook();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new Gitlab.Hook();
      //expect(instance).to.be();
    });

  });

}));
