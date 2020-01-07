"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ServiceState = _interopRequireDefault(require("./ServiceState"));

var _ServiceTypeDetail = _interopRequireDefault(require("./ServiceTypeDetail"));

var _Tag = _interopRequireDefault(require("./Tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ServiceConfiguration model module.
 * @module model/ServiceConfiguration
 * @version 1.1.0
 */
var ServiceConfiguration =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ServiceConfiguration</code>.
   * Describes a service configuration for a VPC endpoint service.
   * @alias module:model/ServiceConfiguration
   */
  function ServiceConfiguration() {
    _classCallCheck(this, ServiceConfiguration);

    ServiceConfiguration.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ServiceConfiguration, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ServiceConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceConfiguration} obj Optional instance to populate.
     * @return {module:model/ServiceConfiguration} The populated <code>ServiceConfiguration</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ServiceConfiguration();

        if (data.hasOwnProperty('AcceptanceRequired')) {
          obj['AcceptanceRequired'] = _ApiClient["default"].convertToType(data['AcceptanceRequired'], 'Boolean');
        }

        if (data.hasOwnProperty('AvailabilityZones')) {
          obj['AvailabilityZones'] = _ApiClient["default"].convertToType(data['AvailabilityZones'], ['String']);
        }

        if (data.hasOwnProperty('BaseEndpointDnsNames')) {
          obj['BaseEndpointDnsNames'] = _ApiClient["default"].convertToType(data['BaseEndpointDnsNames'], ['String']);
        }

        if (data.hasOwnProperty('ManagesVpcEndpoints')) {
          obj['ManagesVpcEndpoints'] = _ApiClient["default"].convertToType(data['ManagesVpcEndpoints'], 'Boolean');
        }

        if (data.hasOwnProperty('NetworkLoadBalancerArns')) {
          obj['NetworkLoadBalancerArns'] = _ApiClient["default"].convertToType(data['NetworkLoadBalancerArns'], ['String']);
        }

        if (data.hasOwnProperty('PrivateDnsName')) {
          obj['PrivateDnsName'] = _ApiClient["default"].convertToType(data['PrivateDnsName'], 'String');
        }

        if (data.hasOwnProperty('ServiceId')) {
          obj['ServiceId'] = _ApiClient["default"].convertToType(data['ServiceId'], 'String');
        }

        if (data.hasOwnProperty('ServiceName')) {
          obj['ServiceName'] = _ApiClient["default"].convertToType(data['ServiceName'], 'String');
        }

        if (data.hasOwnProperty('ServiceState')) {
          obj['ServiceState'] = _ServiceState["default"].constructFromObject(data['ServiceState']);
        }

        if (data.hasOwnProperty('ServiceType')) {
          obj['ServiceType'] = _ApiClient["default"].convertToType(data['ServiceType'], [_ServiceTypeDetail["default"]]);
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_Tag["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ServiceConfiguration;
}();
/**
 * @member {Boolean} AcceptanceRequired
 */


ServiceConfiguration.prototype['AcceptanceRequired'] = undefined;
/**
 * @member {Array.<String>} AvailabilityZones
 */

ServiceConfiguration.prototype['AvailabilityZones'] = undefined;
/**
 * @member {Array.<String>} BaseEndpointDnsNames
 */

ServiceConfiguration.prototype['BaseEndpointDnsNames'] = undefined;
/**
 * @member {Boolean} ManagesVpcEndpoints
 */

ServiceConfiguration.prototype['ManagesVpcEndpoints'] = undefined;
/**
 * @member {Array.<String>} NetworkLoadBalancerArns
 */

ServiceConfiguration.prototype['NetworkLoadBalancerArns'] = undefined;
/**
 * @member {String} PrivateDnsName
 */

ServiceConfiguration.prototype['PrivateDnsName'] = undefined;
/**
 * @member {String} ServiceId
 */

ServiceConfiguration.prototype['ServiceId'] = undefined;
/**
 * @member {String} ServiceName
 */

ServiceConfiguration.prototype['ServiceName'] = undefined;
/**
 * @member {module:model/ServiceState} ServiceState
 */

ServiceConfiguration.prototype['ServiceState'] = undefined;
/**
 * @member {Array.<module:model/ServiceTypeDetail>} ServiceType
 */

ServiceConfiguration.prototype['ServiceType'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

ServiceConfiguration.prototype['Tags'] = undefined;
var _default = ServiceConfiguration;
exports["default"] = _default;