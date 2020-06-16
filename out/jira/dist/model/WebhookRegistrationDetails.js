"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _WebhookDetails = _interopRequireDefault(require("./WebhookDetails"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WebhookRegistrationDetails model module.
 * @module model/WebhookRegistrationDetails
 * @version 1.4.0
 */
var WebhookRegistrationDetails = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WebhookRegistrationDetails</code>.
   * Details of webhooks to register.
   * @alias module:model/WebhookRegistrationDetails
   * @param url {String} The URL that specifies where to send the webhooks.
   * @param webhooks {Array.<module:model/WebhookDetails>} A list of webhooks.
   */
  function WebhookRegistrationDetails(url, webhooks) {
    _classCallCheck(this, WebhookRegistrationDetails);

    WebhookRegistrationDetails.initialize(this, url, webhooks);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WebhookRegistrationDetails, null, [{
    key: "initialize",
    value: function initialize(obj, url, webhooks) {
      obj['url'] = url;
      obj['webhooks'] = webhooks;
    }
    /**
     * Constructs a <code>WebhookRegistrationDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookRegistrationDetails} obj Optional instance to populate.
     * @return {module:model/WebhookRegistrationDetails} The populated <code>WebhookRegistrationDetails</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WebhookRegistrationDetails();

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('webhooks')) {
          obj['webhooks'] = _ApiClient["default"].convertToType(data['webhooks'], [_WebhookDetails["default"]]);
        }
      }

      return obj;
    }
  }]);

  return WebhookRegistrationDetails;
}();
/**
 * The URL that specifies where to send the webhooks.
 * @member {String} url
 */


WebhookRegistrationDetails.prototype['url'] = undefined;
/**
 * A list of webhooks.
 * @member {Array.<module:model/WebhookDetails>} webhooks
 */

WebhookRegistrationDetails.prototype['webhooks'] = undefined;
var _default = WebhookRegistrationDetails;
exports["default"] = _default;