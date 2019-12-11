"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _UserBasic = _interopRequireDefault(require("./UserBasic"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ProjectSnippet model module.
 * @module model/ProjectSnippet
 * @version 1.1.0
 */
var ProjectSnippet =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ProjectSnippet</code>.
   * Update an existing project snippet
   * @alias module:model/ProjectSnippet
   */
  function ProjectSnippet() {
    _classCallCheck(this, ProjectSnippet);

    ProjectSnippet.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProjectSnippet, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProjectSnippet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectSnippet} obj Optional instance to populate.
     * @return {module:model/ProjectSnippet} The populated <code>ProjectSnippet</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProjectSnippet();

        if (data.hasOwnProperty('author')) {
          obj['author'] = _UserBasic["default"].constructFromObject(data['author']);
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('expires_at')) {
          obj['expires_at'] = _ApiClient["default"].convertToType(data['expires_at'], 'String');
        }

        if (data.hasOwnProperty('file_name')) {
          obj['file_name'] = _ApiClient["default"].convertToType(data['file_name'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'String');
        }

        if (data.hasOwnProperty('web_url')) {
          obj['web_url'] = _ApiClient["default"].convertToType(data['web_url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ProjectSnippet;
}();
/**
 * @member {module:model/UserBasic} author
 */


ProjectSnippet.prototype['author'] = undefined;
/**
 * @member {String} created_at
 */

ProjectSnippet.prototype['created_at'] = undefined;
/**
 * @member {String} expires_at
 */

ProjectSnippet.prototype['expires_at'] = undefined;
/**
 * @member {String} file_name
 */

ProjectSnippet.prototype['file_name'] = undefined;
/**
 * @member {String} id
 */

ProjectSnippet.prototype['id'] = undefined;
/**
 * @member {String} title
 */

ProjectSnippet.prototype['title'] = undefined;
/**
 * @member {String} updated_at
 */

ProjectSnippet.prototype['updated_at'] = undefined;
/**
 * @member {String} web_url
 */

ProjectSnippet.prototype['web_url'] = undefined;
var _default = ProjectSnippet;
exports["default"] = _default;