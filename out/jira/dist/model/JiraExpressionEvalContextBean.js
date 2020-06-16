"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IdOrKeyBean = _interopRequireDefault(require("./IdOrKeyBean"));

var _JexpIssues = _interopRequireDefault(require("./JexpIssues"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The JiraExpressionEvalContextBean model module.
 * @module model/JiraExpressionEvalContextBean
 * @version 1.4.0
 */
var JiraExpressionEvalContextBean = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JiraExpressionEvalContextBean</code>.
   * @alias module:model/JiraExpressionEvalContextBean
   */
  function JiraExpressionEvalContextBean() {
    _classCallCheck(this, JiraExpressionEvalContextBean);

    JiraExpressionEvalContextBean.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JiraExpressionEvalContextBean, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>JiraExpressionEvalContextBean</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JiraExpressionEvalContextBean} obj Optional instance to populate.
     * @return {module:model/JiraExpressionEvalContextBean} The populated <code>JiraExpressionEvalContextBean</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JiraExpressionEvalContextBean();

        if (data.hasOwnProperty('board')) {
          obj['board'] = _ApiClient["default"].convertToType(data['board'], 'Number');
        }

        if (data.hasOwnProperty('customerRequest')) {
          obj['customerRequest'] = _ApiClient["default"].convertToType(data['customerRequest'], 'Number');
        }

        if (data.hasOwnProperty('issue')) {
          obj['issue'] = _ApiClient["default"].convertToType(data['issue'], _IdOrKeyBean["default"]);
        }

        if (data.hasOwnProperty('issues')) {
          obj['issues'] = _ApiClient["default"].convertToType(data['issues'], _JexpIssues["default"]);
        }

        if (data.hasOwnProperty('project')) {
          obj['project'] = _ApiClient["default"].convertToType(data['project'], _IdOrKeyBean["default"]);
        }

        if (data.hasOwnProperty('serviceDesk')) {
          obj['serviceDesk'] = _ApiClient["default"].convertToType(data['serviceDesk'], 'Number');
        }

        if (data.hasOwnProperty('sprint')) {
          obj['sprint'] = _ApiClient["default"].convertToType(data['sprint'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return JiraExpressionEvalContextBean;
}();
/**
 * The ID of the board that is available under the `board` variable when evaluating the expression.
 * @member {Number} board
 */


JiraExpressionEvalContextBean.prototype['board'] = undefined;
/**
 * The ID of the customer request that is available under the `customerRequest` variable when evaluating the expression. This is the same as the ID of the underlying Jira issue, but the customer request context variable will have a different type.
 * @member {Number} customerRequest
 */

JiraExpressionEvalContextBean.prototype['customerRequest'] = undefined;
/**
 * The issue that is available under the `issue` variable when evaluating the expression.
 * @member {module:model/IdOrKeyBean} issue
 */

JiraExpressionEvalContextBean.prototype['issue'] = undefined;
/**
 * The collection of issues that is available under the `issues` variable when evaluating the expression.
 * @member {module:model/JexpIssues} issues
 */

JiraExpressionEvalContextBean.prototype['issues'] = undefined;
/**
 * The project that is available under the `project` variable when evaluating the expression.
 * @member {module:model/IdOrKeyBean} project
 */

JiraExpressionEvalContextBean.prototype['project'] = undefined;
/**
 * The ID of the service desk that is available under the `serviceDesk` variable when evaluating the expression.
 * @member {Number} serviceDesk
 */

JiraExpressionEvalContextBean.prototype['serviceDesk'] = undefined;
/**
 * The ID of the sprint that is available under the `sprint` variable when evaluating the expression.
 * @member {Number} sprint
 */

JiraExpressionEvalContextBean.prototype['sprint'] = undefined;
var _default = JiraExpressionEvalContextBean;
exports["default"] = _default;