"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AvatarUrlsBean = _interopRequireDefault(require("./AvatarUrlsBean"));

var _IssueTypeIssueCreateMetadata = _interopRequireDefault(require("./IssueTypeIssueCreateMetadata"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ProjectIssueCreateMetadata model module.
 * @module model/ProjectIssueCreateMetadata
 * @version 1.4.0
 */
var ProjectIssueCreateMetadata = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProjectIssueCreateMetadata</code>.
   * Details of the issue creation metadata for a project.
   * @alias module:model/ProjectIssueCreateMetadata
   */
  function ProjectIssueCreateMetadata() {
    _classCallCheck(this, ProjectIssueCreateMetadata);

    ProjectIssueCreateMetadata.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProjectIssueCreateMetadata, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProjectIssueCreateMetadata</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectIssueCreateMetadata} obj Optional instance to populate.
     * @return {module:model/ProjectIssueCreateMetadata} The populated <code>ProjectIssueCreateMetadata</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProjectIssueCreateMetadata();

        if (data.hasOwnProperty('avatarUrls')) {
          obj['avatarUrls'] = _ApiClient["default"].convertToType(data['avatarUrls'], _AvatarUrlsBean["default"]);
        }

        if (data.hasOwnProperty('expand')) {
          obj['expand'] = _ApiClient["default"].convertToType(data['expand'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('issuetypes')) {
          obj['issuetypes'] = _ApiClient["default"].convertToType(data['issuetypes'], [_IssueTypeIssueCreateMetadata["default"]]);
        }

        if (data.hasOwnProperty('key')) {
          obj['key'] = _ApiClient["default"].convertToType(data['key'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ProjectIssueCreateMetadata;
}();
/**
 * List of the project's avatars, returning the avatar size and associated URL.
 * @member {module:model/AvatarUrlsBean} avatarUrls
 */


ProjectIssueCreateMetadata.prototype['avatarUrls'] = undefined;
/**
 * Expand options that include additional project issue create metadata details in the response.
 * @member {String} expand
 */

ProjectIssueCreateMetadata.prototype['expand'] = undefined;
/**
 * The ID of the project.
 * @member {String} id
 */

ProjectIssueCreateMetadata.prototype['id'] = undefined;
/**
 * List of the issue types supported by the project.
 * @member {Array.<module:model/IssueTypeIssueCreateMetadata>} issuetypes
 */

ProjectIssueCreateMetadata.prototype['issuetypes'] = undefined;
/**
 * The key of the project.
 * @member {String} key
 */

ProjectIssueCreateMetadata.prototype['key'] = undefined;
/**
 * The name of the project.
 * @member {String} name
 */

ProjectIssueCreateMetadata.prototype['name'] = undefined;
/**
 * The URL of the project.
 * @member {String} self
 */

ProjectIssueCreateMetadata.prototype['self'] = undefined;
var _default = ProjectIssueCreateMetadata;
exports["default"] = _default;