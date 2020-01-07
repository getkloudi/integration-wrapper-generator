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
 * The ModifyVpnConnectionRequest model module.
 * @module model/ModifyVpnConnectionRequest
 * @version 1.1.0
 */
var ModifyVpnConnectionRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ModifyVpnConnectionRequest</code>.
   * @alias module:model/ModifyVpnConnectionRequest
   * @param vpnConnectionId {String} 
   */
  function ModifyVpnConnectionRequest(vpnConnectionId) {
    _classCallCheck(this, ModifyVpnConnectionRequest);

    ModifyVpnConnectionRequest.initialize(this, vpnConnectionId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifyVpnConnectionRequest, null, [{
    key: "initialize",
    value: function initialize(obj, vpnConnectionId) {
      obj['VpnConnectionId'] = vpnConnectionId;
    }
    /**
     * Constructs a <code>ModifyVpnConnectionRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyVpnConnectionRequest} obj Optional instance to populate.
     * @return {module:model/ModifyVpnConnectionRequest} The populated <code>ModifyVpnConnectionRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifyVpnConnectionRequest();

        if (data.hasOwnProperty('CustomerGatewayId')) {
          obj['CustomerGatewayId'] = _ApiClient["default"].convertToType(data['CustomerGatewayId'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('TransitGatewayId')) {
          obj['TransitGatewayId'] = _ApiClient["default"].convertToType(data['TransitGatewayId'], 'String');
        }

        if (data.hasOwnProperty('VpnConnectionId')) {
          obj['VpnConnectionId'] = _ApiClient["default"].convertToType(data['VpnConnectionId'], 'String');
        }

        if (data.hasOwnProperty('VpnGatewayId')) {
          obj['VpnGatewayId'] = _ApiClient["default"].convertToType(data['VpnGatewayId'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ModifyVpnConnectionRequest;
}();
/**
 * @member {String} CustomerGatewayId
 */


ModifyVpnConnectionRequest.prototype['CustomerGatewayId'] = undefined;
/**
 * @member {Boolean} DryRun
 */

ModifyVpnConnectionRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} TransitGatewayId
 */

ModifyVpnConnectionRequest.prototype['TransitGatewayId'] = undefined;
/**
 * @member {String} VpnConnectionId
 */

ModifyVpnConnectionRequest.prototype['VpnConnectionId'] = undefined;
/**
 * @member {String} VpnGatewayId
 */

ModifyVpnConnectionRequest.prototype['VpnGatewayId'] = undefined;
var _default = ModifyVpnConnectionRequest;
exports["default"] = _default;