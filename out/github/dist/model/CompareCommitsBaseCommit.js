"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BranchCommitCommitTree = _interopRequireDefault(require("./BranchCommitCommitTree"));

var _CompareCommitsBaseCommitCommit = _interopRequireDefault(require("./CompareCommitsBaseCommitCommit"));

var _User = _interopRequireDefault(require("./User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CompareCommitsBaseCommit model module.
 * @module model/CompareCommitsBaseCommit
 * @version 1.4.1
 */
var CompareCommitsBaseCommit =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CompareCommitsBaseCommit</code>.
   * @alias module:model/CompareCommitsBaseCommit
   */
  function CompareCommitsBaseCommit() {
    _classCallCheck(this, CompareCommitsBaseCommit);

    CompareCommitsBaseCommit.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CompareCommitsBaseCommit, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CompareCommitsBaseCommit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompareCommitsBaseCommit} obj Optional instance to populate.
     * @return {module:model/CompareCommitsBaseCommit} The populated <code>CompareCommitsBaseCommit</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CompareCommitsBaseCommit();

        if (data.hasOwnProperty('author')) {
          obj['author'] = _User["default"].constructFromObject(data['author']);
        }

        if (data.hasOwnProperty('commit')) {
          obj['commit'] = _CompareCommitsBaseCommitCommit["default"].constructFromObject(data['commit']);
        }

        if (data.hasOwnProperty('committer')) {
          obj['committer'] = _User["default"].constructFromObject(data['committer']);
        }

        if (data.hasOwnProperty('parents')) {
          obj['parents'] = _ApiClient["default"].convertToType(data['parents'], [_BranchCommitCommitTree["default"]]);
        }

        if (data.hasOwnProperty('sha')) {
          obj['sha'] = _ApiClient["default"].convertToType(data['sha'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CompareCommitsBaseCommit;
}();
/**
 * @member {module:model/User} author
 */


CompareCommitsBaseCommit.prototype['author'] = undefined;
/**
 * @member {module:model/CompareCommitsBaseCommitCommit} commit
 */

CompareCommitsBaseCommit.prototype['commit'] = undefined;
/**
 * @member {module:model/User} committer
 */

CompareCommitsBaseCommit.prototype['committer'] = undefined;
/**
 * @member {Array.<module:model/BranchCommitCommitTree>} parents
 */

CompareCommitsBaseCommit.prototype['parents'] = undefined;
/**
 * @member {String} sha
 */

CompareCommitsBaseCommit.prototype['sha'] = undefined;
/**
 * @member {String} url
 */

CompareCommitsBaseCommit.prototype['url'] = undefined;
var _default = CompareCommitsBaseCommit;
exports["default"] = _default;