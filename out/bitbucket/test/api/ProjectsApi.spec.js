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
    describe('teamsUsernameProjectsGet', function() {
      it('should call teamsUsernameProjectsGet successfully', function(done) {
        //uncomment below and update the code to test teamsUsernameProjectsGet
        //instance.teamsUsernameProjectsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsUsernameProjectsPost', function() {
      it('should call teamsUsernameProjectsPost successfully', function(done) {
        //uncomment below and update the code to test teamsUsernameProjectsPost
        //instance.teamsUsernameProjectsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsUsernameProjectsProjectKeyDelete', function() {
      it('should call teamsUsernameProjectsProjectKeyDelete successfully', function(done) {
        //uncomment below and update the code to test teamsUsernameProjectsProjectKeyDelete
        //instance.teamsUsernameProjectsProjectKeyDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsUsernameProjectsProjectKeyGet', function() {
      it('should call teamsUsernameProjectsProjectKeyGet successfully', function(done) {
        //uncomment below and update the code to test teamsUsernameProjectsProjectKeyGet
        //instance.teamsUsernameProjectsProjectKeyGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsUsernameProjectsProjectKeyPut', function() {
      it('should call teamsUsernameProjectsProjectKeyPut successfully', function(done) {
        //uncomment below and update the code to test teamsUsernameProjectsProjectKeyPut
        //instance.teamsUsernameProjectsProjectKeyPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('workspacesWorkspaceProjectsPost', function() {
      it('should call workspacesWorkspaceProjectsPost successfully', function(done) {
        //uncomment below and update the code to test workspacesWorkspaceProjectsPost
        //instance.workspacesWorkspaceProjectsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('workspacesWorkspaceProjectsProjectKeyDelete', function() {
      it('should call workspacesWorkspaceProjectsProjectKeyDelete successfully', function(done) {
        //uncomment below and update the code to test workspacesWorkspaceProjectsProjectKeyDelete
        //instance.workspacesWorkspaceProjectsProjectKeyDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('workspacesWorkspaceProjectsProjectKeyGet', function() {
      it('should call workspacesWorkspaceProjectsProjectKeyGet successfully', function(done) {
        //uncomment below and update the code to test workspacesWorkspaceProjectsProjectKeyGet
        //instance.workspacesWorkspaceProjectsProjectKeyGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('workspacesWorkspaceProjectsProjectKeyPut', function() {
      it('should call workspacesWorkspaceProjectsProjectKeyPut successfully', function(done) {
        //uncomment below and update the code to test workspacesWorkspaceProjectsProjectKeyPut
        //instance.workspacesWorkspaceProjectsProjectKeyPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
