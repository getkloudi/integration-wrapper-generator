"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ReleaseAssets = _interopRequireDefault(require("./ReleaseAssets"));

var _User = _interopRequireDefault(require("./User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Release model module.
 * @module model/Release
 * @version 1.4.5
 */
var Release = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Release</code>.
   * @alias module:model/Release
   */
  function Release() {
    _classCallCheck(this, Release);

    Release.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Release, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Release</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Release} obj Optional instance to populate.
     * @return {module:model/Release} The populated <code>Release</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Release();

        if (data.hasOwnProperty('assets')) {
          obj['assets'] = _ApiClient["default"].convertToType(data['assets'], [_ReleaseAssets["default"]]);
        }

        if (data.hasOwnProperty('assets_url')) {
          obj['assets_url'] = _ApiClient["default"].convertToType(data['assets_url'], 'String');
        }

        if (data.hasOwnProperty('author')) {
          obj['author'] = _User["default"].constructFromObject(data['author']);
        }

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('draft')) {
          obj['draft'] = _ApiClient["default"].convertToType(data['draft'], 'Boolean');
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

        if (data.hasOwnProperty('prerelease')) {
          obj['prerelease'] = _ApiClient["default"].convertToType(data['prerelease'], 'Boolean');
        }

        if (data.hasOwnProperty('published_at')) {
          obj['published_at'] = _ApiClient["default"].convertToType(data['published_at'], 'String');
        }

        if (data.hasOwnProperty('tag_name')) {
          obj['tag_name'] = _ApiClient["default"].convertToType(data['tag_name'], 'String');
        }

        if (data.hasOwnProperty('tarball_url')) {
          obj['tarball_url'] = _ApiClient["default"].convertToType(data['tarball_url'], 'String');
        }

        if (data.hasOwnProperty('target_commitish')) {
          obj['target_commitish'] = _ApiClient["default"].convertToType(data['target_commitish'], 'String');
        }

        if (data.hasOwnProperty('upload_url')) {
          obj['upload_url'] = _ApiClient["default"].convertToType(data['upload_url'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('zipball_url')) {
          obj['zipball_url'] = _ApiClient["default"].convertToType(data['zipball_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Release;
}();
/**
 * @member {Array.<module:model/ReleaseAssets>} assets
 */


Release.prototype['assets'] = undefined;
/**
 * @member {String} assets_url
 */

Release.prototype['assets_url'] = undefined;
/**
 * @member {module:model/User} author
 */

Release.prototype['author'] = undefined;
/**
 * @member {String} body
 */

Release.prototype['body'] = undefined;
/**
 * @member {String} created_at
 */

Release.prototype['created_at'] = undefined;
/**
 * @member {Boolean} draft
 */

Release.prototype['draft'] = undefined;
/**
 * @member {String} html_url
 */

Release.prototype['html_url'] = undefined;
/**
 * @member {Number} id
 */

Release.prototype['id'] = undefined;
/**
 * @member {String} name
 */

Release.prototype['name'] = undefined;
/**
 * @member {Boolean} prerelease
 */

Release.prototype['prerelease'] = undefined;
/**
 * @member {String} published_at
 */

Release.prototype['published_at'] = undefined;
/**
 * @member {String} tag_name
 */

Release.prototype['tag_name'] = undefined;
/**
 * @member {String} tarball_url
 */

Release.prototype['tarball_url'] = undefined;
/**
 * @member {String} target_commitish
 */

Release.prototype['target_commitish'] = undefined;
/**
 * @member {String} upload_url
 */

Release.prototype['upload_url'] = undefined;
/**
 * @member {String} url
 */

Release.prototype['url'] = undefined;
/**
 * @member {String} zipball_url
 */

Release.prototype['zipball_url'] = undefined;
var _default = Release;
exports["default"] = _default;