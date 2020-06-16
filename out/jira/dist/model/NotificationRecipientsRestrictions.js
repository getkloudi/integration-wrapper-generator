"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GroupName = _interopRequireDefault(require("./GroupName"));

var _RestrictedPermission = _interopRequireDefault(require("./RestrictedPermission"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The NotificationRecipientsRestrictions model module.
 * @module model/NotificationRecipientsRestrictions
 * @version 1.4.0
 */
var NotificationRecipientsRestrictions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NotificationRecipientsRestrictions</code>.
   * Details of the group membership or permissions needed to receive the notification.
   * @alias module:model/NotificationRecipientsRestrictions
   */
  function NotificationRecipientsRestrictions() {
    _classCallCheck(this, NotificationRecipientsRestrictions);

    NotificationRecipientsRestrictions.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NotificationRecipientsRestrictions, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NotificationRecipientsRestrictions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NotificationRecipientsRestrictions} obj Optional instance to populate.
     * @return {module:model/NotificationRecipientsRestrictions} The populated <code>NotificationRecipientsRestrictions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NotificationRecipientsRestrictions();

        if (data.hasOwnProperty('groups')) {
          obj['groups'] = _ApiClient["default"].convertToType(data['groups'], [_GroupName["default"]]);
        }

        if (data.hasOwnProperty('permissions')) {
          obj['permissions'] = _ApiClient["default"].convertToType(data['permissions'], [_RestrictedPermission["default"]]);
        }
      }

      return obj;
    }
  }]);

  return NotificationRecipientsRestrictions;
}();
/**
 * List of group memberships required to receive the notification.
 * @member {Array.<module:model/GroupName>} groups
 */


NotificationRecipientsRestrictions.prototype['groups'] = undefined;
/**
 * List of permissions required to receive the notification.
 * @member {Array.<module:model/RestrictedPermission>} permissions
 */

NotificationRecipientsRestrictions.prototype['permissions'] = undefined;
var _default = NotificationRecipientsRestrictions;
exports["default"] = _default;