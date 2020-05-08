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
 * The InlineResponse200102 model module.
 * @module model/InlineResponse200102
 * @version 1.3.1
 */
var InlineResponse200102 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse200102</code>.
   * 
   * @alias module:model/InlineResponse200102
   * @param id {String} 
   * @param key {String} 
   * @param value {String} 
   */
  function InlineResponse200102(id, key, value) {
    _classCallCheck(this, InlineResponse200102);

    InlineResponse200102.initialize(this, id, key, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse200102, null, [{
    key: "initialize",
    value: function initialize(obj, id, key, value) {
      obj['id'] = id;
      obj['key'] = key;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>InlineResponse200102</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse200102} obj Optional instance to populate.
     * @return {module:model/InlineResponse200102} The populated <code>InlineResponse200102</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse200102();

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

  return InlineResponse200102;
}();
/**
 * @member {String} id
 */


InlineResponse200102.prototype['id'] = undefined;
/**
 * @member {String} key
 */

InlineResponse200102.prototype['key'] = undefined;
/**
 * @member {String} value
 */

InlineResponse200102.prototype['value'] = undefined;
var _default = InlineResponse200102;
exports["default"] = _default;