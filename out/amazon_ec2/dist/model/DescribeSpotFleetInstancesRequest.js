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
 * The DescribeSpotFleetInstancesRequest model module.
 * @module model/DescribeSpotFleetInstancesRequest
 * @version 1.1.0
 */
var DescribeSpotFleetInstancesRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeSpotFleetInstancesRequest</code>.
   * Contains the parameters for DescribeSpotFleetInstances.
   * @alias module:model/DescribeSpotFleetInstancesRequest
   * @param spotFleetRequestId {String} 
   */
  function DescribeSpotFleetInstancesRequest(spotFleetRequestId) {
    _classCallCheck(this, DescribeSpotFleetInstancesRequest);

    DescribeSpotFleetInstancesRequest.initialize(this, spotFleetRequestId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeSpotFleetInstancesRequest, null, [{
    key: "initialize",
    value: function initialize(obj, spotFleetRequestId) {
      obj['SpotFleetRequestId'] = spotFleetRequestId;
    }
    /**
     * Constructs a <code>DescribeSpotFleetInstancesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeSpotFleetInstancesRequest} obj Optional instance to populate.
     * @return {module:model/DescribeSpotFleetInstancesRequest} The populated <code>DescribeSpotFleetInstancesRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeSpotFleetInstancesRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('MaxResults')) {
          obj['MaxResults'] = _ApiClient["default"].convertToType(data['MaxResults'], 'Number');
        }

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }

        if (data.hasOwnProperty('SpotFleetRequestId')) {
          obj['SpotFleetRequestId'] = _ApiClient["default"].convertToType(data['SpotFleetRequestId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DescribeSpotFleetInstancesRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DescribeSpotFleetInstancesRequest.prototype['DryRun'] = undefined;
/**
 * @member {Number} MaxResults
 */

DescribeSpotFleetInstancesRequest.prototype['MaxResults'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeSpotFleetInstancesRequest.prototype['NextToken'] = undefined;
/**
 * @member {String} SpotFleetRequestId
 */

DescribeSpotFleetInstancesRequest.prototype['SpotFleetRequestId'] = undefined;
var _default = DescribeSpotFleetInstancesRequest;
exports["default"] = _default;