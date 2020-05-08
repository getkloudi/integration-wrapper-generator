"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20022ConfigScope = _interopRequireDefault(require("./InlineResponse20022ConfigScope"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20022Config model module.
 * @module model/InlineResponse20022Config
 * @version 1.1.0
 */
var InlineResponse20022Config = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20022Config</code>.
   * @alias module:model/InlineResponse20022Config
   * @param attributes {Array.<Object>} 
   * @param scope {module:model/InlineResponse20022ConfigScope} 
   */
  function InlineResponse20022Config(attributes, scope) {
    _classCallCheck(this, InlineResponse20022Config);

    InlineResponse20022Config.initialize(this, attributes, scope);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20022Config, null, [{
    key: "initialize",
    value: function initialize(obj, attributes, scope) {
      obj['attributes'] = attributes;
      obj['scope'] = scope;
    }
    /**
     * Constructs a <code>InlineResponse20022Config</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20022Config} obj Optional instance to populate.
     * @return {module:model/InlineResponse20022Config} The populated <code>InlineResponse20022Config</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20022Config();

        if (data.hasOwnProperty('attributes')) {
          obj['attributes'] = _ApiClient["default"].convertToType(data['attributes'], [Object]);
        }

        if (data.hasOwnProperty('scope')) {
          obj['scope'] = _InlineResponse20022ConfigScope["default"].constructFromObject(data['scope']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20022Config;
}();
/**
 * @member {Array.<Object>} attributes
 */


InlineResponse20022Config.prototype['attributes'] = undefined;
/**
 * @member {module:model/InlineResponse20022ConfigScope} scope
 */

InlineResponse20022Config.prototype['scope'] = undefined;
var _default = InlineResponse20022Config;
exports["default"] = _default;