"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BranchCommitCommit = _interopRequireDefault(require("./BranchCommitCommit"));

var _BranchCommitCommitTree = _interopRequireDefault(require("./BranchCommitCommitTree"));

var _CommitFiles = _interopRequireDefault(require("./CommitFiles"));

var _CommitStats = _interopRequireDefault(require("./CommitStats"));

var _User = _interopRequireDefault(require("./User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Commit model module.
 * @module model/Commit
 * @version 1.4.6
 */
var Commit = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Commit</code>.
   * @alias module:model/Commit
   */
  function Commit() {
    _classCallCheck(this, Commit);

    Commit.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Commit, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Commit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Commit} obj Optional instance to populate.
     * @return {module:model/Commit} The populated <code>Commit</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Commit();

        if (data.hasOwnProperty('author')) {
          obj['author'] = _User["default"].constructFromObject(data['author']);
        }

        if (data.hasOwnProperty('commit')) {
          obj['commit'] = _BranchCommitCommit["default"].constructFromObject(data['commit']);
        }

        if (data.hasOwnProperty('committer')) {
          obj['committer'] = _User["default"].constructFromObject(data['committer']);
        }

        if (data.hasOwnProperty('files')) {
          obj['files'] = _ApiClient["default"].convertToType(data['files'], [_CommitFiles["default"]]);
        }

        if (data.hasOwnProperty('parents')) {
          obj['parents'] = _ApiClient["default"].convertToType(data['parents'], [_BranchCommitCommitTree["default"]]);
        }

        if (data.hasOwnProperty('sha')) {
          obj['sha'] = _ApiClient["default"].convertToType(data['sha'], 'String');
        }

        if (data.hasOwnProperty('stats')) {
          obj['stats'] = _CommitStats["default"].constructFromObject(data['stats']);
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Commit;
}();
/**
 * @member {module:model/User} author
 */


Commit.prototype['author'] = undefined;
/**
 * @member {module:model/BranchCommitCommit} commit
 */

Commit.prototype['commit'] = undefined;
/**
 * @member {module:model/User} committer
 */

Commit.prototype['committer'] = undefined;
/**
 * @member {Array.<module:model/CommitFiles>} files
 */

Commit.prototype['files'] = undefined;
/**
 * @member {Array.<module:model/BranchCommitCommitTree>} parents
 */

Commit.prototype['parents'] = undefined;
/**
 * @member {String} sha
 */

Commit.prototype['sha'] = undefined;
/**
 * @member {module:model/CommitStats} stats
 */

Commit.prototype['stats'] = undefined;
/**
 * @member {String} url
 */

Commit.prototype['url'] = undefined;
var _default = Commit;
exports["default"] = _default;