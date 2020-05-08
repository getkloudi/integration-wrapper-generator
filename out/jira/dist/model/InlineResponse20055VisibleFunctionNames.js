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
 * The InlineResponse20055VisibleFunctionNames model module.
 * @module model/InlineResponse20055VisibleFunctionNames
 * @version 1.3.0
 */
var InlineResponse20055VisibleFunctionNames = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20055VisibleFunctionNames</code>.
   * @alias module:model/InlineResponse20055VisibleFunctionNames
   * @param displayName {String} 
   * @param isList {String} 
   * @param value {String} 
   */
  function InlineResponse20055VisibleFunctionNames(displayName, isList, value) {
    _classCallCheck(this, InlineResponse20055VisibleFunctionNames);

    InlineResponse20055VisibleFunctionNames.initialize(this, displayName, isList, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20055VisibleFunctionNames, null, [{
    key: "initialize",
    value: function initialize(obj, displayName, isList, value) {
      obj['displayName'] = displayName;
      obj['isList'] = isList;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>InlineResponse20055VisibleFunctionNames</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20055VisibleFunctionNames} obj Optional instance to populate.
     * @return {module:model/InlineResponse20055VisibleFunctionNames} The populated <code>InlineResponse20055VisibleFunctionNames</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20055VisibleFunctionNames();

        if (data.hasOwnProperty('displayName')) {
          obj['displayName'] = _ApiClient["default"].convertToType(data['displayName'], 'String');
        }

        if (data.hasOwnProperty('isList')) {
          obj['isList'] = _ApiClient["default"].convertToType(data['isList'], 'String');
        }

        if (data.hasOwnProperty('types')) {
          obj['types'] = _ApiClient["default"].convertToType(data['types'], [Object]);
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20055VisibleFunctionNames;
}();
/**
 * @member {String} displayName
 */


InlineResponse20055VisibleFunctionNames.prototype['displayName'] = undefined;
/**
 * @member {String} isList
 */

InlineResponse20055VisibleFunctionNames.prototype['isList'] = undefined;
/**
 * @member {Array.<Object>} types
 */

InlineResponse20055VisibleFunctionNames.prototype['types'] = undefined;
/**
 * @member {String} value
 */

InlineResponse20055VisibleFunctionNames.prototype['value'] = undefined;
var _default = InlineResponse20055VisibleFunctionNames;
exports["default"] = _default;