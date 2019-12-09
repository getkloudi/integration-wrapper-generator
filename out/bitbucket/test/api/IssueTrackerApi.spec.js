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
    describe('repositoriesUsernameRepoSlugComponentsComponentIdGet', function() {
      it('should call repositoriesUsernameRepoSlugComponentsComponentIdGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesUsernameRepoSlugComponentsComponentIdGet
        //instance.repositoriesUsernameRepoSlugComponentsComponentIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesUsernameRepoSlugComponentsGet', function() {
      it('should call repositoriesUsernameRepoSlugComponentsGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesUsernameRepoSlugComponentsGet
        //instance.repositoriesUsernameRepoSlugComponentsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesUsernameRepoSlugIssuesGet', function() {
      it('should call repositoriesUsernameRepoSlugIssuesGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesUsernameRepoSlugIssuesGet
        //instance.repositoriesUsernameRepoSlugIssuesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsGet', function() {
      it('should call repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsGet
        //instance.repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathDelete', function() {
      it('should call repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathDelete successfully', function(done) {
        //uncomment below and update the code to test repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathDelete
        //instance.repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathGet', function() {
      it('should call repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathGet
        //instance.repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPathGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPost', function() {
      it('should call repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPost successfully', function(done) {
        //uncomment below and update the code to test repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPost
        //instance.repositoriesUsernameRepoSlugIssuesIssueIdAttachmentsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesUsernameRepoSlugIssuesIssueIdCommentsCommentIdGet', function() {
      it('should call repositoriesUsernameRepoSlugIssuesIssueIdCommentsCommentIdGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesUsernameRepoSlugIssuesIssueIdCommentsCommentIdGet
        //instance.repositoriesUsernameRepoSlugIssuesIssueIdCommentsCommentIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesUsernameRepoSlugIssuesIssueIdCommentsGet', function() {
      it('should call repositoriesUsernameRepoSlugIssuesIssueIdCommentsGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesUsernameRepoSlugIssuesIssueIdCommentsGet
        //instance.repositoriesUsernameRepoSlugIssuesIssueIdCommentsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesUsernameRepoSlugIssuesIssueIdDelete', function() {
      it('should call repositoriesUsernameRepoSlugIssuesIssueIdDelete successfully', function(done) {
        //uncomment below and update the code to test repositoriesUsernameRepoSlugIssuesIssueIdDelete
        //instance.repositoriesUsernameRepoSlugIssuesIssueIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesUsernameRepoSlugIssuesIssueIdGet', function() {
      it('should call repositoriesUsernameRepoSlugIssuesIssueIdGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesUsernameRepoSlugIssuesIssueIdGet
        //instance.repositoriesUsernameRepoSlugIssuesIssueIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesUsernameRepoSlugIssuesIssueIdVoteDelete', function() {
      it('should call repositoriesUsernameRepoSlugIssuesIssueIdVoteDelete successfully', function(done) {
        //uncomment below and update the code to test repositoriesUsernameRepoSlugIssuesIssueIdVoteDelete
        //instance.repositoriesUsernameRepoSlugIssuesIssueIdVoteDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesUsernameRepoSlugIssuesIssueIdVoteGet', function() {
      it('should call repositoriesUsernameRepoSlugIssuesIssueIdVoteGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesUsernameRepoSlugIssuesIssueIdVoteGet
        //instance.repositoriesUsernameRepoSlugIssuesIssueIdVoteGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesUsernameRepoSlugIssuesIssueIdVotePut', function() {
      it('should call repositoriesUsernameRepoSlugIssuesIssueIdVotePut successfully', function(done) {
        //uncomment below and update the code to test repositoriesUsernameRepoSlugIssuesIssueIdVotePut
        //instance.repositoriesUsernameRepoSlugIssuesIssueIdVotePut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesUsernameRepoSlugIssuesIssueIdWatchDelete', function() {
      it('should call repositoriesUsernameRepoSlugIssuesIssueIdWatchDelete successfully', function(done) {
        //uncomment below and update the code to test repositoriesUsernameRepoSlugIssuesIssueIdWatchDelete
        //instance.repositoriesUsernameRepoSlugIssuesIssueIdWatchDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesUsernameRepoSlugIssuesIssueIdWatchGet', function() {
      it('should call repositoriesUsernameRepoSlugIssuesIssueIdWatchGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesUsernameRepoSlugIssuesIssueIdWatchGet
        //instance.repositoriesUsernameRepoSlugIssuesIssueIdWatchGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesUsernameRepoSlugIssuesIssueIdWatchPut', function() {
      it('should call repositoriesUsernameRepoSlugIssuesIssueIdWatchPut successfully', function(done) {
        //uncomment below and update the code to test repositoriesUsernameRepoSlugIssuesIssueIdWatchPut
        //instance.repositoriesUsernameRepoSlugIssuesIssueIdWatchPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesUsernameRepoSlugIssuesPost', function() {
      it('should call repositoriesUsernameRepoSlugIssuesPost successfully', function(done) {
        //uncomment below and update the code to test repositoriesUsernameRepoSlugIssuesPost
        //instance.repositoriesUsernameRepoSlugIssuesPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesUsernameRepoSlugMilestonesGet', function() {
      it('should call repositoriesUsernameRepoSlugMilestonesGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesUsernameRepoSlugMilestonesGet
        //instance.repositoriesUsernameRepoSlugMilestonesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesUsernameRepoSlugMilestonesMilestoneIdGet', function() {
      it('should call repositoriesUsernameRepoSlugMilestonesMilestoneIdGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesUsernameRepoSlugMilestonesMilestoneIdGet
        //instance.repositoriesUsernameRepoSlugMilestonesMilestoneIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesUsernameRepoSlugVersionsGet', function() {
      it('should call repositoriesUsernameRepoSlugVersionsGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesUsernameRepoSlugVersionsGet
        //instance.repositoriesUsernameRepoSlugVersionsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesUsernameRepoSlugVersionsVersionIdGet', function() {
      it('should call repositoriesUsernameRepoSlugVersionsVersionIdGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesUsernameRepoSlugVersionsVersionIdGet
        //instance.repositoriesUsernameRepoSlugVersionsVersionIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
