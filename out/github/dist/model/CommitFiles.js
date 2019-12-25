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
 * The CommitFiles model module.
 * @module model/CommitFiles
 * @version 1.4.0
 */
var CommitFiles =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CommitFiles</code>.
   * @alias module:model/CommitFiles
   */
  function CommitFiles() {
    _classCallCheck(this, CommitFiles);

    CommitFiles.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CommitFiles, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CommitFiles</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommitFiles} obj Optional instance to populate.
     * @return {module:model/CommitFiles} The populated <code>CommitFiles</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CommitFiles();

        if (data.hasOwnProperty('additions')) {
          obj['additions'] = _ApiClient["default"].convertToType(data['additions'], 'Number');
        }

        if (data.hasOwnProperty('blob_url')) {
          obj['blob_url'] = _ApiClient["default"].convertToType(data['blob_url'], 'String');
        }

        if (data.hasOwnProperty('changes')) {
          obj['changes'] = _ApiClient["default"].convertToType(data['changes'], 'Number');
        }

        if (data.hasOwnProperty('deletions')) {
          obj['deletions'] = _ApiClient["default"].convertToType(data['deletions'], 'Number');
        }

        if (data.hasOwnProperty('filename')) {
          obj['filename'] = _ApiClient["default"].convertToType(data['filename'], 'String');
        }

        if (data.hasOwnProperty('patch')) {
          obj['patch'] = _ApiClient["default"].convertToType(data['patch'], 'String');
        }

        if (data.hasOwnProperty('raw_url')) {
          obj['raw_url'] = _ApiClient["default"].convertToType(data['raw_url'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CommitFiles;
}();
/**
 * @member {Number} additions
 */


CommitFiles.prototype['additions'] = undefined;
/**
 * @member {String} blob_url
 */

CommitFiles.prototype['blob_url'] = undefined;
/**
 * @member {Number} changes
 */

CommitFiles.prototype['changes'] = undefined;
/**
 * @member {Number} deletions
 */

CommitFiles.prototype['deletions'] = undefined;
/**
 * @member {String} filename
 */

CommitFiles.prototype['filename'] = undefined;
/**
 * @member {String} patch
 */

CommitFiles.prototype['patch'] = undefined;
/**
 * @member {String} raw_url
 */

CommitFiles.prototype['raw_url'] = undefined;
/**
 * @member {String} status
 */

CommitFiles.prototype['status'] = undefined;
var _default = CommitFiles;
exports["default"] = _default;