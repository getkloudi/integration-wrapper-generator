"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20055VisibleFieldNames = _interopRequireDefault(require("./InlineResponse20055VisibleFieldNames"));

var _InlineResponse20055VisibleFunctionNames = _interopRequireDefault(require("./InlineResponse20055VisibleFunctionNames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20055 model module.
 * @module model/InlineResponse20055
 * @version 1.3.0
 */
var InlineResponse20055 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20055</code>.
   * 
   * @alias module:model/InlineResponse20055
   * @param jqlReservedWords {Array.<Object>} 
   * @param visibleFieldNames {Array.<module:model/InlineResponse20055VisibleFieldNames>} 
   * @param visibleFunctionNames {Array.<module:model/InlineResponse20055VisibleFunctionNames>} 
   */
  function InlineResponse20055(jqlReservedWords, visibleFieldNames, visibleFunctionNames) {
    _classCallCheck(this, InlineResponse20055);

    InlineResponse20055.initialize(this, jqlReservedWords, visibleFieldNames, visibleFunctionNames);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20055, null, [{
    key: "initialize",
    value: function initialize(obj, jqlReservedWords, visibleFieldNames, visibleFunctionNames) {
      obj['jqlReservedWords'] = jqlReservedWords;
      obj['visibleFieldNames'] = visibleFieldNames;
      obj['visibleFunctionNames'] = visibleFunctionNames;
    }
    /**
     * Constructs a <code>InlineResponse20055</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20055} obj Optional instance to populate.
     * @return {module:model/InlineResponse20055} The populated <code>InlineResponse20055</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20055();

        if (data.hasOwnProperty('jqlReservedWords')) {
          obj['jqlReservedWords'] = _ApiClient["default"].convertToType(data['jqlReservedWords'], [Object]);
        }

        if (data.hasOwnProperty('visibleFieldNames')) {
          obj['visibleFieldNames'] = _ApiClient["default"].convertToType(data['visibleFieldNames'], [_InlineResponse20055VisibleFieldNames["default"]]);
        }

        if (data.hasOwnProperty('visibleFunctionNames')) {
          obj['visibleFunctionNames'] = _ApiClient["default"].convertToType(data['visibleFunctionNames'], [_InlineResponse20055VisibleFunctionNames["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20055;
}();
/**
 * @member {Array.<Object>} jqlReservedWords
 */


InlineResponse20055.prototype['jqlReservedWords'] = undefined;
/**
 * @member {Array.<module:model/InlineResponse20055VisibleFieldNames>} visibleFieldNames
 */

InlineResponse20055.prototype['visibleFieldNames'] = undefined;
/**
 * @member {Array.<module:model/InlineResponse20055VisibleFunctionNames>} visibleFunctionNames
 */

InlineResponse20055.prototype['visibleFunctionNames'] = undefined;
var _default = InlineResponse20055;
exports["default"] = _default;