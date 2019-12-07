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
 * The NotificationsSubject model module.
 * @module model/NotificationsSubject
 * @version 1.0.0
 */
var NotificationsSubject =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>NotificationsSubject</code>.
   * @alias module:model/NotificationsSubject
   */
  function NotificationsSubject() {
    _classCallCheck(this, NotificationsSubject);

    NotificationsSubject.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NotificationsSubject, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NotificationsSubject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NotificationsSubject} obj Optional instance to populate.
     * @return {module:model/NotificationsSubject} The populated <code>NotificationsSubject</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NotificationsSubject();

        if (data.hasOwnProperty('latest_comment_url')) {
          obj['latest_comment_url'] = _ApiClient["default"].convertToType(data['latest_comment_url'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return NotificationsSubject;
}();
/**
 * @member {String} latest_comment_url
 */


NotificationsSubject.prototype['latest_comment_url'] = undefined;
/**
 * @member {String} title
 */

NotificationsSubject.prototype['title'] = undefined;
/**
 * @member {String} type
 */

NotificationsSubject.prototype['type'] = undefined;
/**
 * @member {String} url
 */

NotificationsSubject.prototype['url'] = undefined;
var _default = NotificationsSubject;
exports["default"] = _default;