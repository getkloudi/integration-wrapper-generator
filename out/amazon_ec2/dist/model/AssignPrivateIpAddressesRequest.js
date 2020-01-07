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
 * The AssignPrivateIpAddressesRequest model module.
 * @module model/AssignPrivateIpAddressesRequest
 * @version 1.1.0
 */
var AssignPrivateIpAddressesRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>AssignPrivateIpAddressesRequest</code>.
   * Contains the parameters for AssignPrivateIpAddresses.
   * @alias module:model/AssignPrivateIpAddressesRequest
   * @param networkInterfaceId {String} 
   */
  function AssignPrivateIpAddressesRequest(networkInterfaceId) {
    _classCallCheck(this, AssignPrivateIpAddressesRequest);

    AssignPrivateIpAddressesRequest.initialize(this, networkInterfaceId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AssignPrivateIpAddressesRequest, null, [{
    key: "initialize",
    value: function initialize(obj, networkInterfaceId) {
      obj['NetworkInterfaceId'] = networkInterfaceId;
    }
    /**
     * Constructs a <code>AssignPrivateIpAddressesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AssignPrivateIpAddressesRequest} obj Optional instance to populate.
     * @return {module:model/AssignPrivateIpAddressesRequest} The populated <code>AssignPrivateIpAddressesRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AssignPrivateIpAddressesRequest();

        if (data.hasOwnProperty('AllowReassignment')) {
          obj['AllowReassignment'] = _ApiClient["default"].convertToType(data['AllowReassignment'], 'Boolean');
        }

        if (data.hasOwnProperty('NetworkInterfaceId')) {
          obj['NetworkInterfaceId'] = _ApiClient["default"].convertToType(data['NetworkInterfaceId'], 'String');
        }

        if (data.hasOwnProperty('PrivateIpAddresses')) {
          obj['PrivateIpAddresses'] = _ApiClient["default"].convertToType(data['PrivateIpAddresses'], ['String']);
        }

        if (data.hasOwnProperty('SecondaryPrivateIpAddressCount')) {
          obj['SecondaryPrivateIpAddressCount'] = _ApiClient["default"].convertToType(data['SecondaryPrivateIpAddressCount'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return AssignPrivateIpAddressesRequest;
}();
/**
 * @member {Boolean} AllowReassignment
 */


AssignPrivateIpAddressesRequest.prototype['AllowReassignment'] = undefined;
/**
 * @member {String} NetworkInterfaceId
 */

AssignPrivateIpAddressesRequest.prototype['NetworkInterfaceId'] = undefined;
/**
 * @member {Array.<String>} PrivateIpAddresses
 */

AssignPrivateIpAddressesRequest.prototype['PrivateIpAddresses'] = undefined;
/**
 * @member {Number} SecondaryPrivateIpAddressCount
 */

AssignPrivateIpAddressesRequest.prototype['SecondaryPrivateIpAddressCount'] = undefined;
var _default = AssignPrivateIpAddressesRequest;
exports["default"] = _default;