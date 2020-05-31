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
 * The EmailIntegrationConfig model module.
 * @module model/EmailIntegrationConfig
 * @version 1.1.0
 */
var EmailIntegrationConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EmailIntegrationConfig</code>.
   * @alias module:model/EmailIntegrationConfig
   * @param enabled {Boolean} Enable the Email notifications globally
   */
  function EmailIntegrationConfig(enabled) {
    _classCallCheck(this, EmailIntegrationConfig);

    EmailIntegrationConfig.initialize(this, enabled);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EmailIntegrationConfig, null, [{
    key: "initialize",
    value: function initialize(obj, enabled) {
      obj['enabled'] = enabled;
    }
    /**
     * Constructs a <code>EmailIntegrationConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmailIntegrationConfig} obj Optional instance to populate.
     * @return {module:model/EmailIntegrationConfig} The populated <code>EmailIntegrationConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EmailIntegrationConfig();

        if (data.hasOwnProperty('enabled')) {
          obj['enabled'] = _ApiClient["default"].convertToType(data['enabled'], 'Boolean');
        }

        if (data.hasOwnProperty('include_request_params')) {
          obj['include_request_params'] = _ApiClient["default"].convertToType(data['include_request_params'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return EmailIntegrationConfig;
}();
/**
 * Enable the Email notifications globally
 * @member {Boolean} enabled
 */


EmailIntegrationConfig.prototype['enabled'] = undefined;
/**
 * Whether to include request parameters
 * @member {Boolean} include_request_params
 */

EmailIntegrationConfig.prototype['include_request_params'] = undefined;
var _default = EmailIntegrationConfig;
exports["default"] = _default;