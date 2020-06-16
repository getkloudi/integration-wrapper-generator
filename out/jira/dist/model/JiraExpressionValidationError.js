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
 * The JiraExpressionValidationError model module.
 * @module model/JiraExpressionValidationError
 * @version 1.4.0
 */
var JiraExpressionValidationError = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JiraExpressionValidationError</code>.
   * Details about a syntax error.
   * @alias module:model/JiraExpressionValidationError
   * @param message {String} The detailed message about the error.
   * @param type {module:model/JiraExpressionValidationError.TypeEnum} The error type.
   */
  function JiraExpressionValidationError(message, type) {
    _classCallCheck(this, JiraExpressionValidationError);

    JiraExpressionValidationError.initialize(this, message, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JiraExpressionValidationError, null, [{
    key: "initialize",
    value: function initialize(obj, message, type) {
      obj['message'] = message;
      obj['type'] = type;
    }
    /**
     * Constructs a <code>JiraExpressionValidationError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JiraExpressionValidationError} obj Optional instance to populate.
     * @return {module:model/JiraExpressionValidationError} The populated <code>JiraExpressionValidationError</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JiraExpressionValidationError();

        if (data.hasOwnProperty('column')) {
          obj['column'] = _ApiClient["default"].convertToType(data['column'], 'Number');
        }

        if (data.hasOwnProperty('line')) {
          obj['line'] = _ApiClient["default"].convertToType(data['line'], 'Number');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return JiraExpressionValidationError;
}();
/**
 * The text column in which the error occurred. If absent, the error pertains to the entire expression.
 * @member {Number} column
 */


JiraExpressionValidationError.prototype['column'] = undefined;
/**
 * The text line in which the error occurred. If absent, the error pertains to the entire expression.
 * @member {Number} line
 */

JiraExpressionValidationError.prototype['line'] = undefined;
/**
 * The detailed message about the error.
 * @member {String} message
 */

JiraExpressionValidationError.prototype['message'] = undefined;
/**
 * The error type.
 * @member {module:model/JiraExpressionValidationError.TypeEnum} type
 */

JiraExpressionValidationError.prototype['type'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

JiraExpressionValidationError['TypeEnum'] = {
  /**
   * value: "syntax"
   * @const
   */
  "syntax": "syntax",

  /**
   * value: "other"
   * @const
   */
  "other": "other"
};
var _default = JiraExpressionValidationError;
exports["default"] = _default;