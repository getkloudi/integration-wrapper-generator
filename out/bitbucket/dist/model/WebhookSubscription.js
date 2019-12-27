"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ModelObject = _interopRequireDefault(require("./ModelObject"));

var _WebhookSubscriptionAllOf = _interopRequireDefault(require("./WebhookSubscriptionAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The WebhookSubscription model module.
 * @module model/WebhookSubscription
 * @version 1.1.0
 */
var WebhookSubscription =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>WebhookSubscription</code>.
   * @alias module:model/WebhookSubscription
   * @extends module:model/ModelObject
   * @implements module:model/ModelObject
   * @implements module:model/WebhookSubscriptionAllOf
   * @param type {String} 
   */
  function WebhookSubscription(type) {
    _classCallCheck(this, WebhookSubscription);

    _ModelObject["default"].initialize(this, type);

    _WebhookSubscriptionAllOf["default"].initialize(this);

    WebhookSubscription.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(WebhookSubscription, null, [{
    key: "initialize",
    value: function initialize(obj, type) {}
    /**
     * Constructs a <code>WebhookSubscription</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebhookSubscription} obj Optional instance to populate.
     * @return {module:model/WebhookSubscription} The populated <code>WebhookSubscription</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new WebhookSubscription();

        _ModelObject["default"].constructFromObject(data, obj);

        _ModelObject["default"].constructFromObject(data, obj);

        _WebhookSubscriptionAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('active')) {
          obj['active'] = _ApiClient["default"].convertToType(data['active'], 'Boolean');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'Date');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('events')) {
          obj['events'] = _ApiClient["default"].convertToType(data['events'], ['String']);
        }

        if (data.hasOwnProperty('subject')) {
          obj['subject'] = Object.constructFromObject(data['subject']);
        }

        if (data.hasOwnProperty('subject_type')) {
          obj['subject_type'] = _ApiClient["default"].convertToType(data['subject_type'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('uuid')) {
          obj['uuid'] = _ApiClient["default"].convertToType(data['uuid'], 'String');
        }
      }

      return obj;
    }
  }]);

  return WebhookSubscription;
}();
/**
 * @member {Boolean} active
 */


WebhookSubscription.prototype['active'] = undefined;
/**
 * @member {Date} created_at
 */

WebhookSubscription.prototype['created_at'] = undefined;
/**
 * A user-defined description of the webhook.
 * @member {String} description
 */

WebhookSubscription.prototype['description'] = undefined;
/**
 * The events this webhook is subscribed to.
 * @member {Array.<module:model/WebhookSubscription.EventsEnum>} events
 */

WebhookSubscription.prototype['events'] = undefined;
/**
 * @member {Object} subject
 */

WebhookSubscription.prototype['subject'] = undefined;
/**
 * The type of entity, which is `repository` in the case of webhook subscriptions on repositories.
 * @member {module:model/WebhookSubscription.SubjectTypeEnum} subject_type
 */

WebhookSubscription.prototype['subject_type'] = undefined;
/**
 * The URL events get delivered to.
 * @member {String} url
 */

WebhookSubscription.prototype['url'] = undefined;
/**
 * The webhook's id
 * @member {String} uuid
 */

WebhookSubscription.prototype['uuid'] = undefined; // Implement ModelObject interface:

/**
 * @member {String} type
 */

_ModelObject["default"].prototype['type'] = undefined; // Implement WebhookSubscriptionAllOf interface:

/**
 * @member {Boolean} active
 */

_WebhookSubscriptionAllOf["default"].prototype['active'] = undefined;
/**
 * @member {Date} created_at
 */

_WebhookSubscriptionAllOf["default"].prototype['created_at'] = undefined;
/**
 * A user-defined description of the webhook.
 * @member {String} description
 */

_WebhookSubscriptionAllOf["default"].prototype['description'] = undefined;
/**
 * The events this webhook is subscribed to.
 * @member {Array.<module:model/WebhookSubscriptionAllOf.EventsEnum>} events
 */

_WebhookSubscriptionAllOf["default"].prototype['events'] = undefined;
/**
 * @member {Object} subject
 */

_WebhookSubscriptionAllOf["default"].prototype['subject'] = undefined;
/**
 * The type of entity, which is `repository` in the case of webhook subscriptions on repositories.
 * @member {module:model/WebhookSubscriptionAllOf.SubjectTypeEnum} subject_type
 */

_WebhookSubscriptionAllOf["default"].prototype['subject_type'] = undefined;
/**
 * The URL events get delivered to.
 * @member {String} url
 */

_WebhookSubscriptionAllOf["default"].prototype['url'] = undefined;
/**
 * The webhook's id
 * @member {String} uuid
 */

_WebhookSubscriptionAllOf["default"].prototype['uuid'] = undefined;
/**
 * Allowed values for the <code>events</code> property.
 * @enum {String}
 * @readonly
 */

WebhookSubscription['EventsEnum'] = {
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
/**
 * Allowed values for the <code>subject_type</code> property.
 * @enum {String}
 * @readonly
 */

WebhookSubscription['SubjectTypeEnum'] = {
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
var _default = WebhookSubscription;
exports["default"] = _default;