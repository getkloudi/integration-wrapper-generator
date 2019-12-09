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
    instance = new Bitbucket.Pullrequest();
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

  describe('Pullrequest', function() {
    it('should create an instance of Pullrequest', function() {
      // uncomment below and update the code to test Pullrequest
      //var instane = new Bitbucket.Pullrequest();
      //expect(instance).to.be.a(Bitbucket.Pullrequest);
    });

    it('should have the property author (base name: "author")', function() {
      // uncomment below and update the code to test the property author
      //var instane = new Bitbucket.Pullrequest();
      //expect(instance).to.be();
    });

    it('should have the property closeSourceBranch (base name: "close_source_branch")', function() {
      // uncomment below and update the code to test the property closeSourceBranch
      //var instane = new Bitbucket.Pullrequest();
      //expect(instance).to.be();
    });

    it('should have the property closedBy (base name: "closed_by")', function() {
      // uncomment below and update the code to test the property closedBy
      //var instane = new Bitbucket.Pullrequest();
      //expect(instance).to.be();
    });

    it('should have the property commentCount (base name: "comment_count")', function() {
      // uncomment below and update the code to test the property commentCount
      //var instane = new Bitbucket.Pullrequest();
      //expect(instance).to.be();
    });

    it('should have the property createdOn (base name: "created_on")', function() {
      // uncomment below and update the code to test the property createdOn
      //var instane = new Bitbucket.Pullrequest();
      //expect(instance).to.be();
    });

    it('should have the property destination (base name: "destination")', function() {
      // uncomment below and update the code to test the property destination
      //var instane = new Bitbucket.Pullrequest();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Bitbucket.Pullrequest();
      //expect(instance).to.be();
    });

    it('should have the property links (base name: "links")', function() {
      // uncomment below and update the code to test the property links
      //var instane = new Bitbucket.Pullrequest();
      //expect(instance).to.be();
    });

    it('should have the property mergeCommit (base name: "merge_commit")', function() {
      // uncomment below and update the code to test the property mergeCommit
      //var instane = new Bitbucket.Pullrequest();
      //expect(instance).to.be();
    });

    it('should have the property participants (base name: "participants")', function() {
      // uncomment below and update the code to test the property participants
      //var instane = new Bitbucket.Pullrequest();
      //expect(instance).to.be();
    });

    it('should have the property reason (base name: "reason")', function() {
      // uncomment below and update the code to test the property reason
      //var instane = new Bitbucket.Pullrequest();
      //expect(instance).to.be();
    });

    it('should have the property reviewers (base name: "reviewers")', function() {
      // uncomment below and update the code to test the property reviewers
      //var instane = new Bitbucket.Pullrequest();
      //expect(instance).to.be();
    });

    it('should have the property source (base name: "source")', function() {
      // uncomment below and update the code to test the property source
      //var instane = new Bitbucket.Pullrequest();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instane = new Bitbucket.Pullrequest();
      //expect(instance).to.be();
    });

    it('should have the property taskCount (base name: "task_count")', function() {
      // uncomment below and update the code to test the property taskCount
      //var instane = new Bitbucket.Pullrequest();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new Bitbucket.Pullrequest();
      //expect(instance).to.be();
    });

    it('should have the property updatedOn (base name: "updated_on")', function() {
      // uncomment below and update the code to test the property updatedOn
      //var instane = new Bitbucket.Pullrequest();
      //expect(instance).to.be();
    });

  });

}));
