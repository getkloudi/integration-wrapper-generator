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
 * The UnassignIpv6AddressesRequest model module.
 * @module model/UnassignIpv6AddressesRequest
 * @version 1.1.0
 */
var UnassignIpv6AddressesRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>UnassignIpv6AddressesRequest</code>.
   * @alias module:model/UnassignIpv6AddressesRequest
   * @param ipv6Addresses {Array.<String>} 
   * @param networkInterfaceId {String} 
   */
  function UnassignIpv6AddressesRequest(ipv6Addresses, networkInterfaceId) {
    _classCallCheck(this, UnassignIpv6AddressesRequest);

    UnassignIpv6AddressesRequest.initialize(this, ipv6Addresses, networkInterfaceId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UnassignIpv6AddressesRequest, null, [{
    key: "initialize",
    value: function initialize(obj, ipv6Addresses, networkInterfaceId) {
      obj['Ipv6Addresses'] = ipv6Addresses;
      obj['NetworkInterfaceId'] = networkInterfaceId;
    }
    /**
     * Constructs a <code>UnassignIpv6AddressesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UnassignIpv6AddressesRequest} obj Optional instance to populate.
     * @return {module:model/UnassignIpv6AddressesRequest} The populated <code>UnassignIpv6AddressesRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UnassignIpv6AddressesRequest();

        if (data.hasOwnProperty('Ipv6Addresses')) {
          obj['Ipv6Addresses'] = _ApiClient["default"].convertToType(data['Ipv6Addresses'], ['String']);
        }

        if (data.hasOwnProperty('NetworkInterfaceId')) {
          obj['NetworkInterfaceId'] = _ApiClient["default"].convertToType(data['NetworkInterfaceId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return UnassignIpv6AddressesRequest;
}();
/**
 * @member {Array.<String>} Ipv6Addresses
 */


UnassignIpv6AddressesRequest.prototype['Ipv6Addresses'] = undefined;
/**
 * @member {String} NetworkInterfaceId
 */

UnassignIpv6AddressesRequest.prototype['NetworkInterfaceId'] = undefined;
var _default = UnassignIpv6AddressesRequest;
exports["default"] = _default;