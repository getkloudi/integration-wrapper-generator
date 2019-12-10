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
 * The NotificationSetting model module.
 * @module model/NotificationSetting
 * @version 1.0.0
 */
var NotificationSetting =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>NotificationSetting</code>.
   * This feature was introduced in GitLab 8.12
   * @alias module:model/NotificationSetting
   */
  function NotificationSetting() {
    _classCallCheck(this, NotificationSetting);

    NotificationSetting.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NotificationSetting, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NotificationSetting</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NotificationSetting} obj Optional instance to populate.
     * @return {module:model/NotificationSetting} The populated <code>NotificationSetting</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NotificationSetting();

        if (data.hasOwnProperty('events')) {
          obj['events'] = _ApiClient["default"].convertToType(data['events'], 'String');
        }

        if (data.hasOwnProperty('level')) {
          obj['level'] = _ApiClient["default"].convertToType(data['level'], 'String');
        }
      }

      return obj;
    }
  }]);

  return NotificationSetting;
}();
/**
 * @member {String} events
 */


NotificationSetting.prototype['events'] = undefined;
/**
 * @member {String} level
 */

NotificationSetting.prototype['level'] = undefined;
var _default = NotificationSetting;
exports["default"] = _default;