"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20095Links = _interopRequireDefault(require("./InlineResponse20095Links"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20095 model module.
 * @module model/InlineResponse20095
 * @version 1.1.0
 */
var InlineResponse20095 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20095</code>.
   * 
   * @alias module:model/InlineResponse20095
   * @param links {Array.<module:model/InlineResponse20095Links>} 
   */
  function InlineResponse20095(links) {
    _classCallCheck(this, InlineResponse20095);

    InlineResponse20095.initialize(this, links);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20095, null, [{
    key: "initialize",
    value: function initialize(obj, links) {
      obj['links'] = links;
    }
    /**
     * Constructs a <code>InlineResponse20095</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20095} obj Optional instance to populate.
     * @return {module:model/InlineResponse20095} The populated <code>InlineResponse20095</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20095();

        if (data.hasOwnProperty('links')) {
          obj['links'] = _ApiClient["default"].convertToType(data['links'], [_InlineResponse20095Links["default"]]);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20095;
}();
/**
 * @member {Array.<module:model/InlineResponse20095Links>} links
 */


InlineResponse20095.prototype['links'] = undefined;
var _default = InlineResponse20095;
exports["default"] = _default;