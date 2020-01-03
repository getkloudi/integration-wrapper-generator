"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Filter = _interopRequireDefault(require("./Filter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeFlowLogsRequest model module.
 * @module model/DescribeFlowLogsRequest
 * @version 1.0.0
 */
var DescribeFlowLogsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeFlowLogsRequest</code>.
   * @alias module:model/DescribeFlowLogsRequest
   */
  function DescribeFlowLogsRequest() {
    _classCallCheck(this, DescribeFlowLogsRequest);

    DescribeFlowLogsRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeFlowLogsRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeFlowLogsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeFlowLogsRequest} obj Optional instance to populate.
     * @return {module:model/DescribeFlowLogsRequest} The populated <code>DescribeFlowLogsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeFlowLogsRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('Filter')) {
          obj['Filter'] = _ApiClient["default"].convertToType(data['Filter'], [_Filter["default"]]);
        }

        if (data.hasOwnProperty('FlowLogIds')) {
          obj['FlowLogIds'] = _ApiClient["default"].convertToType(data['FlowLogIds'], ['String']);
        }

        if (data.hasOwnProperty('MaxResults')) {
          obj['MaxResults'] = _ApiClient["default"].convertToType(data['MaxResults'], 'Number');
        }

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DescribeFlowLogsRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DescribeFlowLogsRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<module:model/Filter>} Filter
 */

DescribeFlowLogsRequest.prototype['Filter'] = undefined;
/**
 * @member {Array.<String>} FlowLogIds
 */

DescribeFlowLogsRequest.prototype['FlowLogIds'] = undefined;
/**
 * @member {Number} MaxResults
 */

DescribeFlowLogsRequest.prototype['MaxResults'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeFlowLogsRequest.prototype['NextToken'] = undefined;
var _default = DescribeFlowLogsRequest;
exports["default"] = _default;