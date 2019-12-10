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
    instance = new Gitlab.InternalApi();
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

  describe('InternalApi', function() {
    describe('getV3InternalBroadcastMessage', function() {
      it('should call getV3InternalBroadcastMessage successfully', function(done) {
        //uncomment below and update the code to test getV3InternalBroadcastMessage
        //instance.getV3InternalBroadcastMessage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getV3InternalCheck', function() {
      it('should call getV3InternalCheck successfully', function(done) {
        //uncomment below and update the code to test getV3InternalCheck
        //instance.getV3InternalCheck(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getV3InternalDiscover', function() {
      it('should call getV3InternalDiscover successfully', function(done) {
        //uncomment below and update the code to test getV3InternalDiscover
        //instance.getV3InternalDiscover(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getV3InternalMergeRequestUrls', function() {
      it('should call getV3InternalMergeRequestUrls successfully', function(done) {
        //uncomment below and update the code to test getV3InternalMergeRequestUrls
        //instance.getV3InternalMergeRequestUrls(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postV3InternalAllowed', function() {
      it('should call postV3InternalAllowed successfully', function(done) {
        //uncomment below and update the code to test postV3InternalAllowed
        //instance.postV3InternalAllowed(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postV3InternalLfsAuthenticate', function() {
      it('should call postV3InternalLfsAuthenticate successfully', function(done) {
        //uncomment below and update the code to test postV3InternalLfsAuthenticate
        //instance.postV3InternalLfsAuthenticate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postV3InternalTwoFactorRecoveryCodes', function() {
      it('should call postV3InternalTwoFactorRecoveryCodes successfully', function(done) {
        //uncomment below and update the code to test postV3InternalTwoFactorRecoveryCodes
        //instance.postV3InternalTwoFactorRecoveryCodes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
