"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AttachmentArchiveItemReadable = _interopRequireDefault(require("./AttachmentArchiveItemReadable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AttachmentArchiveMetadataReadable model module.
 * @module model/AttachmentArchiveMetadataReadable
 * @version 1.4.0
 */
var AttachmentArchiveMetadataReadable = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AttachmentArchiveMetadataReadable</code>.
   * Metadata for an archive (for example a zip) and its contents.
   * @alias module:model/AttachmentArchiveMetadataReadable
   */
  function AttachmentArchiveMetadataReadable() {
    _classCallCheck(this, AttachmentArchiveMetadataReadable);

    AttachmentArchiveMetadataReadable.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AttachmentArchiveMetadataReadable, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AttachmentArchiveMetadataReadable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttachmentArchiveMetadataReadable} obj Optional instance to populate.
     * @return {module:model/AttachmentArchiveMetadataReadable} The populated <code>AttachmentArchiveMetadataReadable</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AttachmentArchiveMetadataReadable();

        if (data.hasOwnProperty('entries')) {
          obj['entries'] = _ApiClient["default"].convertToType(data['entries'], [_AttachmentArchiveItemReadable["default"]]);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('mediaType')) {
          obj['mediaType'] = _ApiClient["default"].convertToType(data['mediaType'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('totalEntryCount')) {
          obj['totalEntryCount'] = _ApiClient["default"].convertToType(data['totalEntryCount'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return AttachmentArchiveMetadataReadable;
}();
/**
 * The list of the items included in the archive.
 * @member {Array.<module:model/AttachmentArchiveItemReadable>} entries
 */


AttachmentArchiveMetadataReadable.prototype['entries'] = undefined;
/**
 * The ID of the attachment.
 * @member {Number} id
 */

AttachmentArchiveMetadataReadable.prototype['id'] = undefined;
/**
 * The MIME type of the attachment.
 * @member {String} mediaType
 */

AttachmentArchiveMetadataReadable.prototype['mediaType'] = undefined;
/**
 * The name of the archive file.
 * @member {String} name
 */

AttachmentArchiveMetadataReadable.prototype['name'] = undefined;
/**
 * The number of items included in the archive.
 * @member {Number} totalEntryCount
 */

AttachmentArchiveMetadataReadable.prototype['totalEntryCount'] = undefined;
var _default = AttachmentArchiveMetadataReadable;
exports["default"] = _default;