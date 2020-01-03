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
 * The DescribeLocalGatewayRouteTableVpcAssociationsRequest model module.
 * @module model/DescribeLocalGatewayRouteTableVpcAssociationsRequest
 * @version 1.0.0
 */
var DescribeLocalGatewayRouteTableVpcAssociationsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DescribeLocalGatewayRouteTableVpcAssociationsRequest</code>.
   * @alias module:model/DescribeLocalGatewayRouteTableVpcAssociationsRequest
   */
  function DescribeLocalGatewayRouteTableVpcAssociationsRequest() {
    _classCallCheck(this, DescribeLocalGatewayRouteTableVpcAssociationsRequest);

    DescribeLocalGatewayRouteTableVpcAssociationsRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DescribeLocalGatewayRouteTableVpcAssociationsRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DescribeLocalGatewayRouteTableVpcAssociationsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DescribeLocalGatewayRouteTableVpcAssociationsRequest} obj Optional instance to populate.
     * @return {module:model/DescribeLocalGatewayRouteTableVpcAssociationsRequest} The populated <code>DescribeLocalGatewayRouteTableVpcAssociationsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DescribeLocalGatewayRouteTableVpcAssociationsRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('Filters')) {
          obj['Filters'] = _ApiClient["default"].convertToType(data['Filters'], [_Filter["default"]]);
        }

        if (data.hasOwnProperty('LocalGatewayRouteTableVpcAssociationIds')) {
          obj['LocalGatewayRouteTableVpcAssociationIds'] = _ApiClient["default"].convertToType(data['LocalGatewayRouteTableVpcAssociationIds'], ['String']);
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

  return DescribeLocalGatewayRouteTableVpcAssociationsRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DescribeLocalGatewayRouteTableVpcAssociationsRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<module:model/Filter>} Filters
 */

DescribeLocalGatewayRouteTableVpcAssociationsRequest.prototype['Filters'] = undefined;
/**
 * @member {Array.<String>} LocalGatewayRouteTableVpcAssociationIds
 */

DescribeLocalGatewayRouteTableVpcAssociationsRequest.prototype['LocalGatewayRouteTableVpcAssociationIds'] = undefined;
/**
 * @member {Number} MaxResults
 */

DescribeLocalGatewayRouteTableVpcAssociationsRequest.prototype['MaxResults'] = undefined;
/**
 * @member {String} NextToken
 */

DescribeLocalGatewayRouteTableVpcAssociationsRequest.prototype['NextToken'] = undefined;
var _default = DescribeLocalGatewayRouteTableVpcAssociationsRequest;
exports["default"] = _default;