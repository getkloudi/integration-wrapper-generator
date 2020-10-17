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
 * The PatchGistFilesOldNameTxt model module.
 * @module model/PatchGistFilesOldNameTxt
 * @version 1.4.4
 */
var PatchGistFilesOldNameTxt = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PatchGistFilesOldNameTxt</code>.
   * @alias module:model/PatchGistFilesOldNameTxt
   */
  function PatchGistFilesOldNameTxt() {
    _classCallCheck(this, PatchGistFilesOldNameTxt);

    PatchGistFilesOldNameTxt.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PatchGistFilesOldNameTxt, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PatchGistFilesOldNameTxt</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchGistFilesOldNameTxt} obj Optional instance to populate.
     * @return {module:model/PatchGistFilesOldNameTxt} The populated <code>PatchGistFilesOldNameTxt</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PatchGistFilesOldNameTxt();

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], 'String');
        }

        if (data.hasOwnProperty('filename')) {
          obj['filename'] = _ApiClient["default"].convertToType(data['filename'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PatchGistFilesOldNameTxt;
}();
/**
 * @member {String} content
 */


PatchGistFilesOldNameTxt.prototype['content'] = undefined;
/**
 * @member {String} filename
 */

PatchGistFilesOldNameTxt.prototype['filename'] = undefined;
var _default = PatchGistFilesOldNameTxt;
exports["default"] = _default;