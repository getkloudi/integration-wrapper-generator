/**
 * Rollbar API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
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
    factory(root.expect, root.Rollbar);
  }
}(this, function(expect, Rollbar) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Rollbar.DefaultApi();
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
    describe('deployGet', function() {
      it('should call deployGet successfully', function(done) {
        //uncomment below and update the code to test deployGet
        //instance.deployGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deployPatch', function() {
      it('should call deployPatch successfully', function(done) {
        //uncomment below and update the code to test deployPatch
        //instance.deployPatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deployPost', function() {
      it('should call deployPost successfully', function(done) {
        //uncomment below and update the code to test deployPost
        //instance.deployPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deploysGet', function() {
      it('should call deploysGet successfully', function(done) {
        //uncomment below and update the code to test deploysGet
        //instance.deploysGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('dsymPost', function() {
      it('should call dsymPost successfully', function(done) {
        //uncomment below and update the code to test dsymPost
        //instance.dsymPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('inviteInviteIdDelete', function() {
      it('should call inviteInviteIdDelete successfully', function(done) {
        //uncomment below and update the code to test inviteInviteIdDelete
        //instance.inviteInviteIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('inviteInviteIdGet', function() {
      it('should call inviteInviteIdGet successfully', function(done) {
        //uncomment below and update the code to test inviteInviteIdGet
        //instance.inviteInviteIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('itemByCounterCounterGet', function() {
      it('should call itemByCounterCounterGet successfully', function(done) {
        //uncomment below and update the code to test itemByCounterCounterGet
        //instance.itemByCounterCounterGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('itemItemidGet', function() {
      it('should call itemItemidGet successfully', function(done) {
        //uncomment below and update the code to test itemItemidGet
        //instance.itemItemidGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('itemItemidPatch', function() {
      it('should call itemItemidPatch successfully', function(done) {
        //uncomment below and update the code to test itemItemidPatch
        //instance.itemItemidPatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('itemsGet', function() {
      it('should call itemsGet successfully', function(done) {
        //uncomment below and update the code to test itemsGet
        //instance.itemsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('peopleDeleteJobsJobIdGet', function() {
      it('should call peopleDeleteJobsJobIdGet successfully', function(done) {
        //uncomment below and update the code to test peopleDeleteJobsJobIdGet
        //instance.peopleDeleteJobsJobIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('peopleDeleteJobsPost', function() {
      it('should call peopleDeleteJobsPost successfully', function(done) {
        //uncomment below and update the code to test peopleDeleteJobsPost
        //instance.peopleDeleteJobsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('proguardPost', function() {
      it('should call proguardPost successfully', function(done) {
        //uncomment below and update the code to test proguardPost
        //instance.proguardPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('projectIdAccessTokensGet', function() {
      it('should call projectIdAccessTokensGet successfully', function(done) {
        //uncomment below and update the code to test projectIdAccessTokensGet
        //instance.projectIdAccessTokensGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('projectProjectIdAccessTokenProjectAccessTokenPatch', function() {
      it('should call projectProjectIdAccessTokenProjectAccessTokenPatch successfully', function(done) {
        //uncomment below and update the code to test projectProjectIdAccessTokenProjectAccessTokenPatch
        //instance.projectProjectIdAccessTokenProjectAccessTokenPatch(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('projectProjectIdGet', function() {
      it('should call projectProjectIdGet successfully', function(done) {
        //uncomment below and update the code to test projectProjectIdGet
        //instance.projectProjectIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('projectProjectIdPost', function() {
      it('should call projectProjectIdPost successfully', function(done) {
        //uncomment below and update the code to test projectProjectIdPost
        //instance.projectProjectIdPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('projectsGet', function() {
      it('should call projectsGet successfully', function(done) {
        //uncomment below and update the code to test projectsGet
        //instance.projectsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('projectsPost', function() {
      it('should call projectsPost successfully', function(done) {
        //uncomment below and update the code to test projectsPost
        //instance.projectsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('reportsActivatedCountsGet', function() {
      it('should call reportsActivatedCountsGet successfully', function(done) {
        //uncomment below and update the code to test reportsActivatedCountsGet
        //instance.reportsActivatedCountsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('reportsOccurrenceCountsGet', function() {
      it('should call reportsOccurrenceCountsGet successfully', function(done) {
        //uncomment below and update the code to test reportsOccurrenceCountsGet
        //instance.reportsOccurrenceCountsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('reportsTopActiveItemsGet', function() {
      it('should call reportsTopActiveItemsGet successfully', function(done) {
        //uncomment below and update the code to test reportsTopActiveItemsGet
        //instance.reportsTopActiveItemsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('rqlJobJobIdCancelPost', function() {
      it('should call rqlJobJobIdCancelPost successfully', function(done) {
        //uncomment below and update the code to test rqlJobJobIdCancelPost
        //instance.rqlJobJobIdCancelPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('rqlJobJobIdGet', function() {
      it('should call rqlJobJobIdGet successfully', function(done) {
        //uncomment below and update the code to test rqlJobJobIdGet
        //instance.rqlJobJobIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('rqlJobJobIdResultGet', function() {
      it('should call rqlJobJobIdResultGet successfully', function(done) {
        //uncomment below and update the code to test rqlJobJobIdResultGet
        //instance.rqlJobJobIdResultGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('rqlJobsGet', function() {
      it('should call rqlJobsGet successfully', function(done) {
        //uncomment below and update the code to test rqlJobsGet
        //instance.rqlJobsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('rqlJobsPost', function() {
      it('should call rqlJobsPost successfully', function(done) {
        //uncomment below and update the code to test rqlJobsPost
        //instance.rqlJobsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('sourcemapPost', function() {
      it('should call sourcemapPost successfully', function(done) {
        //uncomment below and update the code to test sourcemapPost
        //instance.sourcemapPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamDelete', function() {
      it('should call teamDelete successfully', function(done) {
        //uncomment below and update the code to test teamDelete
        //instance.teamDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamGet', function() {
      it('should call teamGet successfully', function(done) {
        //uncomment below and update the code to test teamGet
        //instance.teamGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamTeamIdInvitesGet', function() {
      it('should call teamTeamIdInvitesGet successfully', function(done) {
        //uncomment below and update the code to test teamTeamIdInvitesGet
        //instance.teamTeamIdInvitesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamTeamIdInvitesPost', function() {
      it('should call teamTeamIdInvitesPost successfully', function(done) {
        //uncomment below and update the code to test teamTeamIdInvitesPost
        //instance.teamTeamIdInvitesPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamTeamIdProjectProjectIdDelete', function() {
      it('should call teamTeamIdProjectProjectIdDelete successfully', function(done) {
        //uncomment below and update the code to test teamTeamIdProjectProjectIdDelete
        //instance.teamTeamIdProjectProjectIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamTeamIdProjectProjectIdGet', function() {
      it('should call teamTeamIdProjectProjectIdGet successfully', function(done) {
        //uncomment below and update the code to test teamTeamIdProjectProjectIdGet
        //instance.teamTeamIdProjectProjectIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamTeamIdProjectProjectIdPut', function() {
      it('should call teamTeamIdProjectProjectIdPut successfully', function(done) {
        //uncomment below and update the code to test teamTeamIdProjectProjectIdPut
        //instance.teamTeamIdProjectProjectIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamTeamIdProjectsGet', function() {
      it('should call teamTeamIdProjectsGet successfully', function(done) {
        //uncomment below and update the code to test teamTeamIdProjectsGet
        //instance.teamTeamIdProjectsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamTeamIdUserUserIdDelete', function() {
      it('should call teamTeamIdUserUserIdDelete successfully', function(done) {
        //uncomment below and update the code to test teamTeamIdUserUserIdDelete
        //instance.teamTeamIdUserUserIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamTeamIdUserUserIdGet', function() {
      it('should call teamTeamIdUserUserIdGet successfully', function(done) {
        //uncomment below and update the code to test teamTeamIdUserUserIdGet
        //instance.teamTeamIdUserUserIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamTeamIdUserUserIdPut', function() {
      it('should call teamTeamIdUserUserIdPut successfully', function(done) {
        //uncomment below and update the code to test teamTeamIdUserUserIdPut
        //instance.teamTeamIdUserUserIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamTeamIdUsersGet', function() {
      it('should call teamTeamIdUsersGet successfully', function(done) {
        //uncomment below and update the code to test teamTeamIdUsersGet
        //instance.teamTeamIdUsersGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsGet', function() {
      it('should call teamsGet successfully', function(done) {
        //uncomment below and update the code to test teamsGet
        //instance.teamsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('teamsPost', function() {
      it('should call teamsPost successfully', function(done) {
        //uncomment below and update the code to test teamsPost
        //instance.teamsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userUserIdGet', function() {
      it('should call userUserIdGet successfully', function(done) {
        //uncomment below and update the code to test userUserIdGet
        //instance.userUserIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userUserIdProjectsGet', function() {
      it('should call userUserIdProjectsGet successfully', function(done) {
        //uncomment below and update the code to test userUserIdProjectsGet
        //instance.userUserIdProjectsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('userUserIdTeamsGet', function() {
      it('should call userUserIdTeamsGet successfully', function(done) {
        //uncomment below and update the code to test userUserIdTeamsGet
        //instance.userUserIdTeamsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('usersGet', function() {
      it('should call usersGet successfully', function(done) {
        //uncomment below and update the code to test usersGet
        //instance.usersGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
