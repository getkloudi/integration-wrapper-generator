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
 * The InlineResponse20011Value model module.
 * @module model/InlineResponse20011Value
 * @version 1.1.0
 */
var InlineResponse20011Value = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20011Value</code>.
   * @alias module:model/InlineResponse20011Value
   * @param strideConversationId {String} 
   * @param supportTime {String} 
   */
  function InlineResponse20011Value(strideConversationId, supportTime) {
    _classCallCheck(this, InlineResponse20011Value);

    InlineResponse20011Value.initialize(this, strideConversationId, supportTime);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20011Value, null, [{
    key: "initialize",
    value: function initialize(obj, strideConversationId, supportTime) {
      obj['stride.conversation.id'] = strideConversationId;
      obj['support.time'] = supportTime;
    }
    /**
     * Constructs a <code>InlineResponse20011Value</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20011Value} obj Optional instance to populate.
     * @return {module:model/InlineResponse20011Value} The populated <code>InlineResponse20011Value</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20011Value();

        if (data.hasOwnProperty('stride.conversation.id')) {
          obj['stride.conversation.id'] = _ApiClient["default"].convertToType(data['stride.conversation.id'], 'String');
        }

        if (data.hasOwnProperty('support.time')) {
          obj['support.time'] = _ApiClient["default"].convertToType(data['support.time'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20011Value;
}();
/**
 * @member {String} stride.conversation.id
 */


InlineResponse20011Value.prototype['stride.conversation.id'] = undefined;
/**
 * @member {String} support.time
 */

InlineResponse20011Value.prototype['support.time'] = undefined;
var _default = InlineResponse20011Value;
exports["default"] = _default;