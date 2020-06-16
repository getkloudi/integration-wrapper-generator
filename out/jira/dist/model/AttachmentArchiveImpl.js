"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AttachmentArchiveEntry = _interopRequireDefault(require("./AttachmentArchiveEntry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AttachmentArchiveImpl model module.
 * @module model/AttachmentArchiveImpl
 * @version 1.4.0
 */
var AttachmentArchiveImpl = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AttachmentArchiveImpl</code>.
   * @alias module:model/AttachmentArchiveImpl
   */
  function AttachmentArchiveImpl() {
    _classCallCheck(this, AttachmentArchiveImpl);

    AttachmentArchiveImpl.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AttachmentArchiveImpl, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AttachmentArchiveImpl</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AttachmentArchiveImpl} obj Optional instance to populate.
     * @return {module:model/AttachmentArchiveImpl} The populated <code>AttachmentArchiveImpl</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AttachmentArchiveImpl();

        if (data.hasOwnProperty('entries')) {
          obj['entries'] = _ApiClient["default"].convertToType(data['entries'], [_AttachmentArchiveEntry["default"]]);
        }

        if (data.hasOwnProperty('totalEntryCount')) {
          obj['totalEntryCount'] = _ApiClient["default"].convertToType(data['totalEntryCount'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return AttachmentArchiveImpl;
}();
/**
 * The list of the items included in the archive.
 * @member {Array.<module:model/AttachmentArchiveEntry>} entries
 */


AttachmentArchiveImpl.prototype['entries'] = undefined;
/**
 * The number of items in the archive.
 * @member {Number} totalEntryCount
 */

AttachmentArchiveImpl.prototype['totalEntryCount'] = undefined;
var _default = AttachmentArchiveImpl;
exports["default"] = _default;