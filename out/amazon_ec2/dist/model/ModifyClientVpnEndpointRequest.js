"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ConnectionLogOptions = _interopRequireDefault(require("./ConnectionLogOptions"));

var _DnsServersOptionsModifyStructure = _interopRequireDefault(require("./DnsServersOptionsModifyStructure"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ModifyClientVpnEndpointRequest model module.
 * @module model/ModifyClientVpnEndpointRequest
 * @version 1.1.0
 */
var ModifyClientVpnEndpointRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ModifyClientVpnEndpointRequest</code>.
   * @alias module:model/ModifyClientVpnEndpointRequest
   * @param clientVpnEndpointId {String} 
   */
  function ModifyClientVpnEndpointRequest(clientVpnEndpointId) {
    _classCallCheck(this, ModifyClientVpnEndpointRequest);

    ModifyClientVpnEndpointRequest.initialize(this, clientVpnEndpointId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ModifyClientVpnEndpointRequest, null, [{
    key: "initialize",
    value: function initialize(obj, clientVpnEndpointId) {
      obj['ClientVpnEndpointId'] = clientVpnEndpointId;
    }
    /**
     * Constructs a <code>ModifyClientVpnEndpointRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ModifyClientVpnEndpointRequest} obj Optional instance to populate.
     * @return {module:model/ModifyClientVpnEndpointRequest} The populated <code>ModifyClientVpnEndpointRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ModifyClientVpnEndpointRequest();

        if (data.hasOwnProperty('ClientVpnEndpointId')) {
          obj['ClientVpnEndpointId'] = _ApiClient["default"].convertToType(data['ClientVpnEndpointId'], 'String');
        }

        if (data.hasOwnProperty('ConnectionLogOptions')) {
          obj['ConnectionLogOptions'] = _ConnectionLogOptions["default"].constructFromObject(data['ConnectionLogOptions']);
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('DnsServers')) {
          obj['DnsServers'] = _DnsServersOptionsModifyStructure["default"].constructFromObject(data['DnsServers']);
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }

        if (data.hasOwnProperty('ServerCertificateArn')) {
          obj['ServerCertificateArn'] = _ApiClient["default"].convertToType(data['ServerCertificateArn'], 'String');
        }

        if (data.hasOwnProperty('SplitTunnel')) {
          obj['SplitTunnel'] = _ApiClient["default"].convertToType(data['SplitTunnel'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return ModifyClientVpnEndpointRequest;
}();
/**
 * @member {String} ClientVpnEndpointId
 */


ModifyClientVpnEndpointRequest.prototype['ClientVpnEndpointId'] = undefined;
/**
 * @member {module:model/ConnectionLogOptions} ConnectionLogOptions
 */

ModifyClientVpnEndpointRequest.prototype['ConnectionLogOptions'] = undefined;
/**
 * @member {String} Description
 */

ModifyClientVpnEndpointRequest.prototype['Description'] = undefined;
/**
 * @member {module:model/DnsServersOptionsModifyStructure} DnsServers
 */

ModifyClientVpnEndpointRequest.prototype['DnsServers'] = undefined;
/**
 * @member {Boolean} DryRun
 */

ModifyClientVpnEndpointRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} ServerCertificateArn
 */

ModifyClientVpnEndpointRequest.prototype['ServerCertificateArn'] = undefined;
/**
 * @member {Boolean} SplitTunnel
 */

ModifyClientVpnEndpointRequest.prototype['SplitTunnel'] = undefined;
var _default = ModifyClientVpnEndpointRequest;
exports["default"] = _default;