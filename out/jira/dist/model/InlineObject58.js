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
 * The InlineObject58 model module.
 * @module model/InlineObject58
 * @version 1.2.0
 */
var InlineObject58 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject58</code>.
   * @alias module:model/InlineObject58
   */
  function InlineObject58() {
    _classCallCheck(this, InlineObject58);

    InlineObject58.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject58, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject58</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject58} obj Optional instance to populate.
     * @return {module:model/InlineObject58} The populated <code>InlineObject58</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject58();

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
      }

      return obj;
    }
  }]);

  return InlineObject58;
}();
/**
 * Deprecated, do not use.
 * @member {Array.<String>} applicationKeys
 */


InlineObject58.prototype['applicationKeys'] = undefined;
/**
 * The display name for the user. Required.
 * @member {String} displayName
 */

InlineObject58.prototype['displayName'] = undefined;
/**
 * The email address for the user. Required.
 * @member {String} emailAddress
 */

InlineObject58.prototype['emailAddress'] = undefined;
/**
 * The key for the user. Read-only. This property has been deprecated due to privacy changes.See the migration guide for details.
 * @member {String} key
 */

InlineObject58.prototype['key'] = undefined;
/**
 * The username for the user. This property has been deprecated due to privacy changes. See the migration guide for details.
 * @member {String} name
 */

InlineObject58.prototype['name'] = undefined;
/**
 * Sends the user an email confirmation that they have been added to Jira. Default is false.
 * @member {String} notification
 */

InlineObject58.prototype['notification'] = undefined;
/**
 * A password for the user. If a password is not set, a random password is generated.
 * @member {String} password
 */

InlineObject58.prototype['password'] = undefined;
var _default = InlineObject58;
exports["default"] = _default;