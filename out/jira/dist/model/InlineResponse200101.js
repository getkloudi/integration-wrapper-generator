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
 * The InlineResponse200101 model module.
 * @module model/InlineResponse200101
 * @version 1.3.1
 */
var InlineResponse200101 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse200101</code>.
   * @alias module:model/InlineResponse200101
   * @param id {String} 
   * @param key {String} 
   * @param value {String} 
   */
  function InlineResponse200101(id, key, value) {
    _classCallCheck(this, InlineResponse200101);

    InlineResponse200101.initialize(this, id, key, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse200101, null, [{
    key: "initialize",
    value: function initialize(obj, id, key, value) {
      obj['id'] = id;
      obj['key'] = key;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>InlineResponse200101</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse200101} obj Optional instance to populate.
     * @return {module:model/InlineResponse200101} The populated <code>InlineResponse200101</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse200101();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse200101;
}();
/**
 * @member {String} id
 */


InlineResponse200101.prototype['id'] = undefined;
/**
 * @member {String} key
 */

InlineResponse200101.prototype['key'] = undefined;
/**
 * @member {String} value
 */

InlineResponse200101.prototype['value'] = undefined;
var _default = InlineResponse200101;
exports["default"] = _default;