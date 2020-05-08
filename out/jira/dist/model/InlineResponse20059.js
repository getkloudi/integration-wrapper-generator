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
 * The InlineResponse20059 model module.
 * @module model/InlineResponse20059
 * @version 1.3.0
 */
var InlineResponse20059 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20059</code>.
   * 
   * @alias module:model/InlineResponse20059
   * @param locale {String} 
   */
  function InlineResponse20059(locale) {
    _classCallCheck(this, InlineResponse20059);

    InlineResponse20059.initialize(this, locale);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20059, null, [{
    key: "initialize",
    value: function initialize(obj, locale) {
      obj['locale'] = locale;
    }
    /**
     * Constructs a <code>InlineResponse20059</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20059} obj Optional instance to populate.
     * @return {module:model/InlineResponse20059} The populated <code>InlineResponse20059</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20059();

        if (data.hasOwnProperty('locale')) {
          obj['locale'] = _ApiClient["default"].convertToType(data['locale'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20059;
}();
/**
 * @member {String} locale
 */


InlineResponse20059.prototype['locale'] = undefined;
var _default = InlineResponse20059;
exports["default"] = _default;