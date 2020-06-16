"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _JiraExpressionEvaluationMetaDataBean = _interopRequireDefault(require("./JiraExpressionEvaluationMetaDataBean"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The JiraExpressionResult model module.
 * @module model/JiraExpressionResult
 * @version 1.4.0
 */
var JiraExpressionResult = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JiraExpressionResult</code>.
   * The result of evaluating a Jira expression.
   * @alias module:model/JiraExpressionResult
   * @param value {Object} The value of the evaluated expression. It may be a primitive JSON value or a Jira REST API object. (Some expressions do not produce any meaningful results—for example, an expression that returns a lambda function—if that's the case a simple string representation is returned. These string representations should not be relied upon and may change without notice.)
   */
  function JiraExpressionResult(value) {
    _classCallCheck(this, JiraExpressionResult);

    JiraExpressionResult.initialize(this, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JiraExpressionResult, null, [{
    key: "initialize",
    value: function initialize(obj, value) {
      obj['value'] = value;
    }
    /**
     * Constructs a <code>JiraExpressionResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JiraExpressionResult} obj Optional instance to populate.
     * @return {module:model/JiraExpressionResult} The populated <code>JiraExpressionResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JiraExpressionResult();

        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _ApiClient["default"].convertToType(data['meta'], _JiraExpressionEvaluationMetaDataBean["default"]);
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], Object);
        }
      }

      return obj;
    }
  }]);

  return JiraExpressionResult;
}();
/**
 * Contains various characteristics of the performed expression evaluation.
 * @member {module:model/JiraExpressionEvaluationMetaDataBean} meta
 */


JiraExpressionResult.prototype['meta'] = undefined;
/**
 * The value of the evaluated expression. It may be a primitive JSON value or a Jira REST API object. (Some expressions do not produce any meaningful results—for example, an expression that returns a lambda function—if that's the case a simple string representation is returned. These string representations should not be relied upon and may change without notice.)
 * @member {Object} value
 */

JiraExpressionResult.prototype['value'] = undefined;
var _default = JiraExpressionResult;
exports["default"] = _default;