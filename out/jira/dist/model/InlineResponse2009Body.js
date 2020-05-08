"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse2009BodyContent = _interopRequireDefault(require("./InlineResponse2009BodyContent1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse2009Body model module.
 * @module model/InlineResponse2009Body
 * @version 1.3.0
 */
var InlineResponse2009Body = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2009Body</code>.
   * @alias module:model/InlineResponse2009Body
   * @param content {Array.<module:model/InlineResponse2009BodyContent1>} 
   * @param type {String} 
   * @param version {Number} 
   */
  function InlineResponse2009Body(content, type, version) {
    _classCallCheck(this, InlineResponse2009Body);

    InlineResponse2009Body.initialize(this, content, type, version);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2009Body, null, [{
    key: "initialize",
    value: function initialize(obj, content, type, version) {
      obj['content'] = content;
      obj['type'] = type;
      obj['version'] = version;
    }
    /**
     * Constructs a <code>InlineResponse2009Body</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2009Body} obj Optional instance to populate.
     * @return {module:model/InlineResponse2009Body} The populated <code>InlineResponse2009Body</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2009Body();

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], [_InlineResponse2009BodyContent["default"]]);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2009Body;
}();
/**
 * @member {Array.<module:model/InlineResponse2009BodyContent1>} content
 */


InlineResponse2009Body.prototype['content'] = undefined;
/**
 * @member {String} type
 */

InlineResponse2009Body.prototype['type'] = undefined;
/**
 * @member {Number} version
 */

InlineResponse2009Body.prototype['version'] = undefined;
var _default = InlineResponse2009Body;
exports["default"] = _default;