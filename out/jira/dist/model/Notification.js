"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NotificationRecipients = _interopRequireDefault(require("./NotificationRecipients"));

var _NotificationRecipientsRestrictions = _interopRequireDefault(require("./NotificationRecipientsRestrictions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Notification model module.
 * @module model/Notification
 * @version 1.4.0
 */
var Notification = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Notification</code>.
   * Details about a notification.
   * @alias module:model/Notification
   */
  function Notification() {
    _classCallCheck(this, Notification);

    Notification.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Notification, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Notification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Notification} obj Optional instance to populate.
     * @return {module:model/Notification} The populated <code>Notification</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Notification();

        if (data.hasOwnProperty('htmlBody')) {
          obj['htmlBody'] = _ApiClient["default"].convertToType(data['htmlBody'], 'String');
        }

        if (data.hasOwnProperty('restrict')) {
          obj['restrict'] = _ApiClient["default"].convertToType(data['restrict'], _NotificationRecipientsRestrictions["default"]);
        }

        if (data.hasOwnProperty('subject')) {
          obj['subject'] = _ApiClient["default"].convertToType(data['subject'], 'String');
        }

        if (data.hasOwnProperty('textBody')) {
          obj['textBody'] = _ApiClient["default"].convertToType(data['textBody'], 'String');
        }

        if (data.hasOwnProperty('to')) {
          obj['to'] = _ApiClient["default"].convertToType(data['to'], _NotificationRecipients["default"]);
        }
      }

      return obj;
    }
  }]);

  return Notification;
}();
/**
 * The HTML body of the email notification for the issue.
 * @member {String} htmlBody
 */


Notification.prototype['htmlBody'] = undefined;
/**
 * Restricts the notifications to users with the specified permissions.
 * @member {module:model/NotificationRecipientsRestrictions} restrict
 */

Notification.prototype['restrict'] = undefined;
/**
 * The subject of the email notification for the issue. If this is not specified, then the subject is set to the issue key and summary.
 * @member {String} subject
 */

Notification.prototype['subject'] = undefined;
/**
 * The plain text body of the email notification for the issue.
 * @member {String} textBody
 */

Notification.prototype['textBody'] = undefined;
/**
 * The recipients of the email notification for the issue.
 * @member {module:model/NotificationRecipients} to
 */

Notification.prototype['to'] = undefined;
var _default = Notification;
exports["default"] = _default;