/**
 * Gitlab
 * The platform for modern developers GitLab unifies issues, code review, CI and CD into a single UI
 *
 * The version of the OpenAPI document: v3
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
    factory(root.expect, root.Gitlab);
  }
}(this, function(expect, Gitlab) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Gitlab.UsersApi();
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

  describe('UsersApi', function() {
    describe('deleteV3UsersId', function() {
      it('should call deleteV3UsersId successfully', function(done) {
        //uncomment below and update the code to test deleteV3UsersId
        //instance.deleteV3UsersId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteV3UsersIdEmailsEmailId', function() {
      it('should call deleteV3UsersIdEmailsEmailId successfully', function(done) {
        //uncomment below and update the code to test deleteV3UsersIdEmailsEmailId
        //instance.deleteV3UsersIdEmailsEmailId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteV3UsersIdKeysKeyId', function() {
      it('should call deleteV3UsersIdKeysKeyId successfully', function(done) {
        //uncomment below and update the code to test deleteV3UsersIdKeysKeyId
        //instance.deleteV3UsersIdKeysKeyId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getV3Users', function() {
      it('should call getV3Users successfully', function(done) {
        //uncomment below and update the code to test getV3Users
        //instance.getV3Users(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getV3UsersId', function() {
      it('should call getV3UsersId successfully', function(done) {
        //uncomment below and update the code to test getV3UsersId
        //instance.getV3UsersId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getV3UsersIdEmails', function() {
      it('should call getV3UsersIdEmails successfully', function(done) {
        //uncomment below and update the code to test getV3UsersIdEmails
        //instance.getV3UsersIdEmails(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getV3UsersIdEvents', function() {
      it('should call getV3UsersIdEvents successfully', function(done) {
        //uncomment below and update the code to test getV3UsersIdEvents
        //instance.getV3UsersIdEvents(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getV3UsersIdKeys', function() {
      it('should call getV3UsersIdKeys successfully', function(done) {
        //uncomment below and update the code to test getV3UsersIdKeys
        //instance.getV3UsersIdKeys(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postV3Users', function() {
      it('should call postV3Users successfully', function(done) {
        //uncomment below and update the code to test postV3Users
        //instance.postV3Users(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postV3UsersIdEmails', function() {
      it('should call postV3UsersIdEmails successfully', function(done) {
        //uncomment below and update the code to test postV3UsersIdEmails
        //instance.postV3UsersIdEmails(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postV3UsersIdKeys', function() {
      it('should call postV3UsersIdKeys successfully', function(done) {
        //uncomment below and update the code to test postV3UsersIdKeys
        //instance.postV3UsersIdKeys(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putV3UsersId', function() {
      it('should call putV3UsersId successfully', function(done) {
        //uncomment below and update the code to test putV3UsersId
        //instance.putV3UsersId(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putV3UsersIdBlock', function() {
      it('should call putV3UsersIdBlock successfully', function(done) {
        //uncomment below and update the code to test putV3UsersIdBlock
        //instance.putV3UsersIdBlock(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putV3UsersIdUnblock', function() {
      it('should call putV3UsersIdUnblock successfully', function(done) {
        //uncomment below and update the code to test putV3UsersIdUnblock
        //instance.putV3UsersIdUnblock(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
