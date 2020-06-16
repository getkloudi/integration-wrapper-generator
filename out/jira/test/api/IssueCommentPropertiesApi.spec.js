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
    instance = new Jira.IssueCommentPropertiesApi();
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

  describe('IssueCommentPropertiesApi', function() {
    describe('commentCommentIdPropertiesGet', function() {
      it('should call commentCommentIdPropertiesGet successfully', function(done) {
        //uncomment below and update the code to test commentCommentIdPropertiesGet
        //instance.commentCommentIdPropertiesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('commentCommentIdPropertiesPropertyKeyDelete', function() {
      it('should call commentCommentIdPropertiesPropertyKeyDelete successfully', function(done) {
        //uncomment below and update the code to test commentCommentIdPropertiesPropertyKeyDelete
        //instance.commentCommentIdPropertiesPropertyKeyDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('commentCommentIdPropertiesPropertyKeyGet', function() {
      it('should call commentCommentIdPropertiesPropertyKeyGet successfully', function(done) {
        //uncomment below and update the code to test commentCommentIdPropertiesPropertyKeyGet
        //instance.commentCommentIdPropertiesPropertyKeyGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('commentCommentIdPropertiesPropertyKeyPut', function() {
      it('should call commentCommentIdPropertiesPropertyKeyPut successfully', function(done) {
        //uncomment below and update the code to test commentCommentIdPropertiesPropertyKeyPut
        //instance.commentCommentIdPropertiesPropertyKeyPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
