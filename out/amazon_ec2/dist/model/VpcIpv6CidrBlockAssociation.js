"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _VpcCidrBlockState = _interopRequireDefault(require("./VpcCidrBlockState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The VpcIpv6CidrBlockAssociation model module.
 * @module model/VpcIpv6CidrBlockAssociation
 * @version 1.1.0
 */
var VpcIpv6CidrBlockAssociation =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>VpcIpv6CidrBlockAssociation</code>.
   * Describes an IPv6 CIDR block associated with a VPC.
   * @alias module:model/VpcIpv6CidrBlockAssociation
   */
  function VpcIpv6CidrBlockAssociation() {
    _classCallCheck(this, VpcIpv6CidrBlockAssociation);

    VpcIpv6CidrBlockAssociation.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VpcIpv6CidrBlockAssociation, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>VpcIpv6CidrBlockAssociation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VpcIpv6CidrBlockAssociation} obj Optional instance to populate.
     * @return {module:model/VpcIpv6CidrBlockAssociation} The populated <code>VpcIpv6CidrBlockAssociation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VpcIpv6CidrBlockAssociation();

        if (data.hasOwnProperty('AssociationId')) {
          obj['AssociationId'] = _ApiClient["default"].convertToType(data['AssociationId'], 'String');
        }

        if (data.hasOwnProperty('Ipv6CidrBlock')) {
          obj['Ipv6CidrBlock'] = _ApiClient["default"].convertToType(data['Ipv6CidrBlock'], 'String');
        }

        if (data.hasOwnProperty('Ipv6CidrBlockState')) {
          obj['Ipv6CidrBlockState'] = _VpcCidrBlockState["default"].constructFromObject(data['Ipv6CidrBlockState']);
        }

        if (data.hasOwnProperty('NetworkBorderGroup')) {
          obj['NetworkBorderGroup'] = _ApiClient["default"].convertToType(data['NetworkBorderGroup'], 'String');
        }
      }

      return obj;
    }
  }]);

  return VpcIpv6CidrBlockAssociation;
}();
/**
 * @member {String} AssociationId
 */


VpcIpv6CidrBlockAssociation.prototype['AssociationId'] = undefined;
/**
 * @member {String} Ipv6CidrBlock
 */

VpcIpv6CidrBlockAssociation.prototype['Ipv6CidrBlock'] = undefined;
/**
 * @member {module:model/VpcCidrBlockState} Ipv6CidrBlockState
 */

VpcIpv6CidrBlockAssociation.prototype['Ipv6CidrBlockState'] = undefined;
/**
 * @member {String} NetworkBorderGroup
 */

VpcIpv6CidrBlockAssociation.prototype['NetworkBorderGroup'] = undefined;
var _default = VpcIpv6CidrBlockAssociation;
exports["default"] = _default;