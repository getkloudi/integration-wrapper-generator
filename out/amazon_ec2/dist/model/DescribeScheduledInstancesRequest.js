"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Filter = _interopRequireDefault(require("./Filter"));

var _SlotStartTimeRangeRequest = _interopRequireDefault(require("./SlotStartTimeRangeRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DescribeScheduledInstancesRequest model module.
 * @module model/DescribeScheduledInstancesRequest
 * @version 1.1.0
 */
var DescribeScheduledInstancesRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeScheduledInstancesRequest</code>.
   * Contains the parameters for DescribeScheduledInstances.
   * @alias module:model/DescribeScheduledInstancesRequest
   */
  function DescribeScheduledInstancesRequest() {
    _classCallCheck(this, DescribeScheduledInstancesRequest);

    DescribeScheduledInstancesRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeScheduledInstancesRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeScheduledInstancesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeScheduledInstancesRequest} obj Optional instance to populate.
     * @return {module:model/DescribeScheduledInstancesRequest} The populated <code>DescribeScheduledInstancesRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeScheduledInstancesRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('Filters')) {
          obj['Filters'] = _ApiClient["default"].convertToType(data['Filters'], [_Filter["default"]]);
        }

        if (data.hasOwnProperty('MaxResults')) {
          obj['MaxResults'] = _ApiClient["default"].convertToType(data['MaxResults'], 'Number');
        }

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }

        if (data.hasOwnProperty('ScheduledInstanceIds')) {
          obj['ScheduledInstanceIds'] = _ApiClient["default"].convertToType(data['ScheduledInstanceIds'], ['String']);
        }

        if (data.hasOwnProperty('SlotStartTimeRange')) {
          obj['SlotStartTimeRange'] = _SlotStartTimeRangeRequest["default"].constructFromObject(data['SlotStartTimeRange']);
        }
      }

      return obj;
    }
  }]);

  return DescribeScheduledInstancesRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DescribeScheduledInstancesRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<module:model/Filter>} Filters
 */

DescribeScheduledInstancesRequest.prototype['Filters'] = undefined;
/**
 * @member {Number} MaxResults
 */

DescribeScheduledInstancesRequest.prototype['MaxResults'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeScheduledInstancesRequest.prototype['NextToken'] = undefined;
/**
 * @member {Array.<String>} ScheduledInstanceIds
 */

DescribeScheduledInstancesRequest.prototype['ScheduledInstanceIds'] = undefined;
/**
 * @member {module:model/SlotStartTimeRangeRequest} SlotStartTimeRange
 */

DescribeScheduledInstancesRequest.prototype['SlotStartTimeRange'] = undefined;
var _default = DescribeScheduledInstancesRequest;
exports["default"] = _default;