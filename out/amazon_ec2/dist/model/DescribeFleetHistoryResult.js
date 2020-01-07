"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _HistoryRecordEntry = _interopRequireDefault(require("./HistoryRecordEntry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeFleetHistoryResult model module.
 * @module model/DescribeFleetHistoryResult
 * @version 1.1.0
 */
var DescribeFleetHistoryResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeFleetHistoryResult</code>.
   * @alias module:model/DescribeFleetHistoryResult
   */
  function DescribeFleetHistoryResult() {
    _classCallCheck(this, DescribeFleetHistoryResult);

    DescribeFleetHistoryResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeFleetHistoryResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeFleetHistoryResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeFleetHistoryResult} obj Optional instance to populate.
     * @return {module:model/DescribeFleetHistoryResult} The populated <code>DescribeFleetHistoryResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeFleetHistoryResult();

        if (data.hasOwnProperty('FleetId')) {
          obj['FleetId'] = _ApiClient["default"].convertToType(data['FleetId'], 'String');
        }

        if (data.hasOwnProperty('HistoryRecords')) {
          obj['HistoryRecords'] = _ApiClient["default"].convertToType(data['HistoryRecords'], [_HistoryRecordEntry["default"]]);
        }

        if (data.hasOwnProperty('LastEvaluatedTime')) {
          obj['LastEvaluatedTime'] = _ApiClient["default"].convertToType(data['LastEvaluatedTime'], 'Date');
        }

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }

        if (data.hasOwnProperty('StartTime')) {
          obj['StartTime'] = _ApiClient["default"].convertToType(data['StartTime'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return DescribeFleetHistoryResult;
}();
/**
 * @member {String} FleetId
 */


DescribeFleetHistoryResult.prototype['FleetId'] = undefined;
/**
 * @member {Array.<module:model/HistoryRecordEntry>} HistoryRecords
 */

DescribeFleetHistoryResult.prototype['HistoryRecords'] = undefined;
/**
 * @member {Date} LastEvaluatedTime
 */

DescribeFleetHistoryResult.prototype['LastEvaluatedTime'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeFleetHistoryResult.prototype['NextToken'] = undefined;
/**
 * @member {Date} StartTime
 */

DescribeFleetHistoryResult.prototype['StartTime'] = undefined;
var _default = DescribeFleetHistoryResult;
exports["default"] = _default;