"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CidrBlock = _interopRequireDefault(require("./CidrBlock"));

var _Ipv6CidrBlock = _interopRequireDefault(require("./Ipv6CidrBlock"));

var _VpcPeeringConnectionOptionsDescription = _interopRequireDefault(require("./VpcPeeringConnectionOptionsDescription"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The VpcPeeringConnectionVpcInfo model module.
 * @module model/VpcPeeringConnectionVpcInfo
 * @version 1.0.0
 */
var VpcPeeringConnectionVpcInfo =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>VpcPeeringConnectionVpcInfo</code>.
   * Describes a VPC in a VPC peering connection.
   * @alias module:model/VpcPeeringConnectionVpcInfo
   */
  function VpcPeeringConnectionVpcInfo() {
    _classCallCheck(this, VpcPeeringConnectionVpcInfo);

    VpcPeeringConnectionVpcInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VpcPeeringConnectionVpcInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>VpcPeeringConnectionVpcInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VpcPeeringConnectionVpcInfo} obj Optional instance to populate.
     * @return {module:model/VpcPeeringConnectionVpcInfo} The populated <code>VpcPeeringConnectionVpcInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VpcPeeringConnectionVpcInfo();

        if (data.hasOwnProperty('CidrBlock')) {
          obj['CidrBlock'] = _ApiClient["default"].convertToType(data['CidrBlock'], 'String');
        }

        if (data.hasOwnProperty('CidrBlockSet')) {
          obj['CidrBlockSet'] = _ApiClient["default"].convertToType(data['CidrBlockSet'], [_CidrBlock["default"]]);
        }

        if (data.hasOwnProperty('Ipv6CidrBlockSet')) {
          obj['Ipv6CidrBlockSet'] = _ApiClient["default"].convertToType(data['Ipv6CidrBlockSet'], [_Ipv6CidrBlock["default"]]);
        }

        if (data.hasOwnProperty('OwnerId')) {
          obj['OwnerId'] = _ApiClient["default"].convertToType(data['OwnerId'], 'String');
        }

        if (data.hasOwnProperty('PeeringOptions')) {
          obj['PeeringOptions'] = _VpcPeeringConnectionOptionsDescription["default"].constructFromObject(data['PeeringOptions']);
        }

        if (data.hasOwnProperty('Region')) {
          obj['Region'] = _ApiClient["default"].convertToType(data['Region'], 'String');
        }

        if (data.hasOwnProperty('VpcId')) {
          obj['VpcId'] = _ApiClient["default"].convertToType(data['VpcId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return VpcPeeringConnectionVpcInfo;
}();
/**
 * @member {String} CidrBlock
 */


VpcPeeringConnectionVpcInfo.prototype['CidrBlock'] = undefined;
/**
 * @member {Array.<module:model/CidrBlock>} CidrBlockSet
 */

VpcPeeringConnectionVpcInfo.prototype['CidrBlockSet'] = undefined;
/**
 * @member {Array.<module:model/Ipv6CidrBlock>} Ipv6CidrBlockSet
 */

VpcPeeringConnectionVpcInfo.prototype['Ipv6CidrBlockSet'] = undefined;
/**
 * @member {String} OwnerId
 */

VpcPeeringConnectionVpcInfo.prototype['OwnerId'] = undefined;
/**
 * @member {module:model/VpcPeeringConnectionOptionsDescription} PeeringOptions
 */

VpcPeeringConnectionVpcInfo.prototype['PeeringOptions'] = undefined;
/**
 * @member {String} Region
 */

VpcPeeringConnectionVpcInfo.prototype['Region'] = undefined;
/**
 * @member {String} VpcId
 */

VpcPeeringConnectionVpcInfo.prototype['VpcId'] = undefined;
var _default = VpcPeeringConnectionVpcInfo;
exports["default"] = _default;