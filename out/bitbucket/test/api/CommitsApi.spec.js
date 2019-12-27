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
    instance = new Bitbucket.CommitsApi();
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

  describe('CommitsApi', function() {
    describe('repositoriesWorkspaceRepoSlugCommitNodeApproveDelete', function() {
      it('should call repositoriesWorkspaceRepoSlugCommitNodeApproveDelete successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugCommitNodeApproveDelete
        //instance.repositoriesWorkspaceRepoSlugCommitNodeApproveDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugCommitNodeApprovePost', function() {
      it('should call repositoriesWorkspaceRepoSlugCommitNodeApprovePost successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugCommitNodeApprovePost
        //instance.repositoriesWorkspaceRepoSlugCommitNodeApprovePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugCommitNodeCommentsCommentIdGet', function() {
      it('should call repositoriesWorkspaceRepoSlugCommitNodeCommentsCommentIdGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugCommitNodeCommentsCommentIdGet
        //instance.repositoriesWorkspaceRepoSlugCommitNodeCommentsCommentIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugCommitNodeCommentsGet', function() {
      it('should call repositoriesWorkspaceRepoSlugCommitNodeCommentsGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugCommitNodeCommentsGet
        //instance.repositoriesWorkspaceRepoSlugCommitNodeCommentsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugCommitNodeCommentsPost', function() {
      it('should call repositoriesWorkspaceRepoSlugCommitNodeCommentsPost successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugCommitNodeCommentsPost
        //instance.repositoriesWorkspaceRepoSlugCommitNodeCommentsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugCommitNodeGet', function() {
      it('should call repositoriesWorkspaceRepoSlugCommitNodeGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugCommitNodeGet
        //instance.repositoriesWorkspaceRepoSlugCommitNodeGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugCommitsGet', function() {
      it('should call repositoriesWorkspaceRepoSlugCommitsGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugCommitsGet
        //instance.repositoriesWorkspaceRepoSlugCommitsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugCommitsPost', function() {
      it('should call repositoriesWorkspaceRepoSlugCommitsPost successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugCommitsPost
        //instance.repositoriesWorkspaceRepoSlugCommitsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugCommitsRevisionGet', function() {
      it('should call repositoriesWorkspaceRepoSlugCommitsRevisionGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugCommitsRevisionGet
        //instance.repositoriesWorkspaceRepoSlugCommitsRevisionGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugCommitsRevisionPost', function() {
      it('should call repositoriesWorkspaceRepoSlugCommitsRevisionPost successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugCommitsRevisionPost
        //instance.repositoriesWorkspaceRepoSlugCommitsRevisionPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugDiffSpecGet', function() {
      it('should call repositoriesWorkspaceRepoSlugDiffSpecGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugDiffSpecGet
        //instance.repositoriesWorkspaceRepoSlugDiffSpecGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugPatchSpecGet', function() {
      it('should call repositoriesWorkspaceRepoSlugPatchSpecGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugPatchSpecGet
        //instance.repositoriesWorkspaceRepoSlugPatchSpecGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
