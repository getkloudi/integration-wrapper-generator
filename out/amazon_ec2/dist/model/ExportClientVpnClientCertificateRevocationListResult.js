"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ClientCertificateRevocationListStatus = _interopRequireDefault(require("./ClientCertificateRevocationListStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ExportClientVpnClientCertificateRevocationListResult model module.
 * @module model/ExportClientVpnClientCertificateRevocationListResult
 * @version 1.1.0
 */
var ExportClientVpnClientCertificateRevocationListResult =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ExportClientVpnClientCertificateRevocationListResult</code>.
   * @alias module:model/ExportClientVpnClientCertificateRevocationListResult
   */
  function ExportClientVpnClientCertificateRevocationListResult() {
    _classCallCheck(this, ExportClientVpnClientCertificateRevocationListResult);

    ExportClientVpnClientCertificateRevocationListResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ExportClientVpnClientCertificateRevocationListResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ExportClientVpnClientCertificateRevocationListResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExportClientVpnClientCertificateRevocationListResult} obj Optional instance to populate.
     * @return {module:model/ExportClientVpnClientCertificateRevocationListResult} The populated <code>ExportClientVpnClientCertificateRevocationListResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ExportClientVpnClientCertificateRevocationListResult();

        if (data.hasOwnProperty('CertificateRevocationList')) {
          obj['CertificateRevocationList'] = _ApiClient["default"].convertToType(data['CertificateRevocationList'], 'String');
        }

        if (data.hasOwnProperty('Status')) {
          obj['Status'] = _ClientCertificateRevocationListStatus["default"].constructFromObject(data['Status']);
        }
      }

      return obj;
    }
  }]);

  return ExportClientVpnClientCertificateRevocationListResult;
}();
/**
 * @member {String} CertificateRevocationList
 */


ExportClientVpnClientCertificateRevocationListResult.prototype['CertificateRevocationList'] = undefined;
/**
 * @member {module:model/ClientCertificateRevocationListStatus} Status
 */

ExportClientVpnClientCertificateRevocationListResult.prototype['Status'] = undefined;
var _default = ExportClientVpnClientCertificateRevocationListResult;
exports["default"] = _default;