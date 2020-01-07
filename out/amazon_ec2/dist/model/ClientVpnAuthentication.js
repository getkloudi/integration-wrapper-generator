"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CertificateAuthentication = _interopRequireDefault(require("./CertificateAuthentication"));

var _ClientVpnAuthenticationType = _interopRequireDefault(require("./ClientVpnAuthenticationType"));

var _DirectoryServiceAuthentication = _interopRequireDefault(require("./DirectoryServiceAuthentication"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ClientVpnAuthentication model module.
 * @module model/ClientVpnAuthentication
 * @version 1.1.0
 */
var ClientVpnAuthentication =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ClientVpnAuthentication</code>.
   * Describes the authentication methods used by a Client VPN endpoint. Client VPN supports Active Directory and mutual authentication. For more information, see &lt;a href&#x3D;\&quot;https://docs.aws.amazon.com/vpn/latest/clientvpn-admin/authentication-authrization.html#client-authentication\&quot;&gt;Authentication&lt;/a&gt; in the &lt;i&gt;AWS Client VPN Administrator Guide&lt;/i&gt;.
   * @alias module:model/ClientVpnAuthentication
   */
  function ClientVpnAuthentication() {
    _classCallCheck(this, ClientVpnAuthentication);

    ClientVpnAuthentication.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ClientVpnAuthentication, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ClientVpnAuthentication</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClientVpnAuthentication} obj Optional instance to populate.
     * @return {module:model/ClientVpnAuthentication} The populated <code>ClientVpnAuthentication</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ClientVpnAuthentication();

        if (data.hasOwnProperty('ActiveDirectory')) {
          obj['ActiveDirectory'] = _DirectoryServiceAuthentication["default"].constructFromObject(data['ActiveDirectory']);
        }

        if (data.hasOwnProperty('MutualAuthentication')) {
          obj['MutualAuthentication'] = _CertificateAuthentication["default"].constructFromObject(data['MutualAuthentication']);
        }

        if (data.hasOwnProperty('Type')) {
          obj['Type'] = _ClientVpnAuthenticationType["default"].constructFromObject(data['Type']);
        }
      }

      return obj;
    }
  }]);

  return ClientVpnAuthentication;
}();
/**
 * @member {module:model/DirectoryServiceAuthentication} ActiveDirectory
 */


ClientVpnAuthentication.prototype['ActiveDirectory'] = undefined;
/**
 * @member {module:model/CertificateAuthentication} MutualAuthentication
 */

ClientVpnAuthentication.prototype['MutualAuthentication'] = undefined;
/**
 * @member {module:model/ClientVpnAuthenticationType} Type
 */

ClientVpnAuthentication.prototype['Type'] = undefined;
var _default = ClientVpnAuthentication;
exports["default"] = _default;