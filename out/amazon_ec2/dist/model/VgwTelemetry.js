"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TelemetryStatus = _interopRequireDefault(require("./TelemetryStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The VgwTelemetry model module.
 * @module model/VgwTelemetry
 * @version 1.1.0
 */
var VgwTelemetry =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>VgwTelemetry</code>.
   * Describes telemetry for a VPN tunnel.
   * @alias module:model/VgwTelemetry
   */
  function VgwTelemetry() {
    _classCallCheck(this, VgwTelemetry);

    VgwTelemetry.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VgwTelemetry, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>VgwTelemetry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VgwTelemetry} obj Optional instance to populate.
     * @return {module:model/VgwTelemetry} The populated <code>VgwTelemetry</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VgwTelemetry();

        if (data.hasOwnProperty('AcceptedRouteCount')) {
          obj['AcceptedRouteCount'] = _ApiClient["default"].convertToType(data['AcceptedRouteCount'], 'Number');
        }

        if (data.hasOwnProperty('CertificateArn')) {
          obj['CertificateArn'] = _ApiClient["default"].convertToType(data['CertificateArn'], 'String');
        }

        if (data.hasOwnProperty('LastStatusChange')) {
          obj['LastStatusChange'] = _ApiClient["default"].convertToType(data['LastStatusChange'], 'Date');
        }

        if (data.hasOwnProperty('OutsideIpAddress')) {
          obj['OutsideIpAddress'] = _ApiClient["default"].convertToType(data['OutsideIpAddress'], 'String');
        }

        if (data.hasOwnProperty('Status')) {
          obj['Status'] = _TelemetryStatus["default"].constructFromObject(data['Status']);
        }

        if (data.hasOwnProperty('StatusMessage')) {
          obj['StatusMessage'] = _ApiClient["default"].convertToType(data['StatusMessage'], 'String');
        }
      }

      return obj;
    }
  }]);

  return VgwTelemetry;
}();
/**
 * @member {Number} AcceptedRouteCount
 */


VgwTelemetry.prototype['AcceptedRouteCount'] = undefined;
/**
 * @member {String} CertificateArn
 */

VgwTelemetry.prototype['CertificateArn'] = undefined;
/**
 * @member {Date} LastStatusChange
 */

VgwTelemetry.prototype['LastStatusChange'] = undefined;
/**
 * @member {String} OutsideIpAddress
 */

VgwTelemetry.prototype['OutsideIpAddress'] = undefined;
/**
 * @member {module:model/TelemetryStatus} Status
 */

VgwTelemetry.prototype['Status'] = undefined;
/**
 * @member {String} StatusMessage
 */

VgwTelemetry.prototype['StatusMessage'] = undefined;
var _default = VgwTelemetry;
exports["default"] = _default;