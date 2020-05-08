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
 * The InlineResponse2009BodyContent model module.
 * @module model/InlineResponse2009BodyContent
 * @version 1.1.0
 */
var InlineResponse2009BodyContent = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2009BodyContent</code>.
   * @alias module:model/InlineResponse2009BodyContent
   * @param text {String} 
   * @param type {String} 
   */
  function InlineResponse2009BodyContent(text, type) {
    _classCallCheck(this, InlineResponse2009BodyContent);

    InlineResponse2009BodyContent.initialize(this, text, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2009BodyContent, null, [{
    key: "initialize",
    value: function initialize(obj, text, type) {
      obj['text'] = text;
      obj['type'] = type;
    }
    /**
     * Constructs a <code>InlineResponse2009BodyContent</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2009BodyContent} obj Optional instance to populate.
     * @return {module:model/InlineResponse2009BodyContent} The populated <code>InlineResponse2009BodyContent</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2009BodyContent();

        if (data.hasOwnProperty('text')) {
          obj['text'] = _ApiClient["default"].convertToType(data['text'], 'String');
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2009BodyContent;
}();
/**
 * @member {String} text
 */


InlineResponse2009BodyContent.prototype['text'] = undefined;
/**
 * @member {String} type
 */

InlineResponse2009BodyContent.prototype['type'] = undefined;
var _default = InlineResponse2009BodyContent;
exports["default"] = _default;