"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ClientVpnAuthenticationRequest = _interopRequireDefault(require("./ClientVpnAuthenticationRequest"));

var _ConnectionLogOptions = _interopRequireDefault(require("./ConnectionLogOptions"));

var _TagSpecification = _interopRequireDefault(require("./TagSpecification"));

var _TransportProtocol = _interopRequireDefault(require("./TransportProtocol"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CreateClientVpnEndpointRequest model module.
 * @module model/CreateClientVpnEndpointRequest
 * @version 1.1.0
 */
var CreateClientVpnEndpointRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CreateClientVpnEndpointRequest</code>.
   * @alias module:model/CreateClientVpnEndpointRequest
   * @param authenticationOptions {Array.<module:model/ClientVpnAuthenticationRequest>} 
   * @param clientCidrBlock {String} 
   * @param connectionLogOptions {module:model/ConnectionLogOptions} 
   * @param serverCertificateArn {String} 
   */
  function CreateClientVpnEndpointRequest(authenticationOptions, clientCidrBlock, connectionLogOptions, serverCertificateArn) {
    _classCallCheck(this, CreateClientVpnEndpointRequest);

    CreateClientVpnEndpointRequest.initialize(this, authenticationOptions, clientCidrBlock, connectionLogOptions, serverCertificateArn);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateClientVpnEndpointRequest, null, [{
    key: "initialize",
    value: function initialize(obj, authenticationOptions, clientCidrBlock, connectionLogOptions, serverCertificateArn) {
      obj['AuthenticationOptions'] = authenticationOptions;
      obj['ClientCidrBlock'] = clientCidrBlock;
      obj['ConnectionLogOptions'] = connectionLogOptions;
      obj['ServerCertificateArn'] = serverCertificateArn;
    }
    /**
     * Constructs a <code>CreateClientVpnEndpointRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateClientVpnEndpointRequest} obj Optional instance to populate.
     * @return {module:model/CreateClientVpnEndpointRequest} The populated <code>CreateClientVpnEndpointRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateClientVpnEndpointRequest();

        if (data.hasOwnProperty('AuthenticationOptions')) {
          obj['AuthenticationOptions'] = _ApiClient["default"].convertToType(data['AuthenticationOptions'], [_ClientVpnAuthenticationRequest["default"]]);
        }

        if (data.hasOwnProperty('ClientCidrBlock')) {
          obj['ClientCidrBlock'] = _ApiClient["default"].convertToType(data['ClientCidrBlock'], 'String');
        }

        if (data.hasOwnProperty('ClientToken')) {
          obj['ClientToken'] = _ApiClient["default"].convertToType(data['ClientToken'], 'String');
        }

        if (data.hasOwnProperty('ConnectionLogOptions')) {
          obj['ConnectionLogOptions'] = _ConnectionLogOptions["default"].constructFromObject(data['ConnectionLogOptions']);
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('DnsServers')) {
          obj['DnsServers'] = _ApiClient["default"].convertToType(data['DnsServers'], ['String']);
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

        if (data.hasOwnProperty('TagSpecifications')) {
          obj['TagSpecifications'] = _ApiClient["default"].convertToType(data['TagSpecifications'], [_TagSpecification["default"]]);
        }

        if (data.hasOwnProperty('TransportProtocol')) {
          obj['TransportProtocol'] = _TransportProtocol["default"].constructFromObject(data['TransportProtocol']);
        }
      }

      return obj;
    }
  }]);

  return CreateClientVpnEndpointRequest;
}();
/**
 * @member {Array.<module:model/ClientVpnAuthenticationRequest>} AuthenticationOptions
 */


CreateClientVpnEndpointRequest.prototype['AuthenticationOptions'] = undefined;
/**
 * @member {String} ClientCidrBlock
 */

CreateClientVpnEndpointRequest.prototype['ClientCidrBlock'] = undefined;
/**
 * @member {String} ClientToken
 */

CreateClientVpnEndpointRequest.prototype['ClientToken'] = undefined;
/**
 * @member {module:model/ConnectionLogOptions} ConnectionLogOptions
 */

CreateClientVpnEndpointRequest.prototype['ConnectionLogOptions'] = undefined;
/**
 * @member {String} Description
 */

CreateClientVpnEndpointRequest.prototype['Description'] = undefined;
/**
 * @member {Array.<String>} DnsServers
 */

CreateClientVpnEndpointRequest.prototype['DnsServers'] = undefined;
/**
 * @member {Boolean} DryRun
 */

CreateClientVpnEndpointRequest.prototype['DryRun'] = undefined;
/**
 * @member {String} ServerCertificateArn
 */

CreateClientVpnEndpointRequest.prototype['ServerCertificateArn'] = undefined;
/**
 * @member {Boolean} SplitTunnel
 */

CreateClientVpnEndpointRequest.prototype['SplitTunnel'] = undefined;
/**
 * @member {Array.<module:model/TagSpecification>} TagSpecifications
 */

CreateClientVpnEndpointRequest.prototype['TagSpecifications'] = undefined;
/**
 * @member {module:model/TransportProtocol} TransportProtocol
 */

CreateClientVpnEndpointRequest.prototype['TransportProtocol'] = undefined;
var _default = CreateClientVpnEndpointRequest;
exports["default"] = _default;