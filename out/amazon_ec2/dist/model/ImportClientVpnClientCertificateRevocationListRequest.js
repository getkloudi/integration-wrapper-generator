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
 * The ImportClientVpnClientCertificateRevocationListRequest model module.
 * @module model/ImportClientVpnClientCertificateRevocationListRequest
 * @version 1.0.0
 */
var ImportClientVpnClientCertificateRevocationListRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ImportClientVpnClientCertificateRevocationListRequest</code>.
   * @alias module:model/ImportClientVpnClientCertificateRevocationListRequest
   * @param certificateRevocationList {String} 
   * @param clientVpnEndpointId {String} 
   */
  function ImportClientVpnClientCertificateRevocationListRequest(certificateRevocationList, clientVpnEndpointId) {
    _classCallCheck(this, ImportClientVpnClientCertificateRevocationListRequest);

    ImportClientVpnClientCertificateRevocationListRequest.initialize(this, certificateRevocationList, clientVpnEndpointId);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ImportClientVpnClientCertificateRevocationListRequest, null, [{
    key: "initialize",
    value: function initialize(obj, certificateRevocationList, clientVpnEndpointId) {
      obj['CertificateRevocationList'] = certificateRevocationList;
      obj['ClientVpnEndpointId'] = clientVpnEndpointId;
    }
    /**
     * Constructs a <code>ImportClientVpnClientCertificateRevocationListRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImportClientVpnClientCertificateRevocationListRequest} obj Optional instance to populate.
     * @return {module:model/ImportClientVpnClientCertificateRevocationListRequest} The populated <code>ImportClientVpnClientCertificateRevocationListRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ImportClientVpnClientCertificateRevocationListRequest();

        if (data.hasOwnProperty('CertificateRevocationList')) {
          obj['CertificateRevocationList'] = _ApiClient["default"].convertToType(data['CertificateRevocationList'], 'String');
        }

        if (data.hasOwnProperty('ClientVpnEndpointId')) {
          obj['ClientVpnEndpointId'] = _ApiClient["default"].convertToType(data['ClientVpnEndpointId'], 'String');
        }

        if (data.hasOwnProperty('DryRun')) {
          obj['DryRun'] = _ApiClient["default"].convertToType(data['DryRun'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return ImportClientVpnClientCertificateRevocationListRequest;
}();
/**
 * @member {String} CertificateRevocationList
 */


ImportClientVpnClientCertificateRevocationListRequest.prototype['CertificateRevocationList'] = undefined;
/**
 * @member {String} ClientVpnEndpointId
 */

ImportClientVpnClientCertificateRevocationListRequest.prototype['ClientVpnEndpointId'] = undefined;
/**
 * @member {Boolean} DryRun
 */

ImportClientVpnClientCertificateRevocationListRequest.prototype['DryRun'] = undefined;
var _default = ImportClientVpnClientCertificateRevocationListRequest;
exports["default"] = _default;