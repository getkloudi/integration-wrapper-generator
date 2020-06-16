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
 * The UserWriteBean model module.
 * @module model/UserWriteBean
 * @version 1.4.0
 */
var UserWriteBean = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UserWriteBean</code>.
   * @alias module:model/UserWriteBean
   * @param displayName {String} The display name for the user.
   * @param emailAddress {String} The email address for the user.
   */
  function UserWriteBean(displayName, emailAddress) {
    _classCallCheck(this, UserWriteBean);

    UserWriteBean.initialize(this, displayName, emailAddress);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UserWriteBean, null, [{
    key: "initialize",
    value: function initialize(obj, displayName, emailAddress) {
      obj['displayName'] = displayName;
      obj['emailAddress'] = emailAddress;
    }
    /**
     * Constructs a <code>UserWriteBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserWriteBean} obj Optional instance to populate.
     * @return {module:model/UserWriteBean} The populated <code>UserWriteBean</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UserWriteBean();

        if (data.hasOwnProperty('applicationKeys')) {
          obj['applicationKeys'] = _ApiClient["default"].convertToType(data['applicationKeys'], ['String']);
        }

        if (data.hasOwnProperty('displayName')) {
          obj['displayName'] = _ApiClient["default"].convertToType(data['displayName'], 'String');
        }

        if (data.hasOwnProperty('emailAddress')) {
          obj['emailAddress'] = _ApiClient["default"].convertToType(data['emailAddress'], 'String');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('notification')) {
          obj['notification'] = _ApiClient["default"].convertToType(data['notification'], 'String');
        }

        if (data.hasOwnProperty('password')) {
          obj['password'] = _ApiClient["default"].convertToType(data['password'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }
      }

      return obj;
    }
  }]);

  return UserWriteBean;
}();
/**
 * Deprecated, do not use.
 * @member {Array.<String>} applicationKeys
 */


UserWriteBean.prototype['applicationKeys'] = undefined;
/**
 * The display name for the user.
 * @member {String} displayName
 */

UserWriteBean.prototype['displayName'] = undefined;
/**
 * The email address for the user.
 * @member {String} emailAddress
 */

UserWriteBean.prototype['emailAddress'] = undefined;
/**
 * The key for the user. When provided with `name`, overrides the value in `name` to set both `name` and `key`. This property is deprecated because of privacy changes. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
 * @member {String} key
 */

UserWriteBean.prototype['key'] = undefined;
/**
 * The username for the user. This property is deprecated because of privacy changes. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
 * @member {String} name
 */

UserWriteBean.prototype['name'] = undefined;
/**
 * Sends the user an email confirmation that they have been added to Jira. Default is `false`.
 * @member {String} notification
 */

UserWriteBean.prototype['notification'] = undefined;
/**
 * A password for the user. If a password is not set, a random password is generated.
 * @member {String} password
 */

UserWriteBean.prototype['password'] = undefined;
/**
 * The URL of the user.
 * @member {String} self
 */

UserWriteBean.prototype['self'] = undefined;
var _default = UserWriteBean;
exports["default"] = _default;