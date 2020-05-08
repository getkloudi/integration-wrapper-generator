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
 * The InlineResponse20020MetaComplexityBeans model module.
 * @module model/InlineResponse20020MetaComplexityBeans
 * @version 1.1.0
 */
var InlineResponse20020MetaComplexityBeans = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20020MetaComplexityBeans</code>.
   * @alias module:model/InlineResponse20020MetaComplexityBeans
   * @param limit {Number} 
   * @param value {Number} 
   */
  function InlineResponse20020MetaComplexityBeans(limit, value) {
    _classCallCheck(this, InlineResponse20020MetaComplexityBeans);

    InlineResponse20020MetaComplexityBeans.initialize(this, limit, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20020MetaComplexityBeans, null, [{
    key: "initialize",
    value: function initialize(obj, limit, value) {
      obj['limit'] = limit;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>InlineResponse20020MetaComplexityBeans</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20020MetaComplexityBeans} obj Optional instance to populate.
     * @return {module:model/InlineResponse20020MetaComplexityBeans} The populated <code>InlineResponse20020MetaComplexityBeans</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20020MetaComplexityBeans();

        if (data.hasOwnProperty('limit')) {
          obj['limit'] = _ApiClient["default"].convertToType(data['limit'], 'Number');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20020MetaComplexityBeans;
}();
/**
 * @member {Number} limit
 */


InlineResponse20020MetaComplexityBeans.prototype['limit'] = undefined;
/**
 * @member {Number} value
 */

InlineResponse20020MetaComplexityBeans.prototype['value'] = undefined;
var _default = InlineResponse20020MetaComplexityBeans;
exports["default"] = _default;