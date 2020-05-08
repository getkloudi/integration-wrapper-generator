"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse20020MetaComplexity = _interopRequireDefault(require("./InlineResponse20020MetaComplexity"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20020Meta model module.
 * @module model/InlineResponse20020Meta
 * @version 1.3.0
 */
var InlineResponse20020Meta = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20020Meta</code>.
   * @alias module:model/InlineResponse20020Meta
   * @param complexity {module:model/InlineResponse20020MetaComplexity} 
   */
  function InlineResponse20020Meta(complexity) {
    _classCallCheck(this, InlineResponse20020Meta);

    InlineResponse20020Meta.initialize(this, complexity);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20020Meta, null, [{
    key: "initialize",
    value: function initialize(obj, complexity) {
      obj['complexity'] = complexity;
    }
    /**
     * Constructs a <code>InlineResponse20020Meta</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20020Meta} obj Optional instance to populate.
     * @return {module:model/InlineResponse20020Meta} The populated <code>InlineResponse20020Meta</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20020Meta();

        if (data.hasOwnProperty('complexity')) {
          obj['complexity'] = _InlineResponse20020MetaComplexity["default"].constructFromObject(data['complexity']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20020Meta;
}();
/**
 * @member {module:model/InlineResponse20020MetaComplexity} complexity
 */


InlineResponse20020Meta.prototype['complexity'] = undefined;
var _default = InlineResponse20020Meta;
exports["default"] = _default;