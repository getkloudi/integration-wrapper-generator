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
 * The InlineResponse2009Visibility model module.
 * @module model/InlineResponse2009Visibility
 * @version 1.3.0
 */
var InlineResponse2009Visibility = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2009Visibility</code>.
   * @alias module:model/InlineResponse2009Visibility
   * @param type {String} 
   * @param value {String} 
   */
  function InlineResponse2009Visibility(type, value) {
    _classCallCheck(this, InlineResponse2009Visibility);

    InlineResponse2009Visibility.initialize(this, type, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2009Visibility, null, [{
    key: "initialize",
    value: function initialize(obj, type, value) {
      obj['type'] = type;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>InlineResponse2009Visibility</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2009Visibility} obj Optional instance to populate.
     * @return {module:model/InlineResponse2009Visibility} The populated <code>InlineResponse2009Visibility</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2009Visibility();

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2009Visibility;
}();
/**
 * @member {String} type
 */


InlineResponse2009Visibility.prototype['type'] = undefined;
/**
 * @member {String} value
 */

InlineResponse2009Visibility.prototype['value'] = undefined;
var _default = InlineResponse2009Visibility;
exports["default"] = _default;