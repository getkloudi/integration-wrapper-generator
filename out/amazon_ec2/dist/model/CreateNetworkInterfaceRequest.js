"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InstanceIpv6Address = _interopRequireDefault(require("./InstanceIpv6Address"));

var _NetworkInterfaceCreationType = _interopRequireDefault(require("./NetworkInterfaceCreationType"));

var _PrivateIpAddressSpecification = _interopRequireDefault(require("./PrivateIpAddressSpecification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateNetworkInterfaceRequest model module.
 * @module model/CreateNetworkInterfaceRequest
 * @version 1.0.0
 */
var CreateNetworkInterfaceRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateNetworkInterfaceRequest</code>.
   * Contains the parameters for CreateNetworkInterface.
   * @alias module:model/CreateNetworkInterfaceRequest
   * @param subnetId {String} 
   */
  function CreateNetworkInterfaceRequest(subnetId) {
    _classCallCheck(this, CreateNetworkInterfaceRequest);

    CreateNetworkInterfaceRequest.initialize(this, subnetId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateNetworkInterfaceRequest, null, [{
    key: "initialize",
    value: function initialize(obj, subnetId) {
      obj['SubnetId'] = subnetId;
    }
    /**
     * Constructs a <code>CreateNetworkInterfaceRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateNetworkInterfaceRequest} obj Optional instance to populate.
     * @return {module:model/CreateNetworkInterfaceRequest} The populated <code>CreateNetworkInterfaceRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateNetworkInterfaceRequest();

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('Groups')) {
          obj['Groups'] = _ApiClient["default"].convertToType(data['Groups'], ['String']);
        }

        if (data.hasOwnProperty('InterfaceType')) {
          obj['InterfaceType'] = _NetworkInterfaceCreationType["default"].constructFromObject(data['InterfaceType']);
        }

        if (data.hasOwnProperty('Ipv6AddressCount')) {
          obj['Ipv6AddressCount'] = _ApiClient["default"].convertToType(data['Ipv6AddressCount'], 'Number');
        }

        if (data.hasOwnProperty('Ipv6Addresses')) {
          obj['Ipv6Addresses'] = _ApiClient["default"].convertToType(data['Ipv6Addresses'], [_InstanceIpv6Address["default"]]);
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

  return CreateNetworkInterfaceRequest;
}();
/**
 * @member {String} Description
 */


CreateNetworkInterfaceRequest.prototype['Description'] = undefined;
/**
 * @member {Boolean} DryRun
 */

CreateNetworkInterfaceRequest.prototype['DryRun'] = undefined;
/**
 * @member {Array.<String>} Groups
 */

CreateNetworkInterfaceRequest.prototype['Groups'] = undefined;
/**
 * @member {module:model/NetworkInterfaceCreationType} InterfaceType
 */

CreateNetworkInterfaceRequest.prototype['InterfaceType'] = undefined;
/**
 * @member {Number} Ipv6AddressCount
 */

CreateNetworkInterfaceRequest.prototype['Ipv6AddressCount'] = undefined;
/**
 * @member {Array.<module:model/InstanceIpv6Address>} Ipv6Addresses
 */

CreateNetworkInterfaceRequest.prototype['Ipv6Addresses'] = undefined;
/**
 * @member {String} PrivateIpAddress
 */

CreateNetworkInterfaceRequest.prototype['PrivateIpAddress'] = undefined;
/**
 * @member {Array.<module:model/PrivateIpAddressSpecification>} PrivateIpAddresses
 */

CreateNetworkInterfaceRequest.prototype['PrivateIpAddresses'] = undefined;
/**
 * @member {Number} SecondaryPrivateIpAddressCount
 */

CreateNetworkInterfaceRequest.prototype['SecondaryPrivateIpAddressCount'] = undefined;
/**
 * @member {String} SubnetId
 */

CreateNetworkInterfaceRequest.prototype['SubnetId'] = undefined;
var _default = CreateNetworkInterfaceRequest;
exports["default"] = _default;