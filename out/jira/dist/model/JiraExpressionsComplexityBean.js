"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _JiraExpressionsComplexityValueBean = _interopRequireDefault(require("./JiraExpressionsComplexityValueBean"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The JiraExpressionsComplexityBean model module.
 * @module model/JiraExpressionsComplexityBean
 * @version 1.4.0
 */
var JiraExpressionsComplexityBean = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JiraExpressionsComplexityBean</code>.
   * @alias module:model/JiraExpressionsComplexityBean
   */
  function JiraExpressionsComplexityBean() {
    _classCallCheck(this, JiraExpressionsComplexityBean);

    JiraExpressionsComplexityBean.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JiraExpressionsComplexityBean, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>JiraExpressionsComplexityBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JiraExpressionsComplexityBean} obj Optional instance to populate.
     * @return {module:model/JiraExpressionsComplexityBean} The populated <code>JiraExpressionsComplexityBean</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JiraExpressionsComplexityBean();

        if (data.hasOwnProperty('beans')) {
          obj['beans'] = _ApiClient["default"].convertToType(data['beans'], _JiraExpressionsComplexityValueBean["default"]);
        }

        if (data.hasOwnProperty('expensiveOperations')) {
          obj['expensiveOperations'] = _ApiClient["default"].convertToType(data['expensiveOperations'], _JiraExpressionsComplexityValueBean["default"]);
        }

        if (data.hasOwnProperty('primitiveValues')) {
          obj['primitiveValues'] = _ApiClient["default"].convertToType(data['primitiveValues'], _JiraExpressionsComplexityValueBean["default"]);
        }

        if (data.hasOwnProperty('steps')) {
          obj['steps'] = _ApiClient["default"].convertToType(data['steps'], _JiraExpressionsComplexityValueBean["default"]);
        }
      }

      return obj;
    }
  }]);

  return JiraExpressionsComplexityBean;
}();
/**
 * The number of Jira REST API beans returned in the response.
 * @member {module:model/JiraExpressionsComplexityValueBean} beans
 */


JiraExpressionsComplexityBean.prototype['beans'] = undefined;
/**
 * The number of expensive operations executed while evaluating the expression. Expensive operations are those that load additional data, such as entity properties, comments, or custom fields.
 * @member {module:model/JiraExpressionsComplexityValueBean} expensiveOperations
 */

JiraExpressionsComplexityBean.prototype['expensiveOperations'] = undefined;
/**
 * The number of primitive values returned in the response.
 * @member {module:model/JiraExpressionsComplexityValueBean} primitiveValues
 */

JiraExpressionsComplexityBean.prototype['primitiveValues'] = undefined;
/**
 * The number of steps it took to evaluate the expression, where a step is a high-level operation performed by the expression. A step is an operation such as arithmetic, accessing a property, accessing a context variable, or calling a function.
 * @member {module:model/JiraExpressionsComplexityValueBean} steps
 */

JiraExpressionsComplexityBean.prototype['steps'] = undefined;
var _default = JiraExpressionsComplexityBean;
exports["default"] = _default;