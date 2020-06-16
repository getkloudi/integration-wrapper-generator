"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EntityProperty = _interopRequireDefault(require("./EntityProperty"));

var _UserDetails = _interopRequireDefault(require("./UserDetails"));

var _Visibility = _interopRequireDefault(require("./Visibility"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Comment model module.
 * @module model/Comment
 * @version 1.4.0
 */
var Comment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Comment</code>.
   * A comment.
   * @alias module:model/Comment
   */
  function Comment() {
    _classCallCheck(this, Comment);

    Comment.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Comment, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Comment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Comment} obj Optional instance to populate.
     * @return {module:model/Comment} The populated <code>Comment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Comment();

        if (data.hasOwnProperty('author')) {
          obj['author'] = _ApiClient["default"].convertToType(data['author'], _UserDetails["default"]);
        }

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], Object);
        }

        if (data.hasOwnProperty('created')) {
          obj['created'] = _ApiClient["default"].convertToType(data['created'], 'Date');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('jsdPublic')) {
          obj['jsdPublic'] = _ApiClient["default"].convertToType(data['jsdPublic'], 'Boolean');
        }

        if (data.hasOwnProperty('properties')) {
          obj['properties'] = _ApiClient["default"].convertToType(data['properties'], [_EntityProperty["default"]]);
        }

        if (data.hasOwnProperty('renderedBody')) {
          obj['renderedBody'] = _ApiClient["default"].convertToType(data['renderedBody'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }

        if (data.hasOwnProperty('updateAuthor')) {
          obj['updateAuthor'] = _ApiClient["default"].convertToType(data['updateAuthor'], _UserDetails["default"]);
        }

        if (data.hasOwnProperty('updated')) {
          obj['updated'] = _ApiClient["default"].convertToType(data['updated'], 'Date');
        }

        if (data.hasOwnProperty('visibility')) {
          obj['visibility'] = _ApiClient["default"].convertToType(data['visibility'], _Visibility["default"]);
        }
      }

      return obj;
    }
  }]);

  return Comment;
}();
/**
 * The ID of the user who created the comment.
 * @member {module:model/UserDetails} author
 */


Comment.prototype['author'] = undefined;
/**
 * The comment text in [Atlassian Document Format](https://developer.atlassian.com/cloud/jira/platform/apis/document/structure/).
 * @member {Object} body
 */

Comment.prototype['body'] = undefined;
/**
 * The date and time at which the comment was created.
 * @member {Date} created
 */

Comment.prototype['created'] = undefined;
/**
 * The ID of the comment.
 * @member {String} id
 */

Comment.prototype['id'] = undefined;
/**
 * Whether the comment is visible in Jira Service Desk. Defaults to true when comments are created in the Jira Cloud Platform. This includes when the site doesn't use Jira Service Desk or the project isn't a Jira Service Desk project and, therefore, there is no Jira Service Desk for the issue to be visible on. To create a comment with its visibility in Jira Service Desk set to false, use the Jira Service Desk REST API [Create request comment](https://developer.atlassian.com/cloud/jira/service-desk/rest/#api-rest-servicedeskapi-request-issueIdOrKey-comment-post) operation.
 * @member {Boolean} jsdPublic
 */

Comment.prototype['jsdPublic'] = undefined;
/**
 * A list of comment properties. Optional on create and update.
 * @member {Array.<module:model/EntityProperty>} properties
 */

Comment.prototype['properties'] = undefined;
/**
 * The rendered version of the comment.
 * @member {String} renderedBody
 */

Comment.prototype['renderedBody'] = undefined;
/**
 * The URL of the comment.
 * @member {String} self
 */

Comment.prototype['self'] = undefined;
/**
 * The ID of the user who updated the comment last.
 * @member {module:model/UserDetails} updateAuthor
 */

Comment.prototype['updateAuthor'] = undefined;
/**
 * The date and time at which the comment was updated last.
 * @member {Date} updated
 */

Comment.prototype['updated'] = undefined;
/**
 * The group or role to which this comment is visible. Optional on create and update.
 * @member {module:model/Visibility} visibility
 */

Comment.prototype['visibility'] = undefined;
var _default = Comment;
exports["default"] = _default;