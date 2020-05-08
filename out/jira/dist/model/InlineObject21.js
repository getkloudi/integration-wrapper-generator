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
 * The InlineObject21 model module.
 * @module model/InlineObject21
 * @version 1.2.0
 */
var InlineObject21 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject21</code>.
   * @alias module:model/InlineObject21
   */
  function InlineObject21() {
    _classCallCheck(this, InlineObject21);

    InlineObject21.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject21, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject21</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject21} obj Optional instance to populate.
     * @return {module:model/InlineObject21} The populated <code>InlineObject21</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject21();

        if (data.hasOwnProperty('accountId')) {
          obj['accountId'] = _ApiClient["default"].convertToType(data['accountId'], 'String');
        }

        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Boolean');
        }

        if (data.hasOwnProperty('applicationRoles')) {
          obj['applicationRoles'] = _ApiClient["default"].convertToType(data['applicationRoles'], Object);
        }

        if (data.hasOwnProperty('avatarUrls')) {
          obj['avatarUrls'] = _ApiClient["default"].convertToType(data['avatarUrls'], Object);
        }

        if (data.hasOwnProperty('displayName')) {
          obj['displayName'] = _ApiClient["default"].convertToType(data['displayName'], 'String');
        }

        if (data.hasOwnProperty('emailAddress')) {
          obj['emailAddress'] = _ApiClient["default"].convertToType(data['emailAddress'], 'String');
        }

        if (data.hasOwnProperty('groups')) {
          obj['groups'] = _ApiClient["default"].convertToType(data['groups'], Object);
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

        if (data.hasOwnProperty('timeZone')) {
          obj['timeZone'] = _ApiClient["default"].convertToType(data['timeZone'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject21;
}();
/**
 * The accountId of the user, which uniquely identifies the user across all Atlassian products. For example, 384093:32b4d9w0-f6a5-3535-11a3-9c8c88d10192.
 * @member {String} accountId
 */


InlineObject21.prototype['accountId'] = undefined;
/**
 * Indicates whether the user is active.
 * @member {Boolean} active
 */

InlineObject21.prototype['active'] = undefined;
/**
 * The application roles the user is assigned to.
 * @member {Object} applicationRoles
 */

InlineObject21.prototype['applicationRoles'] = undefined;
/**
 * The avatars of the user.
 * @member {Object} avatarUrls
 */

InlineObject21.prototype['avatarUrls'] = undefined;
/**
 * The display name of the user. Depending on the user’s privacy setting, this may return an alternative value.
 * @member {String} displayName
 */

InlineObject21.prototype['displayName'] = undefined;
/**
 * The email address of the user. Depending on the user’s privacy setting, this may be returned as null.
 * @member {String} emailAddress
 */

InlineObject21.prototype['emailAddress'] = undefined;
/**
 * The groups that the user belongs to.
 * @member {Object} groups
 */

InlineObject21.prototype['groups'] = undefined;
/**
 * This property has been deprecated in favour of accountId due to privacy changes. See the migration guide for details.The key of the user. For example, admin.
 * @member {String} key
 */

InlineObject21.prototype['key'] = undefined;
/**
 * The locale of the user. Depending on the user’s privacy setting, this may be returned as null.
 * @member {String} locale
 */

InlineObject21.prototype['locale'] = undefined;
/**
 * This property has been deprecated in favour of accountId due to privacy changes. See the migration guide for details.The username of the user. For example, admin.
 * @member {String} name
 */

InlineObject21.prototype['name'] = undefined;
/**
 * The time zone specified in the user's profile. Depending on the user’s privacy setting, this may be returned as null.
 * @member {String} timeZone
 */

InlineObject21.prototype['timeZone'] = undefined;
var _default = InlineObject21;
exports["default"] = _default;