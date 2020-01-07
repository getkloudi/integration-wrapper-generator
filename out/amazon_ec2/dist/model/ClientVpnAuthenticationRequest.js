"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CertificateAuthenticationRequest = _interopRequireDefault(require("./CertificateAuthenticationRequest"));

var _ClientVpnAuthenticationType = _interopRequireDefault(require("./ClientVpnAuthenticationType"));

var _DirectoryServiceAuthenticationRequest = _interopRequireDefault(require("./DirectoryServiceAuthenticationRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ClientVpnAuthenticationRequest model module.
 * @module model/ClientVpnAuthenticationRequest
 * @version 1.1.0
 */
var ClientVpnAuthenticationRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ClientVpnAuthenticationRequest</code>.
   * Describes the authentication method to be used by a Client VPN endpoint. Client VPN supports Active Directory and mutual authentication. For more information, see &lt;a href&#x3D;\&quot;https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/authentication-authrization.html#client-authentication\&quot;&gt;Authentication&lt;/a&gt; in the &lt;i&gt;AWS Client VPN Administrator Guide&lt;/i&gt;.
   * @alias module:model/ClientVpnAuthenticationRequest
   */
  function ClientVpnAuthenticationRequest() {
    _classCallCheck(this, ClientVpnAuthenticationRequest);

    ClientVpnAuthenticationRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ClientVpnAuthenticationRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ClientVpnAuthenticationRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClientVpnAuthenticationRequest} obj Optional instance to populate.
     * @return {module:model/ClientVpnAuthenticationRequest} The populated <code>ClientVpnAuthenticationRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ClientVpnAuthenticationRequest();

        if (data.hasOwnProperty('ActiveDirectory')) {
          obj['ActiveDirectory'] = _DirectoryServiceAuthenticationRequest["default"].constructFromObject(data['ActiveDirectory']);
        }

        if (data.hasOwnProperty('MutualAuthentication')) {
          obj['MutualAuthentication'] = _CertificateAuthenticationRequest["default"].constructFromObject(data['MutualAuthentication']);
        }

        if (data.hasOwnProperty('Type')) {
          obj['Type'] = _ClientVpnAuthenticationType["default"].constructFromObject(data['Type']);
        }
      }

      return obj;
    }
  }]);

  return ClientVpnAuthenticationRequest;
}();
/**
 * @member {module:model/DirectoryServiceAuthenticationRequest} ActiveDirectory
 */


ClientVpnAuthenticationRequest.prototype['ActiveDirectory'] = undefined;
/**
 * @member {module:model/CertificateAuthenticationRequest} MutualAuthentication
 */

ClientVpnAuthenticationRequest.prototype['MutualAuthentication'] = undefined;
/**
 * @member {module:model/ClientVpnAuthenticationType} Type
 */

ClientVpnAuthenticationRequest.prototype['Type'] = undefined;
var _default = ClientVpnAuthenticationRequest;
exports["default"] = _default;