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
 * The Api1SourcemapRequest model module.
 * @module model/Api1SourcemapRequest
 * @version 1.1.0
 */
var Api1SourcemapRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Api1SourcemapRequest</code>.
   * @alias module:model/Api1SourcemapRequest
   * @param version {String} Current code version (typically a git SHA)
   * @param minifiedUrl {String} The full URL of the minified file, as it appears in the stack trace. This should start with `http:` or `https:`.
   * @param sourceMap {File} Your source map file.
   */
  function Api1SourcemapRequest(version, minifiedUrl, sourceMap) {
    _classCallCheck(this, Api1SourcemapRequest);

    Api1SourcemapRequest.initialize(this, version, minifiedUrl, sourceMap);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Api1SourcemapRequest, null, [{
    key: "initialize",
    value: function initialize(obj, version, minifiedUrl, sourceMap) {
      obj['version'] = version;
      obj['minified_url'] = minifiedUrl;
      obj['source_map'] = sourceMap;
    }
    /**
     * Constructs a <code>Api1SourcemapRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Api1SourcemapRequest} obj Optional instance to populate.
     * @return {module:model/Api1SourcemapRequest} The populated <code>Api1SourcemapRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Api1SourcemapRequest();

        if (data.hasOwnProperty('version')) {
          obj['version'] = _ApiClient["default"].convertToType(data['version'], 'String');
        }

        if (data.hasOwnProperty('minified_url')) {
          obj['minified_url'] = _ApiClient["default"].convertToType(data['minified_url'], 'String');
        }

        if (data.hasOwnProperty('source_map')) {
          obj['source_map'] = _ApiClient["default"].convertToType(data['source_map'], File);
        }

        if (data.hasOwnProperty('source files')) {
          obj['source files'] = _ApiClient["default"].convertToType(data['source files'], File);
        }
      }

      return obj;
    }
  }]);

  return Api1SourcemapRequest;
}();
/**
 * Current code version (typically a git SHA)
 * @member {String} version
 */


Api1SourcemapRequest.prototype['version'] = undefined;
/**
 * The full URL of the minified file, as it appears in the stack trace. This should start with `http:` or `https:`.
 * @member {String} minified_url
 */

Api1SourcemapRequest.prototype['minified_url'] = undefined;
/**
 * Your source map file.
 * @member {File} source_map
 */

Api1SourcemapRequest.prototype['source_map'] = undefined;
/**
 * One or more source unminified files
 * @member {File} source files
 */

Api1SourcemapRequest.prototype['source files'] = undefined;
var _default = Api1SourcemapRequest;
exports["default"] = _default;