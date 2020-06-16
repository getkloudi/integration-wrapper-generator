"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EventNotification = _interopRequireDefault(require("./EventNotification"));

var _NotificationEvent = _interopRequireDefault(require("./NotificationEvent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The NotificationSchemeEvent model module.
 * @module model/NotificationSchemeEvent
 * @version 1.4.0
 */
var NotificationSchemeEvent = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NotificationSchemeEvent</code>.
   * Details about a notification scheme event.
   * @alias module:model/NotificationSchemeEvent
   */
  function NotificationSchemeEvent() {
    _classCallCheck(this, NotificationSchemeEvent);

    NotificationSchemeEvent.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NotificationSchemeEvent, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NotificationSchemeEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NotificationSchemeEvent} obj Optional instance to populate.
     * @return {module:model/NotificationSchemeEvent} The populated <code>NotificationSchemeEvent</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NotificationSchemeEvent();

        if (data.hasOwnProperty('event')) {
          obj['event'] = _NotificationEvent["default"].constructFromObject(data['event']);
        }

        if (data.hasOwnProperty('notifications')) {
          obj['notifications'] = _ApiClient["default"].convertToType(data['notifications'], [_EventNotification["default"]]);
        }
      }

      return obj;
    }
  }]);

  return NotificationSchemeEvent;
}();
/**
 * @member {module:model/NotificationEvent} event
 */


NotificationSchemeEvent.prototype['event'] = undefined;
/**
 * @member {Array.<module:model/EventNotification>} notifications
 */

NotificationSchemeEvent.prototype['notifications'] = undefined;
var _default = NotificationSchemeEvent;
exports["default"] = _default;