"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PatchGistFilesFile1Txt = _interopRequireDefault(require("./PatchGistFilesFile1Txt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PostGistFiles model module.
 * @module model/PostGistFiles
 * @version 1.0.0
 */
var PostGistFiles =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PostGistFiles</code>.
   * @alias module:model/PostGistFiles
   */
  function PostGistFiles() {
    _classCallCheck(this, PostGistFiles);

    PostGistFiles.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PostGistFiles, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PostGistFiles</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostGistFiles} obj Optional instance to populate.
     * @return {module:model/PostGistFiles} The populated <code>PostGistFiles</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PostGistFiles();

        if (data.hasOwnProperty('file1.txt')) {
          obj['file1.txt'] = _PatchGistFilesFile1Txt["default"].constructFromObject(data['file1.txt']);
        }
      }

      return obj;
    }
  }]);

  return PostGistFiles;
}();
/**
 * @member {module:model/PatchGistFilesFile1Txt} file1.txt
 */


PostGistFiles.prototype['file1.txt'] = undefined;
var _default = PostGistFiles;
exports["default"] = _default;