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
 * The RevokeClientVpnIngressRequest model module.
 * @module model/RevokeClientVpnIngressRequest
 * @version 1.0.0
 */
var RevokeClientVpnIngressRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>RevokeClientVpnIngressRequest</code>.
   * @alias module:model/RevokeClientVpnIngressRequest
   * @param clientVpnEndpointId {String} 
   * @param targetNetworkCidr {String} 
   */
  function RevokeClientVpnIngressRequest(clientVpnEndpointId, targetNetworkCidr) {
    _classCallCheck(this, RevokeClientVpnIngressRequest);

    RevokeClientVpnIngressRequest.initialize(this, clientVpnEndpointId, targetNetworkCidr);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RevokeClientVpnIngressRequest, null, [{
    key: "initialize",
    value: function initialize(obj, clientVpnEndpointId, targetNetworkCidr) {
      obj['ClientVpnEndpointId'] = clientVpnEndpointId;
      obj['TargetNetworkCidr'] = targetNetworkCidr;
    }
    /**
     * Constructs a <code>RevokeClientVpnIngressRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RevokeClientVpnIngressRequest} obj Optional instance to populate.
     * @return {module:model/RevokeClientVpnIngressRequest} The populated <code>RevokeClientVpnIngressRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RevokeClientVpnIngressRequest();

        if (data.hasOwnProperty('AccessGroupId')) {
          obj['AccessGroupId'] = _ApiClient["default"].convertToType(data['AccessGroupId'], 'String');
        }

        if (data.hasOwnProperty('ClientVpnEndpointId')) {
          obj['ClientVpnEndpointId'] = _ApiClient["default"].convertToType(data['ClientVpnEndpointId'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('RevokeAllGroups')) {
          obj['RevokeAllGroups'] = _ApiClient["default"].convertToType(data['RevokeAllGroups'], 'Boolean');
        }

        if (data.hasOwnProperty('TargetNetworkCidr')) {
          obj['TargetNetworkCidr'] = _ApiClient["default"].convertToType(data['TargetNetworkCidr'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RevokeClientVpnIngressRequest;
}();
/**
 * @member {String} AccessGroupId
 */


RevokeClientVpnIngressRequest.prototype['AccessGroupId'] = undefined;
/**
 * @member {String} ClientVpnEndpointId
 */

RevokeClientVpnIngressRequest.prototype['ClientVpnEndpointId'] = undefined;
/**
 * @member {Boolean} DryRun
 */

RevokeClientVpnIngressRequest.prototype['DryRun'] = undefined;
/**
 * @member {Boolean} RevokeAllGroups
 */

RevokeClientVpnIngressRequest.prototype['RevokeAllGroups'] = undefined;
/**
 * @member {String} TargetNetworkCidr
 */

RevokeClientVpnIngressRequest.prototype['TargetNetworkCidr'] = undefined;
var _default = RevokeClientVpnIngressRequest;
exports["default"] = _default;