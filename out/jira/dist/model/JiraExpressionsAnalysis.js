"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _JiraExpressionAnalysis = _interopRequireDefault(require("./JiraExpressionAnalysis"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The JiraExpressionsAnalysis model module.
 * @module model/JiraExpressionsAnalysis
 * @version 1.4.0
 */
var JiraExpressionsAnalysis = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JiraExpressionsAnalysis</code>.
   * Details about the analysed Jira expression.
   * @alias module:model/JiraExpressionsAnalysis
   * @param results {Array.<module:model/JiraExpressionAnalysis>} The results of Jira expressions analysis.
   */
  function JiraExpressionsAnalysis(results) {
    _classCallCheck(this, JiraExpressionsAnalysis);

    JiraExpressionsAnalysis.initialize(this, results);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JiraExpressionsAnalysis, null, [{
    key: "initialize",
    value: function initialize(obj, results) {
      obj['results'] = results;
    }
    /**
     * Constructs a <code>JiraExpressionsAnalysis</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JiraExpressionsAnalysis} obj Optional instance to populate.
     * @return {module:model/JiraExpressionsAnalysis} The populated <code>JiraExpressionsAnalysis</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JiraExpressionsAnalysis();

        if (data.hasOwnProperty('results')) {
          obj['results'] = _ApiClient["default"].convertToType(data['results'], [_JiraExpressionAnalysis["default"]]);
        }
      }

      return obj;
    }
  }]);

  return JiraExpressionsAnalysis;
}();
/**
 * The results of Jira expressions analysis.
 * @member {Array.<module:model/JiraExpressionAnalysis>} results
 */


JiraExpressionsAnalysis.prototype['results'] = undefined;
var _default = JiraExpressionsAnalysis;
exports["default"] = _default;