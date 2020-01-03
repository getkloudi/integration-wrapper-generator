"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ScheduledInstancesIpv6Address = _interopRequireDefault(require("./ScheduledInstancesIpv6Address"));

var _ScheduledInstancesPrivateIpAddressConfig = _interopRequireDefault(require("./ScheduledInstancesPrivateIpAddressConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ScheduledInstancesNetworkInterface model module.
 * @module model/ScheduledInstancesNetworkInterface
 * @version 1.0.0
 */
var ScheduledInstancesNetworkInterface =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ScheduledInstancesNetworkInterface</code>.
   * Describes a network interface for a Scheduled Instance.
   * @alias module:model/ScheduledInstancesNetworkInterface
   */
  function ScheduledInstancesNetworkInterface() {
    _classCallCheck(this, ScheduledInstancesNetworkInterface);

    ScheduledInstancesNetworkInterface.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ScheduledInstancesNetworkInterface, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ScheduledInstancesNetworkInterface</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ScheduledInstancesNetworkInterface} obj Optional instance to populate.
     * @return {module:model/ScheduledInstancesNetworkInterface} The populated <code>ScheduledInstancesNetworkInterface</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ScheduledInstancesNetworkInterface();

        if (data.hasOwnProperty('AssociatePublicIpAddress')) {
          obj['AssociatePublicIpAddress'] = _ApiClient["default"].convertToType(data['AssociatePublicIpAddress'], 'Boolean');
        }

        if (data.hasOwnProperty('DeleteOnTermination')) {
          obj['DeleteOnTermination'] = _ApiClient["default"].convertToType(data['DeleteOnTermination'], 'Boolean');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('DeviceIndex')) {
          obj['DeviceIndex'] = _ApiClient["default"].convertToType(data['DeviceIndex'], 'Number');
        }

        if (data.hasOwnProperty('Groups')) {
          obj['Groups'] = _ApiClient["default"].convertToType(data['Groups'], ['String']);
        }

        if (data.hasOwnProperty('Ipv6AddressCount')) {
          obj['Ipv6AddressCount'] = _ApiClient["default"].convertToType(data['Ipv6AddressCount'], 'Number');
        }

        if (data.hasOwnProperty('Ipv6Addresses')) {
          obj['Ipv6Addresses'] = _ApiClient["default"].convertToType(data['Ipv6Addresses'], [_ScheduledInstancesIpv6Address["default"]]);
        }

        if (data.hasOwnProperty('NetworkInterfaceId')) {
          obj['NetworkInterfaceId'] = _ApiClient["default"].convertToType(data['NetworkInterfaceId'], 'String');
        }

        if (data.hasOwnProperty('PrivateIpAddress')) {
          obj['PrivateIpAddress'] = _ApiClient["default"].convertToType(data['PrivateIpAddress'], 'String');
        }

        if (data.hasOwnProperty('PrivateIpAddressConfigs')) {
          obj['PrivateIpAddressConfigs'] = _ApiClient["default"].convertToType(data['PrivateIpAddressConfigs'], [_ScheduledInstancesPrivateIpAddressConfig["default"]]);
        }

        if (data.hasOwnProperty('SecondaryPrivateIpAddressCount')) {
          obj['SecondaryPrivateIpAddressCount'] = _ApiClient["default"].convertToType(data['SecondaryPrivateIpAddressCount'], 'Number');
        }

        if (data.hasOwnProperty('SubnetId')) {
          obj['SubnetId'] = _ApiClient["default"].convertToType(data['SubnetId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ScheduledInstancesNetworkInterface;
}();
/**
 * @member {Boolean} AssociatePublicIpAddress
 */


ScheduledInstancesNetworkInterface.prototype['AssociatePublicIpAddress'] = undefined;
/**
 * @member {Boolean} DeleteOnTermination
 */

ScheduledInstancesNetworkInterface.prototype['DeleteOnTermination'] = undefined;
/**
 * @member {String} Description
 */

ScheduledInstancesNetworkInterface.prototype['Description'] = undefined;
/**
 * @member {Number} DeviceIndex
 */

ScheduledInstancesNetworkInterface.prototype['DeviceIndex'] = undefined;
/**
 * @member {Array.<String>} Groups
 */

ScheduledInstancesNetworkInterface.prototype['Groups'] = undefined;
/**
 * @member {Number} Ipv6AddressCount
 */

ScheduledInstancesNetworkInterface.prototype['Ipv6AddressCount'] = undefined;
/**
 * @member {Array.<module:model/ScheduledInstancesIpv6Address>} Ipv6Addresses
 */

ScheduledInstancesNetworkInterface.prototype['Ipv6Addresses'] = undefined;
/**
 * @member {String} NetworkInterfaceId
 */

ScheduledInstancesNetworkInterface.prototype['NetworkInterfaceId'] = undefined;
/**
 * @member {String} PrivateIpAddress
 */

ScheduledInstancesNetworkInterface.prototype['PrivateIpAddress'] = undefined;
/**
 * @member {Array.<module:model/ScheduledInstancesPrivateIpAddressConfig>} PrivateIpAddressConfigs
 */

ScheduledInstancesNetworkInterface.prototype['PrivateIpAddressConfigs'] = undefined;
/**
 * @member {Number} SecondaryPrivateIpAddressCount
 */

ScheduledInstancesNetworkInterface.prototype['SecondaryPrivateIpAddressCount'] = undefined;
/**
 * @member {String} SubnetId
 */

ScheduledInstancesNetworkInterface.prototype['SubnetId'] = undefined;
var _default = ScheduledInstancesNetworkInterface;
exports["default"] = _default;