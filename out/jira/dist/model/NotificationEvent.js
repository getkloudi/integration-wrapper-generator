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
 * The NotificationEvent model module.
 * @module model/NotificationEvent
 * @version 1.4.0
 */
var NotificationEvent = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NotificationEvent</code>.
   * Details about a notification event.
   * @alias module:model/NotificationEvent
   */
  function NotificationEvent() {
    _classCallCheck(this, NotificationEvent);

    NotificationEvent.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NotificationEvent, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NotificationEvent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NotificationEvent} obj Optional instance to populate.
     * @return {module:model/NotificationEvent} The populated <code>NotificationEvent</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NotificationEvent();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('templateEvent')) {
          obj['templateEvent'] = _ApiClient["default"].convertToType(data['templateEvent'], NotificationEvent);
        }
      }

      return obj;
    }
  }]);

  return NotificationEvent;
}();
/**
 * The description of the event.
 * @member {String} description
 */


NotificationEvent.prototype['description'] = undefined;
/**
 * The ID of the event. The event can be a [Jira system event](https://confluence.atlassian.com/x/8YdKLg#Creatinganotificationscheme-eventsEvents) or a [custom event](https://confluence.atlassian.com/x/AIlKLg).
 * @member {Number} id
 */

NotificationEvent.prototype['id'] = undefined;
/**
 * The name of the event.
 * @member {String} name
 */

NotificationEvent.prototype['name'] = undefined;
/**
 * The template of the event. Only custom events configured by Jira administrators have template.
 * @member {module:model/NotificationEvent} templateEvent
 */

NotificationEvent.prototype['templateEvent'] = undefined;
var _default = NotificationEvent;
exports["default"] = _default;