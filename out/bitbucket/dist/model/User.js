"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Account = _interopRequireDefault(require("./Account"));

var _AccountAllOfLinks = _interopRequireDefault(require("./AccountAllOfLinks"));

var _UserAllOf = _interopRequireDefault(require("./UserAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The User model module.
 * @module model/User
 * @version 1.1.2
 */
var User =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>User</code>.
   * @alias module:model/User
   * @implements module:model/Account
   * @implements module:model/UserAllOf
   * @param type {String} 
   */
  function User(type) {
    _classCallCheck(this, User);

    _Account["default"].initialize(this, type);

    _UserAllOf["default"].initialize(this);

    User.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(User, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
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

        _Account["default"].constructFromObject(data, obj);

        _UserAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('links')) {
          obj['links'] = _AccountAllOfLinks["default"].constructFromObject(data['links']);
        }

        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient["default"].convertToType(data['username'], 'String');
        }

        if (data.hasOwnProperty('nickname')) {
          obj['nickname'] = _ApiClient["default"].convertToType(data['nickname'], 'String');
        }

        if (data.hasOwnProperty('account_status')) {
          obj['account_status'] = _ApiClient["default"].convertToType(data['account_status'], 'String');
        }

        if (data.hasOwnProperty('display_name')) {
          obj['display_name'] = _ApiClient["default"].convertToType(data['display_name'], 'String');
        }

        if (data.hasOwnProperty('website')) {
          obj['website'] = _ApiClient["default"].convertToType(data['website'], 'String');
        }

        if (data.hasOwnProperty('created_on')) {
          obj['created_on'] = _ApiClient["default"].convertToType(data['created_on'], 'Date');
        }

        if (data.hasOwnProperty('uuid')) {
          obj['uuid'] = _ApiClient["default"].convertToType(data['uuid'], 'String');
        }

        if (data.hasOwnProperty('has_2fa_enabled')) {
          obj['has_2fa_enabled'] = _ApiClient["default"].convertToType(data['has_2fa_enabled'], 'Boolean');
        }

        if (data.hasOwnProperty('is_staff')) {
          obj['is_staff'] = _ApiClient["default"].convertToType(data['is_staff'], 'Boolean');
        }

        if (data.hasOwnProperty('account_id')) {
          obj['account_id'] = _ApiClient["default"].convertToType(data['account_id'], 'String');
        }
      }

      return obj;
    }
  }]);

  return User;
}();
/**
 * @member {String} type
 */


User.prototype['type'] = undefined;
/**
 * @member {module:model/AccountAllOfLinks} links
 */

User.prototype['links'] = undefined;
/**
 * @member {String} username
 */

User.prototype['username'] = undefined;
/**
 * Account name defined by the owner. Should be used instead of the \"username\" field. Note that \"nickname\" cannot be used in place of \"username\" in URLs and queries, as \"nickname\" is not guaranteed to be unique.
 * @member {String} nickname
 */

User.prototype['nickname'] = undefined;
/**
 * The status of the account. Currently the only possible value is \"active\", but more values may be added in the future.
 * @member {String} account_status
 */

User.prototype['account_status'] = undefined;
/**
 * @member {String} display_name
 */

User.prototype['display_name'] = undefined;
/**
 * @member {String} website
 */

User.prototype['website'] = undefined;
/**
 * @member {Date} created_on
 */

User.prototype['created_on'] = undefined;
/**
 * @member {String} uuid
 */

User.prototype['uuid'] = undefined;
/**
 * @member {Boolean} has_2fa_enabled
 */

User.prototype['has_2fa_enabled'] = undefined;
/**
 * @member {Boolean} is_staff
 */

User.prototype['is_staff'] = undefined;
/**
 * The user's Atlassian account ID.
 * @member {String} account_id
 */

User.prototype['account_id'] = undefined; // Implement Account interface:

/**
 * @member {String} type
 */

_Account["default"].prototype['type'] = undefined;
/**
 * @member {module:model/AccountAllOfLinks} links
 */

_Account["default"].prototype['links'] = undefined;
/**
 * @member {String} username
 */

_Account["default"].prototype['username'] = undefined;
/**
 * Account name defined by the owner. Should be used instead of the \"username\" field. Note that \"nickname\" cannot be used in place of \"username\" in URLs and queries, as \"nickname\" is not guaranteed to be unique.
 * @member {String} nickname
 */

_Account["default"].prototype['nickname'] = undefined;
/**
 * The status of the account. Currently the only possible value is \"active\", but more values may be added in the future.
 * @member {String} account_status
 */

_Account["default"].prototype['account_status'] = undefined;
/**
 * @member {String} display_name
 */

_Account["default"].prototype['display_name'] = undefined;
/**
 * @member {String} website
 */

_Account["default"].prototype['website'] = undefined;
/**
 * @member {Date} created_on
 */

_Account["default"].prototype['created_on'] = undefined;
/**
 * @member {String} uuid
 */

_Account["default"].prototype['uuid'] = undefined;
/**
 * @member {Boolean} has_2fa_enabled
 */

_Account["default"].prototype['has_2fa_enabled'] = undefined; // Implement UserAllOf interface:

/**
 * @member {Boolean} is_staff
 */

_UserAllOf["default"].prototype['is_staff'] = undefined;
/**
 * The user's Atlassian account ID.
 * @member {String} account_id
 */

_UserAllOf["default"].prototype['account_id'] = undefined;
var _default = User;
exports["default"] = _default;