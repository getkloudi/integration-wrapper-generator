"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AssociateVpcCidrBlockRequest model module.
 * @module model/AssociateVpcCidrBlockRequest
 * @version 1.0.0
 */
var AssociateVpcCidrBlockRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>AssociateVpcCidrBlockRequest</code>.
   * @alias module:model/AssociateVpcCidrBlockRequest
   * @param vpcId {String} 
   */
  function AssociateVpcCidrBlockRequest(vpcId) {
    _classCallCheck(this, AssociateVpcCidrBlockRequest);

    AssociateVpcCidrBlockRequest.initialize(this, vpcId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AssociateVpcCidrBlockRequest, null, [{
    key: "initialize",
    value: function initialize(obj, vpcId) {
      obj['VpcId'] = vpcId;
    }
    /**
     * Constructs a <code>AssociateVpcCidrBlockRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AssociateVpcCidrBlockRequest} obj Optional instance to populate.
     * @return {module:model/AssociateVpcCidrBlockRequest} The populated <code>AssociateVpcCidrBlockRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AssociateVpcCidrBlockRequest();

        if (data.hasOwnProperty('AmazonProvidedIpv6CidrBlock')) {
          obj['AmazonProvidedIpv6CidrBlock'] = _ApiClient["default"].convertToType(data['AmazonProvidedIpv6CidrBlock'], 'Boolean');
        }

        if (data.hasOwnProperty('CidrBlock')) {
          obj['CidrBlock'] = _ApiClient["default"].convertToType(data['CidrBlock'], 'String');
        }

        if (data.hasOwnProperty('Ipv6CidrBlockNetworkBorderGroup')) {
          obj['Ipv6CidrBlockNetworkBorderGroup'] = _ApiClient["default"].convertToType(data['Ipv6CidrBlockNetworkBorderGroup'], 'String');
        }

        if (data.hasOwnProperty('VpcId')) {
          obj['VpcId'] = _ApiClient["default"].convertToType(data['VpcId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AssociateVpcCidrBlockRequest;
}();
/**
 * @member {Boolean} AmazonProvidedIpv6CidrBlock
 */


AssociateVpcCidrBlockRequest.prototype['AmazonProvidedIpv6CidrBlock'] = undefined;
/**
 * @member {String} CidrBlock
 */

AssociateVpcCidrBlockRequest.prototype['CidrBlock'] = undefined;
/**
 * @member {String} Ipv6CidrBlockNetworkBorderGroup
 */

AssociateVpcCidrBlockRequest.prototype['Ipv6CidrBlockNetworkBorderGroup'] = undefined;
/**
 * @member {String} VpcId
 */

AssociateVpcCidrBlockRequest.prototype['VpcId'] = undefined;
var _default = AssociateVpcCidrBlockRequest;
exports["default"] = _default;