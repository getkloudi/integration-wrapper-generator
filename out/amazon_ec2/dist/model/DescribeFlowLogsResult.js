"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FlowLog = _interopRequireDefault(require("./FlowLog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeFlowLogsResult model module.
 * @module model/DescribeFlowLogsResult
 * @version 1.0.0
 */
var DescribeFlowLogsResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeFlowLogsResult</code>.
   * @alias module:model/DescribeFlowLogsResult
   */
  function DescribeFlowLogsResult() {
    _classCallCheck(this, DescribeFlowLogsResult);

    DescribeFlowLogsResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeFlowLogsResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeFlowLogsResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeFlowLogsResult} obj Optional instance to populate.
     * @return {module:model/DescribeFlowLogsResult} The populated <code>DescribeFlowLogsResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeFlowLogsResult();

        if (data.hasOwnProperty('FlowLogs')) {
          obj['FlowLogs'] = _ApiClient["default"].convertToType(data['FlowLogs'], [_FlowLog["default"]]);
        }

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DescribeFlowLogsResult;
}();
/**
 * @member {Array.<module:model/FlowLog>} FlowLogs
 */


DescribeFlowLogsResult.prototype['FlowLogs'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeFlowLogsResult.prototype['NextToken'] = undefined;
var _default = DescribeFlowLogsResult;
exports["default"] = _default;