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
 * The AttachmentArchiveEntry model module.
 * @module model/AttachmentArchiveEntry
 * @version 1.4.0
 */
var AttachmentArchiveEntry = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AttachmentArchiveEntry</code>.
   * @alias module:model/AttachmentArchiveEntry
   */
  function AttachmentArchiveEntry() {
    _classCallCheck(this, AttachmentArchiveEntry);

    AttachmentArchiveEntry.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AttachmentArchiveEntry, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AttachmentArchiveEntry</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttachmentArchiveEntry} obj Optional instance to populate.
     * @return {module:model/AttachmentArchiveEntry} The populated <code>AttachmentArchiveEntry</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AttachmentArchiveEntry();

        if (data.hasOwnProperty('abbreviatedName')) {
          obj['abbreviatedName'] = _ApiClient["default"].convertToType(data['abbreviatedName'], 'String');
        }

        if (data.hasOwnProperty('entryIndex')) {
          obj['entryIndex'] = _ApiClient["default"].convertToType(data['entryIndex'], 'Number');
        }

        if (data.hasOwnProperty('mediaType')) {
          obj['mediaType'] = _ApiClient["default"].convertToType(data['mediaType'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return AttachmentArchiveEntry;
}();
/**
 * @member {String} abbreviatedName
 */


AttachmentArchiveEntry.prototype['abbreviatedName'] = undefined;
/**
 * @member {Number} entryIndex
 */

AttachmentArchiveEntry.prototype['entryIndex'] = undefined;
/**
 * @member {String} mediaType
 */

AttachmentArchiveEntry.prototype['mediaType'] = undefined;
/**
 * @member {String} name
 */

AttachmentArchiveEntry.prototype['name'] = undefined;
/**
 * @member {Number} size
 */

AttachmentArchiveEntry.prototype['size'] = undefined;
var _default = AttachmentArchiveEntry;
exports["default"] = _default;