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
 * The AssignIpv6AddressesResult model module.
 * @module model/AssignIpv6AddressesResult
 * @version 1.0.0
 */
var AssignIpv6AddressesResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>AssignIpv6AddressesResult</code>.
   * @alias module:model/AssignIpv6AddressesResult
   */
  function AssignIpv6AddressesResult() {
    _classCallCheck(this, AssignIpv6AddressesResult);

    AssignIpv6AddressesResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AssignIpv6AddressesResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AssignIpv6AddressesResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AssignIpv6AddressesResult} obj Optional instance to populate.
     * @return {module:model/AssignIpv6AddressesResult} The populated <code>AssignIpv6AddressesResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AssignIpv6AddressesResult();

        if (data.hasOwnProperty('AssignedIpv6Addresses')) {
          obj['AssignedIpv6Addresses'] = _ApiClient["default"].convertToType(data['AssignedIpv6Addresses'], ['String']);
        }

        if (data.hasOwnProperty('NetworkInterfaceId')) {
          obj['NetworkInterfaceId'] = _ApiClient["default"].convertToType(data['NetworkInterfaceId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AssignIpv6AddressesResult;
}();
/**
 * @member {Array.<String>} AssignedIpv6Addresses
 */


AssignIpv6AddressesResult.prototype['AssignedIpv6Addresses'] = undefined;
/**
 * @member {String} NetworkInterfaceId
 */

AssignIpv6AddressesResult.prototype['NetworkInterfaceId'] = undefined;
var _default = AssignIpv6AddressesResult;
exports["default"] = _default;