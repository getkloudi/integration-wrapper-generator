"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20022Config = _interopRequireDefault(require("./InlineResponse20022Config"));

var _InlineResponse20022Properties = _interopRequireDefault(require("./InlineResponse20022Properties"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20023 model module.
 * @module model/InlineResponse20023
 * @version 1.3.1
 */
var InlineResponse20023 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20023</code>.
   * 
   * @alias module:model/InlineResponse20023
   * @param config {module:model/InlineResponse20022Config} 
   * @param properties {module:model/InlineResponse20022Properties} 
   * @param value {String} 
   */
  function InlineResponse20023(config, properties, value) {
    _classCallCheck(this, InlineResponse20023);

    InlineResponse20023.initialize(this, config, properties, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20023, null, [{
    key: "initialize",
    value: function initialize(obj, config, properties, value) {
      obj['config'] = config;
      obj['properties'] = properties;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>InlineResponse20023</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20023} obj Optional instance to populate.
     * @return {module:model/InlineResponse20023} The populated <code>InlineResponse20023</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20023();

        if (data.hasOwnProperty('config')) {
          obj['config'] = _InlineResponse20022Config["default"].constructFromObject(data['config']);
        }

        if (data.hasOwnProperty('properties')) {
          obj['properties'] = _InlineResponse20022Properties["default"].constructFromObject(data['properties']);
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20023;
}();
/**
 * @member {module:model/InlineResponse20022Config} config
 */


InlineResponse20023.prototype['config'] = undefined;
/**
 * @member {module:model/InlineResponse20022Properties} properties
 */

InlineResponse20023.prototype['properties'] = undefined;
/**
 * @member {String} value
 */

InlineResponse20023.prototype['value'] = undefined;
var _default = InlineResponse20023;
exports["default"] = _default;