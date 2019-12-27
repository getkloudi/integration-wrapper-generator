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
    instance = new Bitbucket.IssueTrackerApi();
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

  describe('IssueTrackerApi', function() {
    describe('repositoriesWorkspaceRepoSlugComponentsComponentIdGet', function() {
      it('should call repositoriesWorkspaceRepoSlugComponentsComponentIdGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugComponentsComponentIdGet
        //instance.repositoriesWorkspaceRepoSlugComponentsComponentIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugComponentsGet', function() {
      it('should call repositoriesWorkspaceRepoSlugComponentsGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugComponentsGet
        //instance.repositoriesWorkspaceRepoSlugComponentsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugIssuesGet', function() {
      it('should call repositoriesWorkspaceRepoSlugIssuesGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugIssuesGet
        //instance.repositoriesWorkspaceRepoSlugIssuesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsGet', function() {
      it('should call repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsGet
        //instance.repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathDelete', function() {
      it('should call repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathDelete successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathDelete
        //instance.repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathGet', function() {
      it('should call repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathGet
        //instance.repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPost', function() {
      it('should call repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPost successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPost
        //instance.repositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdGet', function() {
      it('should call repositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdGet
        //instance.repositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugIssuesIssueIdChangesGet', function() {
      it('should call repositoriesWorkspaceRepoSlugIssuesIssueIdChangesGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugIssuesIssueIdChangesGet
        //instance.repositoriesWorkspaceRepoSlugIssuesIssueIdChangesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugIssuesIssueIdChangesPost', function() {
      it('should call repositoriesWorkspaceRepoSlugIssuesIssueIdChangesPost successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugIssuesIssueIdChangesPost
        //instance.repositoriesWorkspaceRepoSlugIssuesIssueIdChangesPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdDelete', function() {
      it('should call repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdDelete successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdDelete
        //instance.repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdGet', function() {
      it('should call repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdGet
        //instance.repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdPut', function() {
      it('should call repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdPut successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdPut
        //instance.repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsGet', function() {
      it('should call repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsGet
        //instance.repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsPost', function() {
      it('should call repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsPost successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsPost
        //instance.repositoriesWorkspaceRepoSlugIssuesIssueIdCommentsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugIssuesIssueIdDelete', function() {
      it('should call repositoriesWorkspaceRepoSlugIssuesIssueIdDelete successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugIssuesIssueIdDelete
        //instance.repositoriesWorkspaceRepoSlugIssuesIssueIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugIssuesIssueIdGet', function() {
      it('should call repositoriesWorkspaceRepoSlugIssuesIssueIdGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugIssuesIssueIdGet
        //instance.repositoriesWorkspaceRepoSlugIssuesIssueIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugIssuesIssueIdPut', function() {
      it('should call repositoriesWorkspaceRepoSlugIssuesIssueIdPut successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugIssuesIssueIdPut
        //instance.repositoriesWorkspaceRepoSlugIssuesIssueIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugIssuesIssueIdVoteDelete', function() {
      it('should call repositoriesWorkspaceRepoSlugIssuesIssueIdVoteDelete successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugIssuesIssueIdVoteDelete
        //instance.repositoriesWorkspaceRepoSlugIssuesIssueIdVoteDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugIssuesIssueIdVoteGet', function() {
      it('should call repositoriesWorkspaceRepoSlugIssuesIssueIdVoteGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugIssuesIssueIdVoteGet
        //instance.repositoriesWorkspaceRepoSlugIssuesIssueIdVoteGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugIssuesIssueIdVotePut', function() {
      it('should call repositoriesWorkspaceRepoSlugIssuesIssueIdVotePut successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugIssuesIssueIdVotePut
        //instance.repositoriesWorkspaceRepoSlugIssuesIssueIdVotePut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugIssuesIssueIdWatchDelete', function() {
      it('should call repositoriesWorkspaceRepoSlugIssuesIssueIdWatchDelete successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugIssuesIssueIdWatchDelete
        //instance.repositoriesWorkspaceRepoSlugIssuesIssueIdWatchDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugIssuesIssueIdWatchGet', function() {
      it('should call repositoriesWorkspaceRepoSlugIssuesIssueIdWatchGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugIssuesIssueIdWatchGet
        //instance.repositoriesWorkspaceRepoSlugIssuesIssueIdWatchGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugIssuesIssueIdWatchPut', function() {
      it('should call repositoriesWorkspaceRepoSlugIssuesIssueIdWatchPut successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugIssuesIssueIdWatchPut
        //instance.repositoriesWorkspaceRepoSlugIssuesIssueIdWatchPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugIssuesPost', function() {
      it('should call repositoriesWorkspaceRepoSlugIssuesPost successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugIssuesPost
        //instance.repositoriesWorkspaceRepoSlugIssuesPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugMilestonesGet', function() {
      it('should call repositoriesWorkspaceRepoSlugMilestonesGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugMilestonesGet
        //instance.repositoriesWorkspaceRepoSlugMilestonesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugMilestonesMilestoneIdGet', function() {
      it('should call repositoriesWorkspaceRepoSlugMilestonesMilestoneIdGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugMilestonesMilestoneIdGet
        //instance.repositoriesWorkspaceRepoSlugMilestonesMilestoneIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugVersionsGet', function() {
      it('should call repositoriesWorkspaceRepoSlugVersionsGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugVersionsGet
        //instance.repositoriesWorkspaceRepoSlugVersionsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugVersionsVersionIdGet', function() {
      it('should call repositoriesWorkspaceRepoSlugVersionsVersionIdGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugVersionsVersionIdGet
        //instance.repositoriesWorkspaceRepoSlugVersionsVersionIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
