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
    instance = new Bitbucket.PullrequestsApi();
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

  describe('PullrequestsApi', function() {
    describe('getPullrequestsForCommit', function() {
      it('should call getPullrequestsForCommit successfully', function(done) {
        //uncomment below and update the code to test getPullrequestsForCommit
        //instance.getPullrequestsForCommit(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('pullrequestsSelectedUserGet', function() {
      it('should call pullrequestsSelectedUserGet successfully', function(done) {
        //uncomment below and update the code to test pullrequestsSelectedUserGet
        //instance.pullrequestsSelectedUserGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugDefaultReviewersGet', function() {
      it('should call repositoriesWorkspaceRepoSlugDefaultReviewersGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugDefaultReviewersGet
        //instance.repositoriesWorkspaceRepoSlugDefaultReviewersGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameDelete', function() {
      it('should call repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameDelete successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameDelete
        //instance.repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameGet', function() {
      it('should call repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameGet
        //instance.repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernameGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePut', function() {
      it('should call repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePut successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePut
        //instance.repositoriesWorkspaceRepoSlugDefaultReviewersTargetUsernamePut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugPullrequestsActivityGet', function() {
      it('should call repositoriesWorkspaceRepoSlugPullrequestsActivityGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugPullrequestsActivityGet
        //instance.repositoriesWorkspaceRepoSlugPullrequestsActivityGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugPullrequestsGet', function() {
      it('should call repositoriesWorkspaceRepoSlugPullrequestsGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugPullrequestsGet
        //instance.repositoriesWorkspaceRepoSlugPullrequestsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugPullrequestsPost', function() {
      it('should call repositoriesWorkspaceRepoSlugPullrequestsPost successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugPullrequestsPost
        //instance.repositoriesWorkspaceRepoSlugPullrequestsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityGet', function() {
      it('should call repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityGet
        //instance.repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveDelete', function() {
      it('should call repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveDelete successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveDelete
        //instance.repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprovePost', function() {
      it('should call repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprovePost successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprovePost
        //instance.repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprovePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdDelete', function() {
      it('should call repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdDelete successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdDelete
        //instance.repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdGet', function() {
      it('should call repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdGet
        //instance.repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdPut', function() {
      it('should call repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdPut successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdPut
        //instance.repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsCommentIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsGet', function() {
      it('should call repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsGet
        //instance.repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsPost', function() {
      it('should call repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsPost successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsPost
        //instance.repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommentsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsGet', function() {
      it('should call repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsGet
        //instance.repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdCommitsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclinePost', function() {
      it('should call repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclinePost successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclinePost
        //instance.repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclinePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffGet', function() {
      it('should call repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffGet
        //instance.repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatGet', function() {
      it('should call repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatGet
        //instance.repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffstatGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdGet', function() {
      it('should call repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdGet
        //instance.repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergePost', function() {
      it('should call repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergePost successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergePost
        //instance.repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdGet', function() {
      it('should call repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdGet
        //instance.repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdMergeTaskStatusTaskIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchGet', function() {
      it('should call repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchGet
        //instance.repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPut', function() {
      it('should call repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPut successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPut
        //instance.repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesGet', function() {
      it('should call repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesGet
        //instance.repositoriesWorkspaceRepoSlugPullrequestsPullRequestIdStatusesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
