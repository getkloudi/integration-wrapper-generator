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
 * The DescribeVpcEndpointsRequest model module.
 * @module model/DescribeVpcEndpointsRequest
 * @version 1.1.0
 */
var DescribeVpcEndpointsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeVpcEndpointsRequest</code>.
   * Contains the parameters for DescribeVpcEndpoints.
   * @alias module:model/DescribeVpcEndpointsRequest
   */
  function DescribeVpcEndpointsRequest() {
    _classCallCheck(this, DescribeVpcEndpointsRequest);

    DescribeVpcEndpointsRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeVpcEndpointsRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeVpcEndpointsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeVpcEndpointsRequest} obj Optional instance to populate.
     * @return {module:model/DescribeVpcEndpointsRequest} The populated <code>DescribeVpcEndpointsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeVpcEndpointsRequest();

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

        if (data.hasOwnProperty('VpcEndpointIds')) {
          obj['VpcEndpointIds'] = _ApiClient["default"].convertToType(data['VpcEndpointIds'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return DescribeVpcEndpointsRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DescribeVpcEndpointsRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<module:model/Filter>} Filters
 */

DescribeVpcEndpointsRequest.prototype['Filters'] = undefined;
/**
 * @member {Number} MaxResults
 */

DescribeVpcEndpointsRequest.prototype['MaxResults'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeVpcEndpointsRequest.prototype['NextToken'] = undefined;
/**
 * @member {Array.<String>} VpcEndpointIds
 */

DescribeVpcEndpointsRequest.prototype['VpcEndpointIds'] = undefined;
var _default = DescribeVpcEndpointsRequest;
exports["default"] = _default;