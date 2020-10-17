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
 * The CreateFileCommit model module.
 * @module model/CreateFileCommit
 * @version 1.4.5
 */
var CreateFileCommit = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateFileCommit</code>.
   * @alias module:model/CreateFileCommit
   */
  function CreateFileCommit() {
    _classCallCheck(this, CreateFileCommit);

    CreateFileCommit.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateFileCommit, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateFileCommit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateFileCommit} obj Optional instance to populate.
     * @return {module:model/CreateFileCommit} The populated <code>CreateFileCommit</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateFileCommit();

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
          obj['parents'] = _ApiClient["default"].convertToType(data['parents'], [_CreateFileCommitParents["default"]]);
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

  return CreateFileCommit;
}();
/**
 * @member {module:model/CompareCommitsBaseCommitCommitAuthor} author
 */


CreateFileCommit.prototype['author'] = undefined;
/**
 * @member {module:model/CompareCommitsBaseCommitCommitAuthor} committer
 */

CreateFileCommit.prototype['committer'] = undefined;
/**
 * @member {String} html_url
 */

CreateFileCommit.prototype['html_url'] = undefined;
/**
 * @member {String} message
 */

CreateFileCommit.prototype['message'] = undefined;
/**
 * @member {Array.<module:model/CreateFileCommitParents>} parents
 */

CreateFileCommit.prototype['parents'] = undefined;
/**
 * @member {String} sha
 */

CreateFileCommit.prototype['sha'] = undefined;
/**
 * @member {module:model/BranchCommitCommitTree} tree
 */

CreateFileCommit.prototype['tree'] = undefined;
/**
 * @member {String} url
 */

CreateFileCommit.prototype['url'] = undefined;
var _default = CreateFileCommit;
exports["default"] = _default;