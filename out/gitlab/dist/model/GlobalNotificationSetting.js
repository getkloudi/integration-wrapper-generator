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
 * The GlobalNotificationSetting model module.
 * @module model/GlobalNotificationSetting
 * @version 1.0.0
 */
var GlobalNotificationSetting =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>GlobalNotificationSetting</code>.
   * This feature was introduced in GitLab 8.12
   * @alias module:model/GlobalNotificationSetting
   */
  function GlobalNotificationSetting() {
    _classCallCheck(this, GlobalNotificationSetting);

    GlobalNotificationSetting.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GlobalNotificationSetting, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GlobalNotificationSetting</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GlobalNotificationSetting} obj Optional instance to populate.
     * @return {module:model/GlobalNotificationSetting} The populated <code>GlobalNotificationSetting</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GlobalNotificationSetting();

        if (data.hasOwnProperty('events')) {
          obj['events'] = _ApiClient["default"].convertToType(data['events'], 'String');
        }

        if (data.hasOwnProperty('level')) {
          obj['level'] = _ApiClient["default"].convertToType(data['level'], 'String');
        }

        if (data.hasOwnProperty('notification_email')) {
          obj['notification_email'] = _ApiClient["default"].convertToType(data['notification_email'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GlobalNotificationSetting;
}();
/**
 * @member {String} events
 */


GlobalNotificationSetting.prototype['events'] = undefined;
/**
 * @member {String} level
 */

GlobalNotificationSetting.prototype['level'] = undefined;
/**
 * @member {String} notification_email
 */

GlobalNotificationSetting.prototype['notification_email'] = undefined;
var _default = GlobalNotificationSetting;
exports["default"] = _default;