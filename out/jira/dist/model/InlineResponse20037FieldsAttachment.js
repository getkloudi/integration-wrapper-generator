"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse2004Author = _interopRequireDefault(require("./InlineResponse2004Author"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20037FieldsAttachment model module.
 * @module model/InlineResponse20037FieldsAttachment
 * @version 1.2.0
 */
var InlineResponse20037FieldsAttachment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20037FieldsAttachment</code>.
   * @alias module:model/InlineResponse20037FieldsAttachment
   * @param content {String} 
   * @param created {String} 
   * @param filename {String} 
   * @param id {Number} 
   * @param mimeType {String} 
   * @param self {String} 
   * @param size {Number} 
   * @param thumbnail {String} 
   */
  function InlineResponse20037FieldsAttachment(content, created, filename, id, mimeType, self, size, thumbnail) {
    _classCallCheck(this, InlineResponse20037FieldsAttachment);

    InlineResponse20037FieldsAttachment.initialize(this, content, created, filename, id, mimeType, self, size, thumbnail);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20037FieldsAttachment, null, [{
    key: "initialize",
    value: function initialize(obj, content, created, filename, id, mimeType, self, size, thumbnail) {
      obj['content'] = content;
      obj['created'] = created;
      obj['filename'] = filename;
      obj['id'] = id;
      obj['mimeType'] = mimeType;
      obj['self'] = self;
      obj['size'] = size;
      obj['thumbnail'] = thumbnail;
    }
    /**
     * Constructs a <code>InlineResponse20037FieldsAttachment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20037FieldsAttachment} obj Optional instance to populate.
     * @return {module:model/InlineResponse20037FieldsAttachment} The populated <code>InlineResponse20037FieldsAttachment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20037FieldsAttachment();

        if (data.hasOwnProperty('author')) {
          obj['author'] = _InlineResponse2004Author["default"].constructFromObject(data['author']);
        }

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], 'String');
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'String');
        }

        if (data.hasOwnProperty('filename')) {
          obj['filename'] = _ApiClient["default"].convertToType(data['filename'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('mimeType')) {
          obj['mimeType'] = _ApiClient["default"].convertToType(data['mimeType'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }

        if (data.hasOwnProperty('thumbnail')) {
          obj['thumbnail'] = _ApiClient["default"].convertToType(data['thumbnail'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20037FieldsAttachment;
}();
/**
 * @member {module:model/InlineResponse2004Author} author
 */


InlineResponse20037FieldsAttachment.prototype['author'] = undefined;
/**
 * @member {String} content
 */

InlineResponse20037FieldsAttachment.prototype['content'] = undefined;
/**
 * @member {String} created
 */

InlineResponse20037FieldsAttachment.prototype['created'] = undefined;
/**
 * @member {String} filename
 */

InlineResponse20037FieldsAttachment.prototype['filename'] = undefined;
/**
 * @member {Number} id
 */

InlineResponse20037FieldsAttachment.prototype['id'] = undefined;
/**
 * @member {String} mimeType
 */

InlineResponse20037FieldsAttachment.prototype['mimeType'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20037FieldsAttachment.prototype['self'] = undefined;
/**
 * @member {Number} size
 */

InlineResponse20037FieldsAttachment.prototype['size'] = undefined;
/**
 * @member {String} thumbnail
 */

InlineResponse20037FieldsAttachment.prototype['thumbnail'] = undefined;
var _default = InlineResponse20037FieldsAttachment;
exports["default"] = _default;