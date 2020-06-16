"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NotificationSchemeEvent = _interopRequireDefault(require("./NotificationSchemeEvent"));

var _Scope = _interopRequireDefault(require("./Scope"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The NotificationScheme model module.
 * @module model/NotificationScheme
 * @version 1.4.0
 */
var NotificationScheme = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NotificationScheme</code>.
   * Details about a notification scheme.
   * @alias module:model/NotificationScheme
   */
  function NotificationScheme() {
    _classCallCheck(this, NotificationScheme);

    NotificationScheme.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NotificationScheme, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NotificationScheme</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NotificationScheme} obj Optional instance to populate.
     * @return {module:model/NotificationScheme} The populated <code>NotificationScheme</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NotificationScheme();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('expand')) {
          obj['expand'] = _ApiClient["default"].convertToType(data['expand'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('notificationSchemeEvents')) {
          obj['notificationSchemeEvents'] = _ApiClient["default"].convertToType(data['notificationSchemeEvents'], [_NotificationSchemeEvent["default"]]);
        }

        if (data.hasOwnProperty('scope')) {
          obj['scope'] = _ApiClient["default"].convertToType(data['scope'], _Scope["default"]);
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }
      }

      return obj;
    }
  }]);

  return NotificationScheme;
}();
/**
 * The description of the notification scheme.
 * @member {String} description
 */


NotificationScheme.prototype['description'] = undefined;
/**
 * Expand options that include additional notification scheme details in the response.
 * @member {String} expand
 */

NotificationScheme.prototype['expand'] = undefined;
/**
 * The ID of the notification scheme.
 * @member {Number} id
 */

NotificationScheme.prototype['id'] = undefined;
/**
 * The name of the notification scheme.
 * @member {String} name
 */

NotificationScheme.prototype['name'] = undefined;
/**
 * The notification events and associated recipients.
 * @member {Array.<module:model/NotificationSchemeEvent>} notificationSchemeEvents
 */

NotificationScheme.prototype['notificationSchemeEvents'] = undefined;
/**
 * The scope of the notification scheme.
 * @member {module:model/Scope} scope
 */

NotificationScheme.prototype['scope'] = undefined;
/**
 * @member {String} self
 */

NotificationScheme.prototype['self'] = undefined;
var _default = NotificationScheme;
exports["default"] = _default;