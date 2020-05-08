"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse2009BodyContent = _interopRequireDefault(require("./InlineResponse2009BodyContent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse2009BodyContent1 model module.
 * @module model/InlineResponse2009BodyContent1
 * @version 1.1.0
 */
var InlineResponse2009BodyContent1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2009BodyContent1</code>.
   * @alias module:model/InlineResponse2009BodyContent1
   * @param type {String} 
   */
  function InlineResponse2009BodyContent1(type) {
    _classCallCheck(this, InlineResponse2009BodyContent1);

    InlineResponse2009BodyContent1.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2009BodyContent1, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>InlineResponse2009BodyContent1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2009BodyContent1} obj Optional instance to populate.
     * @return {module:model/InlineResponse2009BodyContent1} The populated <code>InlineResponse2009BodyContent1</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2009BodyContent1();

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], [_InlineResponse2009BodyContent["default"]]);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2009BodyContent1;
}();
/**
 * @member {Array.<module:model/InlineResponse2009BodyContent>} content
 */


InlineResponse2009BodyContent1.prototype['content'] = undefined;
/**
 * @member {String} type
 */

InlineResponse2009BodyContent1.prototype['type'] = undefined;
var _default = InlineResponse2009BodyContent1;
exports["default"] = _default;