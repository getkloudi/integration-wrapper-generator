"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RepoCommitStats = _interopRequireDefault(require("./RepoCommitStats"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RepoCommitDetail model module.
 * @module model/RepoCommitDetail
 * @version 1.1.0
 */
var RepoCommitDetail =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>RepoCommitDetail</code>.
   * Get a specific commit of a project
   * @alias module:model/RepoCommitDetail
   */
  function RepoCommitDetail() {
    _classCallCheck(this, RepoCommitDetail);

    RepoCommitDetail.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RepoCommitDetail, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RepoCommitDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RepoCommitDetail} obj Optional instance to populate.
     * @return {module:model/RepoCommitDetail} The populated <code>RepoCommitDetail</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RepoCommitDetail();

        if (data.hasOwnProperty('author_email')) {
          obj['author_email'] = _ApiClient["default"].convertToType(data['author_email'], 'String');
        }

        if (data.hasOwnProperty('author_name')) {
          obj['author_name'] = _ApiClient["default"].convertToType(data['author_name'], 'String');
        }

        if (data.hasOwnProperty('authored_date')) {
          obj['authored_date'] = _ApiClient["default"].convertToType(data['authored_date'], 'String');
        }

        if (data.hasOwnProperty('committed_date')) {
          obj['committed_date'] = _ApiClient["default"].convertToType(data['committed_date'], 'String');
        }

        if (data.hasOwnProperty('committer_email')) {
          obj['committer_email'] = _ApiClient["default"].convertToType(data['committer_email'], 'String');
        }

        if (data.hasOwnProperty('committer_name')) {
          obj['committer_name'] = _ApiClient["default"].convertToType(data['committer_name'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('parent_ids')) {
          obj['parent_ids'] = _ApiClient["default"].convertToType(data['parent_ids'], 'String');
        }

        if (data.hasOwnProperty('short_id')) {
          obj['short_id'] = _ApiClient["default"].convertToType(data['short_id'], 'String');
        }

        if (data.hasOwnProperty('stats')) {
          obj['stats'] = _RepoCommitStats["default"].constructFromObject(data['stats']);
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RepoCommitDetail;
}();
/**
 * @member {String} author_email
 */


RepoCommitDetail.prototype['author_email'] = undefined;
/**
 * @member {String} author_name
 */

RepoCommitDetail.prototype['author_name'] = undefined;
/**
 * @member {String} authored_date
 */

RepoCommitDetail.prototype['authored_date'] = undefined;
/**
 * @member {String} committed_date
 */

RepoCommitDetail.prototype['committed_date'] = undefined;
/**
 * @member {String} committer_email
 */

RepoCommitDetail.prototype['committer_email'] = undefined;
/**
 * @member {String} committer_name
 */

RepoCommitDetail.prototype['committer_name'] = undefined;
/**
 * @member {String} created_at
 */

RepoCommitDetail.prototype['created_at'] = undefined;
/**
 * @member {String} id
 */

RepoCommitDetail.prototype['id'] = undefined;
/**
 * @member {String} message
 */

RepoCommitDetail.prototype['message'] = undefined;
/**
 * @member {String} parent_ids
 */

RepoCommitDetail.prototype['parent_ids'] = undefined;
/**
 * @member {String} short_id
 */

RepoCommitDetail.prototype['short_id'] = undefined;
/**
 * @member {module:model/RepoCommitStats} stats
 */

RepoCommitDetail.prototype['stats'] = undefined;
/**
 * @member {String} status
 */

RepoCommitDetail.prototype['status'] = undefined;
/**
 * @member {String} title
 */

RepoCommitDetail.prototype['title'] = undefined;
var _default = RepoCommitDetail;
exports["default"] = _default;