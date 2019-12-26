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
 * The GistFilesRingErl model module.
 * @module model/GistFilesRingErl
 * @version 1.4.2
 */
var GistFilesRingErl =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>GistFilesRingErl</code>.
   * @alias module:model/GistFilesRingErl
   */
  function GistFilesRingErl() {
    _classCallCheck(this, GistFilesRingErl);

    GistFilesRingErl.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GistFilesRingErl, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GistFilesRingErl</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GistFilesRingErl} obj Optional instance to populate.
     * @return {module:model/GistFilesRingErl} The populated <code>GistFilesRingErl</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GistFilesRingErl();

        if (data.hasOwnProperty('filename')) {
          obj['filename'] = _ApiClient["default"].convertToType(data['filename'], 'String');
        }

        if (data.hasOwnProperty('raw_url')) {
          obj['raw_url'] = _ApiClient["default"].convertToType(data['raw_url'], 'String');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return GistFilesRingErl;
}();
/**
 * @member {String} filename
 */


GistFilesRingErl.prototype['filename'] = undefined;
/**
 * @member {String} raw_url
 */

GistFilesRingErl.prototype['raw_url'] = undefined;
/**
 * @member {Number} size
 */

GistFilesRingErl.prototype['size'] = undefined;
var _default = GistFilesRingErl;
exports["default"] = _default;