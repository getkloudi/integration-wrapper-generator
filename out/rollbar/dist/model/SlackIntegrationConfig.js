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
 * The SlackIntegrationConfig model module.
 * @module model/SlackIntegrationConfig
 * @version 1.1.0
 */
var SlackIntegrationConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SlackIntegrationConfig</code>.
   * @alias module:model/SlackIntegrationConfig
   * @param enabled {Boolean} Enable the Slack notifications globally
   * @param serviceAccountId {Number} You can find your Service Account ID in https://rollbar.com/settings/integrations/#slack
   * @param channel {String} The default Slack channel to send the messages
   */
  function SlackIntegrationConfig(enabled, serviceAccountId, channel) {
    _classCallCheck(this, SlackIntegrationConfig);

    SlackIntegrationConfig.initialize(this, enabled, serviceAccountId, channel);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SlackIntegrationConfig, null, [{
    key: "initialize",
    value: function initialize(obj, enabled, serviceAccountId, channel) {
      obj['enabled'] = enabled;
      obj['service_account_id'] = serviceAccountId;
      obj['channel'] = channel;
    }
    /**
     * Constructs a <code>SlackIntegrationConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SlackIntegrationConfig} obj Optional instance to populate.
     * @return {module:model/SlackIntegrationConfig} The populated <code>SlackIntegrationConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SlackIntegrationConfig();

        if (data.hasOwnProperty('enabled')) {
          obj['enabled'] = _ApiClient["default"].convertToType(data['enabled'], 'Boolean');
        }

        if (data.hasOwnProperty('service_account_id')) {
          obj['service_account_id'] = _ApiClient["default"].convertToType(data['service_account_id'], 'Number');
        }

        if (data.hasOwnProperty('channel')) {
          obj['channel'] = _ApiClient["default"].convertToType(data['channel'], 'String');
        }

        if (data.hasOwnProperty('show_message_buttons')) {
          obj['show_message_buttons'] = _ApiClient["default"].convertToType(data['show_message_buttons'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return SlackIntegrationConfig;
}();
/**
 * Enable the Slack notifications globally
 * @member {Boolean} enabled
 */


SlackIntegrationConfig.prototype['enabled'] = undefined;
/**
 * You can find your Service Account ID in https://rollbar.com/settings/integrations/#slack
 * @member {Number} service_account_id
 */

SlackIntegrationConfig.prototype['service_account_id'] = undefined;
/**
 * The default Slack channel to send the messages
 * @member {String} channel
 */

SlackIntegrationConfig.prototype['channel'] = undefined;
/**
 * Show the Slack actionable buttons
 * @member {Boolean} show_message_buttons
 */

SlackIntegrationConfig.prototype['show_message_buttons'] = undefined;
var _default = SlackIntegrationConfig;
exports["default"] = _default;