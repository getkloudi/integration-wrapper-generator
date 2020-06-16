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
 * The JiraExpressionsComplexityValueBean model module.
 * @module model/JiraExpressionsComplexityValueBean
 * @version 1.4.0
 */
var JiraExpressionsComplexityValueBean = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JiraExpressionsComplexityValueBean</code>.
   * @alias module:model/JiraExpressionsComplexityValueBean
   * @param limit {Number} The maximum allowed complexity. The evaluation will fail if this value is exceeded.
   * @param value {Number} The complexity value of the current expression.
   */
  function JiraExpressionsComplexityValueBean(limit, value) {
    _classCallCheck(this, JiraExpressionsComplexityValueBean);

    JiraExpressionsComplexityValueBean.initialize(this, limit, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JiraExpressionsComplexityValueBean, null, [{
    key: "initialize",
    value: function initialize(obj, limit, value) {
      obj['limit'] = limit;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>JiraExpressionsComplexityValueBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JiraExpressionsComplexityValueBean} obj Optional instance to populate.
     * @return {module:model/JiraExpressionsComplexityValueBean} The populated <code>JiraExpressionsComplexityValueBean</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JiraExpressionsComplexityValueBean();

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

  return JiraExpressionsComplexityValueBean;
}();
/**
 * The maximum allowed complexity. The evaluation will fail if this value is exceeded.
 * @member {Number} limit
 */


JiraExpressionsComplexityValueBean.prototype['limit'] = undefined;
/**
 * The complexity value of the current expression.
 * @member {Number} value
 */

JiraExpressionsComplexityValueBean.prototype['value'] = undefined;
var _default = JiraExpressionsComplexityValueBean;
exports["default"] = _default;