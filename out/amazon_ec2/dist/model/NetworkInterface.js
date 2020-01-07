"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GroupIdentifier = _interopRequireDefault(require("./GroupIdentifier"));

var _NetworkInterfaceAssociation = _interopRequireDefault(require("./NetworkInterfaceAssociation"));

var _NetworkInterfaceAttachment = _interopRequireDefault(require("./NetworkInterfaceAttachment"));

var _NetworkInterfaceIpv6Address = _interopRequireDefault(require("./NetworkInterfaceIpv6Address"));

var _NetworkInterfacePrivateIpAddress = _interopRequireDefault(require("./NetworkInterfacePrivateIpAddress"));

var _NetworkInterfaceStatus = _interopRequireDefault(require("./NetworkInterfaceStatus"));

var _NetworkInterfaceType = _interopRequireDefault(require("./NetworkInterfaceType"));

var _Tag = _interopRequireDefault(require("./Tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The NetworkInterface model module.
 * @module model/NetworkInterface
 * @version 1.1.0
 */
var NetworkInterface =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>NetworkInterface</code>.
   * Describes a network interface.
   * @alias module:model/NetworkInterface
   */
  function NetworkInterface() {
    _classCallCheck(this, NetworkInterface);

    NetworkInterface.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NetworkInterface, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NetworkInterface</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkInterface} obj Optional instance to populate.
     * @return {module:model/NetworkInterface} The populated <code>NetworkInterface</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NetworkInterface();

        if (data.hasOwnProperty('Association')) {
          obj['Association'] = _NetworkInterfaceAssociation["default"].constructFromObject(data['Association']);
        }

        if (data.hasOwnProperty('Attachment')) {
          obj['Attachment'] = _NetworkInterfaceAttachment["default"].constructFromObject(data['Attachment']);
        }

        if (data.hasOwnProperty('AvailabilityZone')) {
          obj['AvailabilityZone'] = _ApiClient["default"].convertToType(data['AvailabilityZone'], 'String');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('Groups')) {
          obj['Groups'] = _ApiClient["default"].convertToType(data['Groups'], [_GroupIdentifier["default"]]);
        }

        if (data.hasOwnProperty('InterfaceType')) {
          obj['InterfaceType'] = _NetworkInterfaceType["default"].constructFromObject(data['InterfaceType']);
        }

        if (data.hasOwnProperty('Ipv6Addresses')) {
          obj['Ipv6Addresses'] = _ApiClient["default"].convertToType(data['Ipv6Addresses'], [_NetworkInterfaceIpv6Address["default"]]);
        }

        if (data.hasOwnProperty('MacAddress')) {
          obj['MacAddress'] = _ApiClient["default"].convertToType(data['MacAddress'], 'String');
        }

        if (data.hasOwnProperty('NetworkInterfaceId')) {
          obj['NetworkInterfaceId'] = _ApiClient["default"].convertToType(data['NetworkInterfaceId'], 'String');
        }

        if (data.hasOwnProperty('OutpostArn')) {
          obj['OutpostArn'] = _ApiClient["default"].convertToType(data['OutpostArn'], 'String');
        }

        if (data.hasOwnProperty('OwnerId')) {
          obj['OwnerId'] = _ApiClient["default"].convertToType(data['OwnerId'], 'String');
        }

        if (data.hasOwnProperty('PrivateDnsName')) {
          obj['PrivateDnsName'] = _ApiClient["default"].convertToType(data['PrivateDnsName'], 'String');
        }

        if (data.hasOwnProperty('PrivateIpAddress')) {
          obj['PrivateIpAddress'] = _ApiClient["default"].convertToType(data['PrivateIpAddress'], 'String');
        }

        if (data.hasOwnProperty('PrivateIpAddresses')) {
          obj['PrivateIpAddresses'] = _ApiClient["default"].convertToType(data['PrivateIpAddresses'], [_NetworkInterfacePrivateIpAddress["default"]]);
        }

        if (data.hasOwnProperty('RequesterId')) {
          obj['RequesterId'] = _ApiClient["default"].convertToType(data['RequesterId'], 'String');
        }

        if (data.hasOwnProperty('RequesterManaged')) {
          obj['RequesterManaged'] = _ApiClient["default"].convertToType(data['RequesterManaged'], 'Boolean');
        }

        if (data.hasOwnProperty('SourceDestCheck')) {
          obj['SourceDestCheck'] = _ApiClient["default"].convertToType(data['SourceDestCheck'], 'Boolean');
        }

        if (data.hasOwnProperty('Status')) {
          obj['Status'] = _NetworkInterfaceStatus["default"].constructFromObject(data['Status']);
        }

        if (data.hasOwnProperty('SubnetId')) {
          obj['SubnetId'] = _ApiClient["default"].convertToType(data['SubnetId'], 'String');
        }

        if (data.hasOwnProperty('TagSet')) {
          obj['TagSet'] = _ApiClient["default"].convertToType(data['TagSet'], [_Tag["default"]]);
        }

        if (data.hasOwnProperty('VpcId')) {
          obj['VpcId'] = _ApiClient["default"].convertToType(data['VpcId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return NetworkInterface;
}();
/**
 * @member {module:model/NetworkInterfaceAssociation} Association
 */


NetworkInterface.prototype['Association'] = undefined;
/**
 * @member {module:model/NetworkInterfaceAttachment} Attachment
 */

NetworkInterface.prototype['Attachment'] = undefined;
/**
 * @member {String} AvailabilityZone
 */

NetworkInterface.prototype['AvailabilityZone'] = undefined;
/**
 * @member {String} Description
 */

NetworkInterface.prototype['Description'] = undefined;
/**
 * @member {Array.<module:model/GroupIdentifier>} Groups
 */

NetworkInterface.prototype['Groups'] = undefined;
/**
 * @member {module:model/NetworkInterfaceType} InterfaceType
 */

NetworkInterface.prototype['InterfaceType'] = undefined;
/**
 * @member {Array.<module:model/NetworkInterfaceIpv6Address>} Ipv6Addresses
 */

NetworkInterface.prototype['Ipv6Addresses'] = undefined;
/**
 * @member {String} MacAddress
 */

NetworkInterface.prototype['MacAddress'] = undefined;
/**
 * @member {String} NetworkInterfaceId
 */

NetworkInterface.prototype['NetworkInterfaceId'] = undefined;
/**
 * @member {String} OutpostArn
 */

NetworkInterface.prototype['OutpostArn'] = undefined;
/**
 * @member {String} OwnerId
 */

NetworkInterface.prototype['OwnerId'] = undefined;
/**
 * @member {String} PrivateDnsName
 */

NetworkInterface.prototype['PrivateDnsName'] = undefined;
/**
 * @member {String} PrivateIpAddress
 */

NetworkInterface.prototype['PrivateIpAddress'] = undefined;
/**
 * @member {Array.<module:model/NetworkInterfacePrivateIpAddress>} PrivateIpAddresses
 */

NetworkInterface.prototype['PrivateIpAddresses'] = undefined;
/**
 * @member {String} RequesterId
 */

NetworkInterface.prototype['RequesterId'] = undefined;
/**
 * @member {Boolean} RequesterManaged
 */

NetworkInterface.prototype['RequesterManaged'] = undefined;
/**
 * @member {Boolean} SourceDestCheck
 */

NetworkInterface.prototype['SourceDestCheck'] = undefined;
/**
 * @member {module:model/NetworkInterfaceStatus} Status
 */

NetworkInterface.prototype['Status'] = undefined;
/**
 * @member {String} SubnetId
 */

NetworkInterface.prototype['SubnetId'] = undefined;
/**
 * @member {Array.<module:model/Tag>} TagSet
 */

NetworkInterface.prototype['TagSet'] = undefined;
/**
 * @member {String} VpcId
 */

NetworkInterface.prototype['VpcId'] = undefined;
var _default = NetworkInterface;
exports["default"] = _default;