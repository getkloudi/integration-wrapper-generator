"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AssociatedTargetNetwork = _interopRequireDefault(require("./AssociatedTargetNetwork"));

var _ClientVpnAuthentication = _interopRequireDefault(require("./ClientVpnAuthentication"));

var _ClientVpnEndpointStatus = _interopRequireDefault(require("./ClientVpnEndpointStatus"));

var _ConnectionLogResponseOptions = _interopRequireDefault(require("./ConnectionLogResponseOptions"));

var _Tag = _interopRequireDefault(require("./Tag"));

var _TransportProtocol = _interopRequireDefault(require("./TransportProtocol"));

var _VpnProtocol = _interopRequireDefault(require("./VpnProtocol"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ClientVpnEndpoint model module.
 * @module model/ClientVpnEndpoint
 * @version 1.1.0
 */
var ClientVpnEndpoint =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ClientVpnEndpoint</code>.
   * Describes a Client VPN endpoint.
   * @alias module:model/ClientVpnEndpoint
   */
  function ClientVpnEndpoint() {
    _classCallCheck(this, ClientVpnEndpoint);

    ClientVpnEndpoint.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ClientVpnEndpoint, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ClientVpnEndpoint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClientVpnEndpoint} obj Optional instance to populate.
     * @return {module:model/ClientVpnEndpoint} The populated <code>ClientVpnEndpoint</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ClientVpnEndpoint();

        if (data.hasOwnProperty('AssociatedTargetNetworks')) {
          obj['AssociatedTargetNetworks'] = _ApiClient["default"].convertToType(data['AssociatedTargetNetworks'], [_AssociatedTargetNetwork["default"]]);
        }

        if (data.hasOwnProperty('AuthenticationOptions')) {
          obj['AuthenticationOptions'] = _ApiClient["default"].convertToType(data['AuthenticationOptions'], [_ClientVpnAuthentication["default"]]);
        }

        if (data.hasOwnProperty('ClientCidrBlock')) {
          obj['ClientCidrBlock'] = _ApiClient["default"].convertToType(data['ClientCidrBlock'], 'String');
        }

        if (data.hasOwnProperty('ClientVpnEndpointId')) {
          obj['ClientVpnEndpointId'] = _ApiClient["default"].convertToType(data['ClientVpnEndpointId'], 'String');
        }

        if (data.hasOwnProperty('ConnectionLogOptions')) {
          obj['ConnectionLogOptions'] = _ConnectionLogResponseOptions["default"].constructFromObject(data['ConnectionLogOptions']);
        }

        if (data.hasOwnProperty('CreationTime')) {
          obj['CreationTime'] = _ApiClient["default"].convertToType(data['CreationTime'], 'String');
        }

        if (data.hasOwnProperty('DeletionTime')) {
          obj['DeletionTime'] = _ApiClient["default"].convertToType(data['DeletionTime'], 'String');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('DnsName')) {
          obj['DnsName'] = _ApiClient["default"].convertToType(data['DnsName'], 'String');
        }

        if (data.hasOwnProperty('DnsServers')) {
          obj['DnsServers'] = _ApiClient["default"].convertToType(data['DnsServers'], ['String']);
        }

        if (data.hasOwnProperty('ServerCertificateArn')) {
          obj['ServerCertificateArn'] = _ApiClient["default"].convertToType(data['ServerCertificateArn'], 'String');
        }

        if (data.hasOwnProperty('SplitTunnel')) {
          obj['SplitTunnel'] = _ApiClient["default"].convertToType(data['SplitTunnel'], 'Boolean');
        }

        if (data.hasOwnProperty('Status')) {
          obj['Status'] = _ClientVpnEndpointStatus["default"].constructFromObject(data['Status']);
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], [_Tag["default"]]);
        }

        if (data.hasOwnProperty('TransportProtocol')) {
          obj['TransportProtocol'] = _TransportProtocol["default"].constructFromObject(data['TransportProtocol']);
        }

        if (data.hasOwnProperty('VpnProtocol')) {
          obj['VpnProtocol'] = _VpnProtocol["default"].constructFromObject(data['VpnProtocol']);
        }
      }

      return obj;
    }
  }]);

  return ClientVpnEndpoint;
}();
/**
 * @member {Array.<module:model/AssociatedTargetNetwork>} AssociatedTargetNetworks
 */


ClientVpnEndpoint.prototype['AssociatedTargetNetworks'] = undefined;
/**
 * @member {Array.<module:model/ClientVpnAuthentication>} AuthenticationOptions
 */

ClientVpnEndpoint.prototype['AuthenticationOptions'] = undefined;
/**
 * @member {String} ClientCidrBlock
 */

ClientVpnEndpoint.prototype['ClientCidrBlock'] = undefined;
/**
 * @member {String} ClientVpnEndpointId
 */

ClientVpnEndpoint.prototype['ClientVpnEndpointId'] = undefined;
/**
 * @member {module:model/ConnectionLogResponseOptions} ConnectionLogOptions
 */

ClientVpnEndpoint.prototype['ConnectionLogOptions'] = undefined;
/**
 * @member {String} CreationTime
 */

ClientVpnEndpoint.prototype['CreationTime'] = undefined;
/**
 * @member {String} DeletionTime
 */

ClientVpnEndpoint.prototype['DeletionTime'] = undefined;
/**
 * @member {String} Description
 */

ClientVpnEndpoint.prototype['Description'] = undefined;
/**
 * @member {String} DnsName
 */

ClientVpnEndpoint.prototype['DnsName'] = undefined;
/**
 * @member {Array.<String>} DnsServers
 */

ClientVpnEndpoint.prototype['DnsServers'] = undefined;
/**
 * @member {String} ServerCertificateArn
 */

ClientVpnEndpoint.prototype['ServerCertificateArn'] = undefined;
/**
 * @member {Boolean} SplitTunnel
 */

ClientVpnEndpoint.prototype['SplitTunnel'] = undefined;
/**
 * @member {module:model/ClientVpnEndpointStatus} Status
 */

ClientVpnEndpoint.prototype['Status'] = undefined;
/**
 * @member {Array.<module:model/Tag>} Tags
 */

ClientVpnEndpoint.prototype['Tags'] = undefined;
/**
 * @member {module:model/TransportProtocol} TransportProtocol
 */

ClientVpnEndpoint.prototype['TransportProtocol'] = undefined;
/**
 * @member {module:model/VpnProtocol} VpnProtocol
 */

ClientVpnEndpoint.prototype['VpnProtocol'] = undefined;
var _default = ClientVpnEndpoint;
exports["default"] = _default;