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
 * The Webhook model module.
 * @module model/Webhook
 * @version 1.4.0
 */
var Webhook = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Webhook</code>.
   * A webhook.
   * @alias module:model/Webhook
   * @param expirationDate {Number} 
   * @param id {Number} The ID of the webhook.
   * @param jqlFilter {String} The JQL filter that specifies which issues the webhook is sent for.
   */
  function Webhook(expirationDate, id, jqlFilter) {
    _classCallCheck(this, Webhook);

    Webhook.initialize(this, expirationDate, id, jqlFilter);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Webhook, null, [{
    key: "initialize",
    value: function initialize(obj, expirationDate, id, jqlFilter) {
      obj['expirationDate'] = expirationDate;
      obj['id'] = id;
      obj['jqlFilter'] = jqlFilter;
    }
    /**
     * Constructs a <code>Webhook</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Webhook} obj Optional instance to populate.
     * @return {module:model/Webhook} The populated <code>Webhook</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Webhook();

        if (data.hasOwnProperty('events')) {
          obj['events'] = _ApiClient["default"].convertToType(data['events'], ['String']);
        }

        if (data.hasOwnProperty('expirationDate')) {
          obj['expirationDate'] = _ApiClient["default"].convertToType(data['expirationDate'], 'Number');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('jqlFilter')) {
          obj['jqlFilter'] = _ApiClient["default"].convertToType(data['jqlFilter'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Webhook;
}();
/**
 * The Jira events that trigger the webhook.
 * @member {Array.<module:model/Webhook.EventsEnum>} events
 */


Webhook.prototype['events'] = undefined;
/**
 * @member {Number} expirationDate
 */

Webhook.prototype['expirationDate'] = undefined;
/**
 * The ID of the webhook.
 * @member {Number} id
 */

Webhook.prototype['id'] = undefined;
/**
 * The JQL filter that specifies which issues the webhook is sent for.
 * @member {String} jqlFilter
 */

Webhook.prototype['jqlFilter'] = undefined;
/**
 * Allowed values for the <code>events</code> property.
 * @enum {String}
 * @readonly
 */

Webhook['EventsEnum'] = {
  /**
   * value: "jira:issue_created"
   * @const
   */
  "jira:issue_created": "jira:issue_created",

  /**
   * value: "jira:issue_updated"
   * @const
   */
  "jira:issue_updated": "jira:issue_updated",

  /**
   * value: "jira:issue_deleted"
   * @const
   */
  "jira:issue_deleted": "jira:issue_deleted",

  /**
   * value: "comment_created"
   * @const
   */
  "comment_created": "comment_created",

  /**
   * value: "comment_updated"
   * @const
   */
  "comment_updated": "comment_updated",

  /**
   * value: "comment_deleted"
   * @const
   */
  "comment_deleted": "comment_deleted",

  /**
   * value: "issue_property_set"
   * @const
   */
  "issue_property_set": "issue_property_set",

  /**
   * value: "issue_property_deleted"
   * @const
   */
  "issue_property_deleted": "issue_property_deleted"
};
var _default = Webhook;
exports["default"] = _default;