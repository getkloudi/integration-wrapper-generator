"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _JiraExpressionValidationError = _interopRequireDefault(require("./JiraExpressionValidationError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The JiraExpressionAnalysis model module.
 * @module model/JiraExpressionAnalysis
 * @version 1.4.0
 */
var JiraExpressionAnalysis = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JiraExpressionAnalysis</code>.
   * Details about the analysed Jira expression.
   * @alias module:model/JiraExpressionAnalysis
   * @param expression {String} The analysed expression.
   * @param valid {Boolean} Whether the expression is valid and the interpreter will evaluate it. Note that the expression may fail at runtime (for example, if it executes too many expensive operations).
   */
  function JiraExpressionAnalysis(expression, valid) {
    _classCallCheck(this, JiraExpressionAnalysis);

    JiraExpressionAnalysis.initialize(this, expression, valid);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JiraExpressionAnalysis, null, [{
    key: "initialize",
    value: function initialize(obj, expression, valid) {
      obj['expression'] = expression;
      obj['valid'] = valid;
    }
    /**
     * Constructs a <code>JiraExpressionAnalysis</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JiraExpressionAnalysis} obj Optional instance to populate.
     * @return {module:model/JiraExpressionAnalysis} The populated <code>JiraExpressionAnalysis</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JiraExpressionAnalysis();

        if (data.hasOwnProperty('errors')) {
          obj['errors'] = _ApiClient["default"].convertToType(data['errors'], [_JiraExpressionValidationError["default"]]);
        }

        if (data.hasOwnProperty('expression')) {
          obj['expression'] = _ApiClient["default"].convertToType(data['expression'], 'String');
        }

        if (data.hasOwnProperty('valid')) {
          obj['valid'] = _ApiClient["default"].convertToType(data['valid'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return JiraExpressionAnalysis;
}();
/**
 * A list of validation errors. Not included if the expression is valid.
 * @member {Array.<module:model/JiraExpressionValidationError>} errors
 */


JiraExpressionAnalysis.prototype['errors'] = undefined;
/**
 * The analysed expression.
 * @member {String} expression
 */

JiraExpressionAnalysis.prototype['expression'] = undefined;
/**
 * Whether the expression is valid and the interpreter will evaluate it. Note that the expression may fail at runtime (for example, if it executes too many expensive operations).
 * @member {Boolean} valid
 */

JiraExpressionAnalysis.prototype['valid'] = undefined;
var _default = JiraExpressionAnalysis;
exports["default"] = _default;