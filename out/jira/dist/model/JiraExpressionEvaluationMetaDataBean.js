"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IssuesMetaBean = _interopRequireDefault(require("./IssuesMetaBean"));

var _JiraExpressionsComplexityBean = _interopRequireDefault(require("./JiraExpressionsComplexityBean"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The JiraExpressionEvaluationMetaDataBean model module.
 * @module model/JiraExpressionEvaluationMetaDataBean
 * @version 1.4.0
 */
var JiraExpressionEvaluationMetaDataBean = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JiraExpressionEvaluationMetaDataBean</code>.
   * @alias module:model/JiraExpressionEvaluationMetaDataBean
   */
  function JiraExpressionEvaluationMetaDataBean() {
    _classCallCheck(this, JiraExpressionEvaluationMetaDataBean);

    JiraExpressionEvaluationMetaDataBean.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JiraExpressionEvaluationMetaDataBean, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>JiraExpressionEvaluationMetaDataBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JiraExpressionEvaluationMetaDataBean} obj Optional instance to populate.
     * @return {module:model/JiraExpressionEvaluationMetaDataBean} The populated <code>JiraExpressionEvaluationMetaDataBean</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JiraExpressionEvaluationMetaDataBean();

        if (data.hasOwnProperty('complexity')) {
          obj['complexity'] = _ApiClient["default"].convertToType(data['complexity'], _JiraExpressionsComplexityBean["default"]);
        }

        if (data.hasOwnProperty('issues')) {
          obj['issues'] = _ApiClient["default"].convertToType(data['issues'], _IssuesMetaBean["default"]);
        }
      }

      return obj;
    }
  }]);

  return JiraExpressionEvaluationMetaDataBean;
}();
/**
 * Contains information about the expression complexity. For example, the number of steps it took to evaluate the expression.
 * @member {module:model/JiraExpressionsComplexityBean} complexity
 */


JiraExpressionEvaluationMetaDataBean.prototype['complexity'] = undefined;
/**
 * Contains information about the `issues` variable in the context. For example, is the issues were loaded with JQL, information about the page will be included here.
 * @member {module:model/IssuesMetaBean} issues
 */

JiraExpressionEvaluationMetaDataBean.prototype['issues'] = undefined;
var _default = JiraExpressionEvaluationMetaDataBean;
exports["default"] = _default;