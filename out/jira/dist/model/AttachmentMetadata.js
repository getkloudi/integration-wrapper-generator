"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _User = _interopRequireDefault(require("./User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AttachmentMetadata model module.
 * @module model/AttachmentMetadata
 * @version 1.4.0
 */
var AttachmentMetadata = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AttachmentMetadata</code>.
   * Metadata for an issue attachment.
   * @alias module:model/AttachmentMetadata
   */
  function AttachmentMetadata() {
    _classCallCheck(this, AttachmentMetadata);

    AttachmentMetadata.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AttachmentMetadata, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AttachmentMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttachmentMetadata} obj Optional instance to populate.
     * @return {module:model/AttachmentMetadata} The populated <code>AttachmentMetadata</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AttachmentMetadata();

        if (data.hasOwnProperty('author')) {
          obj['author'] = _ApiClient["default"].convertToType(data['author'], _User["default"]);
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
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('mimeType')) {
          obj['mimeType'] = _ApiClient["default"].convertToType(data['mimeType'], 'String');
        }

        if (data.hasOwnProperty('properties')) {
          obj['properties'] = _ApiClient["default"].convertToType(data['properties'], {
            'String': Object
          });
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

  return AttachmentMetadata;
}();
/**
 * Details of the user who attached the file.
 * @member {module:model/User} author
 */


AttachmentMetadata.prototype['author'] = undefined;
/**
 * The URL of the attachment.
 * @member {String} content
 */

AttachmentMetadata.prototype['content'] = undefined;
/**
 * The datetime the attachment was created.
 * @member {Date} created
 */

AttachmentMetadata.prototype['created'] = undefined;
/**
 * The name of the attachment file.
 * @member {String} filename
 */

AttachmentMetadata.prototype['filename'] = undefined;
/**
 * The ID of the attachment.
 * @member {Number} id
 */

AttachmentMetadata.prototype['id'] = undefined;
/**
 * The MIME type of the attachment.
 * @member {String} mimeType
 */

AttachmentMetadata.prototype['mimeType'] = undefined;
/**
 * Additional properties of the attachment.
 * @member {Object.<String, Object>} properties
 */

AttachmentMetadata.prototype['properties'] = undefined;
/**
 * The URL of the attachment metadata details.
 * @member {String} self
 */

AttachmentMetadata.prototype['self'] = undefined;
/**
 * The size of the attachment.
 * @member {Number} size
 */

AttachmentMetadata.prototype['size'] = undefined;
/**
 * The URL of a thumbnail representing the attachment.
 * @member {String} thumbnail
 */

AttachmentMetadata.prototype['thumbnail'] = undefined;
var _default = AttachmentMetadata;
exports["default"] = _default;