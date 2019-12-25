"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NotificationsRepository = _interopRequireDefault(require("./NotificationsRepository"));

var _NotificationsSubject = _interopRequireDefault(require("./NotificationsSubject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Notifications model module.
 * @module model/Notifications
 * @version 1.4.1
 */
var Notifications =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Notifications</code>.
   * @alias module:model/Notifications
   */
  function Notifications() {
    _classCallCheck(this, Notifications);

    Notifications.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Notifications, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Notifications</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Notifications} obj Optional instance to populate.
     * @return {module:model/Notifications} The populated <code>Notifications</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Notifications();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('last_read_at')) {
          obj['last_read_at'] = _ApiClient["default"].convertToType(data['last_read_at'], 'String');
        }

        if (data.hasOwnProperty('reason')) {
          obj['reason'] = _ApiClient["default"].convertToType(data['reason'], 'String');
        }

        if (data.hasOwnProperty('repository')) {
          obj['repository'] = _NotificationsRepository["default"].constructFromObject(data['repository']);
        }

        if (data.hasOwnProperty('subject')) {
          obj['subject'] = _NotificationsSubject["default"].constructFromObject(data['subject']);
        }

        if (data.hasOwnProperty('unread')) {
          obj['unread'] = _ApiClient["default"].convertToType(data['unread'], 'Boolean');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Notifications;
}();
/**
 * @member {Number} id
 */


Notifications.prototype['id'] = undefined;
/**
 * @member {String} last_read_at
 */

Notifications.prototype['last_read_at'] = undefined;
/**
 * @member {String} reason
 */

Notifications.prototype['reason'] = undefined;
/**
 * @member {module:model/NotificationsRepository} repository
 */

Notifications.prototype['repository'] = undefined;
/**
 * @member {module:model/NotificationsSubject} subject
 */

Notifications.prototype['subject'] = undefined;
/**
 * @member {Boolean} unread
 */

Notifications.prototype['unread'] = undefined;
/**
 * @member {String} updated_at
 */

Notifications.prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

Notifications.prototype['url'] = undefined;
var _default = Notifications;
exports["default"] = _default;