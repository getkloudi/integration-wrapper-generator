"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20061Event = _interopRequireDefault(require("./InlineResponse20061Event"));

var _InlineResponse20061Notifications = _interopRequireDefault(require("./InlineResponse20061Notifications"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20061NotificationSchemeEvents model module.
 * @module model/InlineResponse20061NotificationSchemeEvents
 * @version 1.0.0
 */
var InlineResponse20061NotificationSchemeEvents = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20061NotificationSchemeEvents</code>.
   * @alias module:model/InlineResponse20061NotificationSchemeEvents
   */
  function InlineResponse20061NotificationSchemeEvents() {
    _classCallCheck(this, InlineResponse20061NotificationSchemeEvents);

    InlineResponse20061NotificationSchemeEvents.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20061NotificationSchemeEvents, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineResponse20061NotificationSchemeEvents</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20061NotificationSchemeEvents} obj Optional instance to populate.
     * @return {module:model/InlineResponse20061NotificationSchemeEvents} The populated <code>InlineResponse20061NotificationSchemeEvents</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20061NotificationSchemeEvents();

        if (data.hasOwnProperty('event')) {
          obj['event'] = _InlineResponse20061Event["default"].constructFromObject(data['event']);
        }

        if (data.hasOwnProperty('notifications')) {
          obj['notifications'] = _ApiClient["default"].convertToType(data['notifications'], [_InlineResponse20061Notifications["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20061NotificationSchemeEvents;
}();
/**
 * @member {module:model/InlineResponse20061Event} event
 */


InlineResponse20061NotificationSchemeEvents.prototype['event'] = undefined;
/**
 * @member {Array.<module:model/InlineResponse20061Notifications>} notifications
 */

InlineResponse20061NotificationSchemeEvents.prototype['notifications'] = undefined;
var _default = InlineResponse20061NotificationSchemeEvents;
exports["default"] = _default;