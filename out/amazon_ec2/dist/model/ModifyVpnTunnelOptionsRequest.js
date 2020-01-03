"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ModifyVpnTunnelOptionsSpecification = _interopRequireDefault(require("./ModifyVpnTunnelOptionsSpecification"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ModifyVpnTunnelOptionsRequest model module.
 * @module model/ModifyVpnTunnelOptionsRequest
 * @version 1.0.0
 */
var ModifyVpnTunnelOptionsRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ModifyVpnTunnelOptionsRequest</code>.
   * @alias module:model/ModifyVpnTunnelOptionsRequest
   * @param tunnelOptions {module:model/ModifyVpnTunnelOptionsSpecification} 
   * @param vpnConnectionId {String} 
   * @param vpnTunnelOutsideIpAddress {String} 
   */
  function ModifyVpnTunnelOptionsRequest(tunnelOptions, vpnConnectionId, vpnTunnelOutsideIpAddress) {
    _classCallCheck(this, ModifyVpnTunnelOptionsRequest);

    ModifyVpnTunnelOptionsRequest.initialize(this, tunnelOptions, vpnConnectionId, vpnTunnelOutsideIpAddress);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifyVpnTunnelOptionsRequest, null, [{
    key: "initialize",
    value: function initialize(obj, tunnelOptions, vpnConnectionId, vpnTunnelOutsideIpAddress) {
      obj['TunnelOptions'] = tunnelOptions;
      obj['VpnConnectionId'] = vpnConnectionId;
      obj['VpnTunnelOutsideIpAddress'] = vpnTunnelOutsideIpAddress;
    }
    /**
     * Constructs a <code>ModifyVpnTunnelOptionsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyVpnTunnelOptionsRequest} obj Optional instance to populate.
     * @return {module:model/ModifyVpnTunnelOptionsRequest} The populated <code>ModifyVpnTunnelOptionsRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifyVpnTunnelOptionsRequest();

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('TunnelOptions')) {
          obj['TunnelOptions'] = _ModifyVpnTunnelOptionsSpecification["default"].constructFromObject(data['TunnelOptions']);
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

  return ModifyVpnTunnelOptionsRequest;
}();
/**
 * @member {Boolean} DryRun
 */


ModifyVpnTunnelOptionsRequest.prototype['DryRun'] = undefined;
/**
 * @member {module:model/ModifyVpnTunnelOptionsSpecification} TunnelOptions
 */

ModifyVpnTunnelOptionsRequest.prototype['TunnelOptions'] = undefined;
/**
 * @member {String} VpnConnectionId
 */

ModifyVpnTunnelOptionsRequest.prototype['VpnConnectionId'] = undefined;
/**
 * @member {String} VpnTunnelOutsideIpAddress
 */

ModifyVpnTunnelOptionsRequest.prototype['VpnTunnelOutsideIpAddress'] = undefined;
var _default = ModifyVpnTunnelOptionsRequest;
exports["default"] = _default;