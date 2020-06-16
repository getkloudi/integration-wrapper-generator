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
 * The UserPickerUser model module.
 * @module model/UserPickerUser
 * @version 1.4.0
 */
var UserPickerUser = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UserPickerUser</code>.
   * A user found in a search.
   * @alias module:model/UserPickerUser
   */
  function UserPickerUser() {
    _classCallCheck(this, UserPickerUser);

    UserPickerUser.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UserPickerUser, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UserPickerUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserPickerUser} obj Optional instance to populate.
     * @return {module:model/UserPickerUser} The populated <code>UserPickerUser</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UserPickerUser();

        if (data.hasOwnProperty('accountId')) {
          obj['accountId'] = _ApiClient["default"].convertToType(data['accountId'], 'String');
        }

        if (data.hasOwnProperty('avatarUrl')) {
          obj['avatarUrl'] = _ApiClient["default"].convertToType(data['avatarUrl'], 'String');
        }

        if (data.hasOwnProperty('displayName')) {
          obj['displayName'] = _ApiClient["default"].convertToType(data['displayName'], 'String');
        }

        if (data.hasOwnProperty('html')) {
          obj['html'] = _ApiClient["default"].convertToType(data['html'], 'String');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return UserPickerUser;
}();
/**
 * The account ID of the user, which uniquely identifies the user across all Atlassian products. For example, *5b10ac8d82e05b22cc7d4ef5*.
 * @member {String} accountId
 */


UserPickerUser.prototype['accountId'] = undefined;
/**
 * The avatar URL of the user.
 * @member {String} avatarUrl
 */

UserPickerUser.prototype['avatarUrl'] = undefined;
/**
 * The display name of the user. Depending on the user’s privacy setting, this may be returned as null.
 * @member {String} displayName
 */

UserPickerUser.prototype['displayName'] = undefined;
/**
 * The display name, email address, and key of the user with the matched query string highlighted with the HTML bold tag.
 * @member {String} html
 */

UserPickerUser.prototype['html'] = undefined;
/**
 * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
 * @member {String} key
 */

UserPickerUser.prototype['key'] = undefined;
/**
 * This property is no longer available and will be removed from the documentation soon. See the [deprecation notice](https://developer.atlassian.com/cloud/jira/platform/deprecation-notice-user-privacy-api-migration-guide/) for details.
 * @member {String} name
 */

UserPickerUser.prototype['name'] = undefined;
var _default = UserPickerUser;
exports["default"] = _default;