"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TagObject = _interopRequireDefault(require("./TagObject"));

var _TagTagger = _interopRequireDefault(require("./TagTagger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Tag model module.
 * @module model/Tag
 * @version 1.3.0
 */
var Tag =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Tag</code>.
   * @alias module:model/Tag
   */
  function Tag() {
    _classCallCheck(this, Tag);

    Tag.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Tag, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Tag</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Tag} obj Optional instance to populate.
     * @return {module:model/Tag} The populated <code>Tag</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Tag();

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('object')) {
          obj['object'] = _TagObject["default"].constructFromObject(data['object']);
        }

        if (data.hasOwnProperty('sha')) {
          obj['sha'] = _ApiClient["default"].convertToType(data['sha'], 'String');
        }

        if (data.hasOwnProperty('tag')) {
          obj['tag'] = _ApiClient["default"].convertToType(data['tag'], 'String');
        }

        if (data.hasOwnProperty('tagger')) {
          obj['tagger'] = _TagTagger["default"].constructFromObject(data['tagger']);
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Tag;
}();
/**
 * String of the tag message.
 * @member {String} message
 */


Tag.prototype['message'] = undefined;
/**
 * @member {module:model/TagObject} object
 */

Tag.prototype['object'] = undefined;
/**
 * @member {String} sha
 */

Tag.prototype['sha'] = undefined;
/**
 * The tag's name. This is typically a version (e.g., \"v0.0.1\").
 * @member {String} tag
 */

Tag.prototype['tag'] = undefined;
/**
 * @member {module:model/TagTagger} tagger
 */

Tag.prototype['tagger'] = undefined;
/**
 * @member {String} url
 */

Tag.prototype['url'] = undefined;
var _default = Tag;
exports["default"] = _default;