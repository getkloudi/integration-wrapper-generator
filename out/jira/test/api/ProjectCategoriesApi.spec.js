/**
 * The Jira Cloud platform REST API
 * Jira Cloud platform REST API documentation
 *
 * The version of the OpenAPI document: 1001.0.0-SNAPSHOT
 * Contact: ecosystem@atlassian.com
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
    factory(root.expect, root.Jira);
  }
}(this, function(expect, Jira) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Jira.ProjectCategoriesApi();
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

  describe('ProjectCategoriesApi', function() {
    describe('projectCategoryGet', function() {
      it('should call projectCategoryGet successfully', function(done) {
        //uncomment below and update the code to test projectCategoryGet
        //instance.projectCategoryGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('projectCategoryIdDelete', function() {
      it('should call projectCategoryIdDelete successfully', function(done) {
        //uncomment below and update the code to test projectCategoryIdDelete
        //instance.projectCategoryIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('projectCategoryIdGet', function() {
      it('should call projectCategoryIdGet successfully', function(done) {
        //uncomment below and update the code to test projectCategoryIdGet
        //instance.projectCategoryIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('projectCategoryIdPut', function() {
      it('should call projectCategoryIdPut successfully', function(done) {
        //uncomment below and update the code to test projectCategoryIdPut
        //instance.projectCategoryIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('projectCategoryPost', function() {
      it('should call projectCategoryPost successfully', function(done) {
        //uncomment below and update the code to test projectCategoryPost
        //instance.projectCategoryPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
