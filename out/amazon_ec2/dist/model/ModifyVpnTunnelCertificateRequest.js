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
 * The ModifyVpnTunnelCertificateRequest model module.
 * @module model/ModifyVpnTunnelCertificateRequest
 * @version 1.1.0
 */
var ModifyVpnTunnelCertificateRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ModifyVpnTunnelCertificateRequest</code>.
   * @alias module:model/ModifyVpnTunnelCertificateRequest
   * @param vpnConnectionId {String} 
   * @param vpnTunnelOutsideIpAddress {String} 
   */
  function ModifyVpnTunnelCertificateRequest(vpnConnectionId, vpnTunnelOutsideIpAddress) {
    _classCallCheck(this, ModifyVpnTunnelCertificateRequest);

    ModifyVpnTunnelCertificateRequest.initialize(this, vpnConnectionId, vpnTunnelOutsideIpAddress);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifyVpnTunnelCertificateRequest, null, [{
    key: "initialize",
    value: function initialize(obj, vpnConnectionId, vpnTunnelOutsideIpAddress) {
      obj['VpnConnectionId'] = vpnConnectionId;
      obj['VpnTunnelOutsideIpAddress'] = vpnTunnelOutsideIpAddress;
    }
    /**
     * Constructs a <code>ModifyVpnTunnelCertificateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyVpnTunnelCertificateRequest} obj Optional instance to populate.
     * @return {module:model/ModifyVpnTunnelCertificateRequest} The populated <code>ModifyVpnTunnelCertificateRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifyVpnTunnelCertificateRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('VpnConnectionId')) {
          obj['VpnConnectionId'] = _ApiClient["default"].convertToType(data['VpnConnectionId'], 'String');
        }

        if (data.hasOwnProperty('VpnTunnelOutsideIpAddress')) {
          obj['VpnTunnelOutsideIpAddress'] = _ApiClient["default"].convertToType(data['VpnTunnelOutsideIpAddress'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ModifyVpnTunnelCertificateRequest;
}();
/**
 * @member {Boolean} DryRun
 */


ModifyVpnTunnelCertificateRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} VpnConnectionId
 */

ModifyVpnTunnelCertificateRequest.prototype['VpnConnectionId'] = undefined;
/**
 * @member {String} VpnTunnelOutsideIpAddress
 */

ModifyVpnTunnelCertificateRequest.prototype['VpnTunnelOutsideIpAddress'] = undefined;
var _default = ModifyVpnTunnelCertificateRequest;
exports["default"] = _default;