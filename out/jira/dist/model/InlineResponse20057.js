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
 * The InlineResponse20057 model module.
 * @module model/InlineResponse20057
 * @version 1.3.1
 */
var InlineResponse20057 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20057</code>.
   * 
   * @alias module:model/InlineResponse20057
   * @param queryStrings {Array.<Object>} 
   */
  function InlineResponse20057(queryStrings) {
    _classCallCheck(this, InlineResponse20057);

    InlineResponse20057.initialize(this, queryStrings);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20057, null, [{
    key: "initialize",
    value: function initialize(obj, queryStrings) {
      obj['queryStrings'] = queryStrings;
    }
    /**
     * Constructs a <code>InlineResponse20057</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20057} obj Optional instance to populate.
     * @return {module:model/InlineResponse20057} The populated <code>InlineResponse20057</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20057();

        if (data.hasOwnProperty('queryStrings')) {
          obj['queryStrings'] = _ApiClient["default"].convertToType(data['queryStrings'], [Object]);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20057;
}();
/**
 * @member {Array.<Object>} queryStrings
 */


InlineResponse20057.prototype['queryStrings'] = undefined;
var _default = InlineResponse20057;
exports["default"] = _default;