"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IssueIssueIdOrKeyAttachmentsAuthor = _interopRequireDefault(require("./IssueIssueIdOrKeyAttachmentsAuthor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20038 model module.
 * @module model/InlineResponse20038
 * @version 1.3.0
 */
var InlineResponse20038 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20038</code>.
   * @alias module:model/InlineResponse20038
   * @param author {module:model/IssueIssueIdOrKeyAttachmentsAuthor} 
   * @param content {String} 
   * @param created {String} 
   * @param filename {String} 
   * @param id {String} 
   * @param mimeType {String} 
   * @param self {String} 
   * @param size {Number} 
   * @param thumbnail {String} 
   */
  function InlineResponse20038(author, content, created, filename, id, mimeType, self, size, thumbnail) {
    _classCallCheck(this, InlineResponse20038);

    InlineResponse20038.initialize(this, author, content, created, filename, id, mimeType, self, size, thumbnail);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20038, null, [{
    key: "initialize",
    value: function initialize(obj, author, content, created, filename, id, mimeType, self, size, thumbnail) {
      obj['author'] = author;
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
     * Constructs a <code>InlineResponse20038</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20038} obj Optional instance to populate.
     * @return {module:model/InlineResponse20038} The populated <code>InlineResponse20038</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20038();

        if (data.hasOwnProperty('author')) {
          obj['author'] = _IssueIssueIdOrKeyAttachmentsAuthor["default"].constructFromObject(data['author']);
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
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
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

  return InlineResponse20038;
}();
/**
 * @member {module:model/IssueIssueIdOrKeyAttachmentsAuthor} author
 */


InlineResponse20038.prototype['author'] = undefined;
/**
 * @member {String} content
 */

InlineResponse20038.prototype['content'] = undefined;
/**
 * @member {String} created
 */

InlineResponse20038.prototype['created'] = undefined;
/**
 * @member {String} filename
 */

InlineResponse20038.prototype['filename'] = undefined;
/**
 * @member {String} id
 */

InlineResponse20038.prototype['id'] = undefined;
/**
 * @member {String} mimeType
 */

InlineResponse20038.prototype['mimeType'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20038.prototype['self'] = undefined;
/**
 * @member {Number} size
 */

InlineResponse20038.prototype['size'] = undefined;
/**
 * @member {String} thumbnail
 */

InlineResponse20038.prototype['thumbnail'] = undefined;
var _default = InlineResponse20038;
exports["default"] = _default;