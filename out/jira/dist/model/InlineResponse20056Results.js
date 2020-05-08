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
 * The InlineResponse20056Results model module.
 * @module model/InlineResponse20056Results
 * @version 1.1.0
 */
var InlineResponse20056Results = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20056Results</code>.
   * @alias module:model/InlineResponse20056Results
   * @param displayName {String} 
   * @param value {String} 
   */
  function InlineResponse20056Results(displayName, value) {
    _classCallCheck(this, InlineResponse20056Results);

    InlineResponse20056Results.initialize(this, displayName, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20056Results, null, [{
    key: "initialize",
    value: function initialize(obj, displayName, value) {
      obj['displayName'] = displayName;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>InlineResponse20056Results</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20056Results} obj Optional instance to populate.
     * @return {module:model/InlineResponse20056Results} The populated <code>InlineResponse20056Results</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20056Results();

        if (data.hasOwnProperty('displayName')) {
          obj['displayName'] = _ApiClient["default"].convertToType(data['displayName'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20056Results;
}();
/**
 * @member {String} displayName
 */


InlineResponse20056Results.prototype['displayName'] = undefined;
/**
 * @member {String} value
 */

InlineResponse20056Results.prototype['value'] = undefined;
var _default = InlineResponse20056Results;
exports["default"] = _default;