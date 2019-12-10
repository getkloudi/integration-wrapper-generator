"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Milestone = _interopRequireDefault(require("./Milestone"));

var _UserBasic = _interopRequireDefault(require("./UserBasic"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The MergeRequest model module.
 * @module model/MergeRequest
 * @version 1.0.0
 */
var MergeRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>MergeRequest</code>.
   * Unsubscribe from a resource
   * @alias module:model/MergeRequest
   */
  function MergeRequest() {
    _classCallCheck(this, MergeRequest);

    MergeRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MergeRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>MergeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MergeRequest} obj Optional instance to populate.
     * @return {module:model/MergeRequest} The populated <code>MergeRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MergeRequest();

        if (data.hasOwnProperty('assignee')) {
          obj['assignee'] = _UserBasic["default"].constructFromObject(data['assignee']);
        }

        if (data.hasOwnProperty('author')) {
          obj['author'] = _UserBasic["default"].constructFromObject(data['author']);
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('downvotes')) {
          obj['downvotes'] = _ApiClient["default"].convertToType(data['downvotes'], 'String');
        }

        if (data.hasOwnProperty('force_remove_source_branch')) {
          obj['force_remove_source_branch'] = _ApiClient["default"].convertToType(data['force_remove_source_branch'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('iid')) {
          obj['iid'] = _ApiClient["default"].convertToType(data['iid'], 'String');
        }

        if (data.hasOwnProperty('labels')) {
          obj['labels'] = _ApiClient["default"].convertToType(data['labels'], 'String');
        }

        if (data.hasOwnProperty('merge_commit_sha')) {
          obj['merge_commit_sha'] = _ApiClient["default"].convertToType(data['merge_commit_sha'], 'String');
        }

        if (data.hasOwnProperty('merge_status')) {
          obj['merge_status'] = _ApiClient["default"].convertToType(data['merge_status'], 'String');
        }

        if (data.hasOwnProperty('merge_when_build_succeeds')) {
          obj['merge_when_build_succeeds'] = _ApiClient["default"].convertToType(data['merge_when_build_succeeds'], 'String');
        }

        if (data.hasOwnProperty('milestone')) {
          obj['milestone'] = _Milestone["default"].constructFromObject(data['milestone']);
        }

        if (data.hasOwnProperty('project_id')) {
          obj['project_id'] = _ApiClient["default"].convertToType(data['project_id'], 'String');
        }

        if (data.hasOwnProperty('sha')) {
          obj['sha'] = _ApiClient["default"].convertToType(data['sha'], 'String');
        }

        if (data.hasOwnProperty('should_remove_source_branch')) {
          obj['should_remove_source_branch'] = _ApiClient["default"].convertToType(data['should_remove_source_branch'], 'String');
        }

        if (data.hasOwnProperty('source_branch')) {
          obj['source_branch'] = _ApiClient["default"].convertToType(data['source_branch'], 'String');
        }

        if (data.hasOwnProperty('source_project_id')) {
          obj['source_project_id'] = _ApiClient["default"].convertToType(data['source_project_id'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('subscribed')) {
          obj['subscribed'] = _ApiClient["default"].convertToType(data['subscribed'], 'String');
        }

        if (data.hasOwnProperty('target_branch')) {
          obj['target_branch'] = _ApiClient["default"].convertToType(data['target_branch'], 'String');
        }

        if (data.hasOwnProperty('target_project_id')) {
          obj['target_project_id'] = _ApiClient["default"].convertToType(data['target_project_id'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'String');
        }

        if (data.hasOwnProperty('upvotes')) {
          obj['upvotes'] = _ApiClient["default"].convertToType(data['upvotes'], 'String');
        }

        if (data.hasOwnProperty('user_notes_count')) {
          obj['user_notes_count'] = _ApiClient["default"].convertToType(data['user_notes_count'], 'String');
        }

        if (data.hasOwnProperty('web_url')) {
          obj['web_url'] = _ApiClient["default"].convertToType(data['web_url'], 'String');
        }

        if (data.hasOwnProperty('work_in_progress')) {
          obj['work_in_progress'] = _ApiClient["default"].convertToType(data['work_in_progress'], 'String');
        }
      }

      return obj;
    }
  }]);

  return MergeRequest;
}();
/**
 * @member {module:model/UserBasic} assignee
 */


MergeRequest.prototype['assignee'] = undefined;
/**
 * @member {module:model/UserBasic} author
 */

MergeRequest.prototype['author'] = undefined;
/**
 * @member {String} created_at
 */

MergeRequest.prototype['created_at'] = undefined;
/**
 * @member {String} description
 */

MergeRequest.prototype['description'] = undefined;
/**
 * @member {String} downvotes
 */

MergeRequest.prototype['downvotes'] = undefined;
/**
 * @member {String} force_remove_source_branch
 */

MergeRequest.prototype['force_remove_source_branch'] = undefined;
/**
 * @member {String} id
 */

MergeRequest.prototype['id'] = undefined;
/**
 * @member {String} iid
 */

MergeRequest.prototype['iid'] = undefined;
/**
 * @member {String} labels
 */

MergeRequest.prototype['labels'] = undefined;
/**
 * @member {String} merge_commit_sha
 */

MergeRequest.prototype['merge_commit_sha'] = undefined;
/**
 * @member {String} merge_status
 */

MergeRequest.prototype['merge_status'] = undefined;
/**
 * @member {String} merge_when_build_succeeds
 */

MergeRequest.prototype['merge_when_build_succeeds'] = undefined;
/**
 * @member {module:model/Milestone} milestone
 */

MergeRequest.prototype['milestone'] = undefined;
/**
 * @member {String} project_id
 */

MergeRequest.prototype['project_id'] = undefined;
/**
 * @member {String} sha
 */

MergeRequest.prototype['sha'] = undefined;
/**
 * @member {String} should_remove_source_branch
 */

MergeRequest.prototype['should_remove_source_branch'] = undefined;
/**
 * @member {String} source_branch
 */

MergeRequest.prototype['source_branch'] = undefined;
/**
 * @member {String} source_project_id
 */

MergeRequest.prototype['source_project_id'] = undefined;
/**
 * @member {String} state
 */

MergeRequest.prototype['state'] = undefined;
/**
 * @member {String} subscribed
 */

MergeRequest.prototype['subscribed'] = undefined;
/**
 * @member {String} target_branch
 */

MergeRequest.prototype['target_branch'] = undefined;
/**
 * @member {String} target_project_id
 */

MergeRequest.prototype['target_project_id'] = undefined;
/**
 * @member {String} title
 */

MergeRequest.prototype['title'] = undefined;
/**
 * @member {String} updated_at
 */

MergeRequest.prototype['updated_at'] = undefined;
/**
 * @member {String} upvotes
 */

MergeRequest.prototype['upvotes'] = undefined;
/**
 * @member {String} user_notes_count
 */

MergeRequest.prototype['user_notes_count'] = undefined;
/**
 * @member {String} web_url
 */

MergeRequest.prototype['web_url'] = undefined;
/**
 * @member {String} work_in_progress
 */

MergeRequest.prototype['work_in_progress'] = undefined;
var _default = MergeRequest;
exports["default"] = _default;