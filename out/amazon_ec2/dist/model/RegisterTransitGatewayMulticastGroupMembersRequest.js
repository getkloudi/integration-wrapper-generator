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
 * The RegisterTransitGatewayMulticastGroupMembersRequest model module.
 * @module model/RegisterTransitGatewayMulticastGroupMembersRequest
 * @version 1.1.0
 */
var RegisterTransitGatewayMulticastGroupMembersRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>RegisterTransitGatewayMulticastGroupMembersRequest</code>.
   * @alias module:model/RegisterTransitGatewayMulticastGroupMembersRequest
   */
  function RegisterTransitGatewayMulticastGroupMembersRequest() {
    _classCallCheck(this, RegisterTransitGatewayMulticastGroupMembersRequest);

    RegisterTransitGatewayMulticastGroupMembersRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RegisterTransitGatewayMulticastGroupMembersRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RegisterTransitGatewayMulticastGroupMembersRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RegisterTransitGatewayMulticastGroupMembersRequest} obj Optional instance to populate.
     * @return {module:model/RegisterTransitGatewayMulticastGroupMembersRequest} The populated <code>RegisterTransitGatewayMulticastGroupMembersRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RegisterTransitGatewayMulticastGroupMembersRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('GroupIpAddress')) {
          obj['GroupIpAddress'] = _ApiClient["default"].convertToType(data['GroupIpAddress'], 'String');
        }

        if (data.hasOwnProperty('NetworkInterfaceIds')) {
          obj['NetworkInterfaceIds'] = _ApiClient["default"].convertToType(data['NetworkInterfaceIds'], ['String']);
        }

        if (data.hasOwnProperty('TransitGatewayMulticastDomainId')) {
          obj['TransitGatewayMulticastDomainId'] = _ApiClient["default"].convertToType(data['TransitGatewayMulticastDomainId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RegisterTransitGatewayMulticastGroupMembersRequest;
}();
/**
 * @member {Boolean} DryRun
 */


RegisterTransitGatewayMulticastGroupMembersRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} GroupIpAddress
 */

RegisterTransitGatewayMulticastGroupMembersRequest.prototype['GroupIpAddress'] = undefined;
/**
 * @member {Array.<String>} NetworkInterfaceIds
 */

RegisterTransitGatewayMulticastGroupMembersRequest.prototype['NetworkInterfaceIds'] = undefined;
/**
 * @member {String} TransitGatewayMulticastDomainId
 */

RegisterTransitGatewayMulticastGroupMembersRequest.prototype['TransitGatewayMulticastDomainId'] = undefined;
var _default = RegisterTransitGatewayMulticastGroupMembersRequest;
exports["default"] = _default;