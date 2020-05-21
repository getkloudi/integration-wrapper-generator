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
 * The WebhookSubscriptionAllOf model module.
 * @module model/WebhookSubscriptionAllOf
 * @version 1.2.0
 */
var WebhookSubscriptionAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>WebhookSubscriptionAllOf</code>.
   * A Webhook subscription.
   * @alias module:model/WebhookSubscriptionAllOf
   */
  function WebhookSubscriptionAllOf() {
    _classCallCheck(this, WebhookSubscriptionAllOf);

    WebhookSubscriptionAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WebhookSubscriptionAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>WebhookSubscriptionAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookSubscriptionAllOf} obj Optional instance to populate.
     * @return {module:model/WebhookSubscriptionAllOf} The populated <code>WebhookSubscriptionAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WebhookSubscriptionAllOf();

        if (data.hasOwnProperty('uuid')) {
          obj['uuid'] = _ApiClient["default"].convertToType(data['uuid'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('subject_type')) {
          obj['subject_type'] = _ApiClient["default"].convertToType(data['subject_type'], 'String');
        }

        if (data.hasOwnProperty('subject')) {
          obj['subject'] = Object.constructFromObject(data['subject']);
        }

        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Boolean');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('events')) {
          obj['events'] = _ApiClient["default"].convertToType(data['events'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return WebhookSubscriptionAllOf;
}();
/**
 * The webhook's id
 * @member {String} uuid
 */


WebhookSubscriptionAllOf.prototype['uuid'] = undefined;
/**
 * The URL events get delivered to.
 * @member {String} url
 */

WebhookSubscriptionAllOf.prototype['url'] = undefined;
/**
 * A user-defined description of the webhook.
 * @member {String} description
 */

WebhookSubscriptionAllOf.prototype['description'] = undefined;
/**
 * The type of entity, which is `repository` in the case of webhook subscriptions on repositories.
 * @member {module:model/WebhookSubscriptionAllOf.SubjectTypeEnum} subject_type
 */

WebhookSubscriptionAllOf.prototype['subject_type'] = undefined;
/**
 * @member {Object} subject
 */

WebhookSubscriptionAllOf.prototype['subject'] = undefined;
/**
 * @member {Boolean} active
 */

WebhookSubscriptionAllOf.prototype['active'] = undefined;
/**
 * @member {Date} created_at
 */

WebhookSubscriptionAllOf.prototype['created_at'] = undefined;
/**
 * The events this webhook is subscribed to.
 * @member {Array.<module:model/WebhookSubscriptionAllOf.EventsEnum>} events
 */

WebhookSubscriptionAllOf.prototype['events'] = undefined;
/**
 * Allowed values for the <code>subject_type</code> property.
 * @enum {String}
 * @readonly
 */

WebhookSubscriptionAllOf['SubjectTypeEnum'] = {
  /**
   * value: "workspace"
   * @const
   */
  "workspace": "workspace",

  /**
   * value: "user"
   * @const
   */
  "user": "user",

  /**
   * value: "repository"
   * @const
   */
  "repository": "repository",

  /**
   * value: "team"
   * @const
   */
  "team": "team"
};
/**
 * Allowed values for the <code>events</code> property.
 * @enum {String}
 * @readonly
 */

WebhookSubscriptionAllOf['EventsEnum'] = {
  /**
   * value: "pullrequest:unapproved"
   * @const
   */
  "pullrequest:unapproved": "pullrequest:unapproved",

  /**
   * value: "issue:comment_created"
   * @const
   */
  "issue:comment_created": "issue:comment_created",

  /**
   * value: "pullrequest:approved"
   * @const
   */
  "pullrequest:approved": "pullrequest:approved",

  /**
   * value: "repo:created"
   * @const
   */
  "repo:created": "repo:created",

  /**
   * value: "repo:deleted"
   * @const
   */
  "repo:deleted": "repo:deleted",

  /**
   * value: "repo:imported"
   * @const
   */
  "repo:imported": "repo:imported",

  /**
   * value: "pullrequest:comment_updated"
   * @const
   */
  "pullrequest:comment_updated": "pullrequest:comment_updated",

  /**
   * value: "issue:updated"
   * @const
   */
  "issue:updated": "issue:updated",

  /**
   * value: "project:updated"
   * @const
   */
  "project:updated": "project:updated",

  /**
   * value: "pullrequest:comment_created"
   * @const
   */
  "pullrequest:comment_created": "pullrequest:comment_created",

  /**
   * value: "repo:commit_status_updated"
   * @const
   */
  "repo:commit_status_updated": "repo:commit_status_updated",

  /**
   * value: "pullrequest:updated"
   * @const
   */
  "pullrequest:updated": "pullrequest:updated",

  /**
   * value: "issue:created"
   * @const
   */
  "issue:created": "issue:created",

  /**
   * value: "repo:fork"
   * @const
   */
  "repo:fork": "repo:fork",

  /**
   * value: "pullrequest:comment_deleted"
   * @const
   */
  "pullrequest:comment_deleted": "pullrequest:comment_deleted",

  /**
   * value: "repo:commit_status_created"
   * @const
   */
  "repo:commit_status_created": "repo:commit_status_created",

  /**
   * value: "repo:updated"
   * @const
   */
  "repo:updated": "repo:updated",

  /**
   * value: "pullrequest:rejected"
   * @const
   */
  "pullrequest:rejected": "pullrequest:rejected",

  /**
   * value: "pullrequest:fulfilled"
   * @const
   */
  "pullrequest:fulfilled": "pullrequest:fulfilled",

  /**
   * value: "repo:push"
   * @const
   */
  "repo:push": "repo:push",

  /**
   * value: "pullrequest:created"
   * @const
   */
  "pullrequest:created": "pullrequest:created",

  /**
   * value: "repo:transfer"
   * @const
   */
  "repo:transfer": "repo:transfer",

  /**
   * value: "repo:commit_comment_created"
   * @const
   */
  "repo:commit_comment_created": "repo:commit_comment_created"
};
var _default = WebhookSubscriptionAllOf;
exports["default"] = _default;