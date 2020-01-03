"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InstanceIpv6Address = _interopRequireDefault(require("./InstanceIpv6Address"));

var _PrivateIpAddressSpecification = _interopRequireDefault(require("./PrivateIpAddressSpecification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LaunchTemplateInstanceNetworkInterfaceSpecification model module.
 * @module model/LaunchTemplateInstanceNetworkInterfaceSpecification
 * @version 1.0.0
 */
var LaunchTemplateInstanceNetworkInterfaceSpecification =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>LaunchTemplateInstanceNetworkInterfaceSpecification</code>.
   * Describes a network interface.
   * @alias module:model/LaunchTemplateInstanceNetworkInterfaceSpecification
   */
  function LaunchTemplateInstanceNetworkInterfaceSpecification() {
    _classCallCheck(this, LaunchTemplateInstanceNetworkInterfaceSpecification);

    LaunchTemplateInstanceNetworkInterfaceSpecification.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LaunchTemplateInstanceNetworkInterfaceSpecification, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LaunchTemplateInstanceNetworkInterfaceSpecification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LaunchTemplateInstanceNetworkInterfaceSpecification} obj Optional instance to populate.
     * @return {module:model/LaunchTemplateInstanceNetworkInterfaceSpecification} The populated <code>LaunchTemplateInstanceNetworkInterfaceSpecification</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LaunchTemplateInstanceNetworkInterfaceSpecification();

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

        if (data.hasOwnProperty('InterfaceType')) {
          obj['InterfaceType'] = _ApiClient["default"].convertToType(data['InterfaceType'], 'String');
        }

        if (data.hasOwnProperty('Ipv6AddressCount')) {
          obj['Ipv6AddressCount'] = _ApiClient["default"].convertToType(data['Ipv6AddressCount'], 'Number');
        }

        if (data.hasOwnProperty('Ipv6Addresses')) {
          obj['Ipv6Addresses'] = _ApiClient["default"].convertToType(data['Ipv6Addresses'], [_InstanceIpv6Address["default"]]);
        }

        if (data.hasOwnProperty('NetworkInterfaceId')) {
          obj['NetworkInterfaceId'] = _ApiClient["default"].convertToType(data['NetworkInterfaceId'], 'String');
        }

        if (data.hasOwnProperty('PrivateIpAddress')) {
          obj['PrivateIpAddress'] = _ApiClient["default"].convertToType(data['PrivateIpAddress'], 'String');
        }

        if (data.hasOwnProperty('PrivateIpAddresses')) {
          obj['PrivateIpAddresses'] = _ApiClient["default"].convertToType(data['PrivateIpAddresses'], [_PrivateIpAddressSpecification["default"]]);
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

  return LaunchTemplateInstanceNetworkInterfaceSpecification;
}();
/**
 * @member {Boolean} AssociatePublicIpAddress
 */


LaunchTemplateInstanceNetworkInterfaceSpecification.prototype['AssociatePublicIpAddress'] = undefined;
/**
 * @member {Boolean} DeleteOnTermination
 */

LaunchTemplateInstanceNetworkInterfaceSpecification.prototype['DeleteOnTermination'] = undefined;
/**
 * @member {String} Description
 */

LaunchTemplateInstanceNetworkInterfaceSpecification.prototype['Description'] = undefined;
/**
 * @member {Number} DeviceIndex
 */

LaunchTemplateInstanceNetworkInterfaceSpecification.prototype['DeviceIndex'] = undefined;
/**
 * @member {Array.<String>} Groups
 */

LaunchTemplateInstanceNetworkInterfaceSpecification.prototype['Groups'] = undefined;
/**
 * @member {String} InterfaceType
 */

LaunchTemplateInstanceNetworkInterfaceSpecification.prototype['InterfaceType'] = undefined;
/**
 * @member {Number} Ipv6AddressCount
 */

LaunchTemplateInstanceNetworkInterfaceSpecification.prototype['Ipv6AddressCount'] = undefined;
/**
 * @member {Array.<module:model/InstanceIpv6Address>} Ipv6Addresses
 */

LaunchTemplateInstanceNetworkInterfaceSpecification.prototype['Ipv6Addresses'] = undefined;
/**
 * @member {String} NetworkInterfaceId
 */

LaunchTemplateInstanceNetworkInterfaceSpecification.prototype['NetworkInterfaceId'] = undefined;
/**
 * @member {String} PrivateIpAddress
 */

LaunchTemplateInstanceNetworkInterfaceSpecification.prototype['PrivateIpAddress'] = undefined;
/**
 * @member {Array.<module:model/PrivateIpAddressSpecification>} PrivateIpAddresses
 */

LaunchTemplateInstanceNetworkInterfaceSpecification.prototype['PrivateIpAddresses'] = undefined;
/**
 * @member {Number} SecondaryPrivateIpAddressCount
 */

LaunchTemplateInstanceNetworkInterfaceSpecification.prototype['SecondaryPrivateIpAddressCount'] = undefined;
/**
 * @member {String} SubnetId
 */

LaunchTemplateInstanceNetworkInterfaceSpecification.prototype['SubnetId'] = undefined;
var _default = LaunchTemplateInstanceNetworkInterfaceSpecification;
exports["default"] = _default;