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
    instance = new Bitbucket.DownloadsApi();
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

  describe('DownloadsApi', function() {
    describe('repositoriesWorkspaceRepoSlugDownloadsFilenameDelete', function() {
      it('should call repositoriesWorkspaceRepoSlugDownloadsFilenameDelete successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugDownloadsFilenameDelete
        //instance.repositoriesWorkspaceRepoSlugDownloadsFilenameDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugDownloadsFilenameGet', function() {
      it('should call repositoriesWorkspaceRepoSlugDownloadsFilenameGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugDownloadsFilenameGet
        //instance.repositoriesWorkspaceRepoSlugDownloadsFilenameGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugDownloadsGet', function() {
      it('should call repositoriesWorkspaceRepoSlugDownloadsGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugDownloadsGet
        //instance.repositoriesWorkspaceRepoSlugDownloadsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugDownloadsPost', function() {
      it('should call repositoriesWorkspaceRepoSlugDownloadsPost successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugDownloadsPost
        //instance.repositoriesWorkspaceRepoSlugDownloadsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
