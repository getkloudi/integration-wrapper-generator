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
 * The InstanceIpv6AddressRequest model module.
 * @module model/InstanceIpv6AddressRequest
 * @version 1.0.0
 */
var InstanceIpv6AddressRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>InstanceIpv6AddressRequest</code>.
   * Describes an IPv6 address.
   * @alias module:model/InstanceIpv6AddressRequest
   */
  function InstanceIpv6AddressRequest() {
    _classCallCheck(this, InstanceIpv6AddressRequest);

    InstanceIpv6AddressRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InstanceIpv6AddressRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InstanceIpv6AddressRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InstanceIpv6AddressRequest} obj Optional instance to populate.
     * @return {module:model/InstanceIpv6AddressRequest} The populated <code>InstanceIpv6AddressRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InstanceIpv6AddressRequest();

        if (data.hasOwnProperty('Ipv6Address')) {
          obj['Ipv6Address'] = _ApiClient["default"].convertToType(data['Ipv6Address'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InstanceIpv6AddressRequest;
}();
/**
 * @member {String} Ipv6Address
 */


InstanceIpv6AddressRequest.prototype['Ipv6Address'] = undefined;
var _default = InstanceIpv6AddressRequest;
exports["default"] = _default;