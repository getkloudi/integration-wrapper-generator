"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BranchCommitCommitTree = _interopRequireDefault(require("./BranchCommitCommitTree"));

var _CompareCommitsBaseCommitCommitAuthor = _interopRequireDefault(require("./CompareCommitsBaseCommitCommitAuthor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The MergesSuccessfulCommit model module.
 * @module model/MergesSuccessfulCommit
 * @version 1.3.2
 */
var MergesSuccessfulCommit =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>MergesSuccessfulCommit</code>.
   * @alias module:model/MergesSuccessfulCommit
   */
  function MergesSuccessfulCommit() {
    _classCallCheck(this, MergesSuccessfulCommit);

    MergesSuccessfulCommit.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MergesSuccessfulCommit, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>MergesSuccessfulCommit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MergesSuccessfulCommit} obj Optional instance to populate.
     * @return {module:model/MergesSuccessfulCommit} The populated <code>MergesSuccessfulCommit</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MergesSuccessfulCommit();

        if (data.hasOwnProperty('author')) {
          obj['author'] = _CompareCommitsBaseCommitCommitAuthor["default"].constructFromObject(data['author']);
        }

        if (data.hasOwnProperty('comment_count')) {
          obj['comment_count'] = _ApiClient["default"].convertToType(data['comment_count'], 'Number');
        }

        if (data.hasOwnProperty('committer')) {
          obj['committer'] = _CompareCommitsBaseCommitCommitAuthor["default"].constructFromObject(data['committer']);
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
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

  return MergesSuccessfulCommit;
}();
/**
 * @member {module:model/CompareCommitsBaseCommitCommitAuthor} author
 */


MergesSuccessfulCommit.prototype['author'] = undefined;
/**
 * @member {Number} comment_count
 */

MergesSuccessfulCommit.prototype['comment_count'] = undefined;
/**
 * @member {module:model/CompareCommitsBaseCommitCommitAuthor} committer
 */

MergesSuccessfulCommit.prototype['committer'] = undefined;
/**
 * @member {String} message
 */

MergesSuccessfulCommit.prototype['message'] = undefined;
/**
 * @member {module:model/BranchCommitCommitTree} tree
 */

MergesSuccessfulCommit.prototype['tree'] = undefined;
/**
 * @member {String} url
 */

MergesSuccessfulCommit.prototype['url'] = undefined;
var _default = MergesSuccessfulCommit;
exports["default"] = _default;