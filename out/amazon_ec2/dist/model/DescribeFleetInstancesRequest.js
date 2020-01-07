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
 * The DescribeFleetInstancesRequest model module.
 * @module model/DescribeFleetInstancesRequest
 * @version 1.1.0
 */
var DescribeFleetInstancesRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeFleetInstancesRequest</code>.
   * @alias module:model/DescribeFleetInstancesRequest
   * @param fleetId {String} 
   */
  function DescribeFleetInstancesRequest(fleetId) {
    _classCallCheck(this, DescribeFleetInstancesRequest);

    DescribeFleetInstancesRequest.initialize(this, fleetId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeFleetInstancesRequest, null, [{
    key: "initialize",
    value: function initialize(obj, fleetId) {
      obj['FleetId'] = fleetId;
    }
    /**
     * Constructs a <code>DescribeFleetInstancesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeFleetInstancesRequest} obj Optional instance to populate.
     * @return {module:model/DescribeFleetInstancesRequest} The populated <code>DescribeFleetInstancesRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeFleetInstancesRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('Filters')) {
          obj['Filters'] = _ApiClient["default"].convertToType(data['Filters'], [_Filter["default"]]);
        }

        if (data.hasOwnProperty('FleetId')) {
          obj['FleetId'] = _ApiClient["default"].convertToType(data['FleetId'], 'String');
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

  return DescribeFleetInstancesRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DescribeFleetInstancesRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<module:model/Filter>} Filters
 */

DescribeFleetInstancesRequest.prototype['Filters'] = undefined;
/**
 * @member {String} FleetId
 */

DescribeFleetInstancesRequest.prototype['FleetId'] = undefined;
/**
 * @member {Number} MaxResults
 */

DescribeFleetInstancesRequest.prototype['MaxResults'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeFleetInstancesRequest.prototype['NextToken'] = undefined;
var _default = DescribeFleetInstancesRequest;
exports["default"] = _default;