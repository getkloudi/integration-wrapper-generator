"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Actor = _interopRequireDefault(require("./Actor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SearchCodeRepository model module.
 * @module model/SearchCodeRepository
 * @version 1.4.2
 */
var SearchCodeRepository =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>SearchCodeRepository</code>.
   * @alias module:model/SearchCodeRepository
   */
  function SearchCodeRepository() {
    _classCallCheck(this, SearchCodeRepository);

    SearchCodeRepository.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SearchCodeRepository, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SearchCodeRepository</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SearchCodeRepository} obj Optional instance to populate.
     * @return {module:model/SearchCodeRepository} The populated <code>SearchCodeRepository</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SearchCodeRepository();

        if (data.hasOwnProperty('archive_url')) {
          obj['archive_url'] = _ApiClient["default"].convertToType(data['archive_url'], 'String');
        }

        if (data.hasOwnProperty('assignees_url')) {
          obj['assignees_url'] = _ApiClient["default"].convertToType(data['assignees_url'], 'String');
        }

        if (data.hasOwnProperty('blobs_url')) {
          obj['blobs_url'] = _ApiClient["default"].convertToType(data['blobs_url'], 'String');
        }

        if (data.hasOwnProperty('branches_url')) {
          obj['branches_url'] = _ApiClient["default"].convertToType(data['branches_url'], 'String');
        }

        if (data.hasOwnProperty('collaborators_url')) {
          obj['collaborators_url'] = _ApiClient["default"].convertToType(data['collaborators_url'], 'String');
        }

        if (data.hasOwnProperty('comments_url')) {
          obj['comments_url'] = _ApiClient["default"].convertToType(data['comments_url'], 'String');
        }

        if (data.hasOwnProperty('commits_url')) {
          obj['commits_url'] = _ApiClient["default"].convertToType(data['commits_url'], 'String');
        }

        if (data.hasOwnProperty('compare_url')) {
          obj['compare_url'] = _ApiClient["default"].convertToType(data['compare_url'], 'String');
        }

        if (data.hasOwnProperty('contents_url')) {
          obj['contents_url'] = _ApiClient["default"].convertToType(data['contents_url'], 'String');
        }

        if (data.hasOwnProperty('contributors_url')) {
          obj['contributors_url'] = _ApiClient["default"].convertToType(data['contributors_url'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('downloads_url')) {
          obj['downloads_url'] = _ApiClient["default"].convertToType(data['downloads_url'], 'String');
        }

        if (data.hasOwnProperty('events_url')) {
          obj['events_url'] = _ApiClient["default"].convertToType(data['events_url'], 'String');
        }

        if (data.hasOwnProperty('fork')) {
          obj['fork'] = _ApiClient["default"].convertToType(data['fork'], 'Boolean');
        }

        if (data.hasOwnProperty('forks_url')) {
          obj['forks_url'] = _ApiClient["default"].convertToType(data['forks_url'], 'String');
        }

        if (data.hasOwnProperty('full_name')) {
          obj['full_name'] = _ApiClient["default"].convertToType(data['full_name'], 'String');
        }

        if (data.hasOwnProperty('git_commits_url')) {
          obj['git_commits_url'] = _ApiClient["default"].convertToType(data['git_commits_url'], 'String');
        }

        if (data.hasOwnProperty('git_refs_url')) {
          obj['git_refs_url'] = _ApiClient["default"].convertToType(data['git_refs_url'], 'String');
        }

        if (data.hasOwnProperty('git_tags_url')) {
          obj['git_tags_url'] = _ApiClient["default"].convertToType(data['git_tags_url'], 'String');
        }

        if (data.hasOwnProperty('hooks_url')) {
          obj['hooks_url'] = _ApiClient["default"].convertToType(data['hooks_url'], 'String');
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('issue_comment_url')) {
          obj['issue_comment_url'] = _ApiClient["default"].convertToType(data['issue_comment_url'], 'String');
        }

        if (data.hasOwnProperty('issue_events_url')) {
          obj['issue_events_url'] = _ApiClient["default"].convertToType(data['issue_events_url'], 'String');
        }

        if (data.hasOwnProperty('issues_url')) {
          obj['issues_url'] = _ApiClient["default"].convertToType(data['issues_url'], 'String');
        }

        if (data.hasOwnProperty('keys_url')) {
          obj['keys_url'] = _ApiClient["default"].convertToType(data['keys_url'], 'String');
        }

        if (data.hasOwnProperty('labels_url')) {
          obj['labels_url'] = _ApiClient["default"].convertToType(data['labels_url'], 'String');
        }

        if (data.hasOwnProperty('languages_url')) {
          obj['languages_url'] = _ApiClient["default"].convertToType(data['languages_url'], 'String');
        }

        if (data.hasOwnProperty('merges_url')) {
          obj['merges_url'] = _ApiClient["default"].convertToType(data['merges_url'], 'String');
        }

        if (data.hasOwnProperty('milestones_url')) {
          obj['milestones_url'] = _ApiClient["default"].convertToType(data['milestones_url'], 'String');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('notifications_url')) {
          obj['notifications_url'] = _ApiClient["default"].convertToType(data['notifications_url'], 'String');
        }

        if (data.hasOwnProperty('owner')) {
          obj['owner'] = _Actor["default"].constructFromObject(data['owner']);
        }

        if (data.hasOwnProperty('private')) {
          obj['private'] = _ApiClient["default"].convertToType(data['private'], 'Boolean');
        }

        if (data.hasOwnProperty('pulls_url')) {
          obj['pulls_url'] = _ApiClient["default"].convertToType(data['pulls_url'], 'String');
        }

        if (data.hasOwnProperty('stargazers_url')) {
          obj['stargazers_url'] = _ApiClient["default"].convertToType(data['stargazers_url'], 'String');
        }

        if (data.hasOwnProperty('statuses_url')) {
          obj['statuses_url'] = _ApiClient["default"].convertToType(data['statuses_url'], 'String');
        }

        if (data.hasOwnProperty('subscribers_url')) {
          obj['subscribers_url'] = _ApiClient["default"].convertToType(data['subscribers_url'], 'String');
        }

        if (data.hasOwnProperty('subscription_url')) {
          obj['subscription_url'] = _ApiClient["default"].convertToType(data['subscription_url'], 'String');
        }

        if (data.hasOwnProperty('tags_url')) {
          obj['tags_url'] = _ApiClient["default"].convertToType(data['tags_url'], 'String');
        }

        if (data.hasOwnProperty('teams_url')) {
          obj['teams_url'] = _ApiClient["default"].convertToType(data['teams_url'], 'String');
        }

        if (data.hasOwnProperty('trees_url')) {
          obj['trees_url'] = _ApiClient["default"].convertToType(data['trees_url'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SearchCodeRepository;
}();
/**
 * @member {String} archive_url
 */


SearchCodeRepository.prototype['archive_url'] = undefined;
/**
 * @member {String} assignees_url
 */

SearchCodeRepository.prototype['assignees_url'] = undefined;
/**
 * @member {String} blobs_url
 */

SearchCodeRepository.prototype['blobs_url'] = undefined;
/**
 * @member {String} branches_url
 */

SearchCodeRepository.prototype['branches_url'] = undefined;
/**
 * @member {String} collaborators_url
 */

SearchCodeRepository.prototype['collaborators_url'] = undefined;
/**
 * @member {String} comments_url
 */

SearchCodeRepository.prototype['comments_url'] = undefined;
/**
 * @member {String} commits_url
 */

SearchCodeRepository.prototype['commits_url'] = undefined;
/**
 * @member {String} compare_url
 */

SearchCodeRepository.prototype['compare_url'] = undefined;
/**
 * @member {String} contents_url
 */

SearchCodeRepository.prototype['contents_url'] = undefined;
/**
 * @member {String} contributors_url
 */

SearchCodeRepository.prototype['contributors_url'] = undefined;
/**
 * @member {String} description
 */

SearchCodeRepository.prototype['description'] = undefined;
/**
 * @member {String} downloads_url
 */

SearchCodeRepository.prototype['downloads_url'] = undefined;
/**
 * @member {String} events_url
 */

SearchCodeRepository.prototype['events_url'] = undefined;
/**
 * @member {Boolean} fork
 */

SearchCodeRepository.prototype['fork'] = undefined;
/**
 * @member {String} forks_url
 */

SearchCodeRepository.prototype['forks_url'] = undefined;
/**
 * @member {String} full_name
 */

SearchCodeRepository.prototype['full_name'] = undefined;
/**
 * @member {String} git_commits_url
 */

SearchCodeRepository.prototype['git_commits_url'] = undefined;
/**
 * @member {String} git_refs_url
 */

SearchCodeRepository.prototype['git_refs_url'] = undefined;
/**
 * @member {String} git_tags_url
 */

SearchCodeRepository.prototype['git_tags_url'] = undefined;
/**
 * @member {String} hooks_url
 */

SearchCodeRepository.prototype['hooks_url'] = undefined;
/**
 * @member {String} html_url
 */

SearchCodeRepository.prototype['html_url'] = undefined;
/**
 * @member {Number} id
 */

SearchCodeRepository.prototype['id'] = undefined;
/**
 * @member {String} issue_comment_url
 */

SearchCodeRepository.prototype['issue_comment_url'] = undefined;
/**
 * @member {String} issue_events_url
 */

SearchCodeRepository.prototype['issue_events_url'] = undefined;
/**
 * @member {String} issues_url
 */

SearchCodeRepository.prototype['issues_url'] = undefined;
/**
 * @member {String} keys_url
 */

SearchCodeRepository.prototype['keys_url'] = undefined;
/**
 * @member {String} labels_url
 */

SearchCodeRepository.prototype['labels_url'] = undefined;
/**
 * @member {String} languages_url
 */

SearchCodeRepository.prototype['languages_url'] = undefined;
/**
 * @member {String} merges_url
 */

SearchCodeRepository.prototype['merges_url'] = undefined;
/**
 * @member {String} milestones_url
 */

SearchCodeRepository.prototype['milestones_url'] = undefined;
/**
 * @member {String} name
 */

SearchCodeRepository.prototype['name'] = undefined;
/**
 * @member {String} notifications_url
 */

SearchCodeRepository.prototype['notifications_url'] = undefined;
/**
 * @member {module:model/Actor} owner
 */

SearchCodeRepository.prototype['owner'] = undefined;
/**
 * @member {Boolean} private
 */

SearchCodeRepository.prototype['private'] = undefined;
/**
 * @member {String} pulls_url
 */

SearchCodeRepository.prototype['pulls_url'] = undefined;
/**
 * @member {String} stargazers_url
 */

SearchCodeRepository.prototype['stargazers_url'] = undefined;
/**
 * @member {String} statuses_url
 */

SearchCodeRepository.prototype['statuses_url'] = undefined;
/**
 * @member {String} subscribers_url
 */

SearchCodeRepository.prototype['subscribers_url'] = undefined;
/**
 * @member {String} subscription_url
 */

SearchCodeRepository.prototype['subscription_url'] = undefined;
/**
 * @member {String} tags_url
 */

SearchCodeRepository.prototype['tags_url'] = undefined;
/**
 * @member {String} teams_url
 */

SearchCodeRepository.prototype['teams_url'] = undefined;
/**
 * @member {String} trees_url
 */

SearchCodeRepository.prototype['trees_url'] = undefined;
/**
 * @member {String} url
 */

SearchCodeRepository.prototype['url'] = undefined;
var _default = SearchCodeRepository;
exports["default"] = _default;