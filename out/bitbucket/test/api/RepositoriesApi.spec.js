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
    instance = new Bitbucket.RepositoriesApi();
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

  describe('RepositoriesApi', function() {
    describe('repositoriesGet', function() {
      it('should call repositoriesGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesGet
        //instance.repositoriesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesUsernameGet', function() {
      it('should call repositoriesUsernameGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesUsernameGet
        //instance.repositoriesUsernameGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyGet', function() {
      it('should call repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyGet
        //instance.repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyPut', function() {
      it('should call repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyPut successfully', function(done) {
        //uncomment below and update the code to test repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyPut
        //instance.repositoriesUsernameRepoSlugCommitNodeStatusesBuildKeyPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesUsernameRepoSlugCommitNodeStatusesBuildPost', function() {
      it('should call repositoriesUsernameRepoSlugCommitNodeStatusesBuildPost successfully', function(done) {
        //uncomment below and update the code to test repositoriesUsernameRepoSlugCommitNodeStatusesBuildPost
        //instance.repositoriesUsernameRepoSlugCommitNodeStatusesBuildPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesUsernameRepoSlugCommitNodeStatusesGet', function() {
      it('should call repositoriesUsernameRepoSlugCommitNodeStatusesGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesUsernameRepoSlugCommitNodeStatusesGet
        //instance.repositoriesUsernameRepoSlugCommitNodeStatusesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesUsernameRepoSlugDelete', function() {
      it('should call repositoriesUsernameRepoSlugDelete successfully', function(done) {
        //uncomment below and update the code to test repositoriesUsernameRepoSlugDelete
        //instance.repositoriesUsernameRepoSlugDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesUsernameRepoSlugForksGet', function() {
      it('should call repositoriesUsernameRepoSlugForksGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesUsernameRepoSlugForksGet
        //instance.repositoriesUsernameRepoSlugForksGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesUsernameRepoSlugGet', function() {
      it('should call repositoriesUsernameRepoSlugGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesUsernameRepoSlugGet
        //instance.repositoriesUsernameRepoSlugGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesUsernameRepoSlugHooksGet', function() {
      it('should call repositoriesUsernameRepoSlugHooksGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesUsernameRepoSlugHooksGet
        //instance.repositoriesUsernameRepoSlugHooksGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesUsernameRepoSlugHooksPost', function() {
      it('should call repositoriesUsernameRepoSlugHooksPost successfully', function(done) {
        //uncomment below and update the code to test repositoriesUsernameRepoSlugHooksPost
        //instance.repositoriesUsernameRepoSlugHooksPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesUsernameRepoSlugHooksUidDelete', function() {
      it('should call repositoriesUsernameRepoSlugHooksUidDelete successfully', function(done) {
        //uncomment below and update the code to test repositoriesUsernameRepoSlugHooksUidDelete
        //instance.repositoriesUsernameRepoSlugHooksUidDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesUsernameRepoSlugHooksUidGet', function() {
      it('should call repositoriesUsernameRepoSlugHooksUidGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesUsernameRepoSlugHooksUidGet
        //instance.repositoriesUsernameRepoSlugHooksUidGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesUsernameRepoSlugHooksUidPut', function() {
      it('should call repositoriesUsernameRepoSlugHooksUidPut successfully', function(done) {
        //uncomment below and update the code to test repositoriesUsernameRepoSlugHooksUidPut
        //instance.repositoriesUsernameRepoSlugHooksUidPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesUsernameRepoSlugPost', function() {
      it('should call repositoriesUsernameRepoSlugPost successfully', function(done) {
        //uncomment below and update the code to test repositoriesUsernameRepoSlugPost
        //instance.repositoriesUsernameRepoSlugPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGet', function() {
      it('should call repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGet
        //instance.repositoriesUsernameRepoSlugPullrequestsPullRequestIdStatusesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesUsernameRepoSlugPut', function() {
      it('should call repositoriesUsernameRepoSlugPut successfully', function(done) {
        //uncomment below and update the code to test repositoriesUsernameRepoSlugPut
        //instance.repositoriesUsernameRepoSlugPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesUsernameRepoSlugSrcNodePathGet', function() {
      it('should call repositoriesUsernameRepoSlugSrcNodePathGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesUsernameRepoSlugSrcNodePathGet
        //instance.repositoriesUsernameRepoSlugSrcNodePathGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesUsernameRepoSlugWatchersGet', function() {
      it('should call repositoriesUsernameRepoSlugWatchersGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesUsernameRepoSlugWatchersGet
        //instance.repositoriesUsernameRepoSlugWatchersGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));