"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CompareCommitsBaseCommitCommitAuthor = _interopRequireDefault(require("./CompareCommitsBaseCommitCommitAuthor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RepoCommitBody model module.
 * @module model/RepoCommitBody
 * @version 1.3.1
 */
var RepoCommitBody =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>RepoCommitBody</code>.
   * @alias module:model/RepoCommitBody
   * @param message {String} 
   * @param parents {Array.<String>} 
   * @param tree {String} 
   */
  function RepoCommitBody(message, parents, tree) {
    _classCallCheck(this, RepoCommitBody);

    RepoCommitBody.initialize(this, message, parents, tree);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RepoCommitBody, null, [{
    key: "initialize",
    value: function initialize(obj, message, parents, tree) {
      obj['message'] = message;
      obj['parents'] = parents;
      obj['tree'] = tree;
    }
    /**
     * Constructs a <code>RepoCommitBody</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RepoCommitBody} obj Optional instance to populate.
     * @return {module:model/RepoCommitBody} The populated <code>RepoCommitBody</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RepoCommitBody();

        if (data.hasOwnProperty('author')) {
          obj['author'] = _CompareCommitsBaseCommitCommitAuthor["default"].constructFromObject(data['author']);
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('parents')) {
          obj['parents'] = _ApiClient["default"].convertToType(data['parents'], ['String']);
        }

        if (data.hasOwnProperty('tree')) {
          obj['tree'] = _ApiClient["default"].convertToType(data['tree'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RepoCommitBody;
}();
/**
 * @member {module:model/CompareCommitsBaseCommitCommitAuthor} author
 */


RepoCommitBody.prototype['author'] = undefined;
/**
 * @member {String} message
 */

RepoCommitBody.prototype['message'] = undefined;
/**
 * @member {Array.<String>} parents
 */

RepoCommitBody.prototype['parents'] = undefined;
/**
 * @member {String} tree
 */

RepoCommitBody.prototype['tree'] = undefined;
var _default = RepoCommitBody;
exports["default"] = _default;