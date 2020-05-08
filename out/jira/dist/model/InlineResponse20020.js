"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20020Meta = _interopRequireDefault(require("./InlineResponse20020Meta"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20020 model module.
 * @module model/InlineResponse20020
 * @version 1.3.0
 */
var InlineResponse20020 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20020</code>.
   * 
   * @alias module:model/InlineResponse20020
   * @param meta {module:model/InlineResponse20020Meta} 
   * @param value {String} 
   */
  function InlineResponse20020(meta, value) {
    _classCallCheck(this, InlineResponse20020);

    InlineResponse20020.initialize(this, meta, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20020, null, [{
    key: "initialize",
    value: function initialize(obj, meta, value) {
      obj['meta'] = meta;
      obj['value'] = value;
    }
    /**
     * Constructs a <code>InlineResponse20020</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20020} obj Optional instance to populate.
     * @return {module:model/InlineResponse20020} The populated <code>InlineResponse20020</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20020();

        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _InlineResponse20020Meta["default"].constructFromObject(data['meta']);
        }

        if (data.hasOwnProperty('value')) {
          obj['value'] = _ApiClient["default"].convertToType(data['value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20020;
}();
/**
 * @member {module:model/InlineResponse20020Meta} meta
 */


InlineResponse20020.prototype['meta'] = undefined;
/**
 * @member {String} value
 */

InlineResponse20020.prototype['value'] = undefined;
var _default = InlineResponse20020;
exports["default"] = _default;