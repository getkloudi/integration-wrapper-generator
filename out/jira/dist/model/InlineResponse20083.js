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
 * The InlineResponse20083 model module.
 * @module model/InlineResponse20083
 * @version 1.1.0
 */
var InlineResponse20083 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20083</code>.
   * 
   * @alias module:model/InlineResponse20083
   * @param _0 {String} 
   * @param _1 {String} 
   * @param _2 {String} 
   * @param _3 {String} 
   * @param _4 {String} 
   * @param _5 {String} 
   * @param _6 {String} 
   * @param _7 {String} 
   * @param _8 {String} 
   * @param _9 {String} 
   * @param _10 {String} 
   * @param _11 {String} 
   * @param _12 {String} 
   * @param _13 {String} 
   * @param _14 {String} 
   * @param _15 {String} 
   * @param _16 {String} 
   * @param _17 {String} 
   * @param _18 {String} 
   * @param _19 {String} 
   * @param _20 {String} 
   * @param _21 {String} 
   * @param _22 {String} 
   * @param _23 {String} 
   * @param _24 {String} 
   * @param _25 {String} 
   */
  function InlineResponse20083(_0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25) {
    _classCallCheck(this, InlineResponse20083);

    InlineResponse20083.initialize(this, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20083, null, [{
    key: "initialize",
    value: function initialize(obj, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21, _22, _23, _24, _25) {
      obj['0'] = _0;
      obj['1'] = _1;
      obj['2'] = _2;
      obj['3'] = _3;
      obj['4'] = _4;
      obj['5'] = _5;
      obj['6'] = _6;
      obj['7'] = _7;
      obj['8'] = _8;
      obj['9'] = _9;
      obj['10'] = _10;
      obj['11'] = _11;
      obj['12'] = _12;
      obj['13'] = _13;
      obj['14'] = _14;
      obj['15'] = _15;
      obj['16'] = _16;
      obj['17'] = _17;
      obj['18'] = _18;
      obj['19'] = _19;
      obj['20'] = _20;
      obj['21'] = _21;
      obj['22'] = _22;
      obj['23'] = _23;
      obj['24'] = _24;
      obj['25'] = _25;
    }
    /**
     * Constructs a <code>InlineResponse20083</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20083} obj Optional instance to populate.
     * @return {module:model/InlineResponse20083} The populated <code>InlineResponse20083</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20083();

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

        if (data.hasOwnProperty('4')) {
          obj['4'] = _ApiClient["default"].convertToType(data['4'], 'String');
        }

        if (data.hasOwnProperty('5')) {
          obj['5'] = _ApiClient["default"].convertToType(data['5'], 'String');
        }

        if (data.hasOwnProperty('6')) {
          obj['6'] = _ApiClient["default"].convertToType(data['6'], 'String');
        }

        if (data.hasOwnProperty('7')) {
          obj['7'] = _ApiClient["default"].convertToType(data['7'], 'String');
        }

        if (data.hasOwnProperty('8')) {
          obj['8'] = _ApiClient["default"].convertToType(data['8'], 'String');
        }

        if (data.hasOwnProperty('9')) {
          obj['9'] = _ApiClient["default"].convertToType(data['9'], 'String');
        }

        if (data.hasOwnProperty('10')) {
          obj['10'] = _ApiClient["default"].convertToType(data['10'], 'String');
        }

        if (data.hasOwnProperty('11')) {
          obj['11'] = _ApiClient["default"].convertToType(data['11'], 'String');
        }

        if (data.hasOwnProperty('12')) {
          obj['12'] = _ApiClient["default"].convertToType(data['12'], 'String');
        }

        if (data.hasOwnProperty('13')) {
          obj['13'] = _ApiClient["default"].convertToType(data['13'], 'String');
        }

        if (data.hasOwnProperty('14')) {
          obj['14'] = _ApiClient["default"].convertToType(data['14'], 'String');
        }

        if (data.hasOwnProperty('15')) {
          obj['15'] = _ApiClient["default"].convertToType(data['15'], 'String');
        }

        if (data.hasOwnProperty('16')) {
          obj['16'] = _ApiClient["default"].convertToType(data['16'], 'String');
        }

        if (data.hasOwnProperty('17')) {
          obj['17'] = _ApiClient["default"].convertToType(data['17'], 'String');
        }

        if (data.hasOwnProperty('18')) {
          obj['18'] = _ApiClient["default"].convertToType(data['18'], 'String');
        }

        if (data.hasOwnProperty('19')) {
          obj['19'] = _ApiClient["default"].convertToType(data['19'], 'String');
        }

        if (data.hasOwnProperty('20')) {
          obj['20'] = _ApiClient["default"].convertToType(data['20'], 'String');
        }

        if (data.hasOwnProperty('21')) {
          obj['21'] = _ApiClient["default"].convertToType(data['21'], 'String');
        }

        if (data.hasOwnProperty('22')) {
          obj['22'] = _ApiClient["default"].convertToType(data['22'], 'String');
        }

        if (data.hasOwnProperty('23')) {
          obj['23'] = _ApiClient["default"].convertToType(data['23'], 'String');
        }

        if (data.hasOwnProperty('24')) {
          obj['24'] = _ApiClient["default"].convertToType(data['24'], 'String');
        }

        if (data.hasOwnProperty('25')) {
          obj['25'] = _ApiClient["default"].convertToType(data['25'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20083;
}();
/**
 * @member {String} 0
 */


InlineResponse20083.prototype['0'] = undefined;
/**
 * @member {String} 1
 */

InlineResponse20083.prototype['1'] = undefined;
/**
 * @member {String} 2
 */

InlineResponse20083.prototype['2'] = undefined;
/**
 * @member {String} 3
 */

InlineResponse20083.prototype['3'] = undefined;
/**
 * @member {String} 4
 */

InlineResponse20083.prototype['4'] = undefined;
/**
 * @member {String} 5
 */

InlineResponse20083.prototype['5'] = undefined;
/**
 * @member {String} 6
 */

InlineResponse20083.prototype['6'] = undefined;
/**
 * @member {String} 7
 */

InlineResponse20083.prototype['7'] = undefined;
/**
 * @member {String} 8
 */

InlineResponse20083.prototype['8'] = undefined;
/**
 * @member {String} 9
 */

InlineResponse20083.prototype['9'] = undefined;
/**
 * @member {String} 10
 */

InlineResponse20083.prototype['10'] = undefined;
/**
 * @member {String} 11
 */

InlineResponse20083.prototype['11'] = undefined;
/**
 * @member {String} 12
 */

InlineResponse20083.prototype['12'] = undefined;
/**
 * @member {String} 13
 */

InlineResponse20083.prototype['13'] = undefined;
/**
 * @member {String} 14
 */

InlineResponse20083.prototype['14'] = undefined;
/**
 * @member {String} 15
 */

InlineResponse20083.prototype['15'] = undefined;
/**
 * @member {String} 16
 */

InlineResponse20083.prototype['16'] = undefined;
/**
 * @member {String} 17
 */

InlineResponse20083.prototype['17'] = undefined;
/**
 * @member {String} 18
 */

InlineResponse20083.prototype['18'] = undefined;
/**
 * @member {String} 19
 */

InlineResponse20083.prototype['19'] = undefined;
/**
 * @member {String} 20
 */

InlineResponse20083.prototype['20'] = undefined;
/**
 * @member {String} 21
 */

InlineResponse20083.prototype['21'] = undefined;
/**
 * @member {String} 22
 */

InlineResponse20083.prototype['22'] = undefined;
/**
 * @member {String} 23
 */

InlineResponse20083.prototype['23'] = undefined;
/**
 * @member {String} 24
 */

InlineResponse20083.prototype['24'] = undefined;
/**
 * @member {String} 25
 */

InlineResponse20083.prototype['25'] = undefined;
var _default = InlineResponse20083;
exports["default"] = _default;