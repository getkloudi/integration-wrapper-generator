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
 * The InstanceNetworkInterfaceSpecification model module.
 * @module model/InstanceNetworkInterfaceSpecification
 * @version 1.1.0
 */
var InstanceNetworkInterfaceSpecification =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>InstanceNetworkInterfaceSpecification</code>.
   * Describes a network interface.
   * @alias module:model/InstanceNetworkInterfaceSpecification
   */
  function InstanceNetworkInterfaceSpecification() {
    _classCallCheck(this, InstanceNetworkInterfaceSpecification);

    InstanceNetworkInterfaceSpecification.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InstanceNetworkInterfaceSpecification, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InstanceNetworkInterfaceSpecification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstanceNetworkInterfaceSpecification} obj Optional instance to populate.
     * @return {module:model/InstanceNetworkInterfaceSpecification} The populated <code>InstanceNetworkInterfaceSpecification</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstanceNetworkInterfaceSpecification();

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

  return InstanceNetworkInterfaceSpecification;
}();
/**
 * @member {Boolean} AssociatePublicIpAddress
 */


InstanceNetworkInterfaceSpecification.prototype['AssociatePublicIpAddress'] = undefined;
/**
 * @member {Boolean} DeleteOnTermination
 */

InstanceNetworkInterfaceSpecification.prototype['DeleteOnTermination'] = undefined;
/**
 * @member {String} Description
 */

InstanceNetworkInterfaceSpecification.prototype['Description'] = undefined;
/**
 * @member {Number} DeviceIndex
 */

InstanceNetworkInterfaceSpecification.prototype['DeviceIndex'] = undefined;
/**
 * @member {Array.<String>} Groups
 */

InstanceNetworkInterfaceSpecification.prototype['Groups'] = undefined;
/**
 * @member {String} InterfaceType
 */

InstanceNetworkInterfaceSpecification.prototype['InterfaceType'] = undefined;
/**
 * @member {Number} Ipv6AddressCount
 */

InstanceNetworkInterfaceSpecification.prototype['Ipv6AddressCount'] = undefined;
/**
 * @member {Array.<module:model/InstanceIpv6Address>} Ipv6Addresses
 */

InstanceNetworkInterfaceSpecification.prototype['Ipv6Addresses'] = undefined;
/**
 * @member {String} NetworkInterfaceId
 */

InstanceNetworkInterfaceSpecification.prototype['NetworkInterfaceId'] = undefined;
/**
 * @member {String} PrivateIpAddress
 */

InstanceNetworkInterfaceSpecification.prototype['PrivateIpAddress'] = undefined;
/**
 * @member {Array.<module:model/PrivateIpAddressSpecification>} PrivateIpAddresses
 */

InstanceNetworkInterfaceSpecification.prototype['PrivateIpAddresses'] = undefined;
/**
 * @member {Number} SecondaryPrivateIpAddressCount
 */

InstanceNetworkInterfaceSpecification.prototype['SecondaryPrivateIpAddressCount'] = undefined;
/**
 * @member {String} SubnetId
 */

InstanceNetworkInterfaceSpecification.prototype['SubnetId'] = undefined;
var _default = InstanceNetworkInterfaceSpecification;
exports["default"] = _default;