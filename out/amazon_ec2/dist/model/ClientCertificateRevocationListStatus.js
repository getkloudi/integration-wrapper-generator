"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ClientCertificateRevocationListStatusCode = _interopRequireDefault(require("./ClientCertificateRevocationListStatusCode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ClientCertificateRevocationListStatus model module.
 * @module model/ClientCertificateRevocationListStatus
 * @version 1.1.0
 */
var ClientCertificateRevocationListStatus =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ClientCertificateRevocationListStatus</code>.
   * Describes the state of a client certificate revocation list.
   * @alias module:model/ClientCertificateRevocationListStatus
   */
  function ClientCertificateRevocationListStatus() {
    _classCallCheck(this, ClientCertificateRevocationListStatus);

    ClientCertificateRevocationListStatus.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ClientCertificateRevocationListStatus, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ClientCertificateRevocationListStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClientCertificateRevocationListStatus} obj Optional instance to populate.
     * @return {module:model/ClientCertificateRevocationListStatus} The populated <code>ClientCertificateRevocationListStatus</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ClientCertificateRevocationListStatus();

        if (data.hasOwnProperty('Code')) {
          obj['Code'] = _ClientCertificateRevocationListStatusCode["default"].constructFromObject(data['Code']);
        }

        if (data.hasOwnProperty('Message')) {
          obj['Message'] = _ApiClient["default"].convertToType(data['Message'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ClientCertificateRevocationListStatus;
}();
/**
 * @member {module:model/ClientCertificateRevocationListStatusCode} Code
 */


ClientCertificateRevocationListStatus.prototype['Code'] = undefined;
/**
 * @member {String} Message
 */

ClientCertificateRevocationListStatus.prototype['Message'] = undefined;
var _default = ClientCertificateRevocationListStatus;
exports["default"] = _default;