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
 * The DescribeVpcEndpointServicesRequest model module.
 * @module model/DescribeVpcEndpointServicesRequest
 * @version 1.0.0
 */
var DescribeVpcEndpointServicesRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeVpcEndpointServicesRequest</code>.
   * Contains the parameters for DescribeVpcEndpointServices.
   * @alias module:model/DescribeVpcEndpointServicesRequest
   */
  function DescribeVpcEndpointServicesRequest() {
    _classCallCheck(this, DescribeVpcEndpointServicesRequest);

    DescribeVpcEndpointServicesRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeVpcEndpointServicesRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeVpcEndpointServicesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeVpcEndpointServicesRequest} obj Optional instance to populate.
     * @return {module:model/DescribeVpcEndpointServicesRequest} The populated <code>DescribeVpcEndpointServicesRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeVpcEndpointServicesRequest();

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

        if (data.hasOwnProperty('ServiceNames')) {
          obj['ServiceNames'] = _ApiClient["default"].convertToType(data['ServiceNames'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return DescribeVpcEndpointServicesRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DescribeVpcEndpointServicesRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<module:model/Filter>} Filters
 */

DescribeVpcEndpointServicesRequest.prototype['Filters'] = undefined;
/**
 * @member {Number} MaxResults
 */

DescribeVpcEndpointServicesRequest.prototype['MaxResults'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeVpcEndpointServicesRequest.prototype['NextToken'] = undefined;
/**
 * @member {Array.<String>} ServiceNames
 */

DescribeVpcEndpointServicesRequest.prototype['ServiceNames'] = undefined;
var _default = DescribeVpcEndpointServicesRequest;
exports["default"] = _default;