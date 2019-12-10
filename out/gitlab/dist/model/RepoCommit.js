"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RepoCommit model module.
 * @module model/RepoCommit
 * @version 1.0.0
 */
var RepoCommit =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>RepoCommit</code>.
   * Get the commits of a merge request
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

        if (data.hasOwnProperty('author_email')) {
          obj['author_email'] = _ApiClient["default"].convertToType(data['author_email'], 'String');
        }

        if (data.hasOwnProperty('author_name')) {
          obj['author_name'] = _ApiClient["default"].convertToType(data['author_name'], 'String');
        }

        if (data.hasOwnProperty('committer_email')) {
          obj['committer_email'] = _ApiClient["default"].convertToType(data['committer_email'], 'String');
        }

        if (data.hasOwnProperty('committer_name')) {
          obj['committer_name'] = _ApiClient["default"].convertToType(data['committer_name'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('short_id')) {
          obj['short_id'] = _ApiClient["default"].convertToType(data['short_id'], 'String');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RepoCommit;
}();
/**
 * @member {String} author_email
 */


RepoCommit.prototype['author_email'] = undefined;
/**
 * @member {String} author_name
 */

RepoCommit.prototype['author_name'] = undefined;
/**
 * @member {String} committer_email
 */

RepoCommit.prototype['committer_email'] = undefined;
/**
 * @member {String} committer_name
 */

RepoCommit.prototype['committer_name'] = undefined;
/**
 * @member {String} created_at
 */

RepoCommit.prototype['created_at'] = undefined;
/**
 * @member {String} id
 */

RepoCommit.prototype['id'] = undefined;
/**
 * @member {String} message
 */

RepoCommit.prototype['message'] = undefined;
/**
 * @member {String} short_id
 */

RepoCommit.prototype['short_id'] = undefined;
/**
 * @member {String} title
 */

RepoCommit.prototype['title'] = undefined;
var _default = RepoCommit;
exports["default"] = _default;