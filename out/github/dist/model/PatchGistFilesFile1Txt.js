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
 * The PatchGistFilesFile1Txt model module.
 * @module model/PatchGistFilesFile1Txt
 * @version 1.4.3
 */
var PatchGistFilesFile1Txt =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PatchGistFilesFile1Txt</code>.
   * @alias module:model/PatchGistFilesFile1Txt
   */
  function PatchGistFilesFile1Txt() {
    _classCallCheck(this, PatchGistFilesFile1Txt);

    PatchGistFilesFile1Txt.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PatchGistFilesFile1Txt, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PatchGistFilesFile1Txt</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PatchGistFilesFile1Txt} obj Optional instance to populate.
     * @return {module:model/PatchGistFilesFile1Txt} The populated <code>PatchGistFilesFile1Txt</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PatchGistFilesFile1Txt();

        if (data.hasOwnProperty('content')) {
          obj['content'] = _ApiClient["default"].convertToType(data['content'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PatchGistFilesFile1Txt;
}();
/**
 * @member {String} content
 */


PatchGistFilesFile1Txt.prototype['content'] = undefined;
var _default = PatchGistFilesFile1Txt;
exports["default"] = _default;