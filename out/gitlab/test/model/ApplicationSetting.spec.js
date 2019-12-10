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
    instance = new Gitlab.ApplicationSetting();
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

  describe('ApplicationSetting', function() {
    it('should create an instance of ApplicationSetting', function() {
      // uncomment below and update the code to test ApplicationSetting
      //var instane = new Gitlab.ApplicationSetting();
      //expect(instance).to.be.a(Gitlab.ApplicationSetting);
    });

    it('should have the property afterSignOutPath (base name: "after_sign_out_path")', function() {
      // uncomment below and update the code to test the property afterSignOutPath
      //var instane = new Gitlab.ApplicationSetting();
      //expect(instance).to.be();
    });

    it('should have the property afterSignUpText (base name: "after_sign_up_text")', function() {
      // uncomment below and update the code to test the property afterSignUpText
      //var instane = new Gitlab.ApplicationSetting();
      //expect(instance).to.be();
    });

    it('should have the property containerRegistryTokenExpireDelay (base name: "container_registry_token_expire_delay")', function() {
      // uncomment below and update the code to test the property containerRegistryTokenExpireDelay
      //var instane = new Gitlab.ApplicationSetting();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "created_at")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instane = new Gitlab.ApplicationSetting();
      //expect(instance).to.be();
    });

    it('should have the property defaultBranchProtection (base name: "default_branch_protection")', function() {
      // uncomment below and update the code to test the property defaultBranchProtection
      //var instane = new Gitlab.ApplicationSetting();
      //expect(instance).to.be();
    });

    it('should have the property defaultGroupVisibility (base name: "default_group_visibility")', function() {
      // uncomment below and update the code to test the property defaultGroupVisibility
      //var instane = new Gitlab.ApplicationSetting();
      //expect(instance).to.be();
    });

    it('should have the property defaultProjectVisibility (base name: "default_project_visibility")', function() {
      // uncomment below and update the code to test the property defaultProjectVisibility
      //var instane = new Gitlab.ApplicationSetting();
      //expect(instance).to.be();
    });

    it('should have the property defaultProjectsLimit (base name: "default_projects_limit")', function() {
      // uncomment below and update the code to test the property defaultProjectsLimit
      //var instane = new Gitlab.ApplicationSetting();
      //expect(instance).to.be();
    });

    it('should have the property defaultSnippetVisibility (base name: "default_snippet_visibility")', function() {
      // uncomment below and update the code to test the property defaultSnippetVisibility
      //var instane = new Gitlab.ApplicationSetting();
      //expect(instance).to.be();
    });

    it('should have the property domainBlacklist (base name: "domain_blacklist")', function() {
      // uncomment below and update the code to test the property domainBlacklist
      //var instane = new Gitlab.ApplicationSetting();
      //expect(instance).to.be();
    });

    it('should have the property domainBlacklistEnabled (base name: "domain_blacklist_enabled")', function() {
      // uncomment below and update the code to test the property domainBlacklistEnabled
      //var instane = new Gitlab.ApplicationSetting();
      //expect(instance).to.be();
    });

    it('should have the property domainWhitelist (base name: "domain_whitelist")', function() {
      // uncomment below and update the code to test the property domainWhitelist
      //var instane = new Gitlab.ApplicationSetting();
      //expect(instance).to.be();
    });

    it('should have the property gravatarEnabled (base name: "gravatar_enabled")', function() {
      // uncomment below and update the code to test the property gravatarEnabled
      //var instane = new Gitlab.ApplicationSetting();
      //expect(instance).to.be();
    });

    it('should have the property homePageUrl (base name: "home_page_url")', function() {
      // uncomment below and update the code to test the property homePageUrl
      //var instane = new Gitlab.ApplicationSetting();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Gitlab.ApplicationSetting();
      //expect(instance).to.be();
    });

    it('should have the property kodingEnabled (base name: "koding_enabled")', function() {
      // uncomment below and update the code to test the property kodingEnabled
      //var instane = new Gitlab.ApplicationSetting();
      //expect(instance).to.be();
    });

    it('should have the property kodingUrl (base name: "koding_url")', function() {
      // uncomment below and update the code to test the property kodingUrl
      //var instane = new Gitlab.ApplicationSetting();
      //expect(instance).to.be();
    });

    it('should have the property maxAttachmentSize (base name: "max_attachment_size")', function() {
      // uncomment below and update the code to test the property maxAttachmentSize
      //var instane = new Gitlab.ApplicationSetting();
      //expect(instance).to.be();
    });

    it('should have the property plantumlEnabled (base name: "plantuml_enabled")', function() {
      // uncomment below and update the code to test the property plantumlEnabled
      //var instane = new Gitlab.ApplicationSetting();
      //expect(instance).to.be();
    });

    it('should have the property plantumlUrl (base name: "plantuml_url")', function() {
      // uncomment below and update the code to test the property plantumlUrl
      //var instane = new Gitlab.ApplicationSetting();
      //expect(instance).to.be();
    });

    it('should have the property repositoryStorage (base name: "repository_storage")', function() {
      // uncomment below and update the code to test the property repositoryStorage
      //var instane = new Gitlab.ApplicationSetting();
      //expect(instance).to.be();
    });

    it('should have the property repositoryStorages (base name: "repository_storages")', function() {
      // uncomment below and update the code to test the property repositoryStorages
      //var instane = new Gitlab.ApplicationSetting();
      //expect(instance).to.be();
    });

    it('should have the property restrictedVisibilityLevels (base name: "restricted_visibility_levels")', function() {
      // uncomment below and update the code to test the property restrictedVisibilityLevels
      //var instane = new Gitlab.ApplicationSetting();
      //expect(instance).to.be();
    });

    it('should have the property sessionExpireDelay (base name: "session_expire_delay")', function() {
      // uncomment below and update the code to test the property sessionExpireDelay
      //var instane = new Gitlab.ApplicationSetting();
      //expect(instance).to.be();
    });

    it('should have the property signInText (base name: "sign_in_text")', function() {
      // uncomment below and update the code to test the property signInText
      //var instane = new Gitlab.ApplicationSetting();
      //expect(instance).to.be();
    });

    it('should have the property signinEnabled (base name: "signin_enabled")', function() {
      // uncomment below and update the code to test the property signinEnabled
      //var instane = new Gitlab.ApplicationSetting();
      //expect(instance).to.be();
    });

    it('should have the property signupEnabled (base name: "signup_enabled")', function() {
      // uncomment below and update the code to test the property signupEnabled
      //var instane = new Gitlab.ApplicationSetting();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updated_at")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instane = new Gitlab.ApplicationSetting();
      //expect(instance).to.be();
    });

    it('should have the property userOauthApplications (base name: "user_oauth_applications")', function() {
      // uncomment below and update the code to test the property userOauthApplications
      //var instane = new Gitlab.ApplicationSetting();
      //expect(instance).to.be();
    });

  });

}));