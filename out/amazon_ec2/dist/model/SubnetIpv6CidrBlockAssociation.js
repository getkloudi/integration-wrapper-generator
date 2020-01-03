"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SubnetCidrBlockState = _interopRequireDefault(require("./SubnetCidrBlockState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SubnetIpv6CidrBlockAssociation model module.
 * @module model/SubnetIpv6CidrBlockAssociation
 * @version 1.0.0
 */
var SubnetIpv6CidrBlockAssociation =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>SubnetIpv6CidrBlockAssociation</code>.
   * Describes an IPv6 CIDR block associated with a subnet.
   * @alias module:model/SubnetIpv6CidrBlockAssociation
   */
  function SubnetIpv6CidrBlockAssociation() {
    _classCallCheck(this, SubnetIpv6CidrBlockAssociation);

    SubnetIpv6CidrBlockAssociation.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SubnetIpv6CidrBlockAssociation, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SubnetIpv6CidrBlockAssociation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SubnetIpv6CidrBlockAssociation} obj Optional instance to populate.
     * @return {module:model/SubnetIpv6CidrBlockAssociation} The populated <code>SubnetIpv6CidrBlockAssociation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SubnetIpv6CidrBlockAssociation();

        if (data.hasOwnProperty('AssociationId')) {
          obj['AssociationId'] = _ApiClient["default"].convertToType(data['AssociationId'], 'String');
        }

        if (data.hasOwnProperty('Ipv6CidrBlock')) {
          obj['Ipv6CidrBlock'] = _ApiClient["default"].convertToType(data['Ipv6CidrBlock'], 'String');
        }

        if (data.hasOwnProperty('Ipv6CidrBlockState')) {
          obj['Ipv6CidrBlockState'] = _SubnetCidrBlockState["default"].constructFromObject(data['Ipv6CidrBlockState']);
        }
      }

      return obj;
    }
  }]);

  return SubnetIpv6CidrBlockAssociation;
}();
/**
 * @member {String} AssociationId
 */


SubnetIpv6CidrBlockAssociation.prototype['AssociationId'] = undefined;
/**
 * @member {String} Ipv6CidrBlock
 */

SubnetIpv6CidrBlockAssociation.prototype['Ipv6CidrBlock'] = undefined;
/**
 * @member {module:model/SubnetCidrBlockState} Ipv6CidrBlockState
 */

SubnetIpv6CidrBlockAssociation.prototype['Ipv6CidrBlockState'] = undefined;
var _default = SubnetIpv6CidrBlockAssociation;
exports["default"] = _default;