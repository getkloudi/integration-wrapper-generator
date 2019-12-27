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
 * The HookEvent model module.
 * @module model/HookEvent
 * @version 1.1.2
 */
var HookEvent =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>HookEvent</code>.
   * An event, associated with a resource or subject type.
   * @alias module:model/HookEvent
   */
  function HookEvent() {
    _classCallCheck(this, HookEvent);

    HookEvent.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(HookEvent, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>HookEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HookEvent} obj Optional instance to populate.
     * @return {module:model/HookEvent} The populated <code>HookEvent</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HookEvent();

        if (data.hasOwnProperty('event')) {
          obj['event'] = _ApiClient["default"].convertToType(data['event'], 'String');
        }

        if (data.hasOwnProperty('category')) {
          obj['category'] = _ApiClient["default"].convertToType(data['category'], 'String');
        }

        if (data.hasOwnProperty('label')) {
          obj['label'] = _ApiClient["default"].convertToType(data['label'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }
      }

      return obj;
    }
  }]);

  return HookEvent;
}();
/**
 * The event identifier.
 * @member {module:model/HookEvent.EventEnum} event
 */


HookEvent.prototype['event'] = undefined;
/**
 * The category this event belongs to.
 * @member {String} category
 */

HookEvent.prototype['category'] = undefined;
/**
 * Summary of the webhook event type.
 * @member {String} label
 */

HookEvent.prototype['label'] = undefined;
/**
 * More detailed description of the webhook event type.
 * @member {String} description
 */

HookEvent.prototype['description'] = undefined;
/**
 * Allowed values for the <code>event</code> property.
 * @enum {String}
 * @readonly
 */

HookEvent['EventEnum'] = {
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
var _default = HookEvent;
exports["default"] = _default;