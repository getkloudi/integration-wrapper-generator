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
 * The InlineObject63 model module.
 * @module model/InlineObject63
 * @version 1.3.0
 */
var InlineObject63 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject63</code>.
   * @alias module:model/InlineObject63
   */
  function InlineObject63() {
    _classCallCheck(this, InlineObject63);

    InlineObject63.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject63, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject63</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject63} obj Optional instance to populate.
     * @return {module:model/InlineObject63} The populated <code>InlineObject63</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject63();

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

  return InlineObject63;
}();
/**
 * The key of the transition property. Also known as the name of the transition property.
 * @member {String} key
 */


InlineObject63.prototype['key'] = undefined;
/**
 * The value of the transition property.
 * @member {String} value
 */

InlineObject63.prototype['value'] = undefined;
var _default = InlineObject63;
exports["default"] = _default;