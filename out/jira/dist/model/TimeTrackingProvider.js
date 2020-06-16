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
 * The TimeTrackingProvider model module.
 * @module model/TimeTrackingProvider
 * @version 1.4.0
 */
var TimeTrackingProvider = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TimeTrackingProvider</code>.
   * Details about the time tracking provider.
   * @alias module:model/TimeTrackingProvider
   * @param key {String} The key for the time tracking provider. For example, *JIRA*.
   */
  function TimeTrackingProvider(key) {
    _classCallCheck(this, TimeTrackingProvider);

    TimeTrackingProvider.initialize(this, key);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TimeTrackingProvider, null, [{
    key: "initialize",
    value: function initialize(obj, key) {
      obj['key'] = key;
    }
    /**
     * Constructs a <code>TimeTrackingProvider</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TimeTrackingProvider} obj Optional instance to populate.
     * @return {module:model/TimeTrackingProvider} The populated <code>TimeTrackingProvider</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TimeTrackingProvider();

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TimeTrackingProvider;
}();
/**
 * The key for the time tracking provider. For example, *JIRA*.
 * @member {String} key
 */


TimeTrackingProvider.prototype['key'] = undefined;
/**
 * The name of the time tracking provider. For example, *JIRA provided time tracking*.
 * @member {String} name
 */

TimeTrackingProvider.prototype['name'] = undefined;
/**
 * The URL of the configuration page for the time tracking provider app. For example, *_/example/config/url*. This property is only returned if the `adminPageKey` property is set in the module descriptor of the time tracking provider app.
 * @member {String} url
 */

TimeTrackingProvider.prototype['url'] = undefined;
var _default = TimeTrackingProvider;
exports["default"] = _default;