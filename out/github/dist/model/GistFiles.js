"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GistFilesRingErl = _interopRequireDefault(require("./GistFilesRingErl"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The GistFiles model module.
 * @module model/GistFiles
 * @version 1.3.0
 */
var GistFiles =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>GistFiles</code>.
   * @alias module:model/GistFiles
   */
  function GistFiles() {
    _classCallCheck(this, GistFiles);

    GistFiles.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GistFiles, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GistFiles</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GistFiles} obj Optional instance to populate.
     * @return {module:model/GistFiles} The populated <code>GistFiles</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GistFiles();

        if (data.hasOwnProperty('ring.erl')) {
          obj['ring.erl'] = _GistFilesRingErl["default"].constructFromObject(data['ring.erl']);
        }
      }

      return obj;
    }
  }]);

  return GistFiles;
}();
/**
 * @member {module:model/GistFilesRingErl} ring.erl
 */


GistFiles.prototype['ring.erl'] = undefined;
var _default = GistFiles;
exports["default"] = _default;