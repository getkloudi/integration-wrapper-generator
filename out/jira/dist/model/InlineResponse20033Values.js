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
 * The InlineResponse20033Values model module.
 * @module model/InlineResponse20033Values
 * @version 1.1.0
 */
var InlineResponse20033Values = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20033Values</code>.
   * @alias module:model/InlineResponse20033Values
   * @param accountId {String} 
   * @param active {Boolean} 
   * @param displayName {String} 
   * @param emailAddress {String} 
   * @param key {String} 
   * @param name {String} 
   * @param self {String} 
   * @param timeZone {String} 
   */
  function InlineResponse20033Values(accountId, active, displayName, emailAddress, key, name, self, timeZone) {
    _classCallCheck(this, InlineResponse20033Values);

    InlineResponse20033Values.initialize(this, accountId, active, displayName, emailAddress, key, name, self, timeZone);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20033Values, null, [{
    key: "initialize",
    value: function initialize(obj, accountId, active, displayName, emailAddress, key, name, self, timeZone) {
      obj['accountId'] = accountId;
      obj['active'] = active;
      obj['displayName'] = displayName;
      obj['emailAddress'] = emailAddress;
      obj['key'] = key;
      obj['name'] = name;
      obj['self'] = self;
      obj['timeZone'] = timeZone;
    }
    /**
     * Constructs a <code>InlineResponse20033Values</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20033Values} obj Optional instance to populate.
     * @return {module:model/InlineResponse20033Values} The populated <code>InlineResponse20033Values</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20033Values();

        if (data.hasOwnProperty('accountId')) {
          obj['accountId'] = _ApiClient["default"].convertToType(data['accountId'], 'String');
        }

        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Boolean');
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

  return InlineResponse20033Values;
}();
/**
 * @member {String} accountId
 */


InlineResponse20033Values.prototype['accountId'] = undefined;
/**
 * @member {Boolean} active
 */

InlineResponse20033Values.prototype['active'] = undefined;
/**
 * @member {Object} avatarUrls
 */

InlineResponse20033Values.prototype['avatarUrls'] = undefined;
/**
 * @member {String} displayName
 */

InlineResponse20033Values.prototype['displayName'] = undefined;
/**
 * @member {String} emailAddress
 */

InlineResponse20033Values.prototype['emailAddress'] = undefined;
/**
 * @member {String} key
 */

InlineResponse20033Values.prototype['key'] = undefined;
/**
 * @member {String} name
 */

InlineResponse20033Values.prototype['name'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20033Values.prototype['self'] = undefined;
/**
 * @member {String} timeZone
 */

InlineResponse20033Values.prototype['timeZone'] = undefined;
var _default = InlineResponse20033Values;
exports["default"] = _default;