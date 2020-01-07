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
 * The UnassignPrivateIpAddressesRequest model module.
 * @module model/UnassignPrivateIpAddressesRequest
 * @version 1.1.0
 */
var UnassignPrivateIpAddressesRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>UnassignPrivateIpAddressesRequest</code>.
   * Contains the parameters for UnassignPrivateIpAddresses.
   * @alias module:model/UnassignPrivateIpAddressesRequest
   * @param networkInterfaceId {String} 
   * @param privateIpAddresses {Array.<String>} 
   */
  function UnassignPrivateIpAddressesRequest(networkInterfaceId, privateIpAddresses) {
    _classCallCheck(this, UnassignPrivateIpAddressesRequest);

    UnassignPrivateIpAddressesRequest.initialize(this, networkInterfaceId, privateIpAddresses);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UnassignPrivateIpAddressesRequest, null, [{
    key: "initialize",
    value: function initialize(obj, networkInterfaceId, privateIpAddresses) {
      obj['NetworkInterfaceId'] = networkInterfaceId;
      obj['PrivateIpAddresses'] = privateIpAddresses;
    }
    /**
     * Constructs a <code>UnassignPrivateIpAddressesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UnassignPrivateIpAddressesRequest} obj Optional instance to populate.
     * @return {module:model/UnassignPrivateIpAddressesRequest} The populated <code>UnassignPrivateIpAddressesRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UnassignPrivateIpAddressesRequest();

        if (data.hasOwnProperty('NetworkInterfaceId')) {
          obj['NetworkInterfaceId'] = _ApiClient["default"].convertToType(data['NetworkInterfaceId'], 'String');
        }

        if (data.hasOwnProperty('PrivateIpAddresses')) {
          obj['PrivateIpAddresses'] = _ApiClient["default"].convertToType(data['PrivateIpAddresses'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return UnassignPrivateIpAddressesRequest;
}();
/**
 * @member {String} NetworkInterfaceId
 */


UnassignPrivateIpAddressesRequest.prototype['NetworkInterfaceId'] = undefined;
/**
 * @member {Array.<String>} PrivateIpAddresses
 */

UnassignPrivateIpAddressesRequest.prototype['PrivateIpAddresses'] = undefined;
var _default = UnassignPrivateIpAddressesRequest;
exports["default"] = _default;