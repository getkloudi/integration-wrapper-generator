"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BranchCommitCommitTree = _interopRequireDefault(require("./BranchCommitCommitTree"));

var _MergesSuccessfulCommit = _interopRequireDefault(require("./MergesSuccessfulCommit"));

var _User = _interopRequireDefault(require("./User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The MergesSuccessful model module.
 * @module model/MergesSuccessful
 * @version 1.3.1
 */
var MergesSuccessful =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>MergesSuccessful</code>.
   * @alias module:model/MergesSuccessful
   */
  function MergesSuccessful() {
    _classCallCheck(this, MergesSuccessful);

    MergesSuccessful.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MergesSuccessful, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>MergesSuccessful</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MergesSuccessful} obj Optional instance to populate.
     * @return {module:model/MergesSuccessful} The populated <code>MergesSuccessful</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MergesSuccessful();

        if (data.hasOwnProperty('author')) {
          obj['author'] = _User["default"].constructFromObject(data['author']);
        }

        if (data.hasOwnProperty('comments_url')) {
          obj['comments_url'] = _ApiClient["default"].convertToType(data['comments_url'], 'String');
        }

        if (data.hasOwnProperty('commit')) {
          obj['commit'] = _MergesSuccessfulCommit["default"].constructFromObject(data['commit']);
        }

        if (data.hasOwnProperty('committer')) {
          obj['committer'] = _User["default"].constructFromObject(data['committer']);
        }

        if (data.hasOwnProperty('merged')) {
          obj['merged'] = _ApiClient["default"].convertToType(data['merged'], 'Boolean');
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

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return MergesSuccessful;
}();
/**
 * @member {module:model/User} author
 */


MergesSuccessful.prototype['author'] = undefined;
/**
 * @member {String} comments_url
 */

MergesSuccessful.prototype['comments_url'] = undefined;
/**
 * @member {module:model/MergesSuccessfulCommit} commit
 */

MergesSuccessful.prototype['commit'] = undefined;
/**
 * @member {module:model/User} committer
 */

MergesSuccessful.prototype['committer'] = undefined;
/**
 * @member {Boolean} merged
 */

MergesSuccessful.prototype['merged'] = undefined;
/**
 * @member {String} message
 */

MergesSuccessful.prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BranchCommitCommitTree>} parents
 */

MergesSuccessful.prototype['parents'] = undefined;
/**
 * @member {String} sha
 */

MergesSuccessful.prototype['sha'] = undefined;
/**
 * @member {String} url
 */

MergesSuccessful.prototype['url'] = undefined;
var _default = MergesSuccessful;
exports["default"] = _default;