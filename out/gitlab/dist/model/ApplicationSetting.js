"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ApplicationSetting model module.
 * @module model/ApplicationSetting
 * @version 1.0.0
 */
var ApplicationSetting =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ApplicationSetting</code>.
   * Modify application settings
   * @alias module:model/ApplicationSetting
   */
  function ApplicationSetting() {
    _classCallCheck(this, ApplicationSetting);

    ApplicationSetting.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ApplicationSetting, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ApplicationSetting</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApplicationSetting} obj Optional instance to populate.
     * @return {module:model/ApplicationSetting} The populated <code>ApplicationSetting</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ApplicationSetting();

        if (data.hasOwnProperty('after_sign_out_path')) {
          obj['after_sign_out_path'] = _ApiClient["default"].convertToType(data['after_sign_out_path'], 'String');
        }

        if (data.hasOwnProperty('after_sign_up_text')) {
          obj['after_sign_up_text'] = _ApiClient["default"].convertToType(data['after_sign_up_text'], 'String');
        }

        if (data.hasOwnProperty('container_registry_token_expire_delay')) {
          obj['container_registry_token_expire_delay'] = _ApiClient["default"].convertToType(data['container_registry_token_expire_delay'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('default_branch_protection')) {
          obj['default_branch_protection'] = _ApiClient["default"].convertToType(data['default_branch_protection'], 'String');
        }

        if (data.hasOwnProperty('default_group_visibility')) {
          obj['default_group_visibility'] = _ApiClient["default"].convertToType(data['default_group_visibility'], 'String');
        }

        if (data.hasOwnProperty('default_project_visibility')) {
          obj['default_project_visibility'] = _ApiClient["default"].convertToType(data['default_project_visibility'], 'String');
        }

        if (data.hasOwnProperty('default_projects_limit')) {
          obj['default_projects_limit'] = _ApiClient["default"].convertToType(data['default_projects_limit'], 'String');
        }

        if (data.hasOwnProperty('default_snippet_visibility')) {
          obj['default_snippet_visibility'] = _ApiClient["default"].convertToType(data['default_snippet_visibility'], 'String');
        }

        if (data.hasOwnProperty('domain_blacklist')) {
          obj['domain_blacklist'] = _ApiClient["default"].convertToType(data['domain_blacklist'], 'String');
        }

        if (data.hasOwnProperty('domain_blacklist_enabled')) {
          obj['domain_blacklist_enabled'] = _ApiClient["default"].convertToType(data['domain_blacklist_enabled'], 'String');
        }

        if (data.hasOwnProperty('domain_whitelist')) {
          obj['domain_whitelist'] = _ApiClient["default"].convertToType(data['domain_whitelist'], 'String');
        }

        if (data.hasOwnProperty('gravatar_enabled')) {
          obj['gravatar_enabled'] = _ApiClient["default"].convertToType(data['gravatar_enabled'], 'String');
        }

        if (data.hasOwnProperty('home_page_url')) {
          obj['home_page_url'] = _ApiClient["default"].convertToType(data['home_page_url'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('koding_enabled')) {
          obj['koding_enabled'] = _ApiClient["default"].convertToType(data['koding_enabled'], 'String');
        }

        if (data.hasOwnProperty('koding_url')) {
          obj['koding_url'] = _ApiClient["default"].convertToType(data['koding_url'], 'String');
        }

        if (data.hasOwnProperty('max_attachment_size')) {
          obj['max_attachment_size'] = _ApiClient["default"].convertToType(data['max_attachment_size'], 'String');
        }

        if (data.hasOwnProperty('plantuml_enabled')) {
          obj['plantuml_enabled'] = _ApiClient["default"].convertToType(data['plantuml_enabled'], 'String');
        }

        if (data.hasOwnProperty('plantuml_url')) {
          obj['plantuml_url'] = _ApiClient["default"].convertToType(data['plantuml_url'], 'String');
        }

        if (data.hasOwnProperty('repository_storage')) {
          obj['repository_storage'] = _ApiClient["default"].convertToType(data['repository_storage'], 'String');
        }

        if (data.hasOwnProperty('repository_storages')) {
          obj['repository_storages'] = _ApiClient["default"].convertToType(data['repository_storages'], 'String');
        }

        if (data.hasOwnProperty('restricted_visibility_levels')) {
          obj['restricted_visibility_levels'] = _ApiClient["default"].convertToType(data['restricted_visibility_levels'], 'String');
        }

        if (data.hasOwnProperty('session_expire_delay')) {
          obj['session_expire_delay'] = _ApiClient["default"].convertToType(data['session_expire_delay'], 'String');
        }

        if (data.hasOwnProperty('sign_in_text')) {
          obj['sign_in_text'] = _ApiClient["default"].convertToType(data['sign_in_text'], 'String');
        }

        if (data.hasOwnProperty('signin_enabled')) {
          obj['signin_enabled'] = _ApiClient["default"].convertToType(data['signin_enabled'], 'String');
        }

        if (data.hasOwnProperty('signup_enabled')) {
          obj['signup_enabled'] = _ApiClient["default"].convertToType(data['signup_enabled'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'String');
        }

        if (data.hasOwnProperty('user_oauth_applications')) {
          obj['user_oauth_applications'] = _ApiClient["default"].convertToType(data['user_oauth_applications'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ApplicationSetting;
}();
/**
 * @member {String} after_sign_out_path
 */


ApplicationSetting.prototype['after_sign_out_path'] = undefined;
/**
 * @member {String} after_sign_up_text
 */

ApplicationSetting.prototype['after_sign_up_text'] = undefined;
/**
 * @member {String} container_registry_token_expire_delay
 */

ApplicationSetting.prototype['container_registry_token_expire_delay'] = undefined;
/**
 * @member {String} created_at
 */

ApplicationSetting.prototype['created_at'] = undefined;
/**
 * @member {String} default_branch_protection
 */

ApplicationSetting.prototype['default_branch_protection'] = undefined;
/**
 * @member {String} default_group_visibility
 */

ApplicationSetting.prototype['default_group_visibility'] = undefined;
/**
 * @member {String} default_project_visibility
 */

ApplicationSetting.prototype['default_project_visibility'] = undefined;
/**
 * @member {String} default_projects_limit
 */

ApplicationSetting.prototype['default_projects_limit'] = undefined;
/**
 * @member {String} default_snippet_visibility
 */

ApplicationSetting.prototype['default_snippet_visibility'] = undefined;
/**
 * @member {String} domain_blacklist
 */

ApplicationSetting.prototype['domain_blacklist'] = undefined;
/**
 * @member {String} domain_blacklist_enabled
 */

ApplicationSetting.prototype['domain_blacklist_enabled'] = undefined;
/**
 * @member {String} domain_whitelist
 */

ApplicationSetting.prototype['domain_whitelist'] = undefined;
/**
 * @member {String} gravatar_enabled
 */

ApplicationSetting.prototype['gravatar_enabled'] = undefined;
/**
 * @member {String} home_page_url
 */

ApplicationSetting.prototype['home_page_url'] = undefined;
/**
 * @member {String} id
 */

ApplicationSetting.prototype['id'] = undefined;
/**
 * @member {String} koding_enabled
 */

ApplicationSetting.prototype['koding_enabled'] = undefined;
/**
 * @member {String} koding_url
 */

ApplicationSetting.prototype['koding_url'] = undefined;
/**
 * @member {String} max_attachment_size
 */

ApplicationSetting.prototype['max_attachment_size'] = undefined;
/**
 * @member {String} plantuml_enabled
 */

ApplicationSetting.prototype['plantuml_enabled'] = undefined;
/**
 * @member {String} plantuml_url
 */

ApplicationSetting.prototype['plantuml_url'] = undefined;
/**
 * @member {String} repository_storage
 */

ApplicationSetting.prototype['repository_storage'] = undefined;
/**
 * @member {String} repository_storages
 */

ApplicationSetting.prototype['repository_storages'] = undefined;
/**
 * @member {String} restricted_visibility_levels
 */

ApplicationSetting.prototype['restricted_visibility_levels'] = undefined;
/**
 * @member {String} session_expire_delay
 */

ApplicationSetting.prototype['session_expire_delay'] = undefined;
/**
 * @member {String} sign_in_text
 */

ApplicationSetting.prototype['sign_in_text'] = undefined;
/**
 * @member {String} signin_enabled
 */

ApplicationSetting.prototype['signin_enabled'] = undefined;
/**
 * @member {String} signup_enabled
 */

ApplicationSetting.prototype['signup_enabled'] = undefined;
/**
 * @member {String} updated_at
 */

ApplicationSetting.prototype['updated_at'] = undefined;
/**
 * @member {String} user_oauth_applications
 */

ApplicationSetting.prototype['user_oauth_applications'] = undefined;
var _default = ApplicationSetting;
exports["default"] = _default;