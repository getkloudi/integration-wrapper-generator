"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SubnetIpv6CidrBlockAssociation = _interopRequireDefault(require("./SubnetIpv6CidrBlockAssociation"));

var _SubnetState = _interopRequireDefault(require("./SubnetState"));

var _Tag = _interopRequireDefault(require("./Tag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Subnet model module.
 * @module model/Subnet
 * @version 1.0.0
 */
var Subnet =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Subnet</code>.
   * Describes a subnet.
   * @alias module:model/Subnet
   */
  function Subnet() {
    _classCallCheck(this, Subnet);

    Subnet.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Subnet, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Subnet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Subnet} obj Optional instance to populate.
     * @return {module:model/Subnet} The populated <code>Subnet</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Subnet();

        if (data.hasOwnProperty('AssignIpv6AddressOnCreation')) {
          obj['AssignIpv6AddressOnCreation'] = _ApiClient["default"].convertToType(data['AssignIpv6AddressOnCreation'], 'Boolean');
        }

        if (data.hasOwnProperty('AvailabilityZone')) {
          obj['AvailabilityZone'] = _ApiClient["default"].convertToType(data['AvailabilityZone'], 'String');
        }

        if (data.hasOwnProperty('AvailabilityZoneId')) {
          obj['AvailabilityZoneId'] = _ApiClient["default"].convertToType(data['AvailabilityZoneId'], 'String');
        }

        if (data.hasOwnProperty('AvailableIpAddressCount')) {
          obj['AvailableIpAddressCount'] = _ApiClient["default"].convertToType(data['AvailableIpAddressCount'], 'Number');
        }

        if (data.hasOwnProperty('CidrBlock')) {
          obj['CidrBlock'] = _ApiClient["default"].convertToType(data['CidrBlock'], 'String');
        }

        if (data.hasOwnProperty('DefaultForAz')) {
          obj['DefaultForAz'] = _ApiClient["default"].convertToType(data['DefaultForAz'], 'Boolean');
        }

        if (data.hasOwnProperty('Ipv6CidrBlockAssociationSet')) {
          obj['Ipv6CidrBlockAssociationSet'] = _ApiClient["default"].convertToType(data['Ipv6CidrBlockAssociationSet'], [_SubnetIpv6CidrBlockAssociation["default"]]);
        }

        if (data.hasOwnProperty('MapPublicIpOnLaunch')) {
          obj['MapPublicIpOnLaunch'] = _ApiClient["default"].convertToType(data['MapPublicIpOnLaunch'], 'Boolean');
        }

        if (data.hasOwnProperty('OutpostArn')) {
          obj['OutpostArn'] = _ApiClient["default"].convertToType(data['OutpostArn'], 'String');
        }

        if (data.hasOwnProperty('OwnerId')) {
          obj['OwnerId'] = _ApiClient["default"].convertToType(data['OwnerId'], 'String');
        }

        if (data.hasOwnProperty('State')) {
          obj['State'] = _SubnetState["default"].constructFromObject(data['State']);
        }

        if (data.hasOwnProperty('SubnetArn')) {
          obj['SubnetArn'] = _ApiClient["default"].convertToType(data['SubnetArn'], 'String');
        }

        if (data.hasOwnProperty('SubnetId')) {
          obj['SubnetId'] = _ApiClient["default"].convertToType(data['SubnetId'], 'String');
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_Tag["default"]]);
        }

        if (data.hasOwnProperty('VpcId')) {
          obj['VpcId'] = _ApiClient["default"].convertToType(data['VpcId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Subnet;
}();
/**
 * @member {Boolean} AssignIpv6AddressOnCreation
 */


Subnet.prototype['AssignIpv6AddressOnCreation'] = undefined;
/**
 * @member {String} AvailabilityZone
 */

Subnet.prototype['AvailabilityZone'] = undefined;
/**
 * @member {String} AvailabilityZoneId
 */

Subnet.prototype['AvailabilityZoneId'] = undefined;
/**
 * @member {Number} AvailableIpAddressCount
 */

Subnet.prototype['AvailableIpAddressCount'] = undefined;
/**
 * @member {String} CidrBlock
 */

Subnet.prototype['CidrBlock'] = undefined;
/**
 * @member {Boolean} DefaultForAz
 */

Subnet.prototype['DefaultForAz'] = undefined;
/**
 * @member {Array.<module:model/SubnetIpv6CidrBlockAssociation>} Ipv6CidrBlockAssociationSet
 */

Subnet.prototype['Ipv6CidrBlockAssociationSet'] = undefined;
/**
 * @member {Boolean} MapPublicIpOnLaunch
 */

Subnet.prototype['MapPublicIpOnLaunch'] = undefined;
/**
 * @member {String} OutpostArn
 */

Subnet.prototype['OutpostArn'] = undefined;
/**
 * @member {String} OwnerId
 */

Subnet.prototype['OwnerId'] = undefined;
/**
 * @member {module:model/SubnetState} State
 */

Subnet.prototype['State'] = undefined;
/**
 * @member {String} SubnetArn
 */

Subnet.prototype['SubnetArn'] = undefined;
/**
 * @member {String} SubnetId
 */

Subnet.prototype['SubnetId'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

Subnet.prototype['Tags'] = undefined;
/**
 * @member {String} VpcId
 */

Subnet.prototype['VpcId'] = undefined;
var _default = Subnet;
exports["default"] = _default;