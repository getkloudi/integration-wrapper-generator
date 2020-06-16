"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FailedWebhook = _interopRequireDefault(require("./FailedWebhook"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The FailedWebhooks model module.
 * @module model/FailedWebhooks
 * @version 1.4.0
 */
var FailedWebhooks = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>FailedWebhooks</code>.
   * A page of failed webhooks.
   * @alias module:model/FailedWebhooks
   * @param maxResults {Number} The maximum number of items on the page. If the list of values is shorter than this number, then there are no more pages.
   * @param values {Array.<module:model/FailedWebhook>} The list of webhooks.
   */
  function FailedWebhooks(maxResults, values) {
    _classCallCheck(this, FailedWebhooks);

    FailedWebhooks.initialize(this, maxResults, values);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(FailedWebhooks, null, [{
    key: "initialize",
    value: function initialize(obj, maxResults, values) {
      obj['maxResults'] = maxResults;
      obj['values'] = values;
    }
    /**
     * Constructs a <code>FailedWebhooks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/FailedWebhooks} obj Optional instance to populate.
     * @return {module:model/FailedWebhooks} The populated <code>FailedWebhooks</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new FailedWebhooks();

        if (data.hasOwnProperty('maxResults')) {
          obj['maxResults'] = _ApiClient["default"].convertToType(data['maxResults'], 'Number');
        }

        if (data.hasOwnProperty('next')) {
          obj['next'] = _ApiClient["default"].convertToType(data['next'], 'String');
        }

        if (data.hasOwnProperty('values')) {
          obj['values'] = _ApiClient["default"].convertToType(data['values'], [_FailedWebhook["default"]]);
        }
      }

      return obj;
    }
  }]);

  return FailedWebhooks;
}();
/**
 * The maximum number of items on the page. If the list of values is shorter than this number, then there are no more pages.
 * @member {Number} maxResults
 */


FailedWebhooks.prototype['maxResults'] = undefined;
/**
 * The URL to the next page of results. Present only if the request returned at least one result.The next page may be empty at the time of receiving the response, but new failed webhooks may appear in time. You can save the URL to the next page and query for new results periodically (for example, every hour).
 * @member {String} next
 */

FailedWebhooks.prototype['next'] = undefined;
/**
 * The list of webhooks.
 * @member {Array.<module:model/FailedWebhook>} values
 */

FailedWebhooks.prototype['values'] = undefined;
var _default = FailedWebhooks;
exports["default"] = _default;