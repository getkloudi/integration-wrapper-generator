"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Filter = _interopRequireDefault(require("./Filter"));

var _InstanceType = _interopRequireDefault(require("./InstanceType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeSpotPriceHistoryRequest model module.
 * @module model/DescribeSpotPriceHistoryRequest
 * @version 1.1.0
 */
var DescribeSpotPriceHistoryRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeSpotPriceHistoryRequest</code>.
   * Contains the parameters for DescribeSpotPriceHistory.
   * @alias module:model/DescribeSpotPriceHistoryRequest
   */
  function DescribeSpotPriceHistoryRequest() {
    _classCallCheck(this, DescribeSpotPriceHistoryRequest);

    DescribeSpotPriceHistoryRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeSpotPriceHistoryRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeSpotPriceHistoryRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeSpotPriceHistoryRequest} obj Optional instance to populate.
     * @return {module:model/DescribeSpotPriceHistoryRequest} The populated <code>DescribeSpotPriceHistoryRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeSpotPriceHistoryRequest();

        if (data.hasOwnProperty('AvailabilityZone')) {
          obj['AvailabilityZone'] = _ApiClient["default"].convertToType(data['AvailabilityZone'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('EndTime')) {
          obj['EndTime'] = _ApiClient["default"].convertToType(data['EndTime'], 'Date');
        }

        if (data.hasOwnProperty('Filters')) {
          obj['Filters'] = _ApiClient["default"].convertToType(data['Filters'], [_Filter["default"]]);
        }

        if (data.hasOwnProperty('InstanceTypes')) {
          obj['InstanceTypes'] = _ApiClient["default"].convertToType(data['InstanceTypes'], [_InstanceType["default"]]);
        }

        if (data.hasOwnProperty('MaxResults')) {
          obj['MaxResults'] = _ApiClient["default"].convertToType(data['MaxResults'], 'Number');
        }

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }

        if (data.hasOwnProperty('ProductDescriptions')) {
          obj['ProductDescriptions'] = _ApiClient["default"].convertToType(data['ProductDescriptions'], ['String']);
        }

        if (data.hasOwnProperty('StartTime')) {
          obj['StartTime'] = _ApiClient["default"].convertToType(data['StartTime'], 'Date');
        }
      }

      return obj;
    }
  }]);

  return DescribeSpotPriceHistoryRequest;
}();
/**
 * @member {String} AvailabilityZone
 */


DescribeSpotPriceHistoryRequest.prototype['AvailabilityZone'] = undefined;
/**
 * @member {Boolean} DryRun
 */

DescribeSpotPriceHistoryRequest.prototype['DryRun'] = undefined;
/**
 * @member {Date} EndTime
 */

DescribeSpotPriceHistoryRequest.prototype['EndTime'] = undefined;
/**
 * @member {Array.<module:model/Filter>} Filters
 */

DescribeSpotPriceHistoryRequest.prototype['Filters'] = undefined;
/**
 * @member {Array.<module:model/InstanceType>} InstanceTypes
 */

DescribeSpotPriceHistoryRequest.prototype['InstanceTypes'] = undefined;
/**
 * @member {Number} MaxResults
 */

DescribeSpotPriceHistoryRequest.prototype['MaxResults'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeSpotPriceHistoryRequest.prototype['NextToken'] = undefined;
/**
 * @member {Array.<String>} ProductDescriptions
 */

DescribeSpotPriceHistoryRequest.prototype['ProductDescriptions'] = undefined;
/**
 * @member {Date} StartTime
 */

DescribeSpotPriceHistoryRequest.prototype['StartTime'] = undefined;
var _default = DescribeSpotPriceHistoryRequest;
exports["default"] = _default;