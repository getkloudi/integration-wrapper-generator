"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _UserBeanAvatarUrls = _interopRequireDefault(require("./UserBeanAvatarUrls"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The UserBean model module.
 * @module model/UserBean
 * @version 1.4.0
 */
var UserBean = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UserBean</code>.
   * @alias module:model/UserBean
   */
  function UserBean() {
    _classCallCheck(this, UserBean);

    UserBean.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UserBean, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UserBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserBean} obj Optional instance to populate.
     * @return {module:model/UserBean} The populated <code>UserBean</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UserBean();

        if (data.hasOwnProperty('accountId')) {
          obj['accountId'] = _ApiClient["default"].convertToType(data['accountId'], 'String');
        }

        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Boolean');
        }

        if (data.hasOwnProperty('avatarUrls')) {
          obj['avatarUrls'] = _ApiClient["default"].convertToType(data['avatarUrls'], _UserBeanAvatarUrls["default"]);
        }

        if (data.hasOwnProperty('displayName')) {
          obj['displayName'] = _ApiClient["default"].convertToType(data['displayName'], 'String');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }
      }

      return obj;
    }
  }]);

  return UserBean;
}();
/**
 * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
 * @member {String} accountId
 */


UserBean.prototype['accountId'] = undefined;
/**
 * Whether the user is active.
 * @member {Boolean} active
 */

UserBean.prototype['active'] = undefined;
/**
 * The avatars of the user.
 * @member {module:model/UserBeanAvatarUrls} avatarUrls
 */

UserBean.prototype['avatarUrls'] = undefined;
/**
 * The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
 * @member {String} displayName
 */

UserBean.prototype['displayName'] = undefined;
/**
 * This property is deprecated in favor of `accountId` because of privacy changes. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.   The key of the user.
 * @member {String} key
 */

UserBean.prototype['key'] = undefined;
/**
 * This property is deprecated in favor of `accountId` because of privacy changes. See the [migration guide](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.   The username of the user.
 * @member {String} name
 */

UserBean.prototype['name'] = undefined;
/**
 * The URL of the user.
 * @member {String} self
 */

UserBean.prototype['self'] = undefined;
var _default = UserBean;
exports["default"] = _default;