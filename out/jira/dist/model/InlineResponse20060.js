"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse2004AuthorAvatarUrls = _interopRequireDefault(require("./InlineResponse2004AuthorAvatarUrls"));

var _InlineResponse20060ApplicationRoles = _interopRequireDefault(require("./InlineResponse20060ApplicationRoles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20060 model module.
 * @module model/InlineResponse20060
 * @version 1.1.0
 */
var InlineResponse20060 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20060</code>.
   * 
   * @alias module:model/InlineResponse20060
   * @param accountId {String} 
   * @param active {Boolean} 
   * @param applicationRoles {module:model/InlineResponse20060ApplicationRoles} 
   * @param avatarUrls {module:model/InlineResponse2004AuthorAvatarUrls} 
   * @param displayName {String} 
   * @param emailAddress {String} 
   * @param groups {module:model/InlineResponse20060ApplicationRoles} 
   * @param key {String} 
   * @param name {String} 
   * @param self {String} 
   * @param timeZone {String} 
   */
  function InlineResponse20060(accountId, active, applicationRoles, avatarUrls, displayName, emailAddress, groups, key, name, self, timeZone) {
    _classCallCheck(this, InlineResponse20060);

    InlineResponse20060.initialize(this, accountId, active, applicationRoles, avatarUrls, displayName, emailAddress, groups, key, name, self, timeZone);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20060, null, [{
    key: "initialize",
    value: function initialize(obj, accountId, active, applicationRoles, avatarUrls, displayName, emailAddress, groups, key, name, self, timeZone) {
      obj['accountId'] = accountId;
      obj['active'] = active;
      obj['applicationRoles'] = applicationRoles;
      obj['avatarUrls'] = avatarUrls;
      obj['displayName'] = displayName;
      obj['emailAddress'] = emailAddress;
      obj['groups'] = groups;
      obj['key'] = key;
      obj['name'] = name;
      obj['self'] = self;
      obj['timeZone'] = timeZone;
    }
    /**
     * Constructs a <code>InlineResponse20060</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20060} obj Optional instance to populate.
     * @return {module:model/InlineResponse20060} The populated <code>InlineResponse20060</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20060();

        if (data.hasOwnProperty('accountId')) {
          obj['accountId'] = _ApiClient["default"].convertToType(data['accountId'], 'String');
        }

        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Boolean');
        }

        if (data.hasOwnProperty('applicationRoles')) {
          obj['applicationRoles'] = _InlineResponse20060ApplicationRoles["default"].constructFromObject(data['applicationRoles']);
        }

        if (data.hasOwnProperty('avatarUrls')) {
          obj['avatarUrls'] = _InlineResponse2004AuthorAvatarUrls["default"].constructFromObject(data['avatarUrls']);
        }

        if (data.hasOwnProperty('displayName')) {
          obj['displayName'] = _ApiClient["default"].convertToType(data['displayName'], 'String');
        }

        if (data.hasOwnProperty('emailAddress')) {
          obj['emailAddress'] = _ApiClient["default"].convertToType(data['emailAddress'], 'String');
        }

        if (data.hasOwnProperty('groups')) {
          obj['groups'] = _InlineResponse20060ApplicationRoles["default"].constructFromObject(data['groups']);
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

        if (data.hasOwnProperty('timeZone')) {
          obj['timeZone'] = _ApiClient["default"].convertToType(data['timeZone'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20060;
}();
/**
 * @member {String} accountId
 */


InlineResponse20060.prototype['accountId'] = undefined;
/**
 * @member {Boolean} active
 */

InlineResponse20060.prototype['active'] = undefined;
/**
 * @member {module:model/InlineResponse20060ApplicationRoles} applicationRoles
 */

InlineResponse20060.prototype['applicationRoles'] = undefined;
/**
 * @member {module:model/InlineResponse2004AuthorAvatarUrls} avatarUrls
 */

InlineResponse20060.prototype['avatarUrls'] = undefined;
/**
 * @member {String} displayName
 */

InlineResponse20060.prototype['displayName'] = undefined;
/**
 * @member {String} emailAddress
 */

InlineResponse20060.prototype['emailAddress'] = undefined;
/**
 * @member {module:model/InlineResponse20060ApplicationRoles} groups
 */

InlineResponse20060.prototype['groups'] = undefined;
/**
 * @member {String} key
 */

InlineResponse20060.prototype['key'] = undefined;
/**
 * @member {String} name
 */

InlineResponse20060.prototype['name'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20060.prototype['self'] = undefined;
/**
 * @member {String} timeZone
 */

InlineResponse20060.prototype['timeZone'] = undefined;
var _default = InlineResponse20060;
exports["default"] = _default;