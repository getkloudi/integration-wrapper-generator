"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Tag = _interopRequireDefault(require("./Tag"));

var _Tenancy = _interopRequireDefault(require("./Tenancy"));

var _VpcCidrBlockAssociation = _interopRequireDefault(require("./VpcCidrBlockAssociation"));

var _VpcIpv6CidrBlockAssociation = _interopRequireDefault(require("./VpcIpv6CidrBlockAssociation"));

var _VpcState = _interopRequireDefault(require("./VpcState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Vpc model module.
 * @module model/Vpc
 * @version 1.0.0
 */
var Vpc =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Vpc</code>.
   * Describes a VPC.
   * @alias module:model/Vpc
   */
  function Vpc() {
    _classCallCheck(this, Vpc);

    Vpc.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Vpc, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Vpc</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Vpc} obj Optional instance to populate.
     * @return {module:model/Vpc} The populated <code>Vpc</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Vpc();

        if (data.hasOwnProperty('CidrBlock')) {
          obj['CidrBlock'] = _ApiClient["default"].convertToType(data['CidrBlock'], 'String');
        }

        if (data.hasOwnProperty('CidrBlockAssociationSet')) {
          obj['CidrBlockAssociationSet'] = _ApiClient["default"].convertToType(data['CidrBlockAssociationSet'], [_VpcCidrBlockAssociation["default"]]);
        }

        if (data.hasOwnProperty('DhcpOptionsId')) {
          obj['DhcpOptionsId'] = _ApiClient["default"].convertToType(data['DhcpOptionsId'], 'String');
        }

        if (data.hasOwnProperty('InstanceTenancy')) {
          obj['InstanceTenancy'] = _Tenancy["default"].constructFromObject(data['InstanceTenancy']);
        }

        if (data.hasOwnProperty('Ipv6CidrBlockAssociationSet')) {
          obj['Ipv6CidrBlockAssociationSet'] = _ApiClient["default"].convertToType(data['Ipv6CidrBlockAssociationSet'], [_VpcIpv6CidrBlockAssociation["default"]]);
        }

        if (data.hasOwnProperty('IsDefault')) {
          obj['IsDefault'] = _ApiClient["default"].convertToType(data['IsDefault'], 'Boolean');
        }

        if (data.hasOwnProperty('OwnerId')) {
          obj['OwnerId'] = _ApiClient["default"].convertToType(data['OwnerId'], 'String');
        }

        if (data.hasOwnProperty('State')) {
          obj['State'] = _VpcState["default"].constructFromObject(data['State']);
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

  return Vpc;
}();
/**
 * @member {String} CidrBlock
 */


Vpc.prototype['CidrBlock'] = undefined;
/**
 * @member {Array.<module:model/VpcCidrBlockAssociation>} CidrBlockAssociationSet
 */

Vpc.prototype['CidrBlockAssociationSet'] = undefined;
/**
 * @member {String} DhcpOptionsId
 */

Vpc.prototype['DhcpOptionsId'] = undefined;
/**
 * @member {module:model/Tenancy} InstanceTenancy
 */

Vpc.prototype['InstanceTenancy'] = undefined;
/**
 * @member {Array.<module:model/VpcIpv6CidrBlockAssociation>} Ipv6CidrBlockAssociationSet
 */

Vpc.prototype['Ipv6CidrBlockAssociationSet'] = undefined;
/**
 * @member {Boolean} IsDefault
 */

Vpc.prototype['IsDefault'] = undefined;
/**
 * @member {String} OwnerId
 */

Vpc.prototype['OwnerId'] = undefined;
/**
 * @member {module:model/VpcState} State
 */

Vpc.prototype['State'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

Vpc.prototype['Tags'] = undefined;
/**
 * @member {String} VpcId
 */

Vpc.prototype['VpcId'] = undefined;
var _default = Vpc;
exports["default"] = _default;