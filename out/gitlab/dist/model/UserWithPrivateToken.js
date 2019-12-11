"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Identity = _interopRequireDefault(require("./Identity"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The UserWithPrivateToken model module.
 * @module model/UserWithPrivateToken
 * @version 1.1.0
 */
var UserWithPrivateToken =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>UserWithPrivateToken</code>.
   * Login to get token
   * @alias module:model/UserWithPrivateToken
   */
  function UserWithPrivateToken() {
    _classCallCheck(this, UserWithPrivateToken);

    UserWithPrivateToken.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UserWithPrivateToken, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UserWithPrivateToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserWithPrivateToken} obj Optional instance to populate.
     * @return {module:model/UserWithPrivateToken} The populated <code>UserWithPrivateToken</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UserWithPrivateToken();

        if (data.hasOwnProperty('avatar_url')) {
          obj['avatar_url'] = _ApiClient["default"].convertToType(data['avatar_url'], 'String');
        }

        if (data.hasOwnProperty('bio')) {
          obj['bio'] = _ApiClient["default"].convertToType(data['bio'], 'String');
        }

        if (data.hasOwnProperty('can_create_group')) {
          obj['can_create_group'] = _ApiClient["default"].convertToType(data['can_create_group'], 'String');
        }

        if (data.hasOwnProperty('can_create_project')) {
          obj['can_create_project'] = _ApiClient["default"].convertToType(data['can_create_project'], 'String');
        }

        if (data.hasOwnProperty('color_scheme_id')) {
          obj['color_scheme_id'] = _ApiClient["default"].convertToType(data['color_scheme_id'], 'String');
        }

        if (data.hasOwnProperty('confirmed_at')) {
          obj['confirmed_at'] = _ApiClient["default"].convertToType(data['confirmed_at'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('current_sign_in_at')) {
          obj['current_sign_in_at'] = _ApiClient["default"].convertToType(data['current_sign_in_at'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('external')) {
          obj['external'] = _ApiClient["default"].convertToType(data['external'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('identities')) {
          obj['identities'] = _Identity["default"].constructFromObject(data['identities']);
        }

        if (data.hasOwnProperty('is_admin')) {
          obj['is_admin'] = _ApiClient["default"].convertToType(data['is_admin'], 'String');
        }

        if (data.hasOwnProperty('last_sign_in_at')) {
          obj['last_sign_in_at'] = _ApiClient["default"].convertToType(data['last_sign_in_at'], 'String');
        }

        if (data.hasOwnProperty('linkedin')) {
          obj['linkedin'] = _ApiClient["default"].convertToType(data['linkedin'], 'String');
        }

        if (data.hasOwnProperty('location')) {
          obj['location'] = _ApiClient["default"].convertToType(data['location'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('organization')) {
          obj['organization'] = _ApiClient["default"].convertToType(data['organization'], 'String');
        }

        if (data.hasOwnProperty('private_token')) {
          obj['private_token'] = _ApiClient["default"].convertToType(data['private_token'], 'String');
        }

        if (data.hasOwnProperty('projects_limit')) {
          obj['projects_limit'] = _ApiClient["default"].convertToType(data['projects_limit'], 'String');
        }

        if (data.hasOwnProperty('skype')) {
          obj['skype'] = _ApiClient["default"].convertToType(data['skype'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('theme_id')) {
          obj['theme_id'] = _ApiClient["default"].convertToType(data['theme_id'], 'String');
        }

        if (data.hasOwnProperty('twitter')) {
          obj['twitter'] = _ApiClient["default"].convertToType(data['twitter'], 'String');
        }

        if (data.hasOwnProperty('two_factor_enabled')) {
          obj['two_factor_enabled'] = _ApiClient["default"].convertToType(data['two_factor_enabled'], 'String');
        }

        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient["default"].convertToType(data['username'], 'String');
        }

        if (data.hasOwnProperty('web_url')) {
          obj['web_url'] = _ApiClient["default"].convertToType(data['web_url'], 'String');
        }

        if (data.hasOwnProperty('website_url')) {
          obj['website_url'] = _ApiClient["default"].convertToType(data['website_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return UserWithPrivateToken;
}();
/**
 * @member {String} avatar_url
 */


UserWithPrivateToken.prototype['avatar_url'] = undefined;
/**
 * @member {String} bio
 */

UserWithPrivateToken.prototype['bio'] = undefined;
/**
 * @member {String} can_create_group
 */

UserWithPrivateToken.prototype['can_create_group'] = undefined;
/**
 * @member {String} can_create_project
 */

UserWithPrivateToken.prototype['can_create_project'] = undefined;
/**
 * @member {String} color_scheme_id
 */

UserWithPrivateToken.prototype['color_scheme_id'] = undefined;
/**
 * @member {String} confirmed_at
 */

UserWithPrivateToken.prototype['confirmed_at'] = undefined;
/**
 * @member {String} created_at
 */

UserWithPrivateToken.prototype['created_at'] = undefined;
/**
 * @member {String} current_sign_in_at
 */

UserWithPrivateToken.prototype['current_sign_in_at'] = undefined;
/**
 * @member {String} email
 */

UserWithPrivateToken.prototype['email'] = undefined;
/**
 * @member {String} external
 */

UserWithPrivateToken.prototype['external'] = undefined;
/**
 * @member {String} id
 */

UserWithPrivateToken.prototype['id'] = undefined;
/**
 * @member {module:model/Identity} identities
 */

UserWithPrivateToken.prototype['identities'] = undefined;
/**
 * @member {String} is_admin
 */

UserWithPrivateToken.prototype['is_admin'] = undefined;
/**
 * @member {String} last_sign_in_at
 */

UserWithPrivateToken.prototype['last_sign_in_at'] = undefined;
/**
 * @member {String} linkedin
 */

UserWithPrivateToken.prototype['linkedin'] = undefined;
/**
 * @member {String} location
 */

UserWithPrivateToken.prototype['location'] = undefined;
/**
 * @member {String} name
 */

UserWithPrivateToken.prototype['name'] = undefined;
/**
 * @member {String} organization
 */

UserWithPrivateToken.prototype['organization'] = undefined;
/**
 * @member {String} private_token
 */

UserWithPrivateToken.prototype['private_token'] = undefined;
/**
 * @member {String} projects_limit
 */

UserWithPrivateToken.prototype['projects_limit'] = undefined;
/**
 * @member {String} skype
 */

UserWithPrivateToken.prototype['skype'] = undefined;
/**
 * @member {String} state
 */

UserWithPrivateToken.prototype['state'] = undefined;
/**
 * @member {String} theme_id
 */

UserWithPrivateToken.prototype['theme_id'] = undefined;
/**
 * @member {String} twitter
 */

UserWithPrivateToken.prototype['twitter'] = undefined;
/**
 * @member {String} two_factor_enabled
 */

UserWithPrivateToken.prototype['two_factor_enabled'] = undefined;
/**
 * @member {String} username
 */

UserWithPrivateToken.prototype['username'] = undefined;
/**
 * @member {String} web_url
 */

UserWithPrivateToken.prototype['web_url'] = undefined;
/**
 * @member {String} website_url
 */

UserWithPrivateToken.prototype['website_url'] = undefined;
var _default = UserWithPrivateToken;
exports["default"] = _default;