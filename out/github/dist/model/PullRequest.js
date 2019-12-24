"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PullRequestBase = _interopRequireDefault(require("./PullRequestBase"));

var _PullRequestBaseUser = _interopRequireDefault(require("./PullRequestBaseUser"));

var _PullRequestLinks = _interopRequireDefault(require("./PullRequestLinks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PullRequest model module.
 * @module model/PullRequest
 * @version 1.3.3
 */
var PullRequest =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PullRequest</code>.
   * @alias module:model/PullRequest
   */
  function PullRequest() {
    _classCallCheck(this, PullRequest);

    PullRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PullRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PullRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullRequest} obj Optional instance to populate.
     * @return {module:model/PullRequest} The populated <code>PullRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PullRequest();

        if (data.hasOwnProperty('_links')) {
          obj['_links'] = _PullRequestLinks["default"].constructFromObject(data['_links']);
        }

        if (data.hasOwnProperty('additions')) {
          obj['additions'] = _ApiClient["default"].convertToType(data['additions'], 'Number');
        }

        if (data.hasOwnProperty('base')) {
          obj['base'] = _PullRequestBase["default"].constructFromObject(data['base']);
        }

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], 'String');
        }

        if (data.hasOwnProperty('changed_files')) {
          obj['changed_files'] = _ApiClient["default"].convertToType(data['changed_files'], 'Number');
        }

        if (data.hasOwnProperty('closed_at')) {
          obj['closed_at'] = _ApiClient["default"].convertToType(data['closed_at'], 'String');
        }

        if (data.hasOwnProperty('comments')) {
          obj['comments'] = _ApiClient["default"].convertToType(data['comments'], 'Number');
        }

        if (data.hasOwnProperty('commits')) {
          obj['commits'] = _ApiClient["default"].convertToType(data['commits'], 'Number');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('deletions')) {
          obj['deletions'] = _ApiClient["default"].convertToType(data['deletions'], 'Number');
        }

        if (data.hasOwnProperty('diff_url')) {
          obj['diff_url'] = _ApiClient["default"].convertToType(data['diff_url'], 'String');
        }

        if (data.hasOwnProperty('head')) {
          obj['head'] = _PullRequestBase["default"].constructFromObject(data['head']);
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('issue_url')) {
          obj['issue_url'] = _ApiClient["default"].convertToType(data['issue_url'], 'String');
        }

        if (data.hasOwnProperty('merge_commit_sha')) {
          obj['merge_commit_sha'] = _ApiClient["default"].convertToType(data['merge_commit_sha'], 'String');
        }

        if (data.hasOwnProperty('mergeable')) {
          obj['mergeable'] = _ApiClient["default"].convertToType(data['mergeable'], 'Boolean');
        }

        if (data.hasOwnProperty('merged')) {
          obj['merged'] = _ApiClient["default"].convertToType(data['merged'], 'Boolean');
        }

        if (data.hasOwnProperty('merged_at')) {
          obj['merged_at'] = _ApiClient["default"].convertToType(data['merged_at'], 'String');
        }

        if (data.hasOwnProperty('merged_by')) {
          obj['merged_by'] = _PullRequestBaseUser["default"].constructFromObject(data['merged_by']);
        }

        if (data.hasOwnProperty('number')) {
          obj['number'] = _ApiClient["default"].convertToType(data['number'], 'Number');
        }

        if (data.hasOwnProperty('patch_url')) {
          obj['patch_url'] = _ApiClient["default"].convertToType(data['patch_url'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _PullRequestBaseUser["default"].constructFromObject(data['user']);
        }
      }

      return obj;
    }
  }]);

  return PullRequest;
}();
/**
 * @member {module:model/PullRequestLinks} _links
 */


PullRequest.prototype['_links'] = undefined;
/**
 * @member {Number} additions
 */

PullRequest.prototype['additions'] = undefined;
/**
 * @member {module:model/PullRequestBase} base
 */

PullRequest.prototype['base'] = undefined;
/**
 * @member {String} body
 */

PullRequest.prototype['body'] = undefined;
/**
 * @member {Number} changed_files
 */

PullRequest.prototype['changed_files'] = undefined;
/**
 * @member {String} closed_at
 */

PullRequest.prototype['closed_at'] = undefined;
/**
 * @member {Number} comments
 */

PullRequest.prototype['comments'] = undefined;
/**
 * @member {Number} commits
 */

PullRequest.prototype['commits'] = undefined;
/**
 * @member {String} created_at
 */

PullRequest.prototype['created_at'] = undefined;
/**
 * @member {Number} deletions
 */

PullRequest.prototype['deletions'] = undefined;
/**
 * @member {String} diff_url
 */

PullRequest.prototype['diff_url'] = undefined;
/**
 * @member {module:model/PullRequestBase} head
 */

PullRequest.prototype['head'] = undefined;
/**
 * @member {String} html_url
 */

PullRequest.prototype['html_url'] = undefined;
/**
 * @member {String} issue_url
 */

PullRequest.prototype['issue_url'] = undefined;
/**
 * @member {String} merge_commit_sha
 */

PullRequest.prototype['merge_commit_sha'] = undefined;
/**
 * @member {Boolean} mergeable
 */

PullRequest.prototype['mergeable'] = undefined;
/**
 * @member {Boolean} merged
 */

PullRequest.prototype['merged'] = undefined;
/**
 * @member {String} merged_at
 */

PullRequest.prototype['merged_at'] = undefined;
/**
 * @member {module:model/PullRequestBaseUser} merged_by
 */

PullRequest.prototype['merged_by'] = undefined;
/**
 * @member {Number} number
 */

PullRequest.prototype['number'] = undefined;
/**
 * @member {String} patch_url
 */

PullRequest.prototype['patch_url'] = undefined;
/**
 * @member {String} state
 */

PullRequest.prototype['state'] = undefined;
/**
 * @member {String} title
 */

PullRequest.prototype['title'] = undefined;
/**
 * @member {String} updated_at
 */

PullRequest.prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

PullRequest.prototype['url'] = undefined;
/**
 * @member {module:model/PullRequestBaseUser} user
 */

PullRequest.prototype['user'] = undefined;
var _default = PullRequest;
exports["default"] = _default;