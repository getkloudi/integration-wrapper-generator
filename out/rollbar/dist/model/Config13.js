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
 * The Config13 model module.
 * @module model/Config13
 * @version 1.1.0
 */
var Config13 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Config13</code>.
   * @alias module:model/Config13
   */
  function Config13() {
    _classCallCheck(this, Config13);

    Config13.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Config13, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Config13</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Config13} obj Optional instance to populate.
     * @return {module:model/Config13} The populated <code>Config13</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Config13();

        if (data.hasOwnProperty('message_template')) {
          obj['message_template'] = _ApiClient["default"].convertToType(data['message_template'], 'String');
        }

        if (data.hasOwnProperty('channel')) {
          obj['channel'] = _ApiClient["default"].convertToType(data['channel'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Config13;
}();
/**
 * Define a custom template for the Slack message. More information here https://docs.rollbar.com/docs/slack#section-tips-tricks
 * @member {String} message_template
 */


Config13.prototype['message_template'] = undefined;
/**
 * The Slack channel to send the messages
 * @member {String} channel
 */

Config13.prototype['channel'] = undefined;
var _default = Config13;
exports["default"] = _default;