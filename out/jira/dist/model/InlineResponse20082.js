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
 * The InlineResponse20082 model module.
 * @module model/InlineResponse20082
 * @version 1.2.0
 */
var InlineResponse20082 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20082</code>.
   * 
   * @alias module:model/InlineResponse20082
   * @param _0 {String} 
   * @param _1 {String} 
   * @param _2 {String} 
   * @param _3 {String} 
   */
  function InlineResponse20082(_0, _1, _2, _3) {
    _classCallCheck(this, InlineResponse20082);

    InlineResponse20082.initialize(this, _0, _1, _2, _3);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20082, null, [{
    key: "initialize",
    value: function initialize(obj, _0, _1, _2, _3) {
      obj['0'] = _0;
      obj['1'] = _1;
      obj['2'] = _2;
      obj['3'] = _3;
    }
    /**
     * Constructs a <code>InlineResponse20082</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20082} obj Optional instance to populate.
     * @return {module:model/InlineResponse20082} The populated <code>InlineResponse20082</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20082();

        if (data.hasOwnProperty('0')) {
          obj['0'] = _ApiClient["default"].convertToType(data['0'], 'String');
        }

        if (data.hasOwnProperty('1')) {
          obj['1'] = _ApiClient["default"].convertToType(data['1'], 'String');
        }

        if (data.hasOwnProperty('2')) {
          obj['2'] = _ApiClient["default"].convertToType(data['2'], 'String');
        }

        if (data.hasOwnProperty('3')) {
          obj['3'] = _ApiClient["default"].convertToType(data['3'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20082;
}();
/**
 * @member {String} 0
 */


InlineResponse20082.prototype['0'] = undefined;
/**
 * @member {String} 1
 */

InlineResponse20082.prototype['1'] = undefined;
/**
 * @member {String} 2
 */

InlineResponse20082.prototype['2'] = undefined;
/**
 * @member {String} 3
 */

InlineResponse20082.prototype['3'] = undefined;
var _default = InlineResponse20082;
exports["default"] = _default;