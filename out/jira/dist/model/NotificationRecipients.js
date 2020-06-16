"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GroupName = _interopRequireDefault(require("./GroupName"));

var _UserDetails = _interopRequireDefault(require("./UserDetails"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The NotificationRecipients model module.
 * @module model/NotificationRecipients
 * @version 1.4.0
 */
var NotificationRecipients = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NotificationRecipients</code>.
   * Details of the users and groups to receive the notification.
   * @alias module:model/NotificationRecipients
   */
  function NotificationRecipients() {
    _classCallCheck(this, NotificationRecipients);

    NotificationRecipients.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NotificationRecipients, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NotificationRecipients</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NotificationRecipients} obj Optional instance to populate.
     * @return {module:model/NotificationRecipients} The populated <code>NotificationRecipients</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NotificationRecipients();

        if (data.hasOwnProperty('assignee')) {
          obj['assignee'] = _ApiClient["default"].convertToType(data['assignee'], 'Boolean');
        }

        if (data.hasOwnProperty('groups')) {
          obj['groups'] = _ApiClient["default"].convertToType(data['groups'], [_GroupName["default"]]);
        }

        if (data.hasOwnProperty('reporter')) {
          obj['reporter'] = _ApiClient["default"].convertToType(data['reporter'], 'Boolean');
        }

        if (data.hasOwnProperty('users')) {
          obj['users'] = _ApiClient["default"].convertToType(data['users'], [_UserDetails["default"]]);
        }

        if (data.hasOwnProperty('voters')) {
          obj['voters'] = _ApiClient["default"].convertToType(data['voters'], 'Boolean');
        }

        if (data.hasOwnProperty('watchers')) {
          obj['watchers'] = _ApiClient["default"].convertToType(data['watchers'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return NotificationRecipients;
}();
/**
 * Whether the notification should be sent to the issue's assignees.
 * @member {Boolean} assignee
 */


NotificationRecipients.prototype['assignee'] = undefined;
/**
 * List of groups to receive the notification.
 * @member {Array.<module:model/GroupName>} groups
 */

NotificationRecipients.prototype['groups'] = undefined;
/**
 * Whether the notification should be sent to the issue's reporter.
 * @member {Boolean} reporter
 */

NotificationRecipients.prototype['reporter'] = undefined;
/**
 * List of users to receive the notification.
 * @member {Array.<module:model/UserDetails>} users
 */

NotificationRecipients.prototype['users'] = undefined;
/**
 * Whether the notification should be sent to the issue's voters.
 * @member {Boolean} voters
 */

NotificationRecipients.prototype['voters'] = undefined;
/**
 * Whether the notification should be sent to the issue's watchers.
 * @member {Boolean} watchers
 */

NotificationRecipients.prototype['watchers'] = undefined;
var _default = NotificationRecipients;
exports["default"] = _default;