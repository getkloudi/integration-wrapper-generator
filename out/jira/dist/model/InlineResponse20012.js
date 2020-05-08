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
 * The InlineResponse20012 model module.
 * @module model/InlineResponse20012
 * @version 1.3.0
 */
var InlineResponse20012 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20012</code>.
   * 
   * @alias module:model/InlineResponse20012
   * @param issueCount {Number} 
   * @param self {String} 
   */
  function InlineResponse20012(issueCount, self) {
    _classCallCheck(this, InlineResponse20012);

    InlineResponse20012.initialize(this, issueCount, self);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20012, null, [{
    key: "initialize",
    value: function initialize(obj, issueCount, self) {
      obj['issueCount'] = issueCount;
      obj['self'] = self;
    }
    /**
     * Constructs a <code>InlineResponse20012</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20012} obj Optional instance to populate.
     * @return {module:model/InlineResponse20012} The populated <code>InlineResponse20012</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20012();

        if (data.hasOwnProperty('issueCount')) {
          obj['issueCount'] = _ApiClient["default"].convertToType(data['issueCount'], 'Number');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20012;
}();
/**
 * @member {Number} issueCount
 */


InlineResponse20012.prototype['issueCount'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20012.prototype['self'] = undefined;
var _default = InlineResponse20012;
exports["default"] = _default;