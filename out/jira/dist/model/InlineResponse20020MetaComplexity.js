"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20020MetaComplexityBeans = _interopRequireDefault(require("./InlineResponse20020MetaComplexityBeans"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20020MetaComplexity model module.
 * @module model/InlineResponse20020MetaComplexity
 * @version 1.0.0
 */
var InlineResponse20020MetaComplexity = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20020MetaComplexity</code>.
   * @alias module:model/InlineResponse20020MetaComplexity
   * @param beans {module:model/InlineResponse20020MetaComplexityBeans} 
   * @param expensiveOperations {module:model/InlineResponse20020MetaComplexityBeans} 
   * @param primitiveValues {module:model/InlineResponse20020MetaComplexityBeans} 
   * @param steps {module:model/InlineResponse20020MetaComplexityBeans} 
   */
  function InlineResponse20020MetaComplexity(beans, expensiveOperations, primitiveValues, steps) {
    _classCallCheck(this, InlineResponse20020MetaComplexity);

    InlineResponse20020MetaComplexity.initialize(this, beans, expensiveOperations, primitiveValues, steps);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20020MetaComplexity, null, [{
    key: "initialize",
    value: function initialize(obj, beans, expensiveOperations, primitiveValues, steps) {
      obj['beans'] = beans;
      obj['expensiveOperations'] = expensiveOperations;
      obj['primitiveValues'] = primitiveValues;
      obj['steps'] = steps;
    }
    /**
     * Constructs a <code>InlineResponse20020MetaComplexity</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20020MetaComplexity} obj Optional instance to populate.
     * @return {module:model/InlineResponse20020MetaComplexity} The populated <code>InlineResponse20020MetaComplexity</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20020MetaComplexity();

        if (data.hasOwnProperty('beans')) {
          obj['beans'] = _InlineResponse20020MetaComplexityBeans["default"].constructFromObject(data['beans']);
        }

        if (data.hasOwnProperty('expensiveOperations')) {
          obj['expensiveOperations'] = _InlineResponse20020MetaComplexityBeans["default"].constructFromObject(data['expensiveOperations']);
        }

        if (data.hasOwnProperty('primitiveValues')) {
          obj['primitiveValues'] = _InlineResponse20020MetaComplexityBeans["default"].constructFromObject(data['primitiveValues']);
        }

        if (data.hasOwnProperty('steps')) {
          obj['steps'] = _InlineResponse20020MetaComplexityBeans["default"].constructFromObject(data['steps']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20020MetaComplexity;
}();
/**
 * @member {module:model/InlineResponse20020MetaComplexityBeans} beans
 */


InlineResponse20020MetaComplexity.prototype['beans'] = undefined;
/**
 * @member {module:model/InlineResponse20020MetaComplexityBeans} expensiveOperations
 */

InlineResponse20020MetaComplexity.prototype['expensiveOperations'] = undefined;
/**
 * @member {module:model/InlineResponse20020MetaComplexityBeans} primitiveValues
 */

InlineResponse20020MetaComplexity.prototype['primitiveValues'] = undefined;
/**
 * @member {module:model/InlineResponse20020MetaComplexityBeans} steps
 */

InlineResponse20020MetaComplexity.prototype['steps'] = undefined;
var _default = InlineResponse20020MetaComplexity;
exports["default"] = _default;