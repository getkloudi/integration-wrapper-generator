"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AvatarUrlsBean = _interopRequireDefault(require("./AvatarUrlsBean"));

var _SimpleListWrapperApplicationRole = _interopRequireDefault(require("./SimpleListWrapperApplicationRole"));

var _SimpleListWrapperGroupName = _interopRequireDefault(require("./SimpleListWrapperGroupName"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The User model module.
 * @module model/User
 * @version 1.4.0
 */
var User = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>User</code>.
   * A user with details as permitted by the user&#39;s Atlassian Account privacy settings. However, be aware of these exceptions:   *  User record deleted from Atlassian: This occurs as the result of a right to be forgotten request. In this case, &#x60;displayName&#x60; provides an indication and other parameters have default values or are blank (for example, email is blank).  *  User record corrupted: This occurs as a results of events such as a server import and can only happen to deleted users. In this case, &#x60;accountId&#x60; returns *unknown* and all other parameters have fallback values.  *  User record unavailable: This usually occurs due to an internal service outage. In this case, all parameters have fallback values.
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

        if (data.hasOwnProperty('accountId')) {
          obj['accountId'] = _ApiClient["default"].convertToType(data['accountId'], 'String');
        }

        if (data.hasOwnProperty('accountType')) {
          obj['accountType'] = _ApiClient["default"].convertToType(data['accountType'], 'String');
        }

        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Boolean');
        }

        if (data.hasOwnProperty('applicationRoles')) {
          obj['applicationRoles'] = _ApiClient["default"].convertToType(data['applicationRoles'], _SimpleListWrapperApplicationRole["default"]);
        }

        if (data.hasOwnProperty('avatarUrls')) {
          obj['avatarUrls'] = _ApiClient["default"].convertToType(data['avatarUrls'], _AvatarUrlsBean["default"]);
        }

        if (data.hasOwnProperty('displayName')) {
          obj['displayName'] = _ApiClient["default"].convertToType(data['displayName'], 'String');
        }

        if (data.hasOwnProperty('emailAddress')) {
          obj['emailAddress'] = _ApiClient["default"].convertToType(data['emailAddress'], 'String');
        }

        if (data.hasOwnProperty('expand')) {
          obj['expand'] = _ApiClient["default"].convertToType(data['expand'], 'String');
        }

        if (data.hasOwnProperty('groups')) {
          obj['groups'] = _ApiClient["default"].convertToType(data['groups'], _SimpleListWrapperGroupName["default"]);
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('locale')) {
          obj['locale'] = _ApiClient["default"].convertToType(data['locale'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }

        if (data.hasOwnProperty('timeZone')) {
          obj['timeZone'] = _ApiClient["default"].convertToType(data['timeZone'], 'String');
        }
      }

      return obj;
    }
  }]);

  return User;
}();
/**
 * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*. Required in requests.
 * @member {String} accountId
 */


User.prototype['accountId'] = undefined;
/**
 * The user account type. Can take the following values:   *  `atlassian` regular Atlassian user account  *  `app` system account used for Connect applications and OAuth to represent external systems  *  `customer` Jira Service Desk account representing an external service desk
 * @member {module:model/User.AccountTypeEnum} accountType
 */

User.prototype['accountType'] = undefined;
/**
 * Whether the user is active.
 * @member {Boolean} active
 */

User.prototype['active'] = undefined;
/**
 * The application roles the user is assigned to.
 * @member {module:model/SimpleListWrapperApplicationRole} applicationRoles
 */

User.prototype['applicationRoles'] = undefined;
/**
 * The avatars of the user.
 * @member {module:model/AvatarUrlsBean} avatarUrls
 */

User.prototype['avatarUrls'] = undefined;
/**
 * The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
 * @member {String} displayName
 */

User.prototype['displayName'] = undefined;
/**
 * The email address of the user. Depending on the user’s privacy setting, this may be returned as null.
 * @member {String} emailAddress
 */

User.prototype['emailAddress'] = undefined;
/**
 * Expand options that include additional user details in the response.
 * @member {String} expand
 */

User.prototype['expand'] = undefined;
/**
 * The groups that the user belongs to.
 * @member {module:model/SimpleListWrapperGroupName} groups
 */

User.prototype['groups'] = undefined;
/**
 * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
 * @member {String} key
 */

User.prototype['key'] = undefined;
/**
 * The locale of the user. Depending on the user’s privacy setting, this may be returned as null.
 * @member {String} locale
 */

User.prototype['locale'] = undefined;
/**
 * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
 * @member {String} name
 */

User.prototype['name'] = undefined;
/**
 * The URL of the user.
 * @member {String} self
 */

User.prototype['self'] = undefined;
/**
 * The time zone specified in the user's profile. Depending on the user’s privacy setting, this may be returned as null.
 * @member {String} timeZone
 */

User.prototype['timeZone'] = undefined;
/**
 * Allowed values for the <code>accountType</code> property.
 * @enum {String}
 * @readonly
 */

User['AccountTypeEnum'] = {
  /**
   * value: "atlassian"
   * @const
   */
  "atlassian": "atlassian",

  /**
   * value: "app"
   * @const
   */
  "app": "app",

  /**
   * value: "customer"
   * @const
   */
  "customer": "customer",

  /**
   * value: "unknown"
   * @const
   */
  "unknown": "unknown"
};
var _default = User;
exports["default"] = _default;