"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _VpcCidrBlockAssociation = _interopRequireDefault(require("./VpcCidrBlockAssociation"));

var _VpcIpv6CidrBlockAssociation = _interopRequireDefault(require("./VpcIpv6CidrBlockAssociation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DisassociateVpcCidrBlockResult model module.
 * @module model/DisassociateVpcCidrBlockResult
 * @version 1.0.0
 */
var DisassociateVpcCidrBlockResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DisassociateVpcCidrBlockResult</code>.
   * @alias module:model/DisassociateVpcCidrBlockResult
   */
  function DisassociateVpcCidrBlockResult() {
    _classCallCheck(this, DisassociateVpcCidrBlockResult);

    DisassociateVpcCidrBlockResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DisassociateVpcCidrBlockResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DisassociateVpcCidrBlockResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DisassociateVpcCidrBlockResult} obj Optional instance to populate.
     * @return {module:model/DisassociateVpcCidrBlockResult} The populated <code>DisassociateVpcCidrBlockResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DisassociateVpcCidrBlockResult();

        if (data.hasOwnProperty('CidrBlockAssociation')) {
          obj['CidrBlockAssociation'] = _VpcCidrBlockAssociation["default"].constructFromObject(data['CidrBlockAssociation']);
        }

        if (data.hasOwnProperty('Ipv6CidrBlockAssociation')) {
          obj['Ipv6CidrBlockAssociation'] = _VpcIpv6CidrBlockAssociation["default"].constructFromObject(data['Ipv6CidrBlockAssociation']);
        }

        if (data.hasOwnProperty('VpcId')) {
          obj['VpcId'] = _ApiClient["default"].convertToType(data['VpcId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DisassociateVpcCidrBlockResult;
}();
/**
 * @member {module:model/VpcCidrBlockAssociation} CidrBlockAssociation
 */


DisassociateVpcCidrBlockResult.prototype['CidrBlockAssociation'] = undefined;
/**
 * @member {module:model/VpcIpv6CidrBlockAssociation} Ipv6CidrBlockAssociation
 */

DisassociateVpcCidrBlockResult.prototype['Ipv6CidrBlockAssociation'] = undefined;
/**
 * @member {String} VpcId
 */

DisassociateVpcCidrBlockResult.prototype['VpcId'] = undefined;
var _default = DisassociateVpcCidrBlockResult;
exports["default"] = _default;