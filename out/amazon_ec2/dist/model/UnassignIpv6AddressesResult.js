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
 * The UnassignIpv6AddressesResult model module.
 * @module model/UnassignIpv6AddressesResult
 * @version 1.1.0
 */
var UnassignIpv6AddressesResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>UnassignIpv6AddressesResult</code>.
   * @alias module:model/UnassignIpv6AddressesResult
   */
  function UnassignIpv6AddressesResult() {
    _classCallCheck(this, UnassignIpv6AddressesResult);

    UnassignIpv6AddressesResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UnassignIpv6AddressesResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UnassignIpv6AddressesResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UnassignIpv6AddressesResult} obj Optional instance to populate.
     * @return {module:model/UnassignIpv6AddressesResult} The populated <code>UnassignIpv6AddressesResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UnassignIpv6AddressesResult();

        if (data.hasOwnProperty('NetworkInterfaceId')) {
          obj['NetworkInterfaceId'] = _ApiClient["default"].convertToType(data['NetworkInterfaceId'], 'String');
        }

        if (data.hasOwnProperty('UnassignedIpv6Addresses')) {
          obj['UnassignedIpv6Addresses'] = _ApiClient["default"].convertToType(data['UnassignedIpv6Addresses'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return UnassignIpv6AddressesResult;
}();
/**
 * @member {String} NetworkInterfaceId
 */


UnassignIpv6AddressesResult.prototype['NetworkInterfaceId'] = undefined;
/**
 * @member {Array.<String>} UnassignedIpv6Addresses
 */

UnassignIpv6AddressesResult.prototype['UnassignedIpv6Addresses'] = undefined;
var _default = UnassignIpv6AddressesResult;
exports["default"] = _default;