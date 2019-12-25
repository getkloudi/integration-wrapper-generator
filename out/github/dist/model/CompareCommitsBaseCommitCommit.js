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
 * The CompareCommitsBaseCommitCommit model module.
 * @module model/CompareCommitsBaseCommitCommit
 * @version 1.4.1
 */
var CompareCommitsBaseCommitCommit =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CompareCommitsBaseCommitCommit</code>.
   * @alias module:model/CompareCommitsBaseCommitCommit
   */
  function CompareCommitsBaseCommitCommit() {
    _classCallCheck(this, CompareCommitsBaseCommitCommit);

    CompareCommitsBaseCommitCommit.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CompareCommitsBaseCommitCommit, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CompareCommitsBaseCommitCommit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompareCommitsBaseCommitCommit} obj Optional instance to populate.
     * @return {module:model/CompareCommitsBaseCommitCommit} The populated <code>CompareCommitsBaseCommitCommit</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CompareCommitsBaseCommitCommit();

        if (data.hasOwnProperty('author')) {
          obj['author'] = _CompareCommitsBaseCommitCommitAuthor["default"].constructFromObject(data['author']);
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

  return CompareCommitsBaseCommitCommit;
}();
/**
 * @member {module:model/CompareCommitsBaseCommitCommitAuthor} author
 */


CompareCommitsBaseCommitCommit.prototype['author'] = undefined;
/**
 * @member {module:model/CompareCommitsBaseCommitCommitAuthor} committer
 */

CompareCommitsBaseCommitCommit.prototype['committer'] = undefined;
/**
 * @member {String} message
 */

CompareCommitsBaseCommitCommit.prototype['message'] = undefined;
/**
 * @member {module:model/BranchCommitCommitTree} tree
 */

CompareCommitsBaseCommitCommit.prototype['tree'] = undefined;
/**
 * @member {String} url
 */

CompareCommitsBaseCommitCommit.prototype['url'] = undefined;
var _default = CompareCommitsBaseCommitCommit;
exports["default"] = _default;