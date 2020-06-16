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
 * The RegisteredWebhook model module.
 * @module model/RegisteredWebhook
 * @version 1.4.0
 */
var RegisteredWebhook = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RegisteredWebhook</code>.
   * ID of a registered webhook or error messages explaining why a webhook wasn&#39;t registered.
   * @alias module:model/RegisteredWebhook
   */
  function RegisteredWebhook() {
    _classCallCheck(this, RegisteredWebhook);

    RegisteredWebhook.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RegisteredWebhook, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RegisteredWebhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RegisteredWebhook} obj Optional instance to populate.
     * @return {module:model/RegisteredWebhook} The populated <code>RegisteredWebhook</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RegisteredWebhook();

        if (data.hasOwnProperty('createdWebhookId')) {
          obj['createdWebhookId'] = _ApiClient["default"].convertToType(data['createdWebhookId'], 'Number');
        }

        if (data.hasOwnProperty('errors')) {
          obj['errors'] = _ApiClient["default"].convertToType(data['errors'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return RegisteredWebhook;
}();
/**
 * The ID of the webhook. Returned if the webhook is created.
 * @member {Number} createdWebhookId
 */


RegisteredWebhook.prototype['createdWebhookId'] = undefined;
/**
 * Error messages specifying why the webhook creation failed.
 * @member {Array.<String>} errors
 */

RegisteredWebhook.prototype['errors'] = undefined;
var _default = RegisteredWebhook;
exports["default"] = _default;