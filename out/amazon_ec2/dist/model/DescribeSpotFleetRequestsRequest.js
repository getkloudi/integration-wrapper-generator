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
 * The DescribeSpotFleetRequestsRequest model module.
 * @module model/DescribeSpotFleetRequestsRequest
 * @version 1.1.0
 */
var DescribeSpotFleetRequestsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeSpotFleetRequestsRequest</code>.
   * Contains the parameters for DescribeSpotFleetRequests.
   * @alias module:model/DescribeSpotFleetRequestsRequest
   */
  function DescribeSpotFleetRequestsRequest() {
    _classCallCheck(this, DescribeSpotFleetRequestsRequest);

    DescribeSpotFleetRequestsRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeSpotFleetRequestsRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeSpotFleetRequestsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeSpotFleetRequestsRequest} obj Optional instance to populate.
     * @return {module:model/DescribeSpotFleetRequestsRequest} The populated <code>DescribeSpotFleetRequestsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeSpotFleetRequestsRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('MaxResults')) {
          obj['MaxResults'] = _ApiClient["default"].convertToType(data['MaxResults'], 'Number');
        }

        if (data.hasOwnProperty('NextToken')) {
          obj['NextToken'] = _ApiClient["default"].convertToType(data['NextToken'], 'String');
        }

        if (data.hasOwnProperty('SpotFleetRequestIds')) {
          obj['SpotFleetRequestIds'] = _ApiClient["default"].convertToType(data['SpotFleetRequestIds'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return DescribeSpotFleetRequestsRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DescribeSpotFleetRequestsRequest.prototype['DryRun'] = undefined;
/**
 * @member {Number} MaxResults
 */

DescribeSpotFleetRequestsRequest.prototype['MaxResults'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeSpotFleetRequestsRequest.prototype['NextToken'] = undefined;
/**
 * @member {Array.<String>} SpotFleetRequestIds
 */

DescribeSpotFleetRequestsRequest.prototype['SpotFleetRequestIds'] = undefined;
var _default = DescribeSpotFleetRequestsRequest;
exports["default"] = _default;