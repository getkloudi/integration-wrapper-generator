"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RegisteredWebhook = _interopRequireDefault(require("./RegisteredWebhook"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ContainerForRegisteredWebhooks model module.
 * @module model/ContainerForRegisteredWebhooks
 * @version 1.4.0
 */
var ContainerForRegisteredWebhooks = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ContainerForRegisteredWebhooks</code>.
   * Container for a list of registered webhooks. Webhook details are returned in the same order as the request.
   * @alias module:model/ContainerForRegisteredWebhooks
   */
  function ContainerForRegisteredWebhooks() {
    _classCallCheck(this, ContainerForRegisteredWebhooks);

    ContainerForRegisteredWebhooks.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ContainerForRegisteredWebhooks, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ContainerForRegisteredWebhooks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContainerForRegisteredWebhooks} obj Optional instance to populate.
     * @return {module:model/ContainerForRegisteredWebhooks} The populated <code>ContainerForRegisteredWebhooks</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ContainerForRegisteredWebhooks();

        if (data.hasOwnProperty('webhookRegistrationResult')) {
          obj['webhookRegistrationResult'] = _ApiClient["default"].convertToType(data['webhookRegistrationResult'], [_RegisteredWebhook["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ContainerForRegisteredWebhooks;
}();
/**
 * A list of registered webhooks.
 * @member {Array.<module:model/RegisteredWebhook>} webhookRegistrationResult
 */


ContainerForRegisteredWebhooks.prototype['webhookRegistrationResult'] = undefined;
var _default = ContainerForRegisteredWebhooks;
exports["default"] = _default;