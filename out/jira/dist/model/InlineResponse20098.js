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
 * The InlineResponse20098 model module.
 * @module model/InlineResponse20098
 * @version 1.3.1
 */
var InlineResponse20098 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20098</code>.
   * 
   * @alias module:model/InlineResponse20098
   * @param issuesCount {Number} 
   * @param issuesUnresolvedCount {Number} 
   * @param self {String} 
   */
  function InlineResponse20098(issuesCount, issuesUnresolvedCount, self) {
    _classCallCheck(this, InlineResponse20098);

    InlineResponse20098.initialize(this, issuesCount, issuesUnresolvedCount, self);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20098, null, [{
    key: "initialize",
    value: function initialize(obj, issuesCount, issuesUnresolvedCount, self) {
      obj['issuesCount'] = issuesCount;
      obj['issuesUnresolvedCount'] = issuesUnresolvedCount;
      obj['self'] = self;
    }
    /**
     * Constructs a <code>InlineResponse20098</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20098} obj Optional instance to populate.
     * @return {module:model/InlineResponse20098} The populated <code>InlineResponse20098</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20098();

        if (data.hasOwnProperty('issuesCount')) {
          obj['issuesCount'] = _ApiClient["default"].convertToType(data['issuesCount'], 'Number');
        }

        if (data.hasOwnProperty('issuesUnresolvedCount')) {
          obj['issuesUnresolvedCount'] = _ApiClient["default"].convertToType(data['issuesUnresolvedCount'], 'Number');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20098;
}();
/**
 * @member {Number} issuesCount
 */


InlineResponse20098.prototype['issuesCount'] = undefined;
/**
 * @member {Number} issuesUnresolvedCount
 */

InlineResponse20098.prototype['issuesUnresolvedCount'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20098.prototype['self'] = undefined;
var _default = InlineResponse20098;
exports["default"] = _default;