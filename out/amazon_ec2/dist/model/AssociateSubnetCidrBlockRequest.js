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
 * The AssociateSubnetCidrBlockRequest model module.
 * @module model/AssociateSubnetCidrBlockRequest
 * @version 1.1.0
 */
var AssociateSubnetCidrBlockRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>AssociateSubnetCidrBlockRequest</code>.
   * @alias module:model/AssociateSubnetCidrBlockRequest
   * @param ipv6CidrBlock {String} 
   * @param subnetId {String} 
   */
  function AssociateSubnetCidrBlockRequest(ipv6CidrBlock, subnetId) {
    _classCallCheck(this, AssociateSubnetCidrBlockRequest);

    AssociateSubnetCidrBlockRequest.initialize(this, ipv6CidrBlock, subnetId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AssociateSubnetCidrBlockRequest, null, [{
    key: "initialize",
    value: function initialize(obj, ipv6CidrBlock, subnetId) {
      obj['Ipv6CidrBlock'] = ipv6CidrBlock;
      obj['SubnetId'] = subnetId;
    }
    /**
     * Constructs a <code>AssociateSubnetCidrBlockRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AssociateSubnetCidrBlockRequest} obj Optional instance to populate.
     * @return {module:model/AssociateSubnetCidrBlockRequest} The populated <code>AssociateSubnetCidrBlockRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AssociateSubnetCidrBlockRequest();

        if (data.hasOwnProperty('Ipv6CidrBlock')) {
          obj['Ipv6CidrBlock'] = _ApiClient["default"].convertToType(data['Ipv6CidrBlock'], 'String');
        }

        if (data.hasOwnProperty('SubnetId')) {
          obj['SubnetId'] = _ApiClient["default"].convertToType(data['SubnetId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AssociateSubnetCidrBlockRequest;
}();
/**
 * @member {String} Ipv6CidrBlock
 */


AssociateSubnetCidrBlockRequest.prototype['Ipv6CidrBlock'] = undefined;
/**
 * @member {String} SubnetId
 */

AssociateSubnetCidrBlockRequest.prototype['SubnetId'] = undefined;
var _default = AssociateSubnetCidrBlockRequest;
exports["default"] = _default;