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
    instance = new Bitbucket.ProjectsApi();
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

  describe('ProjectsApi', function() {
    describe('teamsOwnerProjectsGet', function() {
      it('should call teamsOwnerProjectsGet successfully', function(done) {
        //uncomment below and update the code to test teamsOwnerProjectsGet
        //instance.teamsOwnerProjectsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsOwnerProjectsPost', function() {
      it('should call teamsOwnerProjectsPost successfully', function(done) {
        //uncomment below and update the code to test teamsOwnerProjectsPost
        //instance.teamsOwnerProjectsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsOwnerProjectsProjectKeyDelete', function() {
      it('should call teamsOwnerProjectsProjectKeyDelete successfully', function(done) {
        //uncomment below and update the code to test teamsOwnerProjectsProjectKeyDelete
        //instance.teamsOwnerProjectsProjectKeyDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsOwnerProjectsProjectKeyGet', function() {
      it('should call teamsOwnerProjectsProjectKeyGet successfully', function(done) {
        //uncomment below and update the code to test teamsOwnerProjectsProjectKeyGet
        //instance.teamsOwnerProjectsProjectKeyGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsOwnerProjectsProjectKeyPut', function() {
      it('should call teamsOwnerProjectsProjectKeyPut successfully', function(done) {
        //uncomment below and update the code to test teamsOwnerProjectsProjectKeyPut
        //instance.teamsOwnerProjectsProjectKeyPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
