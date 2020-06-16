"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _JiraExpressionEvalContextBean = _interopRequireDefault(require("./JiraExpressionEvalContextBean"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The JiraExpressionEvalRequestBean model module.
 * @module model/JiraExpressionEvalRequestBean
 * @version 1.4.0
 */
var JiraExpressionEvalRequestBean = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JiraExpressionEvalRequestBean</code>.
   * @alias module:model/JiraExpressionEvalRequestBean
   * @param expression {String} The Jira expression to evaluate.
   */
  function JiraExpressionEvalRequestBean(expression) {
    _classCallCheck(this, JiraExpressionEvalRequestBean);

    JiraExpressionEvalRequestBean.initialize(this, expression);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JiraExpressionEvalRequestBean, null, [{
    key: "initialize",
    value: function initialize(obj, expression) {
      obj['expression'] = expression;
    }
    /**
     * Constructs a <code>JiraExpressionEvalRequestBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JiraExpressionEvalRequestBean} obj Optional instance to populate.
     * @return {module:model/JiraExpressionEvalRequestBean} The populated <code>JiraExpressionEvalRequestBean</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JiraExpressionEvalRequestBean();

        if (data.hasOwnProperty('context')) {
          obj['context'] = _ApiClient["default"].convertToType(data['context'], _JiraExpressionEvalContextBean["default"]);
        }

        if (data.hasOwnProperty('expression')) {
          obj['expression'] = _ApiClient["default"].convertToType(data['expression'], 'String');
        }
      }

      return obj;
    }
  }]);

  return JiraExpressionEvalRequestBean;
}();
/**
 * The context in which the Jira expression is evaluated.
 * @member {module:model/JiraExpressionEvalContextBean} context
 */


JiraExpressionEvalRequestBean.prototype['context'] = undefined;
/**
 * The Jira expression to evaluate.
 * @member {String} expression
 */

JiraExpressionEvalRequestBean.prototype['expression'] = undefined;
var _default = JiraExpressionEvalRequestBean;
exports["default"] = _default;