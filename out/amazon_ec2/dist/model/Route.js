"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RouteOrigin = _interopRequireDefault(require("./RouteOrigin"));

var _RouteState = _interopRequireDefault(require("./RouteState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Route model module.
 * @module model/Route
 * @version 1.0.0
 */
var Route =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Route</code>.
   * Describes a route in a route table.
   * @alias module:model/Route
   */
  function Route() {
    _classCallCheck(this, Route);

    Route.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Route, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Route</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Route} obj Optional instance to populate.
     * @return {module:model/Route} The populated <code>Route</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Route();

        if (data.hasOwnProperty('DestinationCidrBlock')) {
          obj['DestinationCidrBlock'] = _ApiClient["default"].convertToType(data['DestinationCidrBlock'], 'String');
        }

        if (data.hasOwnProperty('DestinationIpv6CidrBlock')) {
          obj['DestinationIpv6CidrBlock'] = _ApiClient["default"].convertToType(data['DestinationIpv6CidrBlock'], 'String');
        }

        if (data.hasOwnProperty('DestinationPrefixListId')) {
          obj['DestinationPrefixListId'] = _ApiClient["default"].convertToType(data['DestinationPrefixListId'], 'String');
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

        if (data.hasOwnProperty('InstanceOwnerId')) {
          obj['InstanceOwnerId'] = _ApiClient["default"].convertToType(data['InstanceOwnerId'], 'String');
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

        if (data.hasOwnProperty('Origin')) {
          obj['Origin'] = _RouteOrigin["default"].constructFromObject(data['Origin']);
        }

        if (data.hasOwnProperty('State')) {
          obj['State'] = _RouteState["default"].constructFromObject(data['State']);
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

  return Route;
}();
/**
 * @member {String} DestinationCidrBlock
 */


Route.prototype['DestinationCidrBlock'] = undefined;
/**
 * @member {String} DestinationIpv6CidrBlock
 */

Route.prototype['DestinationIpv6CidrBlock'] = undefined;
/**
 * @member {String} DestinationPrefixListId
 */

Route.prototype['DestinationPrefixListId'] = undefined;
/**
 * @member {String} EgressOnlyInternetGatewayId
 */

Route.prototype['EgressOnlyInternetGatewayId'] = undefined;
/**
 * @member {String} GatewayId
 */

Route.prototype['GatewayId'] = undefined;
/**
 * @member {String} InstanceId
 */

Route.prototype['InstanceId'] = undefined;
/**
 * @member {String} InstanceOwnerId
 */

Route.prototype['InstanceOwnerId'] = undefined;
/**
 * @member {String} LocalGatewayId
 */

Route.prototype['LocalGatewayId'] = undefined;
/**
 * @member {String} NatGatewayId
 */

Route.prototype['NatGatewayId'] = undefined;
/**
 * @member {String} NetworkInterfaceId
 */

Route.prototype['NetworkInterfaceId'] = undefined;
/**
 * @member {module:model/RouteOrigin} Origin
 */

Route.prototype['Origin'] = undefined;
/**
 * @member {module:model/RouteState} State
 */

Route.prototype['State'] = undefined;
/**
 * @member {String} TransitGatewayId
 */

Route.prototype['TransitGatewayId'] = undefined;
/**
 * @member {String} VpcPeeringConnectionId
 */

Route.prototype['VpcPeeringConnectionId'] = undefined;
var _default = Route;
exports["default"] = _default;