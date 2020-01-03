"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IKEVersionsListValue = _interopRequireDefault(require("./IKEVersionsListValue"));

var _Phase1DHGroupNumbersListValue = _interopRequireDefault(require("./Phase1DHGroupNumbersListValue"));

var _Phase1EncryptionAlgorithmsListValue = _interopRequireDefault(require("./Phase1EncryptionAlgorithmsListValue"));

var _Phase1IntegrityAlgorithmsListValue = _interopRequireDefault(require("./Phase1IntegrityAlgorithmsListValue"));

var _Phase2DHGroupNumbersListValue = _interopRequireDefault(require("./Phase2DHGroupNumbersListValue"));

var _Phase2EncryptionAlgorithmsListValue = _interopRequireDefault(require("./Phase2EncryptionAlgorithmsListValue"));

var _Phase2IntegrityAlgorithmsListValue = _interopRequireDefault(require("./Phase2IntegrityAlgorithmsListValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TunnelOption model module.
 * @module model/TunnelOption
 * @version 1.0.0
 */
var TunnelOption =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>TunnelOption</code>.
   * The VPN tunnel options.
   * @alias module:model/TunnelOption
   */
  function TunnelOption() {
    _classCallCheck(this, TunnelOption);

    TunnelOption.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TunnelOption, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TunnelOption</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TunnelOption} obj Optional instance to populate.
     * @return {module:model/TunnelOption} The populated <code>TunnelOption</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TunnelOption();

        if (data.hasOwnProperty('DpdTimeoutSeconds')) {
          obj['DpdTimeoutSeconds'] = _ApiClient["default"].convertToType(data['DpdTimeoutSeconds'], 'Number');
        }

        if (data.hasOwnProperty('IkeVersions')) {
          obj['IkeVersions'] = _ApiClient["default"].convertToType(data['IkeVersions'], [_IKEVersionsListValue["default"]]);
        }

        if (data.hasOwnProperty('OutsideIpAddress')) {
          obj['OutsideIpAddress'] = _ApiClient["default"].convertToType(data['OutsideIpAddress'], 'String');
        }

        if (data.hasOwnProperty('Phase1DHGroupNumbers')) {
          obj['Phase1DHGroupNumbers'] = _ApiClient["default"].convertToType(data['Phase1DHGroupNumbers'], [_Phase1DHGroupNumbersListValue["default"]]);
        }

        if (data.hasOwnProperty('Phase1EncryptionAlgorithms')) {
          obj['Phase1EncryptionAlgorithms'] = _ApiClient["default"].convertToType(data['Phase1EncryptionAlgorithms'], [_Phase1EncryptionAlgorithmsListValue["default"]]);
        }

        if (data.hasOwnProperty('Phase1IntegrityAlgorithms')) {
          obj['Phase1IntegrityAlgorithms'] = _ApiClient["default"].convertToType(data['Phase1IntegrityAlgorithms'], [_Phase1IntegrityAlgorithmsListValue["default"]]);
        }

        if (data.hasOwnProperty('Phase1LifetimeSeconds')) {
          obj['Phase1LifetimeSeconds'] = _ApiClient["default"].convertToType(data['Phase1LifetimeSeconds'], 'Number');
        }

        if (data.hasOwnProperty('Phase2DHGroupNumbers')) {
          obj['Phase2DHGroupNumbers'] = _ApiClient["default"].convertToType(data['Phase2DHGroupNumbers'], [_Phase2DHGroupNumbersListValue["default"]]);
        }

        if (data.hasOwnProperty('Phase2EncryptionAlgorithms')) {
          obj['Phase2EncryptionAlgorithms'] = _ApiClient["default"].convertToType(data['Phase2EncryptionAlgorithms'], [_Phase2EncryptionAlgorithmsListValue["default"]]);
        }

        if (data.hasOwnProperty('Phase2IntegrityAlgorithms')) {
          obj['Phase2IntegrityAlgorithms'] = _ApiClient["default"].convertToType(data['Phase2IntegrityAlgorithms'], [_Phase2IntegrityAlgorithmsListValue["default"]]);
        }

        if (data.hasOwnProperty('Phase2LifetimeSeconds')) {
          obj['Phase2LifetimeSeconds'] = _ApiClient["default"].convertToType(data['Phase2LifetimeSeconds'], 'Number');
        }

        if (data.hasOwnProperty('PreSharedKey')) {
          obj['PreSharedKey'] = _ApiClient["default"].convertToType(data['PreSharedKey'], 'String');
        }

        if (data.hasOwnProperty('RekeyFuzzPercentage')) {
          obj['RekeyFuzzPercentage'] = _ApiClient["default"].convertToType(data['RekeyFuzzPercentage'], 'Number');
        }

        if (data.hasOwnProperty('RekeyMarginTimeSeconds')) {
          obj['RekeyMarginTimeSeconds'] = _ApiClient["default"].convertToType(data['RekeyMarginTimeSeconds'], 'Number');
        }

        if (data.hasOwnProperty('ReplayWindowSize')) {
          obj['ReplayWindowSize'] = _ApiClient["default"].convertToType(data['ReplayWindowSize'], 'Number');
        }

        if (data.hasOwnProperty('TunnelInsideCidr')) {
          obj['TunnelInsideCidr'] = _ApiClient["default"].convertToType(data['TunnelInsideCidr'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TunnelOption;
}();
/**
 * @member {Number} DpdTimeoutSeconds
 */


TunnelOption.prototype['DpdTimeoutSeconds'] = undefined;
/**
 * @member {Array.<module:model/IKEVersionsListValue>} IkeVersions
 */

TunnelOption.prototype['IkeVersions'] = undefined;
/**
 * @member {String} OutsideIpAddress
 */

TunnelOption.prototype['OutsideIpAddress'] = undefined;
/**
 * @member {Array.<module:model/Phase1DHGroupNumbersListValue>} Phase1DHGroupNumbers
 */

TunnelOption.prototype['Phase1DHGroupNumbers'] = undefined;
/**
 * @member {Array.<module:model/Phase1EncryptionAlgorithmsListValue>} Phase1EncryptionAlgorithms
 */

TunnelOption.prototype['Phase1EncryptionAlgorithms'] = undefined;
/**
 * @member {Array.<module:model/Phase1IntegrityAlgorithmsListValue>} Phase1IntegrityAlgorithms
 */

TunnelOption.prototype['Phase1IntegrityAlgorithms'] = undefined;
/**
 * @member {Number} Phase1LifetimeSeconds
 */

TunnelOption.prototype['Phase1LifetimeSeconds'] = undefined;
/**
 * @member {Array.<module:model/Phase2DHGroupNumbersListValue>} Phase2DHGroupNumbers
 */

TunnelOption.prototype['Phase2DHGroupNumbers'] = undefined;
/**
 * @member {Array.<module:model/Phase2EncryptionAlgorithmsListValue>} Phase2EncryptionAlgorithms
 */

TunnelOption.prototype['Phase2EncryptionAlgorithms'] = undefined;
/**
 * @member {Array.<module:model/Phase2IntegrityAlgorithmsListValue>} Phase2IntegrityAlgorithms
 */

TunnelOption.prototype['Phase2IntegrityAlgorithms'] = undefined;
/**
 * @member {Number} Phase2LifetimeSeconds
 */

TunnelOption.prototype['Phase2LifetimeSeconds'] = undefined;
/**
 * @member {String} PreSharedKey
 */

TunnelOption.prototype['PreSharedKey'] = undefined;
/**
 * @member {Number} RekeyFuzzPercentage
 */

TunnelOption.prototype['RekeyFuzzPercentage'] = undefined;
/**
 * @member {Number} RekeyMarginTimeSeconds
 */

TunnelOption.prototype['RekeyMarginTimeSeconds'] = undefined;
/**
 * @member {Number} ReplayWindowSize
 */

TunnelOption.prototype['ReplayWindowSize'] = undefined;
/**
 * @member {String} TunnelInsideCidr
 */

TunnelOption.prototype['TunnelInsideCidr'] = undefined;
var _default = TunnelOption;
exports["default"] = _default;