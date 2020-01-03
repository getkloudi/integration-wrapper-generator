"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IKEVersionsRequestListValue = _interopRequireDefault(require("./IKEVersionsRequestListValue"));

var _Phase1DHGroupNumbersRequestListValue = _interopRequireDefault(require("./Phase1DHGroupNumbersRequestListValue"));

var _Phase1EncryptionAlgorithmsRequestListValue = _interopRequireDefault(require("./Phase1EncryptionAlgorithmsRequestListValue"));

var _Phase1IntegrityAlgorithmsRequestListValue = _interopRequireDefault(require("./Phase1IntegrityAlgorithmsRequestListValue"));

var _Phase2DHGroupNumbersRequestListValue = _interopRequireDefault(require("./Phase2DHGroupNumbersRequestListValue"));

var _Phase2EncryptionAlgorithmsRequestListValue = _interopRequireDefault(require("./Phase2EncryptionAlgorithmsRequestListValue"));

var _Phase2IntegrityAlgorithmsRequestListValue = _interopRequireDefault(require("./Phase2IntegrityAlgorithmsRequestListValue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The VpnTunnelOptionsSpecification model module.
 * @module model/VpnTunnelOptionsSpecification
 * @version 1.0.0
 */
var VpnTunnelOptionsSpecification =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>VpnTunnelOptionsSpecification</code>.
   * The tunnel options for a VPN connection.
   * @alias module:model/VpnTunnelOptionsSpecification
   */
  function VpnTunnelOptionsSpecification() {
    _classCallCheck(this, VpnTunnelOptionsSpecification);

    VpnTunnelOptionsSpecification.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VpnTunnelOptionsSpecification, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>VpnTunnelOptionsSpecification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VpnTunnelOptionsSpecification} obj Optional instance to populate.
     * @return {module:model/VpnTunnelOptionsSpecification} The populated <code>VpnTunnelOptionsSpecification</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VpnTunnelOptionsSpecification();

        if (data.hasOwnProperty('DPDTimeoutSeconds')) {
          obj['DPDTimeoutSeconds'] = _ApiClient["default"].convertToType(data['DPDTimeoutSeconds'], 'Number');
        }

        if (data.hasOwnProperty('IKEVersions')) {
          obj['IKEVersions'] = _ApiClient["default"].convertToType(data['IKEVersions'], [_IKEVersionsRequestListValue["default"]]);
        }

        if (data.hasOwnProperty('Phase1DHGroupNumbers')) {
          obj['Phase1DHGroupNumbers'] = _ApiClient["default"].convertToType(data['Phase1DHGroupNumbers'], [_Phase1DHGroupNumbersRequestListValue["default"]]);
        }

        if (data.hasOwnProperty('Phase1EncryptionAlgorithms')) {
          obj['Phase1EncryptionAlgorithms'] = _ApiClient["default"].convertToType(data['Phase1EncryptionAlgorithms'], [_Phase1EncryptionAlgorithmsRequestListValue["default"]]);
        }

        if (data.hasOwnProperty('Phase1IntegrityAlgorithms')) {
          obj['Phase1IntegrityAlgorithms'] = _ApiClient["default"].convertToType(data['Phase1IntegrityAlgorithms'], [_Phase1IntegrityAlgorithmsRequestListValue["default"]]);
        }

        if (data.hasOwnProperty('Phase1LifetimeSeconds')) {
          obj['Phase1LifetimeSeconds'] = _ApiClient["default"].convertToType(data['Phase1LifetimeSeconds'], 'Number');
        }

        if (data.hasOwnProperty('Phase2DHGroupNumbers')) {
          obj['Phase2DHGroupNumbers'] = _ApiClient["default"].convertToType(data['Phase2DHGroupNumbers'], [_Phase2DHGroupNumbersRequestListValue["default"]]);
        }

        if (data.hasOwnProperty('Phase2EncryptionAlgorithms')) {
          obj['Phase2EncryptionAlgorithms'] = _ApiClient["default"].convertToType(data['Phase2EncryptionAlgorithms'], [_Phase2EncryptionAlgorithmsRequestListValue["default"]]);
        }

        if (data.hasOwnProperty('Phase2IntegrityAlgorithms')) {
          obj['Phase2IntegrityAlgorithms'] = _ApiClient["default"].convertToType(data['Phase2IntegrityAlgorithms'], [_Phase2IntegrityAlgorithmsRequestListValue["default"]]);
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

  return VpnTunnelOptionsSpecification;
}();
/**
 * @member {Number} DPDTimeoutSeconds
 */


VpnTunnelOptionsSpecification.prototype['DPDTimeoutSeconds'] = undefined;
/**
 * @member {Array.<module:model/IKEVersionsRequestListValue>} IKEVersions
 */

VpnTunnelOptionsSpecification.prototype['IKEVersions'] = undefined;
/**
 * @member {Array.<module:model/Phase1DHGroupNumbersRequestListValue>} Phase1DHGroupNumbers
 */

VpnTunnelOptionsSpecification.prototype['Phase1DHGroupNumbers'] = undefined;
/**
 * @member {Array.<module:model/Phase1EncryptionAlgorithmsRequestListValue>} Phase1EncryptionAlgorithms
 */

VpnTunnelOptionsSpecification.prototype['Phase1EncryptionAlgorithms'] = undefined;
/**
 * @member {Array.<module:model/Phase1IntegrityAlgorithmsRequestListValue>} Phase1IntegrityAlgorithms
 */

VpnTunnelOptionsSpecification.prototype['Phase1IntegrityAlgorithms'] = undefined;
/**
 * @member {Number} Phase1LifetimeSeconds
 */

VpnTunnelOptionsSpecification.prototype['Phase1LifetimeSeconds'] = undefined;
/**
 * @member {Array.<module:model/Phase2DHGroupNumbersRequestListValue>} Phase2DHGroupNumbers
 */

VpnTunnelOptionsSpecification.prototype['Phase2DHGroupNumbers'] = undefined;
/**
 * @member {Array.<module:model/Phase2EncryptionAlgorithmsRequestListValue>} Phase2EncryptionAlgorithms
 */

VpnTunnelOptionsSpecification.prototype['Phase2EncryptionAlgorithms'] = undefined;
/**
 * @member {Array.<module:model/Phase2IntegrityAlgorithmsRequestListValue>} Phase2IntegrityAlgorithms
 */

VpnTunnelOptionsSpecification.prototype['Phase2IntegrityAlgorithms'] = undefined;
/**
 * @member {Number} Phase2LifetimeSeconds
 */

VpnTunnelOptionsSpecification.prototype['Phase2LifetimeSeconds'] = undefined;
/**
 * @member {String} PreSharedKey
 */

VpnTunnelOptionsSpecification.prototype['PreSharedKey'] = undefined;
/**
 * @member {Number} RekeyFuzzPercentage
 */

VpnTunnelOptionsSpecification.prototype['RekeyFuzzPercentage'] = undefined;
/**
 * @member {Number} RekeyMarginTimeSeconds
 */

VpnTunnelOptionsSpecification.prototype['RekeyMarginTimeSeconds'] = undefined;
/**
 * @member {Number} ReplayWindowSize
 */

VpnTunnelOptionsSpecification.prototype['ReplayWindowSize'] = undefined;
/**
 * @member {String} TunnelInsideCidr
 */

VpnTunnelOptionsSpecification.prototype['TunnelInsideCidr'] = undefined;
var _default = VpnTunnelOptionsSpecification;
exports["default"] = _default;