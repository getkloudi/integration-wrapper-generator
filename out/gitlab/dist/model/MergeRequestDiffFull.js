"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RepoCommit = _interopRequireDefault(require("./RepoCommit"));

var _RepoDiff = _interopRequireDefault(require("./RepoDiff"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The MergeRequestDiffFull model module.
 * @module model/MergeRequestDiffFull
 * @version 1.0.0
 */
var MergeRequestDiffFull =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>MergeRequestDiffFull</code>.
   * This feature was introduced in GitLab 8.12.
   * @alias module:model/MergeRequestDiffFull
   */
  function MergeRequestDiffFull() {
    _classCallCheck(this, MergeRequestDiffFull);

    MergeRequestDiffFull.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MergeRequestDiffFull, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>MergeRequestDiffFull</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MergeRequestDiffFull} obj Optional instance to populate.
     * @return {module:model/MergeRequestDiffFull} The populated <code>MergeRequestDiffFull</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MergeRequestDiffFull();

        if (data.hasOwnProperty('base_commit_sha')) {
          obj['base_commit_sha'] = _ApiClient["default"].convertToType(data['base_commit_sha'], 'String');
        }

        if (data.hasOwnProperty('commits')) {
          obj['commits'] = _RepoCommit["default"].constructFromObject(data['commits']);
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('diffs')) {
          obj['diffs'] = _RepoDiff["default"].constructFromObject(data['diffs']);
        }

        if (data.hasOwnProperty('head_commit_sha')) {
          obj['head_commit_sha'] = _ApiClient["default"].convertToType(data['head_commit_sha'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('merge_request_id')) {
          obj['merge_request_id'] = _ApiClient["default"].convertToType(data['merge_request_id'], 'String');
        }

        if (data.hasOwnProperty('real_size')) {
          obj['real_size'] = _ApiClient["default"].convertToType(data['real_size'], 'String');
        }

        if (data.hasOwnProperty('start_commit_sha')) {
          obj['start_commit_sha'] = _ApiClient["default"].convertToType(data['start_commit_sha'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }
      }

      return obj;
    }
  }]);

  return MergeRequestDiffFull;
}();
/**
 * @member {String} base_commit_sha
 */


MergeRequestDiffFull.prototype['base_commit_sha'] = undefined;
/**
 * @member {module:model/RepoCommit} commits
 */

MergeRequestDiffFull.prototype['commits'] = undefined;
/**
 * @member {String} created_at
 */

MergeRequestDiffFull.prototype['created_at'] = undefined;
/**
 * @member {module:model/RepoDiff} diffs
 */

MergeRequestDiffFull.prototype['diffs'] = undefined;
/**
 * @member {String} head_commit_sha
 */

MergeRequestDiffFull.prototype['head_commit_sha'] = undefined;
/**
 * @member {String} id
 */

MergeRequestDiffFull.prototype['id'] = undefined;
/**
 * @member {String} merge_request_id
 */

MergeRequestDiffFull.prototype['merge_request_id'] = undefined;
/**
 * @member {String} real_size
 */

MergeRequestDiffFull.prototype['real_size'] = undefined;
/**
 * @member {String} start_commit_sha
 */

MergeRequestDiffFull.prototype['start_commit_sha'] = undefined;
/**
 * @member {String} state
 */

MergeRequestDiffFull.prototype['state'] = undefined;
var _default = MergeRequestDiffFull;
exports["default"] = _default;