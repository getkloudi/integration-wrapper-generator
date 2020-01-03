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
 * The CreateRouteRequest model module.
 * @module model/CreateRouteRequest
 * @version 1.0.0
 */
var CreateRouteRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateRouteRequest</code>.
   * @alias module:model/CreateRouteRequest
   * @param routeTableId {String} 
   */
  function CreateRouteRequest(routeTableId) {
    _classCallCheck(this, CreateRouteRequest);

    CreateRouteRequest.initialize(this, routeTableId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateRouteRequest, null, [{
    key: "initialize",
    value: function initialize(obj, routeTableId) {
      obj['RouteTableId'] = routeTableId;
    }
    /**
     * Constructs a <code>CreateRouteRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateRouteRequest} obj Optional instance to populate.
     * @return {module:model/CreateRouteRequest} The populated <code>CreateRouteRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateRouteRequest();

        if (data.hasOwnProperty('DestinationCidrBlock')) {
          obj['DestinationCidrBlock'] = _ApiClient["default"].convertToType(data['DestinationCidrBlock'], 'String');
        }

        if (data.hasOwnProperty('DestinationIpv6CidrBlock')) {
          obj['DestinationIpv6CidrBlock'] = _ApiClient["default"].convertToType(data['DestinationIpv6CidrBlock'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('EgressOnlyInternetGatewayId')) {
          obj['EgressOnlyInternetGatewayId'] = _ApiClient["default"].convertToType(data['EgressOnlyInternetGatewayId'], 'String');
        }

        if (data.hasOwnProperty('GatewayId')) {
          obj['GatewayId'] = _ApiClient["default"].convertToType(data['GatewayId'], 'String');
        }

        if (data.hasOwnProperty('InstanceId')) {
          obj['InstanceId'] = _ApiClient["default"].convertToType(data['InstanceId'], 'String');
        }

        if (data.hasOwnProperty('LocalGatewayId')) {
          obj['LocalGatewayId'] = _ApiClient["default"].convertToType(data['LocalGatewayId'], 'String');
        }

        if (data.hasOwnProperty('NatGatewayId')) {
          obj['NatGatewayId'] = _ApiClient["default"].convertToType(data['NatGatewayId'], 'String');
        }

        if (data.hasOwnProperty('NetworkInterfaceId')) {
          obj['NetworkInterfaceId'] = _ApiClient["default"].convertToType(data['NetworkInterfaceId'], 'String');
        }

        if (data.hasOwnProperty('RouteTableId')) {
          obj['RouteTableId'] = _ApiClient["default"].convertToType(data['RouteTableId'], 'String');
        }

        if (data.hasOwnProperty('TransitGatewayId')) {
          obj['TransitGatewayId'] = _ApiClient["default"].convertToType(data['TransitGatewayId'], 'String');
        }

        if (data.hasOwnProperty('VpcPeeringConnectionId')) {
          obj['VpcPeeringConnectionId'] = _ApiClient["default"].convertToType(data['VpcPeeringConnectionId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CreateRouteRequest;
}();
/**
 * @member {String} DestinationCidrBlock
 */


CreateRouteRequest.prototype['DestinationCidrBlock'] = undefined;
/**
 * @member {String} DestinationIpv6CidrBlock
 */

CreateRouteRequest.prototype['DestinationIpv6CidrBlock'] = undefined;
/**
 * @member {Boolean} DryRun
 */

CreateRouteRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} EgressOnlyInternetGatewayId
 */

CreateRouteRequest.prototype['EgressOnlyInternetGatewayId'] = undefined;
/**
 * @member {String} GatewayId
 */

CreateRouteRequest.prototype['GatewayId'] = undefined;
/**
 * @member {String} InstanceId
 */

CreateRouteRequest.prototype['InstanceId'] = undefined;
/**
 * @member {String} LocalGatewayId
 */

CreateRouteRequest.prototype['LocalGatewayId'] = undefined;
/**
 * @member {String} NatGatewayId
 */

CreateRouteRequest.prototype['NatGatewayId'] = undefined;
/**
 * @member {String} NetworkInterfaceId
 */

CreateRouteRequest.prototype['NetworkInterfaceId'] = undefined;
/**
 * @member {String} RouteTableId
 */

CreateRouteRequest.prototype['RouteTableId'] = undefined;
/**
 * @member {String} TransitGatewayId
 */

CreateRouteRequest.prototype['TransitGatewayId'] = undefined;
/**
 * @member {String} VpcPeeringConnectionId
 */

CreateRouteRequest.prototype['VpcPeeringConnectionId'] = undefined;
var _default = CreateRouteRequest;
exports["default"] = _default;