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
 * The JiraExpressionForAnalysis model module.
 * @module model/JiraExpressionForAnalysis
 * @version 1.4.0
 */
var JiraExpressionForAnalysis = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JiraExpressionForAnalysis</code>.
   * Details of Jira expressions for analysis.
   * @alias module:model/JiraExpressionForAnalysis
   * @param expressions {Array.<String>} The list of Jira expressions to analyse.
   */
  function JiraExpressionForAnalysis(expressions) {
    _classCallCheck(this, JiraExpressionForAnalysis);

    JiraExpressionForAnalysis.initialize(this, expressions);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JiraExpressionForAnalysis, null, [{
    key: "initialize",
    value: function initialize(obj, expressions) {
      obj['expressions'] = expressions;
    }
    /**
     * Constructs a <code>JiraExpressionForAnalysis</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JiraExpressionForAnalysis} obj Optional instance to populate.
     * @return {module:model/JiraExpressionForAnalysis} The populated <code>JiraExpressionForAnalysis</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JiraExpressionForAnalysis();

        if (data.hasOwnProperty('expressions')) {
          obj['expressions'] = _ApiClient["default"].convertToType(data['expressions'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return JiraExpressionForAnalysis;
}();
/**
 * The list of Jira expressions to analyse.
 * @member {Array.<String>} expressions
 */


JiraExpressionForAnalysis.prototype['expressions'] = undefined;
var _default = JiraExpressionForAnalysis;
exports["default"] = _default;