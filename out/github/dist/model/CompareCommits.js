"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CompareCommitsBaseCommit = _interopRequireDefault(require("./CompareCommitsBaseCommit"));

var _CompareCommitsFiles = _interopRequireDefault(require("./CompareCommitsFiles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CompareCommits model module.
 * @module model/CompareCommits
 * @version 1.4.4
 */
var CompareCommits = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CompareCommits</code>.
   * @alias module:model/CompareCommits
   */
  function CompareCommits() {
    _classCallCheck(this, CompareCommits);

    CompareCommits.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CompareCommits, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CompareCommits</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompareCommits} obj Optional instance to populate.
     * @return {module:model/CompareCommits} The populated <code>CompareCommits</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CompareCommits();

        if (data.hasOwnProperty('ahead_by')) {
          obj['ahead_by'] = _ApiClient["default"].convertToType(data['ahead_by'], 'Number');
        }

        if (data.hasOwnProperty('base_commit')) {
          obj['base_commit'] = _CompareCommitsBaseCommit["default"].constructFromObject(data['base_commit']);
        }

        if (data.hasOwnProperty('behind_by')) {
          obj['behind_by'] = _ApiClient["default"].convertToType(data['behind_by'], 'Number');
        }

        if (data.hasOwnProperty('commits')) {
          obj['commits'] = _ApiClient["default"].convertToType(data['commits'], [_CompareCommitsBaseCommit["default"]]);
        }

        if (data.hasOwnProperty('diff_url')) {
          obj['diff_url'] = _ApiClient["default"].convertToType(data['diff_url'], 'String');
        }

        if (data.hasOwnProperty('files')) {
          obj['files'] = _ApiClient["default"].convertToType(data['files'], [_CompareCommitsFiles["default"]]);
        }

        if (data.hasOwnProperty('html_url')) {
          obj['html_url'] = _ApiClient["default"].convertToType(data['html_url'], 'String');
        }

        if (data.hasOwnProperty('patch_url')) {
          obj['patch_url'] = _ApiClient["default"].convertToType(data['patch_url'], 'String');
        }

        if (data.hasOwnProperty('permalink_url')) {
          obj['permalink_url'] = _ApiClient["default"].convertToType(data['permalink_url'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('total_commits')) {
          obj['total_commits'] = _ApiClient["default"].convertToType(data['total_commits'], 'Number');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CompareCommits;
}();
/**
 * @member {Number} ahead_by
 */


CompareCommits.prototype['ahead_by'] = undefined;
/**
 * @member {module:model/CompareCommitsBaseCommit} base_commit
 */

CompareCommits.prototype['base_commit'] = undefined;
/**
 * @member {Number} behind_by
 */

CompareCommits.prototype['behind_by'] = undefined;
/**
 * @member {Array.<module:model/CompareCommitsBaseCommit>} commits
 */

CompareCommits.prototype['commits'] = undefined;
/**
 * @member {String} diff_url
 */

CompareCommits.prototype['diff_url'] = undefined;
/**
 * @member {Array.<module:model/CompareCommitsFiles>} files
 */

CompareCommits.prototype['files'] = undefined;
/**
 * @member {String} html_url
 */

CompareCommits.prototype['html_url'] = undefined;
/**
 * @member {String} patch_url
 */

CompareCommits.prototype['patch_url'] = undefined;
/**
 * @member {String} permalink_url
 */

CompareCommits.prototype['permalink_url'] = undefined;
/**
 * @member {String} status
 */

CompareCommits.prototype['status'] = undefined;
/**
 * @member {Number} total_commits
 */

CompareCommits.prototype['total_commits'] = undefined;
/**
 * @member {String} url
 */

CompareCommits.prototype['url'] = undefined;
var _default = CompareCommits;
exports["default"] = _default;