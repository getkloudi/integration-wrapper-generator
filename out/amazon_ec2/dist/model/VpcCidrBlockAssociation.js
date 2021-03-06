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
 * The VpcCidrBlockAssociation model module.
 * @module model/VpcCidrBlockAssociation
 * @version 1.1.0
 */
var VpcCidrBlockAssociation =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>VpcCidrBlockAssociation</code>.
   * Describes an IPv4 CIDR block associated with a VPC.
   * @alias module:model/VpcCidrBlockAssociation
   */
  function VpcCidrBlockAssociation() {
    _classCallCheck(this, VpcCidrBlockAssociation);

    VpcCidrBlockAssociation.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VpcCidrBlockAssociation, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>VpcCidrBlockAssociation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VpcCidrBlockAssociation} obj Optional instance to populate.
     * @return {module:model/VpcCidrBlockAssociation} The populated <code>VpcCidrBlockAssociation</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VpcCidrBlockAssociation();

        if (data.hasOwnProperty('AssociationId')) {
          obj['AssociationId'] = _ApiClient["default"].convertToType(data['AssociationId'], 'String');
        }

        if (data.hasOwnProperty('CidrBlock')) {
          obj['CidrBlock'] = _ApiClient["default"].convertToType(data['CidrBlock'], 'String');
        }

        if (data.hasOwnProperty('CidrBlockState')) {
          obj['CidrBlockState'] = _VpcCidrBlockState["default"].constructFromObject(data['CidrBlockState']);
        }
      }

      return obj;
    }
  }]);

  return VpcCidrBlockAssociation;
}();
/**
 * @member {String} AssociationId
 */


VpcCidrBlockAssociation.prototype['AssociationId'] = undefined;
/**
 * @member {String} CidrBlock
 */

VpcCidrBlockAssociation.prototype['CidrBlock'] = undefined;
/**
 * @member {module:model/VpcCidrBlockState} CidrBlockState
 */

VpcCidrBlockAssociation.prototype['CidrBlockState'] = undefined;
var _default = VpcCidrBlockAssociation;
exports["default"] = _default;