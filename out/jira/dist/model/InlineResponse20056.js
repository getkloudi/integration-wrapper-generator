"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20056Results = _interopRequireDefault(require("./InlineResponse20056Results"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20056 model module.
 * @module model/InlineResponse20056
 * @version 1.3.1
 */
var InlineResponse20056 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20056</code>.
   * 
   * @alias module:model/InlineResponse20056
   * @param results {Array.<module:model/InlineResponse20056Results>} 
   */
  function InlineResponse20056(results) {
    _classCallCheck(this, InlineResponse20056);

    InlineResponse20056.initialize(this, results);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20056, null, [{
    key: "initialize",
    value: function initialize(obj, results) {
      obj['results'] = results;
    }
    /**
     * Constructs a <code>InlineResponse20056</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20056} obj Optional instance to populate.
     * @return {module:model/InlineResponse20056} The populated <code>InlineResponse20056</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20056();

        if (data.hasOwnProperty('results')) {
          obj['results'] = _ApiClient["default"].convertToType(data['results'], [_InlineResponse20056Results["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20056;
}();
/**
 * @member {Array.<module:model/InlineResponse20056Results>} results
 */


InlineResponse20056.prototype['results'] = undefined;
var _default = InlineResponse20056;
exports["default"] = _default;