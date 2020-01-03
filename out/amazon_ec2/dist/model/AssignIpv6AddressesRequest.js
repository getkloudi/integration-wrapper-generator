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
 * The AssignIpv6AddressesRequest model module.
 * @module model/AssignIpv6AddressesRequest
 * @version 1.0.0
 */
var AssignIpv6AddressesRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>AssignIpv6AddressesRequest</code>.
   * @alias module:model/AssignIpv6AddressesRequest
   * @param networkInterfaceId {String} 
   */
  function AssignIpv6AddressesRequest(networkInterfaceId) {
    _classCallCheck(this, AssignIpv6AddressesRequest);

    AssignIpv6AddressesRequest.initialize(this, networkInterfaceId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AssignIpv6AddressesRequest, null, [{
    key: "initialize",
    value: function initialize(obj, networkInterfaceId) {
      obj['NetworkInterfaceId'] = networkInterfaceId;
    }
    /**
     * Constructs a <code>AssignIpv6AddressesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AssignIpv6AddressesRequest} obj Optional instance to populate.
     * @return {module:model/AssignIpv6AddressesRequest} The populated <code>AssignIpv6AddressesRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AssignIpv6AddressesRequest();

        if (data.hasOwnProperty('Ipv6AddressCount')) {
          obj['Ipv6AddressCount'] = _ApiClient["default"].convertToType(data['Ipv6AddressCount'], 'Number');
        }

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

  return AssignIpv6AddressesRequest;
}();
/**
 * @member {Number} Ipv6AddressCount
 */


AssignIpv6AddressesRequest.prototype['Ipv6AddressCount'] = undefined;
/**
 * @member {Array.<String>} Ipv6Addresses
 */

AssignIpv6AddressesRequest.prototype['Ipv6Addresses'] = undefined;
/**
 * @member {String} NetworkInterfaceId
 */

AssignIpv6AddressesRequest.prototype['NetworkInterfaceId'] = undefined;
var _default = AssignIpv6AddressesRequest;
exports["default"] = _default;