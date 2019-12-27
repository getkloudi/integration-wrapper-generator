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
    instance = new Bitbucket.DefaultApi();
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

  describe('DefaultApi', function() {
    describe('repositoriesWorkspaceRepoSlugDiffstatSpecGet', function() {
      it('should call repositoriesWorkspaceRepoSlugDiffstatSpecGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugDiffstatSpecGet
        //instance.repositoriesWorkspaceRepoSlugDiffstatSpecGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugIssuesExportPost', function() {
      it('should call repositoriesWorkspaceRepoSlugIssuesExportPost successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugIssuesExportPost
        //instance.repositoriesWorkspaceRepoSlugIssuesExportPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipGet', function() {
      it('should call repositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipGet
        //instance.repositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugIssuesImportGet', function() {
      it('should call repositoriesWorkspaceRepoSlugIssuesImportGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugIssuesImportGet
        //instance.repositoriesWorkspaceRepoSlugIssuesImportGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugIssuesImportPost', function() {
      it('should call repositoriesWorkspaceRepoSlugIssuesImportPost successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugIssuesImportPost
        //instance.repositoriesWorkspaceRepoSlugIssuesImportPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuidGet', function() {
      it('should call repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuidGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuidGet
        //instance.repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidLogsLogUuidGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsGet', function() {
      it('should call repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsGet
        //instance.repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesGet', function() {
      it('should call repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesGet
        //instance.repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasonsGet', function() {
      it('should call repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasonsGet successfully', function(done) {
        //uncomment below and update the code to test repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasonsGet
        //instance.repositoriesWorkspaceRepoSlugPipelinesPipelineUuidStepsStepUuidTestReportsTestCasesTestCaseUuidTestCaseReasonsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsUsernamePermissionsGet', function() {
      it('should call teamsUsernamePermissionsGet successfully', function(done) {
        //uncomment below and update the code to test teamsUsernamePermissionsGet
        //instance.teamsUsernamePermissionsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsUsernamePermissionsRepositoriesGet', function() {
      it('should call teamsUsernamePermissionsRepositoriesGet successfully', function(done) {
        //uncomment below and update the code to test teamsUsernamePermissionsRepositoriesGet
        //instance.teamsUsernamePermissionsRepositoriesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsUsernamePermissionsRepositoriesRepoSlugGet', function() {
      it('should call teamsUsernamePermissionsRepositoriesRepoSlugGet successfully', function(done) {
        //uncomment below and update the code to test teamsUsernamePermissionsRepositoriesRepoSlugGet
        //instance.teamsUsernamePermissionsRepositoriesRepoSlugGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userPermissionsTeamsGet', function() {
      it('should call userPermissionsTeamsGet successfully', function(done) {
        //uncomment below and update the code to test userPermissionsTeamsGet
        //instance.userPermissionsTeamsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
