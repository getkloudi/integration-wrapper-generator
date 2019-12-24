"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TagTagger = _interopRequireDefault(require("./TagTagger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TagBody model module.
 * @module model/TagBody
 * @version 1.3.3
 */
var TagBody =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>TagBody</code>.
   * @alias module:model/TagBody
   * @param message {String} String of the tag message.
   * @param _object {String} String of the SHA of the git object this is tagging.
   * @param tag {String} The tag's name. This is typically a version (e.g., \"v0.0.1\").
   * @param tagger {module:model/TagTagger} 
   * @param type {module:model/TagBody.TypeEnum} String of the type of the object we’re tagging. Normally this is a commit but it can also be a tree or a blob.
   */
  function TagBody(message, _object, tag, tagger, type) {
    _classCallCheck(this, TagBody);

    TagBody.initialize(this, message, _object, tag, tagger, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TagBody, null, [{
    key: "initialize",
    value: function initialize(obj, message, _object, tag, tagger, type) {
      obj['message'] = message;
      obj['object'] = _object;
      obj['tag'] = tag;
      obj['tagger'] = tagger;
      obj['type'] = type;
    }
    /**
     * Constructs a <code>TagBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TagBody} obj Optional instance to populate.
     * @return {module:model/TagBody} The populated <code>TagBody</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TagBody();

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('object')) {
          obj['object'] = _ApiClient["default"].convertToType(data['object'], 'String');
        }

        if (data.hasOwnProperty('tag')) {
          obj['tag'] = _ApiClient["default"].convertToType(data['tag'], 'String');
        }

        if (data.hasOwnProperty('tagger')) {
          obj['tagger'] = _TagTagger["default"].constructFromObject(data['tagger']);
        }

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TagBody;
}();
/**
 * String of the tag message.
 * @member {String} message
 */


TagBody.prototype['message'] = undefined;
/**
 * String of the SHA of the git object this is tagging.
 * @member {String} object
 */

TagBody.prototype['object'] = undefined;
/**
 * The tag's name. This is typically a version (e.g., \"v0.0.1\").
 * @member {String} tag
 */

TagBody.prototype['tag'] = undefined;
/**
 * @member {module:model/TagTagger} tagger
 */

TagBody.prototype['tagger'] = undefined;
/**
 * String of the type of the object we’re tagging. Normally this is a commit but it can also be a tree or a blob.
 * @member {module:model/TagBody.TypeEnum} type
 */

TagBody.prototype['type'] = undefined;
/**
 * Allowed values for the <code>type</code> property.
 * @enum {String}
 * @readonly
 */

TagBody['TypeEnum'] = {
  /**
   * value: "commit"
   * @const
   */
  "commit": "commit",

  /**
   * value: "tree"
   * @const
   */
  "tree": "tree",

  /**
   * value: "blob"
   * @const
   */
  "blob": "blob"
};
var _default = TagBody;
exports["default"] = _default;