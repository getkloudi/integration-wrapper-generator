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
 * The WebhooksExpirationDate model module.
 * @module model/WebhooksExpirationDate
 * @version 1.4.0
 */
var WebhooksExpirationDate = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WebhooksExpirationDate</code>.
   * The date the newly refreshed webhooks expire.
   * @alias module:model/WebhooksExpirationDate
   * @param expirationDate {Number} 
   */
  function WebhooksExpirationDate(expirationDate) {
    _classCallCheck(this, WebhooksExpirationDate);

    WebhooksExpirationDate.initialize(this, expirationDate);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WebhooksExpirationDate, null, [{
    key: "initialize",
    value: function initialize(obj, expirationDate) {
      obj['expirationDate'] = expirationDate;
    }
    /**
     * Constructs a <code>WebhooksExpirationDate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhooksExpirationDate} obj Optional instance to populate.
     * @return {module:model/WebhooksExpirationDate} The populated <code>WebhooksExpirationDate</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WebhooksExpirationDate();

        if (data.hasOwnProperty('expirationDate')) {
          obj['expirationDate'] = _ApiClient["default"].convertToType(data['expirationDate'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return WebhooksExpirationDate;
}();
/**
 * @member {Number} expirationDate
 */


WebhooksExpirationDate.prototype['expirationDate'] = undefined;
var _default = WebhooksExpirationDate;
exports["default"] = _default;