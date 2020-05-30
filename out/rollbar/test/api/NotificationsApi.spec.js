/**
 * Rollbar API
 * # Getting Started The Rollbar API provides a RESTful interface to much of the data in the system. It is used by our official libraries to report exceptions, deploys, and other messages. It can be used to create notifiers for additional languages, get data out to integrate with other systems, or whatever else you can imagine. If the API is missing something you'd like to see, please [let us know](support@rollbar.com).  # Ping To test whether you're able to ping the API server, you can simply run the following command:  ``` curl 'https://api.rollbar.com/api/1/status/ping' ```  You will get back pong from our server if your request was successful.  # Timestamps All timestamps (inputs and outputs) are GMT unix timestamps.  # Authentication Authentication is done via access token included as a header parameter. For authenticated requests, pass your access token through the `X-Rollbar-Access-Token` parameter in the header.  ``` curl -H \"X-Rollbar-Access-Token: YOUR_ACCESS_TOKEN\" 'https://api.rollbar.com/api/1/item/12345' ```  ## Project access tokens Many operations require a project-specific access token. You can find and administer your access tokens in Settings -> Project Access Tokens. Access tokens can have any or all of the following scopes:  ### post_server_item Can perform all POST requests to /deploy/ and /item/  ### post_client_item Can perform POST requests to /deploy/ and /item/, but only if the item has a client-side (browser, mobile) platform.  ### read Can perform all GET requests  ### write Can perform PATCH and DELETE requests  ## Account Access Tokens Operations performed at the level of the account require an account-specific access token. These can be found and managed at {Account name} Settings -> Account Access Tokens. Account access tokens can have the following scopes:  ### read Supports all GET operations at the account level.  ### write Supports all POST, PUT, PATCH, and DELETE operations at the account level.  # HTTP responses The API can return the following HTTP response codes:  ### 200 OK Operation was completed successfully  ### 400 Bad request The request was malformed and could not be parsed.  ### 403 Access denied Access token was missing, invalid, or does not have the necessary permissions.  ### 404 Not found The requested resource was not found. This response will be returned if the URL is entirely invalid (i.e. /asdf), or if it is a URL that could be valid but is referencing something that does not exist (i.e. /item/12345).  ### 413 Request entity too large The request exceeded the maximum size of 128KB.  ### 422 Unprocessable Entity The request was parseable (i.e. valid JSON), but some parameters were missing or otherwise invalid.  ### 429 Too Many Requests If rate limiting is enabled for your access token, this return code signifies that  # Examples  ### [api-examples](https://github.com/rollbar/api-examples) Author: Rollbar  Language: Python  Examples using RQL, deploys, occurrences, and reports  ### [api-people-example](https://github.com/rollbar/api-people-example) Author: Rollbar  Language: Python  Shows how to gather the Person data for each occurrence of a list of items  ### [rolltools](https://github.com/jslate/rolltools) Author: Jonathan Slate  Language: Ruby  A few utilities using the Rollbar API 
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
    instance = new Rollbar.NotificationsApi();
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

  describe('NotificationsApi', function() {
    describe('notificationsEmailPut', function() {
      it('should call notificationsEmailPut successfully', function(done) {
        //uncomment below and update the code to test notificationsEmailPut
        //instance.notificationsEmailPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('notificationsEmailRulesPut', function() {
      it('should call notificationsEmailRulesPut successfully', function(done) {
        //uncomment below and update the code to test notificationsEmailRulesPut
        //instance.notificationsEmailRulesPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('notificationsPagerdutyPut', function() {
      it('should call notificationsPagerdutyPut successfully', function(done) {
        //uncomment below and update the code to test notificationsPagerdutyPut
        //instance.notificationsPagerdutyPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('notificationsPagerdutyRulesPut', function() {
      it('should call notificationsPagerdutyRulesPut successfully', function(done) {
        //uncomment below and update the code to test notificationsPagerdutyRulesPut
        //instance.notificationsPagerdutyRulesPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('notificationsSlackPut', function() {
      it('should call notificationsSlackPut successfully', function(done) {
        //uncomment below and update the code to test notificationsSlackPut
        //instance.notificationsSlackPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('notificationsSlackRulesPut', function() {
      it('should call notificationsSlackRulesPut successfully', function(done) {
        //uncomment below and update the code to test notificationsSlackRulesPut
        //instance.notificationsSlackRulesPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
