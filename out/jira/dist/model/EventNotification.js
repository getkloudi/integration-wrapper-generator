"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _FieldDetails = _interopRequireDefault(require("./FieldDetails"));

var _GroupName = _interopRequireDefault(require("./GroupName"));

var _ProjectRole = _interopRequireDefault(require("./ProjectRole"));

var _UserDetails = _interopRequireDefault(require("./UserDetails"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EventNotification model module.
 * @module model/EventNotification
 * @version 1.4.0
 */
var EventNotification = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EventNotification</code>.
   * Details about a notification associated with an event.
   * @alias module:model/EventNotification
   */
  function EventNotification() {
    _classCallCheck(this, EventNotification);

    EventNotification.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EventNotification, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EventNotification</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventNotification} obj Optional instance to populate.
     * @return {module:model/EventNotification} The populated <code>EventNotification</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EventNotification();

        if (data.hasOwnProperty('emailAddress')) {
          obj['emailAddress'] = _ApiClient["default"].convertToType(data['emailAddress'], 'String');
        }

        if (data.hasOwnProperty('expand')) {
          obj['expand'] = _ApiClient["default"].convertToType(data['expand'], 'String');
        }

        if (data.hasOwnProperty('field')) {
          obj['field'] = _ApiClient["default"].convertToType(data['field'], _FieldDetails["default"]);
        }

        if (data.hasOwnProperty('group')) {
          obj['group'] = _ApiClient["default"].convertToType(data['group'], _GroupName["default"]);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('notificationType')) {
          obj['notificationType'] = _ApiClient["default"].convertToType(data['notificationType'], 'String');
        }

        if (data.hasOwnProperty('parameter')) {
          obj['parameter'] = _ApiClient["default"].convertToType(data['parameter'], 'String');
        }

        if (data.hasOwnProperty('projectRole')) {
          obj['projectRole'] = _ApiClient["default"].convertToType(data['projectRole'], _ProjectRole["default"]);
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _ApiClient["default"].convertToType(data['user'], _UserDetails["default"]);
        }
      }

      return obj;
    }
  }]);

  return EventNotification;
}();
/**
 * The email address.
 * @member {String} emailAddress
 */


EventNotification.prototype['emailAddress'] = undefined;
/**
 * Expand options that include additional event notification details in the response.
 * @member {String} expand
 */

EventNotification.prototype['expand'] = undefined;
/**
 * The custom user or group field.
 * @member {module:model/FieldDetails} field
 */

EventNotification.prototype['field'] = undefined;
/**
 * The specified group.
 * @member {module:model/GroupName} group
 */

EventNotification.prototype['group'] = undefined;
/**
 * The ID of the notification.
 * @member {Number} id
 */

EventNotification.prototype['id'] = undefined;
/**
 * Identifies the recipients of the notification.
 * @member {module:model/EventNotification.NotificationTypeEnum} notificationType
 */

EventNotification.prototype['notificationType'] = undefined;
/**
 * The value of the `notificationType`:   *  `User` The `parameter` is the user account ID.  *  `Group` The `parameter` is the group name.  *  `ProjectRole` The `parameter` is the project role ID.  *  `UserCustomField` The `parameter` is the ID of the custom field.  *  `GroupCustomField` The `parameter` is the ID of the custom field.
 * @member {String} parameter
 */

EventNotification.prototype['parameter'] = undefined;
/**
 * The specified project role.
 * @member {module:model/ProjectRole} projectRole
 */

EventNotification.prototype['projectRole'] = undefined;
/**
 * The specified user.
 * @member {module:model/UserDetails} user
 */

EventNotification.prototype['user'] = undefined;
/**
 * Allowed values for the <code>notificationType</code> property.
 * @enum {String}
 * @readonly
 */

EventNotification['NotificationTypeEnum'] = {
  /**
   * value: "CurrentAssignee"
   * @const
   */
  "CurrentAssignee": "CurrentAssignee",

  /**
   * value: "Reporter"
   * @const
   */
  "Reporter": "Reporter",

  /**
   * value: "CurrentUser"
   * @const
   */
  "CurrentUser": "CurrentUser",

  /**
   * value: "ProjectLead"
   * @const
   */
  "ProjectLead": "ProjectLead",

  /**
   * value: "ComponentLead"
   * @const
   */
  "ComponentLead": "ComponentLead",

  /**
   * value: "User"
   * @const
   */
  "User": "User",

  /**
   * value: "Group"
   * @const
   */
  "Group": "Group",

  /**
   * value: "ProjectRole"
   * @const
   */
  "ProjectRole": "ProjectRole",

  /**
   * value: "EmailAddress"
   * @const
   */
  "EmailAddress": "EmailAddress",

  /**
   * value: "AllWatchers"
   * @const
   */
  "AllWatchers": "AllWatchers",

  /**
   * value: "UserCustomField"
   * @const
   */
  "UserCustomField": "UserCustomField",

  /**
   * value: "GroupCustomField"
   * @const
   */
  "GroupCustomField": "GroupCustomField"
};
var _default = EventNotification;
exports["default"] = _default;