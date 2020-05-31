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
 * The Config11 model module.
 * @module model/Config11
 * @version 1.1.0
 */
var Config11 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Config11</code>.
   * @alias module:model/Config11
   */
  function Config11() {
    _classCallCheck(this, Config11);

    Config11.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Config11, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Config11</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Config11} obj Optional instance to populate.
     * @return {module:model/Config11} The populated <code>Config11</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Config11();

        if (data.hasOwnProperty('message_template')) {
          obj['message_template'] = _ApiClient["default"].convertToType(data['message_template'], 'String');
        }

        if (data.hasOwnProperty('show_message_buttons')) {
          obj['show_message_buttons'] = _ApiClient["default"].convertToType(data['show_message_buttons'], 'Boolean');
        }

        if (data.hasOwnProperty('channel')) {
          obj['channel'] = _ApiClient["default"].convertToType(data['channel'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Config11;
}();
/**
 * Define a custom template for the Slack message. More information here https://docs.rollbar.com/docs/slack#section-tips-tricks
 * @member {String} message_template
 */


Config11.prototype['message_template'] = undefined;
/**
 * Show the Slack actionable buttons
 * @member {Boolean} show_message_buttons
 */

Config11.prototype['show_message_buttons'] = undefined;
/**
 * The Slack channel to send the messages
 * @member {String} channel
 */

Config11.prototype['channel'] = undefined;
var _default = Config11;
exports["default"] = _default;