"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BasicProjectDetails = _interopRequireDefault(require("./BasicProjectDetails"));

var _Namespace = _interopRequireDefault(require("./Namespace"));

var _ProjectStatistics = _interopRequireDefault(require("./ProjectStatistics"));

var _UserBasic = _interopRequireDefault(require("./UserBasic"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ProjectWithAccess model module.
 * @module model/ProjectWithAccess
 * @version 1.1.0
 */
var ProjectWithAccess =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>ProjectWithAccess</code>.
   * Get a single project
   * @alias module:model/ProjectWithAccess
   */
  function ProjectWithAccess() {
    _classCallCheck(this, ProjectWithAccess);

    ProjectWithAccess.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProjectWithAccess, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProjectWithAccess</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProjectWithAccess} obj Optional instance to populate.
     * @return {module:model/ProjectWithAccess} The populated <code>ProjectWithAccess</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProjectWithAccess();

        if (data.hasOwnProperty('archived')) {
          obj['archived'] = _ApiClient["default"].convertToType(data['archived'], 'String');
        }

        if (data.hasOwnProperty('avatar_url')) {
          obj['avatar_url'] = _ApiClient["default"].convertToType(data['avatar_url'], 'String');
        }

        if (data.hasOwnProperty('builds_enabled')) {
          obj['builds_enabled'] = _ApiClient["default"].convertToType(data['builds_enabled'], 'String');
        }

        if (data.hasOwnProperty('container_registry_enabled')) {
          obj['container_registry_enabled'] = _ApiClient["default"].convertToType(data['container_registry_enabled'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('creator_id')) {
          obj['creator_id'] = _ApiClient["default"].convertToType(data['creator_id'], 'String');
        }

        if (data.hasOwnProperty('default_branch')) {
          obj['default_branch'] = _ApiClient["default"].convertToType(data['default_branch'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('forked_from_project')) {
          obj['forked_from_project'] = _BasicProjectDetails["default"].constructFromObject(data['forked_from_project']);
        }

        if (data.hasOwnProperty('forks_count')) {
          obj['forks_count'] = _ApiClient["default"].convertToType(data['forks_count'], 'String');
        }

        if (data.hasOwnProperty('http_url_to_repo')) {
          obj['http_url_to_repo'] = _ApiClient["default"].convertToType(data['http_url_to_repo'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('issues_enabled')) {
          obj['issues_enabled'] = _ApiClient["default"].convertToType(data['issues_enabled'], 'String');
        }

        if (data.hasOwnProperty('last_activity_at')) {
          obj['last_activity_at'] = _ApiClient["default"].convertToType(data['last_activity_at'], 'String');
        }

        if (data.hasOwnProperty('lfs_enabled')) {
          obj['lfs_enabled'] = _ApiClient["default"].convertToType(data['lfs_enabled'], 'String');
        }

        if (data.hasOwnProperty('merge_requests_enabled')) {
          obj['merge_requests_enabled'] = _ApiClient["default"].convertToType(data['merge_requests_enabled'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('name_with_namespace')) {
          obj['name_with_namespace'] = _ApiClient["default"].convertToType(data['name_with_namespace'], 'String');
        }

        if (data.hasOwnProperty('namespace')) {
          obj['namespace'] = _Namespace["default"].constructFromObject(data['namespace']);
        }

        if (data.hasOwnProperty('only_allow_merge_if_all_discussions_are_resolved')) {
          obj['only_allow_merge_if_all_discussions_are_resolved'] = _ApiClient["default"].convertToType(data['only_allow_merge_if_all_discussions_are_resolved'], 'String');
        }

        if (data.hasOwnProperty('only_allow_merge_if_build_succeeds')) {
          obj['only_allow_merge_if_build_succeeds'] = _ApiClient["default"].convertToType(data['only_allow_merge_if_build_succeeds'], 'String');
        }

        if (data.hasOwnProperty('open_issues_count')) {
          obj['open_issues_count'] = _ApiClient["default"].convertToType(data['open_issues_count'], 'String');
        }

        if (data.hasOwnProperty('owner')) {
          obj['owner'] = _UserBasic["default"].constructFromObject(data['owner']);
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('path_with_namespace')) {
          obj['path_with_namespace'] = _ApiClient["default"].convertToType(data['path_with_namespace'], 'String');
        }

        if (data.hasOwnProperty('permissions')) {
          obj['permissions'] = _ApiClient["default"].convertToType(data['permissions'], 'String');
        }

        if (data.hasOwnProperty('public')) {
          obj['public'] = _ApiClient["default"].convertToType(data['public'], 'String');
        }

        if (data.hasOwnProperty('public_builds')) {
          obj['public_builds'] = _ApiClient["default"].convertToType(data['public_builds'], 'String');
        }

        if (data.hasOwnProperty('request_access_enabled')) {
          obj['request_access_enabled'] = _ApiClient["default"].convertToType(data['request_access_enabled'], 'String');
        }

        if (data.hasOwnProperty('runners_token')) {
          obj['runners_token'] = _ApiClient["default"].convertToType(data['runners_token'], 'String');
        }

        if (data.hasOwnProperty('shared_runners_enabled')) {
          obj['shared_runners_enabled'] = _ApiClient["default"].convertToType(data['shared_runners_enabled'], 'String');
        }

        if (data.hasOwnProperty('shared_with_groups')) {
          obj['shared_with_groups'] = _ApiClient["default"].convertToType(data['shared_with_groups'], 'String');
        }

        if (data.hasOwnProperty('snippets_enabled')) {
          obj['snippets_enabled'] = _ApiClient["default"].convertToType(data['snippets_enabled'], 'String');
        }

        if (data.hasOwnProperty('ssh_url_to_repo')) {
          obj['ssh_url_to_repo'] = _ApiClient["default"].convertToType(data['ssh_url_to_repo'], 'String');
        }

        if (data.hasOwnProperty('star_count')) {
          obj['star_count'] = _ApiClient["default"].convertToType(data['star_count'], 'String');
        }

        if (data.hasOwnProperty('statistics')) {
          obj['statistics'] = _ProjectStatistics["default"].constructFromObject(data['statistics']);
        }

        if (data.hasOwnProperty('tag_list')) {
          obj['tag_list'] = _ApiClient["default"].convertToType(data['tag_list'], 'String');
        }

        if (data.hasOwnProperty('visibility_level')) {
          obj['visibility_level'] = _ApiClient["default"].convertToType(data['visibility_level'], 'String');
        }

        if (data.hasOwnProperty('web_url')) {
          obj['web_url'] = _ApiClient["default"].convertToType(data['web_url'], 'String');
        }

        if (data.hasOwnProperty('wiki_enabled')) {
          obj['wiki_enabled'] = _ApiClient["default"].convertToType(data['wiki_enabled'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ProjectWithAccess;
}();
/**
 * @member {String} archived
 */


ProjectWithAccess.prototype['archived'] = undefined;
/**
 * @member {String} avatar_url
 */

ProjectWithAccess.prototype['avatar_url'] = undefined;
/**
 * @member {String} builds_enabled
 */

ProjectWithAccess.prototype['builds_enabled'] = undefined;
/**
 * @member {String} container_registry_enabled
 */

ProjectWithAccess.prototype['container_registry_enabled'] = undefined;
/**
 * @member {String} created_at
 */

ProjectWithAccess.prototype['created_at'] = undefined;
/**
 * @member {String} creator_id
 */

ProjectWithAccess.prototype['creator_id'] = undefined;
/**
 * @member {String} default_branch
 */

ProjectWithAccess.prototype['default_branch'] = undefined;
/**
 * @member {String} description
 */

ProjectWithAccess.prototype['description'] = undefined;
/**
 * @member {module:model/BasicProjectDetails} forked_from_project
 */

ProjectWithAccess.prototype['forked_from_project'] = undefined;
/**
 * @member {String} forks_count
 */

ProjectWithAccess.prototype['forks_count'] = undefined;
/**
 * @member {String} http_url_to_repo
 */

ProjectWithAccess.prototype['http_url_to_repo'] = undefined;
/**
 * @member {String} id
 */

ProjectWithAccess.prototype['id'] = undefined;
/**
 * @member {String} issues_enabled
 */

ProjectWithAccess.prototype['issues_enabled'] = undefined;
/**
 * @member {String} last_activity_at
 */

ProjectWithAccess.prototype['last_activity_at'] = undefined;
/**
 * @member {String} lfs_enabled
 */

ProjectWithAccess.prototype['lfs_enabled'] = undefined;
/**
 * @member {String} merge_requests_enabled
 */

ProjectWithAccess.prototype['merge_requests_enabled'] = undefined;
/**
 * @member {String} name
 */

ProjectWithAccess.prototype['name'] = undefined;
/**
 * @member {String} name_with_namespace
 */

ProjectWithAccess.prototype['name_with_namespace'] = undefined;
/**
 * @member {module:model/Namespace} namespace
 */

ProjectWithAccess.prototype['namespace'] = undefined;
/**
 * @member {String} only_allow_merge_if_all_discussions_are_resolved
 */

ProjectWithAccess.prototype['only_allow_merge_if_all_discussions_are_resolved'] = undefined;
/**
 * @member {String} only_allow_merge_if_build_succeeds
 */

ProjectWithAccess.prototype['only_allow_merge_if_build_succeeds'] = undefined;
/**
 * @member {String} open_issues_count
 */

ProjectWithAccess.prototype['open_issues_count'] = undefined;
/**
 * @member {module:model/UserBasic} owner
 */

ProjectWithAccess.prototype['owner'] = undefined;
/**
 * @member {String} path
 */

ProjectWithAccess.prototype['path'] = undefined;
/**
 * @member {String} path_with_namespace
 */

ProjectWithAccess.prototype['path_with_namespace'] = undefined;
/**
 * @member {String} permissions
 */

ProjectWithAccess.prototype['permissions'] = undefined;
/**
 * @member {String} public
 */

ProjectWithAccess.prototype['public'] = undefined;
/**
 * @member {String} public_builds
 */

ProjectWithAccess.prototype['public_builds'] = undefined;
/**
 * @member {String} request_access_enabled
 */

ProjectWithAccess.prototype['request_access_enabled'] = undefined;
/**
 * @member {String} runners_token
 */

ProjectWithAccess.prototype['runners_token'] = undefined;
/**
 * @member {String} shared_runners_enabled
 */

ProjectWithAccess.prototype['shared_runners_enabled'] = undefined;
/**
 * @member {String} shared_with_groups
 */

ProjectWithAccess.prototype['shared_with_groups'] = undefined;
/**
 * @member {String} snippets_enabled
 */

ProjectWithAccess.prototype['snippets_enabled'] = undefined;
/**
 * @member {String} ssh_url_to_repo
 */

ProjectWithAccess.prototype['ssh_url_to_repo'] = undefined;
/**
 * @member {String} star_count
 */

ProjectWithAccess.prototype['star_count'] = undefined;
/**
 * @member {module:model/ProjectStatistics} statistics
 */

ProjectWithAccess.prototype['statistics'] = undefined;
/**
 * @member {String} tag_list
 */

ProjectWithAccess.prototype['tag_list'] = undefined;
/**
 * @member {String} visibility_level
 */

ProjectWithAccess.prototype['visibility_level'] = undefined;
/**
 * @member {String} web_url
 */

ProjectWithAccess.prototype['web_url'] = undefined;
/**
 * @member {String} wiki_enabled
 */

ProjectWithAccess.prototype['wiki_enabled'] = undefined;
var _default = ProjectWithAccess;
exports["default"] = _default;