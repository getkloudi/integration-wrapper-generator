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
 * The User model module.
 * @module model/User
 * @version 1.1.0
 */
var User =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>User</code>.
   * @alias module:model/User
   */
  function User() {
    _classCallCheck(this, User);

    User.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(User, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/User} obj Optional instance to populate.
     * @return {module:model/User} The populated <code>User</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new User();

        if (data.hasOwnProperty('avatar_url')) {
          obj['avatar_url'] = _ApiClient["default"].convertToType(data['avatar_url'], 'String');
        }

        if (data.hasOwnProperty('bio')) {
          obj['bio'] = _ApiClient["default"].convertToType(data['bio'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('is_admin')) {
          obj['is_admin'] = _ApiClient["default"].convertToType(data['is_admin'], 'String');
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

        if (data.hasOwnProperty('skype')) {
          obj['skype'] = _ApiClient["default"].convertToType(data['skype'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('twitter')) {
          obj['twitter'] = _ApiClient["default"].convertToType(data['twitter'], 'String');
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

  return User;
}();
/**
 * @member {String} avatar_url
 */


User.prototype['avatar_url'] = undefined;
/**
 * @member {String} bio
 */

User.prototype['bio'] = undefined;
/**
 * @member {String} created_at
 */

User.prototype['created_at'] = undefined;
/**
 * @member {String} id
 */

User.prototype['id'] = undefined;
/**
 * @member {String} is_admin
 */

User.prototype['is_admin'] = undefined;
/**
 * @member {String} linkedin
 */

User.prototype['linkedin'] = undefined;
/**
 * @member {String} location
 */

User.prototype['location'] = undefined;
/**
 * @member {String} name
 */

User.prototype['name'] = undefined;
/**
 * @member {String} organization
 */

User.prototype['organization'] = undefined;
/**
 * @member {String} skype
 */

User.prototype['skype'] = undefined;
/**
 * @member {String} state
 */

User.prototype['state'] = undefined;
/**
 * @member {String} twitter
 */

User.prototype['twitter'] = undefined;
/**
 * @member {String} username
 */

User.prototype['username'] = undefined;
/**
 * @member {String} web_url
 */

User.prototype['web_url'] = undefined;
/**
 * @member {String} website_url
 */

User.prototype['website_url'] = undefined;
var _default = User;
exports["default"] = _default;