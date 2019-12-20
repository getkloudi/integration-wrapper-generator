"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BranchCommitCommitTree = _interopRequireDefault(require("./BranchCommitCommitTree"));

var _CompareCommitsBaseCommitCommitAuthor = _interopRequireDefault(require("./CompareCommitsBaseCommitCommitAuthor"));

var _CreateFileCommitParents = _interopRequireDefault(require("./CreateFileCommitParents"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DeleteFileCommit model module.
 * @module model/DeleteFileCommit
 * @version 1.3.2
 */
var DeleteFileCommit =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>DeleteFileCommit</code>.
   * @alias module:model/DeleteFileCommit
   */
  function DeleteFileCommit() {
    _classCallCheck(this, DeleteFileCommit);

    DeleteFileCommit.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeleteFileCommit, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DeleteFileCommit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteFileCommit} obj Optional instance to populate.
     * @return {module:model/DeleteFileCommit} The populated <code>DeleteFileCommit</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeleteFileCommit();

        if (data.hasOwnProperty('author')) {
          obj['author'] = _CompareCommitsBaseCommitCommitAuthor["default"].constructFromObject(data['author']);
        }

        if (data.hasOwnProperty('committer')) {
          obj['committer'] = _CompareCommitsBaseCommitCommitAuthor["default"].constructFromObject(data['committer']);
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('parents')) {
          obj['parents'] = _CreateFileCommitParents["default"].constructFromObject(data['parents']);
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

  return DeleteFileCommit;
}();
/**
 * @member {module:model/CompareCommitsBaseCommitCommitAuthor} author
 */


DeleteFileCommit.prototype['author'] = undefined;
/**
 * @member {module:model/CompareCommitsBaseCommitCommitAuthor} committer
 */

DeleteFileCommit.prototype['committer'] = undefined;
/**
 * @member {String} html_url
 */

DeleteFileCommit.prototype['html_url'] = undefined;
/**
 * @member {String} message
 */

DeleteFileCommit.prototype['message'] = undefined;
/**
 * @member {module:model/CreateFileCommitParents} parents
 */

DeleteFileCommit.prototype['parents'] = undefined;
/**
 * @member {String} sha
 */

DeleteFileCommit.prototype['sha'] = undefined;
/**
 * @member {module:model/BranchCommitCommitTree} tree
 */

DeleteFileCommit.prototype['tree'] = undefined;
/**
 * @member {String} url
 */

DeleteFileCommit.prototype['url'] = undefined;
var _default = DeleteFileCommit;
exports["default"] = _default;