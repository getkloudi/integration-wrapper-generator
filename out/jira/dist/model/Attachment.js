"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _UserDetails = _interopRequireDefault(require("./UserDetails"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Attachment model module.
 * @module model/Attachment
 * @version 1.4.0
 */
var Attachment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Attachment</code>.
   * Details about an attachment.
   * @alias module:model/Attachment
   */
  function Attachment() {
    _classCallCheck(this, Attachment);

    Attachment.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Attachment, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Attachment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Attachment} obj Optional instance to populate.
     * @return {module:model/Attachment} The populated <code>Attachment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Attachment();

        if (data.hasOwnProperty('author')) {
          obj['author'] = _ApiClient["default"].convertToType(data['author'], _UserDetails["default"]);
        }

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], 'String');
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
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

  return Attachment;
}();
/**
 * Details of the user who added the attachment.
 * @member {module:model/UserDetails} author
 */


Attachment.prototype['author'] = undefined;
/**
 * The content of the attachment.
 * @member {String} content
 */

Attachment.prototype['content'] = undefined;
/**
 * The datetime the attachment was created.
 * @member {Date} created
 */

Attachment.prototype['created'] = undefined;
/**
 * The file name of the attachment.
 * @member {String} filename
 */

Attachment.prototype['filename'] = undefined;
/**
 * The ID of the attachment.
 * @member {String} id
 */

Attachment.prototype['id'] = undefined;
/**
 * The MIME type of the attachment.
 * @member {String} mimeType
 */

Attachment.prototype['mimeType'] = undefined;
/**
 * The URL of the attachment details response.
 * @member {String} self
 */

Attachment.prototype['self'] = undefined;
/**
 * The size of the attachment.
 * @member {Number} size
 */

Attachment.prototype['size'] = undefined;
/**
 * The URL of a thumbnail representing the attachment.
 * @member {String} thumbnail
 */

Attachment.prototype['thumbnail'] = undefined;
var _default = Attachment;
exports["default"] = _default;