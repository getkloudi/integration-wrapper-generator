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
    instance = new Gitlab.BasicProjectDetails();
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

  describe('BasicProjectDetails', function() {
    it('should create an instance of BasicProjectDetails', function() {
      // uncomment below and update the code to test BasicProjectDetails
      //var instane = new Gitlab.BasicProjectDetails();
      //expect(instance).to.be.a(Gitlab.BasicProjectDetails);
    });

    it('should have the property httpUrlToRepo (base name: "http_url_to_repo")', function() {
      // uncomment below and update the code to test the property httpUrlToRepo
      //var instane = new Gitlab.BasicProjectDetails();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Gitlab.BasicProjectDetails();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new Gitlab.BasicProjectDetails();
      //expect(instance).to.be();
    });

    it('should have the property nameWithNamespace (base name: "name_with_namespace")', function() {
      // uncomment below and update the code to test the property nameWithNamespace
      //var instane = new Gitlab.BasicProjectDetails();
      //expect(instance).to.be();
    });

    it('should have the property path (base name: "path")', function() {
      // uncomment below and update the code to test the property path
      //var instane = new Gitlab.BasicProjectDetails();
      //expect(instance).to.be();
    });

    it('should have the property pathWithNamespace (base name: "path_with_namespace")', function() {
      // uncomment below and update the code to test the property pathWithNamespace
      //var instane = new Gitlab.BasicProjectDetails();
      //expect(instance).to.be();
    });

    it('should have the property webUrl (base name: "web_url")', function() {
      // uncomment below and update the code to test the property webUrl
      //var instane = new Gitlab.BasicProjectDetails();
      //expect(instance).to.be();
    });

  });

}));
