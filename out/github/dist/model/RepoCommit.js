"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BranchCommitCommitAuthor = _interopRequireDefault(require("./BranchCommitCommitAuthor"));

var _BranchCommitCommitTree = _interopRequireDefault(require("./BranchCommitCommitTree"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RepoCommit model module.
 * @module model/RepoCommit
 * @version 1.4.5
 */
var RepoCommit = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RepoCommit</code>.
   * @alias module:model/RepoCommit
   */
  function RepoCommit() {
    _classCallCheck(this, RepoCommit);

    RepoCommit.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RepoCommit, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RepoCommit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RepoCommit} obj Optional instance to populate.
     * @return {module:model/RepoCommit} The populated <code>RepoCommit</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RepoCommit();

        if (data.hasOwnProperty('author')) {
          obj['author'] = _BranchCommitCommitAuthor["default"].constructFromObject(data['author']);
        }

        if (data.hasOwnProperty('committer')) {
          obj['committer'] = _BranchCommitCommitAuthor["default"].constructFromObject(data['committer']);
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('parents')) {
          obj['parents'] = _ApiClient["default"].convertToType(data['parents'], [_BranchCommitCommitTree["default"]]);
        }

        if (data.hasOwnProperty('sha')) {
          obj['sha'] = _ApiClient["default"].convertToType(data['sha'], 'String');
        }

        if (data.hasOwnProperty('tree')) {
          obj['tree'] = _BranchCommitCommitTree["default"].constructFromObject(data['tree']);
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RepoCommit;
}();
/**
 * @member {module:model/BranchCommitCommitAuthor} author
 */


RepoCommit.prototype['author'] = undefined;
/**
 * @member {module:model/BranchCommitCommitAuthor} committer
 */

RepoCommit.prototype['committer'] = undefined;
/**
 * @member {String} message
 */

RepoCommit.prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BranchCommitCommitTree>} parents
 */

RepoCommit.prototype['parents'] = undefined;
/**
 * @member {String} sha
 */

RepoCommit.prototype['sha'] = undefined;
/**
 * @member {module:model/BranchCommitCommitTree} tree
 */

RepoCommit.prototype['tree'] = undefined;
/**
 * @member {String} url
 */

RepoCommit.prototype['url'] = undefined;
var _default = RepoCommit;
exports["default"] = _default;