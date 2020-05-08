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
 * The InlineResponse20035UsersUsers model module.
 * @module model/InlineResponse20035UsersUsers
 * @version 1.1.0
 */
var InlineResponse20035UsersUsers = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20035UsersUsers</code>.
   * @alias module:model/InlineResponse20035UsersUsers
   * @param accountId {String} 
   * @param avatarUrl {String} 
   * @param displayName {String} 
   * @param html {String} 
   * @param key {String} 
   * @param name {String} 
   */
  function InlineResponse20035UsersUsers(accountId, avatarUrl, displayName, html, key, name) {
    _classCallCheck(this, InlineResponse20035UsersUsers);

    InlineResponse20035UsersUsers.initialize(this, accountId, avatarUrl, displayName, html, key, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20035UsersUsers, null, [{
    key: "initialize",
    value: function initialize(obj, accountId, avatarUrl, displayName, html, key, name) {
      obj['accountId'] = accountId;
      obj['avatarUrl'] = avatarUrl;
      obj['displayName'] = displayName;
      obj['html'] = html;
      obj['key'] = key;
      obj['name'] = name;
    }
    /**
     * Constructs a <code>InlineResponse20035UsersUsers</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20035UsersUsers} obj Optional instance to populate.
     * @return {module:model/InlineResponse20035UsersUsers} The populated <code>InlineResponse20035UsersUsers</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20035UsersUsers();

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

  return InlineResponse20035UsersUsers;
}();
/**
 * @member {String} accountId
 */


InlineResponse20035UsersUsers.prototype['accountId'] = undefined;
/**
 * @member {String} avatarUrl
 */

InlineResponse20035UsersUsers.prototype['avatarUrl'] = undefined;
/**
 * @member {String} displayName
 */

InlineResponse20035UsersUsers.prototype['displayName'] = undefined;
/**
 * @member {String} html
 */

InlineResponse20035UsersUsers.prototype['html'] = undefined;
/**
 * @member {String} key
 */

InlineResponse20035UsersUsers.prototype['key'] = undefined;
/**
 * @member {String} name
 */

InlineResponse20035UsersUsers.prototype['name'] = undefined;
var _default = InlineResponse20035UsersUsers;
exports["default"] = _default;