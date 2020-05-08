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
 * The InlineResponse200 model module.
 * @module model/InlineResponse200
 * @version 1.3.0
 */
var InlineResponse200 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse200</code>.
   * @alias module:model/InlineResponse200
   * @param defaultValue {String} 
   * @param desc {String} 
   * @param id {String} 
   * @param key {String} 
   * @param name {String} 
   * @param type {String} 
   * @param value {String} 
   */
  function InlineResponse200(defaultValue, desc, id, key, name, type, value) {
    _classCallCheck(this, InlineResponse200);

    InlineResponse200.initialize(this, defaultValue, desc, id, key, name, type, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse200, null, [{
    key: "initialize",
    value: function initialize(obj, defaultValue, desc, id, key, name, type, value) {
      obj['defaultValue'] = defaultValue;
      obj['desc'] = desc;
      obj['id'] = id;
      obj['key'] = key;
      obj['name'] = name;
      obj['type'] = type;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>InlineResponse200</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse200} obj Optional instance to populate.
     * @return {module:model/InlineResponse200} The populated <code>InlineResponse200</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse200();

        if (data.hasOwnProperty('defaultValue')) {
          obj['defaultValue'] = _ApiClient["default"].convertToType(data['defaultValue'], 'String');
        }

        if (data.hasOwnProperty('desc')) {
          obj['desc'] = _ApiClient["default"].convertToType(data['desc'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse200;
}();
/**
 * @member {String} defaultValue
 */


InlineResponse200.prototype['defaultValue'] = undefined;
/**
 * @member {String} desc
 */

InlineResponse200.prototype['desc'] = undefined;
/**
 * @member {String} id
 */

InlineResponse200.prototype['id'] = undefined;
/**
 * @member {String} key
 */

InlineResponse200.prototype['key'] = undefined;
/**
 * @member {String} name
 */

InlineResponse200.prototype['name'] = undefined;
/**
 * @member {String} type
 */

InlineResponse200.prototype['type'] = undefined;
/**
 * @member {String} value
 */

InlineResponse200.prototype['value'] = undefined;
var _default = InlineResponse200;
exports["default"] = _default;