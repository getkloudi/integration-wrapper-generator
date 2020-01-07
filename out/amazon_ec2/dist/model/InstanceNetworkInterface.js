"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GroupIdentifier = _interopRequireDefault(require("./GroupIdentifier"));

var _InstanceIpv6Address = _interopRequireDefault(require("./InstanceIpv6Address"));

var _InstanceNetworkInterfaceAssociation = _interopRequireDefault(require("./InstanceNetworkInterfaceAssociation"));

var _InstanceNetworkInterfaceAttachment = _interopRequireDefault(require("./InstanceNetworkInterfaceAttachment"));

var _InstancePrivateIpAddress = _interopRequireDefault(require("./InstancePrivateIpAddress"));

var _NetworkInterfaceStatus = _interopRequireDefault(require("./NetworkInterfaceStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InstanceNetworkInterface model module.
 * @module model/InstanceNetworkInterface
 * @version 1.1.0
 */
var InstanceNetworkInterface =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>InstanceNetworkInterface</code>.
   * Describes a network interface.
   * @alias module:model/InstanceNetworkInterface
   */
  function InstanceNetworkInterface() {
    _classCallCheck(this, InstanceNetworkInterface);

    InstanceNetworkInterface.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InstanceNetworkInterface, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InstanceNetworkInterface</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstanceNetworkInterface} obj Optional instance to populate.
     * @return {module:model/InstanceNetworkInterface} The populated <code>InstanceNetworkInterface</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstanceNetworkInterface();

        if (data.hasOwnProperty('Association')) {
          obj['Association'] = _InstanceNetworkInterfaceAssociation["default"].constructFromObject(data['Association']);
        }

        if (data.hasOwnProperty('Attachment')) {
          obj['Attachment'] = _InstanceNetworkInterfaceAttachment["default"].constructFromObject(data['Attachment']);
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('Groups')) {
          obj['Groups'] = _ApiClient["default"].convertToType(data['Groups'], [_GroupIdentifier["default"]]);
        }

        if (data.hasOwnProperty('InterfaceType')) {
          obj['InterfaceType'] = _ApiClient["default"].convertToType(data['InterfaceType'], 'String');
        }

        if (data.hasOwnProperty('Ipv6Addresses')) {
          obj['Ipv6Addresses'] = _ApiClient["default"].convertToType(data['Ipv6Addresses'], [_InstanceIpv6Address["default"]]);
        }

        if (data.hasOwnProperty('MacAddress')) {
          obj['MacAddress'] = _ApiClient["default"].convertToType(data['MacAddress'], 'String');
        }

        if (data.hasOwnProperty('NetworkInterfaceId')) {
          obj['NetworkInterfaceId'] = _ApiClient["default"].convertToType(data['NetworkInterfaceId'], 'String');
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
          obj['PrivateIpAddresses'] = _ApiClient["default"].convertToType(data['PrivateIpAddresses'], [_InstancePrivateIpAddress["default"]]);
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

        if (data.hasOwnProperty('VpcId')) {
          obj['VpcId'] = _ApiClient["default"].convertToType(data['VpcId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InstanceNetworkInterface;
}();
/**
 * @member {module:model/InstanceNetworkInterfaceAssociation} Association
 */


InstanceNetworkInterface.prototype['Association'] = undefined;
/**
 * @member {module:model/InstanceNetworkInterfaceAttachment} Attachment
 */

InstanceNetworkInterface.prototype['Attachment'] = undefined;
/**
 * @member {String} Description
 */

InstanceNetworkInterface.prototype['Description'] = undefined;
/**
 * @member {Array.<module:model/GroupIdentifier>} Groups
 */

InstanceNetworkInterface.prototype['Groups'] = undefined;
/**
 * @member {String} InterfaceType
 */

InstanceNetworkInterface.prototype['InterfaceType'] = undefined;
/**
 * @member {Array.<module:model/InstanceIpv6Address>} Ipv6Addresses
 */

InstanceNetworkInterface.prototype['Ipv6Addresses'] = undefined;
/**
 * @member {String} MacAddress
 */

InstanceNetworkInterface.prototype['MacAddress'] = undefined;
/**
 * @member {String} NetworkInterfaceId
 */

InstanceNetworkInterface.prototype['NetworkInterfaceId'] = undefined;
/**
 * @member {String} OwnerId
 */

InstanceNetworkInterface.prototype['OwnerId'] = undefined;
/**
 * @member {String} PrivateDnsName
 */

InstanceNetworkInterface.prototype['PrivateDnsName'] = undefined;
/**
 * @member {String} PrivateIpAddress
 */

InstanceNetworkInterface.prototype['PrivateIpAddress'] = undefined;
/**
 * @member {Array.<module:model/InstancePrivateIpAddress>} PrivateIpAddresses
 */

InstanceNetworkInterface.prototype['PrivateIpAddresses'] = undefined;
/**
 * @member {Boolean} SourceDestCheck
 */

InstanceNetworkInterface.prototype['SourceDestCheck'] = undefined;
/**
 * @member {module:model/NetworkInterfaceStatus} Status
 */

InstanceNetworkInterface.prototype['Status'] = undefined;
/**
 * @member {String} SubnetId
 */

InstanceNetworkInterface.prototype['SubnetId'] = undefined;
/**
 * @member {String} VpcId
 */

InstanceNetworkInterface.prototype['VpcId'] = undefined;
var _default = InstanceNetworkInterface;
exports["default"] = _default;