/**
 * The Jira Cloud platform REST API
 * Jira Cloud platform REST API documentation
 *
 * The version of the OpenAPI document: 1001.0.0-SNAPSHOT
 * Contact: ecosystem@atlassian.com
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
    factory(root.expect, root.Jira);
  }
}(this, function(expect, Jira) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Jira.FiltersApi();
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

  describe('FiltersApi', function() {
    describe('filterFavouriteGet', function() {
      it('should call filterFavouriteGet successfully', function(done) {
        //uncomment below and update the code to test filterFavouriteGet
        //instance.filterFavouriteGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('filterGet', function() {
      it('should call filterGet successfully', function(done) {
        //uncomment below and update the code to test filterGet
        //instance.filterGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('filterIdColumnsDelete', function() {
      it('should call filterIdColumnsDelete successfully', function(done) {
        //uncomment below and update the code to test filterIdColumnsDelete
        //instance.filterIdColumnsDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('filterIdColumnsGet', function() {
      it('should call filterIdColumnsGet successfully', function(done) {
        //uncomment below and update the code to test filterIdColumnsGet
        //instance.filterIdColumnsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('filterIdColumnsPut', function() {
      it('should call filterIdColumnsPut successfully', function(done) {
        //uncomment below and update the code to test filterIdColumnsPut
        //instance.filterIdColumnsPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('filterIdDelete', function() {
      it('should call filterIdDelete successfully', function(done) {
        //uncomment below and update the code to test filterIdDelete
        //instance.filterIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('filterIdFavouriteDelete', function() {
      it('should call filterIdFavouriteDelete successfully', function(done) {
        //uncomment below and update the code to test filterIdFavouriteDelete
        //instance.filterIdFavouriteDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('filterIdFavouritePut', function() {
      it('should call filterIdFavouritePut successfully', function(done) {
        //uncomment below and update the code to test filterIdFavouritePut
        //instance.filterIdFavouritePut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('filterIdGet', function() {
      it('should call filterIdGet successfully', function(done) {
        //uncomment below and update the code to test filterIdGet
        //instance.filterIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('filterIdPut', function() {
      it('should call filterIdPut successfully', function(done) {
        //uncomment below and update the code to test filterIdPut
        //instance.filterIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('filterMyGet', function() {
      it('should call filterMyGet successfully', function(done) {
        //uncomment below and update the code to test filterMyGet
        //instance.filterMyGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('filterPost', function() {
      it('should call filterPost successfully', function(done) {
        //uncomment below and update the code to test filterPost
        //instance.filterPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('filterSearchGet', function() {
      it('should call filterSearchGet successfully', function(done) {
        //uncomment below and update the code to test filterSearchGet
        //instance.filterSearchGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));