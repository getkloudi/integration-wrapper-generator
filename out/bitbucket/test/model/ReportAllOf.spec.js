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
    instance = new Bitbucket.ReportAllOf();
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

  describe('ReportAllOf', function() {
    it('should create an instance of ReportAllOf', function() {
      // uncomment below and update the code to test ReportAllOf
      //var instane = new Bitbucket.ReportAllOf();
      //expect(instance).to.be.a(Bitbucket.ReportAllOf);
    });

    it('should have the property uuid (base name: "uuid")', function() {
      // uncomment below and update the code to test the property uuid
      //var instane = new Bitbucket.ReportAllOf();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new Bitbucket.ReportAllOf();
      //expect(instance).to.be();
    });

    it('should have the property details (base name: "details")', function() {
      // uncomment below and update the code to test the property details
      //var instane = new Bitbucket.ReportAllOf();
      //expect(instance).to.be();
    });

    it('should have the property externalId (base name: "external_id")', function() {
      // uncomment below and update the code to test the property externalId
      //var instane = new Bitbucket.ReportAllOf();
      //expect(instance).to.be();
    });

    it('should have the property reporter (base name: "reporter")', function() {
      // uncomment below and update the code to test the property reporter
      //var instane = new Bitbucket.ReportAllOf();
      //expect(instance).to.be();
    });

    it('should have the property link (base name: "link")', function() {
      // uncomment below and update the code to test the property link
      //var instane = new Bitbucket.ReportAllOf();
      //expect(instance).to.be();
    });

    it('should have the property remoteLinkEnabled (base name: "remote_link_enabled")', function() {
      // uncomment below and update the code to test the property remoteLinkEnabled
      //var instane = new Bitbucket.ReportAllOf();
      //expect(instance).to.be();
    });

    it('should have the property logoUrl (base name: "logo_url")', function() {
      // uncomment below and update the code to test the property logoUrl
      //var instane = new Bitbucket.ReportAllOf();
      //expect(instance).to.be();
    });

    it('should have the property reportType (base name: "report_type")', function() {
      // uncomment below and update the code to test the property reportType
      //var instane = new Bitbucket.ReportAllOf();
      //expect(instance).to.be();
    });

    it('should have the property result (base name: "result")', function() {
      // uncomment below and update the code to test the property result
      //var instane = new Bitbucket.ReportAllOf();
      //expect(instance).to.be();
    });

    it('should have the property data (base name: "data")', function() {
      // uncomment below and update the code to test the property data
      //var instane = new Bitbucket.ReportAllOf();
      //expect(instance).to.be();
    });

    it('should have the property createdOn (base name: "created_on")', function() {
      // uncomment below and update the code to test the property createdOn
      //var instane = new Bitbucket.ReportAllOf();
      //expect(instance).to.be();
    });

    it('should have the property updatedOn (base name: "updated_on")', function() {
      // uncomment below and update the code to test the property updatedOn
      //var instane = new Bitbucket.ReportAllOf();
      //expect(instance).to.be();
    });

  });

}));
