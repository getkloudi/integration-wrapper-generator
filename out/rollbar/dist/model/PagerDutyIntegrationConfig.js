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
 * The PagerDutyIntegrationConfig model module.
 * @module model/PagerDutyIntegrationConfig
 * @version 1.1.0
 */
var PagerDutyIntegrationConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PagerDutyIntegrationConfig</code>.
   * @alias module:model/PagerDutyIntegrationConfig
   * @param enabled {Boolean} Enable the PagerDuty notifications globally
   * @param serviceKey {String} PagerDuty Service API Key
   */
  function PagerDutyIntegrationConfig(enabled, serviceKey) {
    _classCallCheck(this, PagerDutyIntegrationConfig);

    PagerDutyIntegrationConfig.initialize(this, enabled, serviceKey);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PagerDutyIntegrationConfig, null, [{
    key: "initialize",
    value: function initialize(obj, enabled, serviceKey) {
      obj['enabled'] = enabled;
      obj['service_key'] = serviceKey;
    }
    /**
     * Constructs a <code>PagerDutyIntegrationConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PagerDutyIntegrationConfig} obj Optional instance to populate.
     * @return {module:model/PagerDutyIntegrationConfig} The populated <code>PagerDutyIntegrationConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PagerDutyIntegrationConfig();

        if (data.hasOwnProperty('enabled')) {
          obj['enabled'] = _ApiClient["default"].convertToType(data['enabled'], 'Boolean');
        }

        if (data.hasOwnProperty('service_key')) {
          obj['service_key'] = _ApiClient["default"].convertToType(data['service_key'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PagerDutyIntegrationConfig;
}();
/**
 * Enable the PagerDuty notifications globally
 * @member {Boolean} enabled
 */


PagerDutyIntegrationConfig.prototype['enabled'] = undefined;
/**
 * PagerDuty Service API Key
 * @member {String} service_key
 */

PagerDutyIntegrationConfig.prototype['service_key'] = undefined;
var _default = PagerDutyIntegrationConfig;
exports["default"] = _default;