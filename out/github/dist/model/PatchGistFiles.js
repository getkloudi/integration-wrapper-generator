"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PatchGistFilesFile1Txt = _interopRequireDefault(require("./PatchGistFilesFile1Txt"));

var _PatchGistFilesOldNameTxt = _interopRequireDefault(require("./PatchGistFilesOldNameTxt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PatchGistFiles model module.
 * @module model/PatchGistFiles
 * @version 1.4.0
 */
var PatchGistFiles =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PatchGistFiles</code>.
   * @alias module:model/PatchGistFiles
   */
  function PatchGistFiles() {
    _classCallCheck(this, PatchGistFiles);

    PatchGistFiles.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PatchGistFiles, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PatchGistFiles</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchGistFiles} obj Optional instance to populate.
     * @return {module:model/PatchGistFiles} The populated <code>PatchGistFiles</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PatchGistFiles();

        if (data.hasOwnProperty('delete_this_file.txt')) {
          obj['delete_this_file.txt'] = _ApiClient["default"].convertToType(data['delete_this_file.txt'], 'String');
        }

        if (data.hasOwnProperty('file1.txt')) {
          obj['file1.txt'] = _PatchGistFilesFile1Txt["default"].constructFromObject(data['file1.txt']);
        }

        if (data.hasOwnProperty('new_file.txt')) {
          obj['new_file.txt'] = _PatchGistFilesFile1Txt["default"].constructFromObject(data['new_file.txt']);
        }

        if (data.hasOwnProperty('old_name.txt')) {
          obj['old_name.txt'] = _PatchGistFilesOldNameTxt["default"].constructFromObject(data['old_name.txt']);
        }
      }

      return obj;
    }
  }]);

  return PatchGistFiles;
}();
/**
 * @member {String} delete_this_file.txt
 */


PatchGistFiles.prototype['delete_this_file.txt'] = undefined;
/**
 * @member {module:model/PatchGistFilesFile1Txt} file1.txt
 */

PatchGistFiles.prototype['file1.txt'] = undefined;
/**
 * @member {module:model/PatchGistFilesFile1Txt} new_file.txt
 */

PatchGistFiles.prototype['new_file.txt'] = undefined;
/**
 * @member {module:model/PatchGistFilesOldNameTxt} old_name.txt
 */

PatchGistFiles.prototype['old_name.txt'] = undefined;
var _default = PatchGistFiles;
exports["default"] = _default;