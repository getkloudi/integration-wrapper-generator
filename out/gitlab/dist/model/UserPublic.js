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
 * The UserPublic model module.
 * @module model/UserPublic
 * @version 1.1.0
 */
var UserPublic =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>UserPublic</code>.
   * Get the currently authenticated user
   * @alias module:model/UserPublic
   */
  function UserPublic() {
    _classCallCheck(this, UserPublic);

    UserPublic.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UserPublic, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UserPublic</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserPublic} obj Optional instance to populate.
     * @return {module:model/UserPublic} The populated <code>UserPublic</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UserPublic();

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

  return UserPublic;
}();
/**
 * @member {String} avatar_url
 */


UserPublic.prototype['avatar_url'] = undefined;
/**
 * @member {String} bio
 */

UserPublic.prototype['bio'] = undefined;
/**
 * @member {String} can_create_group
 */

UserPublic.prototype['can_create_group'] = undefined;
/**
 * @member {String} can_create_project
 */

UserPublic.prototype['can_create_project'] = undefined;
/**
 * @member {String} color_scheme_id
 */

UserPublic.prototype['color_scheme_id'] = undefined;
/**
 * @member {String} confirmed_at
 */

UserPublic.prototype['confirmed_at'] = undefined;
/**
 * @member {String} created_at
 */

UserPublic.prototype['created_at'] = undefined;
/**
 * @member {String} current_sign_in_at
 */

UserPublic.prototype['current_sign_in_at'] = undefined;
/**
 * @member {String} email
 */

UserPublic.prototype['email'] = undefined;
/**
 * @member {String} external
 */

UserPublic.prototype['external'] = undefined;
/**
 * @member {String} id
 */

UserPublic.prototype['id'] = undefined;
/**
 * @member {module:model/Identity} identities
 */

UserPublic.prototype['identities'] = undefined;
/**
 * @member {String} is_admin
 */

UserPublic.prototype['is_admin'] = undefined;
/**
 * @member {String} last_sign_in_at
 */

UserPublic.prototype['last_sign_in_at'] = undefined;
/**
 * @member {String} linkedin
 */

UserPublic.prototype['linkedin'] = undefined;
/**
 * @member {String} location
 */

UserPublic.prototype['location'] = undefined;
/**
 * @member {String} name
 */

UserPublic.prototype['name'] = undefined;
/**
 * @member {String} organization
 */

UserPublic.prototype['organization'] = undefined;
/**
 * @member {String} projects_limit
 */

UserPublic.prototype['projects_limit'] = undefined;
/**
 * @member {String} skype
 */

UserPublic.prototype['skype'] = undefined;
/**
 * @member {String} state
 */

UserPublic.prototype['state'] = undefined;
/**
 * @member {String} theme_id
 */

UserPublic.prototype['theme_id'] = undefined;
/**
 * @member {String} twitter
 */

UserPublic.prototype['twitter'] = undefined;
/**
 * @member {String} two_factor_enabled
 */

UserPublic.prototype['two_factor_enabled'] = undefined;
/**
 * @member {String} username
 */

UserPublic.prototype['username'] = undefined;
/**
 * @member {String} web_url
 */

UserPublic.prototype['web_url'] = undefined;
/**
 * @member {String} website_url
 */

UserPublic.prototype['website_url'] = undefined;
var _default = UserPublic;
exports["default"] = _default;