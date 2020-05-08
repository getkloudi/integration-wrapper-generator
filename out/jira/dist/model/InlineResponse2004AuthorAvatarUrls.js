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
 * The InlineResponse2004AuthorAvatarUrls model module.
 * @module model/InlineResponse2004AuthorAvatarUrls
 * @version 1.3.0
 */
var InlineResponse2004AuthorAvatarUrls = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse2004AuthorAvatarUrls</code>.
   * @alias module:model/InlineResponse2004AuthorAvatarUrls
   * @param _16x16 {String} 
   * @param _24x24 {String} 
   * @param _32x32 {String} 
   * @param _48x48 {String} 
   */
  function InlineResponse2004AuthorAvatarUrls(_16x16, _24x24, _32x32, _48x48) {
    _classCallCheck(this, InlineResponse2004AuthorAvatarUrls);

    InlineResponse2004AuthorAvatarUrls.initialize(this, _16x16, _24x24, _32x32, _48x48);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse2004AuthorAvatarUrls, null, [{
    key: "initialize",
    value: function initialize(obj, _16x16, _24x24, _32x32, _48x48) {
      obj['16x16'] = _16x16;
      obj['24x24'] = _24x24;
      obj['32x32'] = _32x32;
      obj['48x48'] = _48x48;
    }
    /**
     * Constructs a <code>InlineResponse2004AuthorAvatarUrls</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse2004AuthorAvatarUrls} obj Optional instance to populate.
     * @return {module:model/InlineResponse2004AuthorAvatarUrls} The populated <code>InlineResponse2004AuthorAvatarUrls</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse2004AuthorAvatarUrls();

        if (data.hasOwnProperty('16x16')) {
          obj['16x16'] = _ApiClient["default"].convertToType(data['16x16'], 'String');
        }

        if (data.hasOwnProperty('24x24')) {
          obj['24x24'] = _ApiClient["default"].convertToType(data['24x24'], 'String');
        }

        if (data.hasOwnProperty('32x32')) {
          obj['32x32'] = _ApiClient["default"].convertToType(data['32x32'], 'String');
        }

        if (data.hasOwnProperty('48x48')) {
          obj['48x48'] = _ApiClient["default"].convertToType(data['48x48'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse2004AuthorAvatarUrls;
}();
/**
 * @member {String} 16x16
 */


InlineResponse2004AuthorAvatarUrls.prototype['16x16'] = undefined;
/**
 * @member {String} 24x24
 */

InlineResponse2004AuthorAvatarUrls.prototype['24x24'] = undefined;
/**
 * @member {String} 32x32
 */

InlineResponse2004AuthorAvatarUrls.prototype['32x32'] = undefined;
/**
 * @member {String} 48x48
 */

InlineResponse2004AuthorAvatarUrls.prototype['48x48'] = undefined;
var _default = InlineResponse2004AuthorAvatarUrls;
exports["default"] = _default;