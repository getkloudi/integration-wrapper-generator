"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InstanceIpv6AddressRequest = _interopRequireDefault(require("./InstanceIpv6AddressRequest"));

var _PrivateIpAddressSpecification = _interopRequireDefault(require("./PrivateIpAddressSpecification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The LaunchTemplateInstanceNetworkInterfaceSpecificationRequest model module.
 * @module model/LaunchTemplateInstanceNetworkInterfaceSpecificationRequest
 * @version 1.0.0
 */
var LaunchTemplateInstanceNetworkInterfaceSpecificationRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>LaunchTemplateInstanceNetworkInterfaceSpecificationRequest</code>.
   * The parameters for a network interface.
   * @alias module:model/LaunchTemplateInstanceNetworkInterfaceSpecificationRequest
   */
  function LaunchTemplateInstanceNetworkInterfaceSpecificationRequest() {
    _classCallCheck(this, LaunchTemplateInstanceNetworkInterfaceSpecificationRequest);

    LaunchTemplateInstanceNetworkInterfaceSpecificationRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(LaunchTemplateInstanceNetworkInterfaceSpecificationRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>LaunchTemplateInstanceNetworkInterfaceSpecificationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LaunchTemplateInstanceNetworkInterfaceSpecificationRequest} obj Optional instance to populate.
     * @return {module:model/LaunchTemplateInstanceNetworkInterfaceSpecificationRequest} The populated <code>LaunchTemplateInstanceNetworkInterfaceSpecificationRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new LaunchTemplateInstanceNetworkInterfaceSpecificationRequest();

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
          obj['Ipv6Addresses'] = _ApiClient["default"].convertToType(data['Ipv6Addresses'], [_InstanceIpv6AddressRequest["default"]]);
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

  return LaunchTemplateInstanceNetworkInterfaceSpecificationRequest;
}();
/**
 * @member {Boolean} AssociatePublicIpAddress
 */


LaunchTemplateInstanceNetworkInterfaceSpecificationRequest.prototype['AssociatePublicIpAddress'] = undefined;
/**
 * @member {Boolean} DeleteOnTermination
 */

LaunchTemplateInstanceNetworkInterfaceSpecificationRequest.prototype['DeleteOnTermination'] = undefined;
/**
 * @member {String} Description
 */

LaunchTemplateInstanceNetworkInterfaceSpecificationRequest.prototype['Description'] = undefined;
/**
 * @member {Number} DeviceIndex
 */

LaunchTemplateInstanceNetworkInterfaceSpecificationRequest.prototype['DeviceIndex'] = undefined;
/**
 * @member {Array.<String>} Groups
 */

LaunchTemplateInstanceNetworkInterfaceSpecificationRequest.prototype['Groups'] = undefined;
/**
 * @member {String} InterfaceType
 */

LaunchTemplateInstanceNetworkInterfaceSpecificationRequest.prototype['InterfaceType'] = undefined;
/**
 * @member {Number} Ipv6AddressCount
 */

LaunchTemplateInstanceNetworkInterfaceSpecificationRequest.prototype['Ipv6AddressCount'] = undefined;
/**
 * @member {Array.<module:model/InstanceIpv6AddressRequest>} Ipv6Addresses
 */

LaunchTemplateInstanceNetworkInterfaceSpecificationRequest.prototype['Ipv6Addresses'] = undefined;
/**
 * @member {String} NetworkInterfaceId
 */

LaunchTemplateInstanceNetworkInterfaceSpecificationRequest.prototype['NetworkInterfaceId'] = undefined;
/**
 * @member {String} PrivateIpAddress
 */

LaunchTemplateInstanceNetworkInterfaceSpecificationRequest.prototype['PrivateIpAddress'] = undefined;
/**
 * @member {Array.<module:model/PrivateIpAddressSpecification>} PrivateIpAddresses
 */

LaunchTemplateInstanceNetworkInterfaceSpecificationRequest.prototype['PrivateIpAddresses'] = undefined;
/**
 * @member {Number} SecondaryPrivateIpAddressCount
 */

LaunchTemplateInstanceNetworkInterfaceSpecificationRequest.prototype['SecondaryPrivateIpAddressCount'] = undefined;
/**
 * @member {String} SubnetId
 */

LaunchTemplateInstanceNetworkInterfaceSpecificationRequest.prototype['SubnetId'] = undefined;
var _default = LaunchTemplateInstanceNetworkInterfaceSpecificationRequest;
exports["default"] = _default;