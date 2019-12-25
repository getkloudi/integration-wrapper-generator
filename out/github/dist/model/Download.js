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
 * The Download model module.
 * @module model/Download
 * @version 1.4.0
 */
var Download =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Download</code>.
   * @alias module:model/Download
   */
  function Download() {
    _classCallCheck(this, Download);

    Download.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Download, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Download</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Download} obj Optional instance to populate.
     * @return {module:model/Download} The populated <code>Download</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Download();

        if (data.hasOwnProperty('content_type')) {
          obj['content_type'] = _ApiClient["default"].convertToType(data['content_type'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('download_count')) {
          obj['download_count'] = _ApiClient["default"].convertToType(data['download_count'], 'Number');
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('size')) {
          obj['size'] = _ApiClient["default"].convertToType(data['size'], 'Number');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Download;
}();
/**
 * @member {String} content_type
 */


Download.prototype['content_type'] = undefined;
/**
 * @member {String} description
 */

Download.prototype['description'] = undefined;
/**
 * @member {Number} download_count
 */

Download.prototype['download_count'] = undefined;
/**
 * @member {String} html_url
 */

Download.prototype['html_url'] = undefined;
/**
 * @member {Number} id
 */

Download.prototype['id'] = undefined;
/**
 * @member {String} name
 */

Download.prototype['name'] = undefined;
/**
 * @member {Number} size
 */

Download.prototype['size'] = undefined;
/**
 * @member {String} url
 */

Download.prototype['url'] = undefined;
var _default = Download;
exports["default"] = _default;