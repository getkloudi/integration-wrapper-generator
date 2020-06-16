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
 * The FailedWebhook model module.
 * @module model/FailedWebhook
 * @version 1.4.0
 */
var FailedWebhook = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FailedWebhook</code>.
   * Details about a failed webhook.
   * @alias module:model/FailedWebhook
   * @param failureTime {Number} The time the webhook was added to the list of failed webhooks (that is, the time of the last failed retry).
   * @param id {String} The webhook ID, as sent in the `X-Atlassian-Webhook-Identifier` header with the webhook.
   * @param url {String} The original webhook destination.
   */
  function FailedWebhook(failureTime, id, url) {
    _classCallCheck(this, FailedWebhook);

    FailedWebhook.initialize(this, failureTime, id, url);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FailedWebhook, null, [{
    key: "initialize",
    value: function initialize(obj, failureTime, id, url) {
      obj['failureTime'] = failureTime;
      obj['id'] = id;
      obj['url'] = url;
    }
    /**
     * Constructs a <code>FailedWebhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FailedWebhook} obj Optional instance to populate.
     * @return {module:model/FailedWebhook} The populated <code>FailedWebhook</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FailedWebhook();

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], 'String');
        }

        if (data.hasOwnProperty('failureTime')) {
          obj['failureTime'] = _ApiClient["default"].convertToType(data['failureTime'], 'Number');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return FailedWebhook;
}();
/**
 * The webhook body.
 * @member {String} body
 */


FailedWebhook.prototype['body'] = undefined;
/**
 * The time the webhook was added to the list of failed webhooks (that is, the time of the last failed retry).
 * @member {Number} failureTime
 */

FailedWebhook.prototype['failureTime'] = undefined;
/**
 * The webhook ID, as sent in the `X-Atlassian-Webhook-Identifier` header with the webhook.
 * @member {String} id
 */

FailedWebhook.prototype['id'] = undefined;
/**
 * The original webhook destination.
 * @member {String} url
 */

FailedWebhook.prototype['url'] = undefined;
var _default = FailedWebhook;
exports["default"] = _default;