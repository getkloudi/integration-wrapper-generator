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
 * The CertificateAuthentication model module.
 * @module model/CertificateAuthentication
 * @version 1.0.0
 */
var CertificateAuthentication =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CertificateAuthentication</code>.
   * Information about the client certificate used for authentication.
   * @alias module:model/CertificateAuthentication
   */
  function CertificateAuthentication() {
    _classCallCheck(this, CertificateAuthentication);

    CertificateAuthentication.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CertificateAuthentication, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CertificateAuthentication</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CertificateAuthentication} obj Optional instance to populate.
     * @return {module:model/CertificateAuthentication} The populated <code>CertificateAuthentication</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CertificateAuthentication();

        if (data.hasOwnProperty('ClientRootCertificateChain')) {
          obj['ClientRootCertificateChain'] = _ApiClient["default"].convertToType(data['ClientRootCertificateChain'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CertificateAuthentication;
}();
/**
 * @member {String} ClientRootCertificateChain
 */


CertificateAuthentication.prototype['ClientRootCertificateChain'] = undefined;
var _default = CertificateAuthentication;
exports["default"] = _default;