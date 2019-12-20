"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PullRequestBaseUser = _interopRequireDefault(require("./PullRequestBaseUser"));

var _PullsCommentLinks = _interopRequireDefault(require("./PullsCommentLinks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PullsComment model module.
 * @module model/PullsComment
 * @version 1.3.2
 */
var PullsComment =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PullsComment</code>.
   * @alias module:model/PullsComment
   */
  function PullsComment() {
    _classCallCheck(this, PullsComment);

    PullsComment.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PullsComment, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PullsComment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullsComment} obj Optional instance to populate.
     * @return {module:model/PullsComment} The populated <code>PullsComment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PullsComment();

        if (data.hasOwnProperty('_links')) {
          obj['_links'] = _PullsCommentLinks["default"].constructFromObject(data['_links']);
        }

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], 'String');
        }

        if (data.hasOwnProperty('commit_id')) {
          obj['commit_id'] = _ApiClient["default"].convertToType(data['commit_id'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('position')) {
          obj['position'] = _ApiClient["default"].convertToType(data['position'], 'Number');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'String');
        }

        if (data.hasOwnProperty('url')) {
          obj['url'] = _ApiClient["default"].convertToType(data['url'], 'String');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _PullRequestBaseUser["default"].constructFromObject(data['user']);
        }
      }

      return obj;
    }
  }]);

  return PullsComment;
}();
/**
 * @member {module:model/PullsCommentLinks} _links
 */


PullsComment.prototype['_links'] = undefined;
/**
 * @member {String} body
 */

PullsComment.prototype['body'] = undefined;
/**
 * @member {String} commit_id
 */

PullsComment.prototype['commit_id'] = undefined;
/**
 * ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @member {String} created_at
 */

PullsComment.prototype['created_at'] = undefined;
/**
 * @member {Number} id
 */

PullsComment.prototype['id'] = undefined;
/**
 * @member {String} path
 */

PullsComment.prototype['path'] = undefined;
/**
 * @member {Number} position
 */

PullsComment.prototype['position'] = undefined;
/**
 * ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ
 * @member {String} updated_at
 */

PullsComment.prototype['updated_at'] = undefined;
/**
 * @member {String} url
 */

PullsComment.prototype['url'] = undefined;
/**
 * @member {module:model/PullRequestBaseUser} user
 */

PullsComment.prototype['user'] = undefined;
var _default = PullsComment;
exports["default"] = _default;