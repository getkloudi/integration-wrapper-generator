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
 * The AttachmentArchiveItemReadable model module.
 * @module model/AttachmentArchiveItemReadable
 * @version 1.4.0
 */
var AttachmentArchiveItemReadable = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AttachmentArchiveItemReadable</code>.
   * Metadata for an item in an attachment archive.
   * @alias module:model/AttachmentArchiveItemReadable
   */
  function AttachmentArchiveItemReadable() {
    _classCallCheck(this, AttachmentArchiveItemReadable);

    AttachmentArchiveItemReadable.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AttachmentArchiveItemReadable, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AttachmentArchiveItemReadable</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttachmentArchiveItemReadable} obj Optional instance to populate.
     * @return {module:model/AttachmentArchiveItemReadable} The populated <code>AttachmentArchiveItemReadable</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AttachmentArchiveItemReadable();

        if (data.hasOwnProperty('index')) {
          obj['index'] = _ApiClient["default"].convertToType(data['index'], 'Number');
        }

        if (data.hasOwnProperty('label')) {
          obj['label'] = _ApiClient["default"].convertToType(data['label'], 'String');
        }

        if (data.hasOwnProperty('mediaType')) {
          obj['mediaType'] = _ApiClient["default"].convertToType(data['mediaType'], 'String');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AttachmentArchiveItemReadable;
}();
/**
 * The position of the item within the archive.
 * @member {Number} index
 */


AttachmentArchiveItemReadable.prototype['index'] = undefined;
/**
 * The label for the archive item.
 * @member {String} label
 */

AttachmentArchiveItemReadable.prototype['label'] = undefined;
/**
 * The MIME type of the archive item.
 * @member {String} mediaType
 */

AttachmentArchiveItemReadable.prototype['mediaType'] = undefined;
/**
 * The path of the archive item.
 * @member {String} path
 */

AttachmentArchiveItemReadable.prototype['path'] = undefined;
/**
 * The size of the archive item.
 * @member {String} size
 */

AttachmentArchiveItemReadable.prototype['size'] = undefined;
var _default = AttachmentArchiveItemReadable;
exports["default"] = _default;