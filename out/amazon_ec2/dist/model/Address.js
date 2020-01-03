"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DomainType = _interopRequireDefault(require("./DomainType"));

var _Tag = _interopRequireDefault(require("./Tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Address model module.
 * @module model/Address
 * @version 1.0.0
 */
var Address =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Address</code>.
   * Describes an Elastic IP address.
   * @alias module:model/Address
   */
  function Address() {
    _classCallCheck(this, Address);

    Address.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Address, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Address</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Address} obj Optional instance to populate.
     * @return {module:model/Address} The populated <code>Address</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Address();

        if (data.hasOwnProperty('AllocationId')) {
          obj['AllocationId'] = _ApiClient["default"].convertToType(data['AllocationId'], 'String');
        }

        if (data.hasOwnProperty('AssociationId')) {
          obj['AssociationId'] = _ApiClient["default"].convertToType(data['AssociationId'], 'String');
        }

        if (data.hasOwnProperty('CustomerOwnedIp')) {
          obj['CustomerOwnedIp'] = _ApiClient["default"].convertToType(data['CustomerOwnedIp'], 'String');
        }

        if (data.hasOwnProperty('CustomerOwnedIpv4Pool')) {
          obj['CustomerOwnedIpv4Pool'] = _ApiClient["default"].convertToType(data['CustomerOwnedIpv4Pool'], 'String');
        }

        if (data.hasOwnProperty('Domain')) {
          obj['Domain'] = _DomainType["default"].constructFromObject(data['Domain']);
        }

        if (data.hasOwnProperty('InstanceId')) {
          obj['InstanceId'] = _ApiClient["default"].convertToType(data['InstanceId'], 'String');
        }

        if (data.hasOwnProperty('NetworkBorderGroup')) {
          obj['NetworkBorderGroup'] = _ApiClient["default"].convertToType(data['NetworkBorderGroup'], 'String');
        }

        if (data.hasOwnProperty('NetworkInterfaceId')) {
          obj['NetworkInterfaceId'] = _ApiClient["default"].convertToType(data['NetworkInterfaceId'], 'String');
        }

        if (data.hasOwnProperty('NetworkInterfaceOwnerId')) {
          obj['NetworkInterfaceOwnerId'] = _ApiClient["default"].convertToType(data['NetworkInterfaceOwnerId'], 'String');
        }

        if (data.hasOwnProperty('PrivateIpAddress')) {
          obj['PrivateIpAddress'] = _ApiClient["default"].convertToType(data['PrivateIpAddress'], 'String');
        }

        if (data.hasOwnProperty('PublicIp')) {
          obj['PublicIp'] = _ApiClient["default"].convertToType(data['PublicIp'], 'String');
        }

        if (data.hasOwnProperty('PublicIpv4Pool')) {
          obj['PublicIpv4Pool'] = _ApiClient["default"].convertToType(data['PublicIpv4Pool'], 'String');
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_Tag["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Address;
}();
/**
 * @member {String} AllocationId
 */


Address.prototype['AllocationId'] = undefined;
/**
 * @member {String} AssociationId
 */

Address.prototype['AssociationId'] = undefined;
/**
 * @member {String} CustomerOwnedIp
 */

Address.prototype['CustomerOwnedIp'] = undefined;
/**
 * @member {String} CustomerOwnedIpv4Pool
 */

Address.prototype['CustomerOwnedIpv4Pool'] = undefined;
/**
 * @member {module:model/DomainType} Domain
 */

Address.prototype['Domain'] = undefined;
/**
 * @member {String} InstanceId
 */

Address.prototype['InstanceId'] = undefined;
/**
 * @member {String} NetworkBorderGroup
 */

Address.prototype['NetworkBorderGroup'] = undefined;
/**
 * @member {String} NetworkInterfaceId
 */

Address.prototype['NetworkInterfaceId'] = undefined;
/**
 * @member {String} NetworkInterfaceOwnerId
 */

Address.prototype['NetworkInterfaceOwnerId'] = undefined;
/**
 * @member {String} PrivateIpAddress
 */

Address.prototype['PrivateIpAddress'] = undefined;
/**
 * @member {String} PublicIp
 */

Address.prototype['PublicIp'] = undefined;
/**
 * @member {String} PublicIpv4Pool
 */

Address.prototype['PublicIpv4Pool'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

Address.prototype['Tags'] = undefined;
var _default = Address;
exports["default"] = _default;