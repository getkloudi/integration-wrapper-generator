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
 * The DeregisterTransitGatewayMulticastGroupSourcesRequest model module.
 * @module model/DeregisterTransitGatewayMulticastGroupSourcesRequest
 * @version 1.0.0
 */
var DeregisterTransitGatewayMulticastGroupSourcesRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeregisterTransitGatewayMulticastGroupSourcesRequest</code>.
   * @alias module:model/DeregisterTransitGatewayMulticastGroupSourcesRequest
   */
  function DeregisterTransitGatewayMulticastGroupSourcesRequest() {
    _classCallCheck(this, DeregisterTransitGatewayMulticastGroupSourcesRequest);

    DeregisterTransitGatewayMulticastGroupSourcesRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeregisterTransitGatewayMulticastGroupSourcesRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DeregisterTransitGatewayMulticastGroupSourcesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeregisterTransitGatewayMulticastGroupSourcesRequest} obj Optional instance to populate.
     * @return {module:model/DeregisterTransitGatewayMulticastGroupSourcesRequest} The populated <code>DeregisterTransitGatewayMulticastGroupSourcesRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeregisterTransitGatewayMulticastGroupSourcesRequest();

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

  return DeregisterTransitGatewayMulticastGroupSourcesRequest;
}();
/**
 * @member {Boolean} DryRun
 */


DeregisterTransitGatewayMulticastGroupSourcesRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} GroupIpAddress
 */

DeregisterTransitGatewayMulticastGroupSourcesRequest.prototype['GroupIpAddress'] = undefined;
/**
 * @member {Array.<String>} NetworkInterfaceIds
 */

DeregisterTransitGatewayMulticastGroupSourcesRequest.prototype['NetworkInterfaceIds'] = undefined;
/**
 * @member {String} TransitGatewayMulticastDomainId
 */

DeregisterTransitGatewayMulticastGroupSourcesRequest.prototype['TransitGatewayMulticastDomainId'] = undefined;
var _default = DeregisterTransitGatewayMulticastGroupSourcesRequest;
exports["default"] = _default;