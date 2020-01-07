"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ClientVpnConnectionStatus = _interopRequireDefault(require("./ClientVpnConnectionStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ClientVpnConnection model module.
 * @module model/ClientVpnConnection
 * @version 1.1.0
 */
var ClientVpnConnection =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ClientVpnConnection</code>.
   * Describes a client connection.
   * @alias module:model/ClientVpnConnection
   */
  function ClientVpnConnection() {
    _classCallCheck(this, ClientVpnConnection);

    ClientVpnConnection.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ClientVpnConnection, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ClientVpnConnection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClientVpnConnection} obj Optional instance to populate.
     * @return {module:model/ClientVpnConnection} The populated <code>ClientVpnConnection</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ClientVpnConnection();

        if (data.hasOwnProperty('ClientIp')) {
          obj['ClientIp'] = _ApiClient["default"].convertToType(data['ClientIp'], 'String');
        }

        if (data.hasOwnProperty('ClientVpnEndpointId')) {
          obj['ClientVpnEndpointId'] = _ApiClient["default"].convertToType(data['ClientVpnEndpointId'], 'String');
        }

        if (data.hasOwnProperty('CommonName')) {
          obj['CommonName'] = _ApiClient["default"].convertToType(data['CommonName'], 'String');
        }

        if (data.hasOwnProperty('ConnectionEndTime')) {
          obj['ConnectionEndTime'] = _ApiClient["default"].convertToType(data['ConnectionEndTime'], 'String');
        }

        if (data.hasOwnProperty('ConnectionEstablishedTime')) {
          obj['ConnectionEstablishedTime'] = _ApiClient["default"].convertToType(data['ConnectionEstablishedTime'], 'String');
        }

        if (data.hasOwnProperty('ConnectionId')) {
          obj['ConnectionId'] = _ApiClient["default"].convertToType(data['ConnectionId'], 'String');
        }

        if (data.hasOwnProperty('EgressBytes')) {
          obj['EgressBytes'] = _ApiClient["default"].convertToType(data['EgressBytes'], 'String');
        }

        if (data.hasOwnProperty('EgressPackets')) {
          obj['EgressPackets'] = _ApiClient["default"].convertToType(data['EgressPackets'], 'String');
        }

        if (data.hasOwnProperty('IngressBytes')) {
          obj['IngressBytes'] = _ApiClient["default"].convertToType(data['IngressBytes'], 'String');
        }

        if (data.hasOwnProperty('IngressPackets')) {
          obj['IngressPackets'] = _ApiClient["default"].convertToType(data['IngressPackets'], 'String');
        }

        if (data.hasOwnProperty('Status')) {
          obj['Status'] = _ClientVpnConnectionStatus["default"].constructFromObject(data['Status']);
        }

        if (data.hasOwnProperty('Timestamp')) {
          obj['Timestamp'] = _ApiClient["default"].convertToType(data['Timestamp'], 'String');
        }

        if (data.hasOwnProperty('Username')) {
          obj['Username'] = _ApiClient["default"].convertToType(data['Username'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ClientVpnConnection;
}();
/**
 * @member {String} ClientIp
 */


ClientVpnConnection.prototype['ClientIp'] = undefined;
/**
 * @member {String} ClientVpnEndpointId
 */

ClientVpnConnection.prototype['ClientVpnEndpointId'] = undefined;
/**
 * @member {String} CommonName
 */

ClientVpnConnection.prototype['CommonName'] = undefined;
/**
 * @member {String} ConnectionEndTime
 */

ClientVpnConnection.prototype['ConnectionEndTime'] = undefined;
/**
 * @member {String} ConnectionEstablishedTime
 */

ClientVpnConnection.prototype['ConnectionEstablishedTime'] = undefined;
/**
 * @member {String} ConnectionId
 */

ClientVpnConnection.prototype['ConnectionId'] = undefined;
/**
 * @member {String} EgressBytes
 */

ClientVpnConnection.prototype['EgressBytes'] = undefined;
/**
 * @member {String} EgressPackets
 */

ClientVpnConnection.prototype['EgressPackets'] = undefined;
/**
 * @member {String} IngressBytes
 */

ClientVpnConnection.prototype['IngressBytes'] = undefined;
/**
 * @member {String} IngressPackets
 */

ClientVpnConnection.prototype['IngressPackets'] = undefined;
/**
 * @member {module:model/ClientVpnConnectionStatus} Status
 */

ClientVpnConnection.prototype['Status'] = undefined;
/**
 * @member {String} Timestamp
 */

ClientVpnConnection.prototype['Timestamp'] = undefined;
/**
 * @member {String} Username
 */

ClientVpnConnection.prototype['Username'] = undefined;
var _default = ClientVpnConnection;
exports["default"] = _default;