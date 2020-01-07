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
 * The NatGatewayAddress model module.
 * @module model/NatGatewayAddress
 * @version 1.1.0
 */
var NatGatewayAddress =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>NatGatewayAddress</code>.
   * Describes the IP addresses and network interface associated with a NAT gateway.
   * @alias module:model/NatGatewayAddress
   */
  function NatGatewayAddress() {
    _classCallCheck(this, NatGatewayAddress);

    NatGatewayAddress.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NatGatewayAddress, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NatGatewayAddress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NatGatewayAddress} obj Optional instance to populate.
     * @return {module:model/NatGatewayAddress} The populated <code>NatGatewayAddress</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NatGatewayAddress();

        if (data.hasOwnProperty('AllocationId')) {
          obj['AllocationId'] = _ApiClient["default"].convertToType(data['AllocationId'], 'String');
        }

        if (data.hasOwnProperty('NetworkInterfaceId')) {
          obj['NetworkInterfaceId'] = _ApiClient["default"].convertToType(data['NetworkInterfaceId'], 'String');
        }

        if (data.hasOwnProperty('PrivateIp')) {
          obj['PrivateIp'] = _ApiClient["default"].convertToType(data['PrivateIp'], 'String');
        }

        if (data.hasOwnProperty('PublicIp')) {
          obj['PublicIp'] = _ApiClient["default"].convertToType(data['PublicIp'], 'String');
        }
      }

      return obj;
    }
  }]);

  return NatGatewayAddress;
}();
/**
 * @member {String} AllocationId
 */


NatGatewayAddress.prototype['AllocationId'] = undefined;
/**
 * @member {String} NetworkInterfaceId
 */

NatGatewayAddress.prototype['NetworkInterfaceId'] = undefined;
/**
 * @member {String} PrivateIp
 */

NatGatewayAddress.prototype['PrivateIp'] = undefined;
/**
 * @member {String} PublicIp
 */

NatGatewayAddress.prototype['PublicIp'] = undefined;
var _default = NatGatewayAddress;
exports["default"] = _default;