"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Comment = _interopRequireDefault(require("./Comment"));

var _CommentAllOfInline = _interopRequireDefault(require("./CommentAllOfInline"));

var _CommentAllOfLinks = _interopRequireDefault(require("./CommentAllOfLinks"));

var _Issue = _interopRequireDefault(require("./Issue"));

var _IssueCommentAllOf = _interopRequireDefault(require("./IssueCommentAllOf"));

var _PullrequestAllOfRenderedTitle = _interopRequireDefault(require("./PullrequestAllOfRenderedTitle"));

var _User = _interopRequireDefault(require("./User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The IssueComment model module.
 * @module model/IssueComment
 * @version 1.1.0
 */
var IssueComment =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>IssueComment</code>.
   * @alias module:model/IssueComment
   * @implements module:model/Comment
   * @implements module:model/IssueCommentAllOf
   * @param type {String} 
   */
  function IssueComment(type) {
    _classCallCheck(this, IssueComment);

    _Comment["default"].initialize(this, type);

    _IssueCommentAllOf["default"].initialize(this);

    IssueComment.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IssueComment, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>IssueComment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IssueComment} obj Optional instance to populate.
     * @return {module:model/IssueComment} The populated <code>IssueComment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IssueComment();

        _Comment["default"].constructFromObject(data, obj);

        _IssueCommentAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('created_on')) {
          obj['created_on'] = _ApiClient["default"].convertToType(data['created_on'], 'Date');
        }

        if (data.hasOwnProperty('updated_on')) {
          obj['updated_on'] = _ApiClient["default"].convertToType(data['updated_on'], 'Date');
        }

        if (data.hasOwnProperty('content')) {
          obj['content'] = _PullrequestAllOfRenderedTitle["default"].constructFromObject(data['content']);
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _User["default"].constructFromObject(data['user']);
        }

        if (data.hasOwnProperty('deleted')) {
          obj['deleted'] = _ApiClient["default"].convertToType(data['deleted'], 'Boolean');
        }

        if (data.hasOwnProperty('parent')) {
          obj['parent'] = _Comment["default"].constructFromObject(data['parent']);
        }

        if (data.hasOwnProperty('inline')) {
          obj['inline'] = _CommentAllOfInline["default"].constructFromObject(data['inline']);
        }

        if (data.hasOwnProperty('links')) {
          obj['links'] = _CommentAllOfLinks["default"].constructFromObject(data['links']);
        }

        if (data.hasOwnProperty('issue')) {
          obj['issue'] = _Issue["default"].constructFromObject(data['issue']);
        }
      }

      return obj;
    }
  }]);

  return IssueComment;
}();
/**
 * @member {String} type
 */


IssueComment.prototype['type'] = undefined;
/**
 * @member {Number} id
 */

IssueComment.prototype['id'] = undefined;
/**
 * @member {Date} created_on
 */

IssueComment.prototype['created_on'] = undefined;
/**
 * @member {Date} updated_on
 */

IssueComment.prototype['updated_on'] = undefined;
/**
 * @member {module:model/PullrequestAllOfRenderedTitle} content
 */

IssueComment.prototype['content'] = undefined;
/**
 * @member {module:model/User} user
 */

IssueComment.prototype['user'] = undefined;
/**
 * @member {Boolean} deleted
 */

IssueComment.prototype['deleted'] = undefined;
/**
 * @member {module:model/Comment} parent
 */

IssueComment.prototype['parent'] = undefined;
/**
 * @member {module:model/CommentAllOfInline} inline
 */

IssueComment.prototype['inline'] = undefined;
/**
 * @member {module:model/CommentAllOfLinks} links
 */

IssueComment.prototype['links'] = undefined;
/**
 * @member {module:model/Issue} issue
 */

IssueComment.prototype['issue'] = undefined; // Implement Comment interface:

/**
 * @member {String} type
 */

_Comment["default"].prototype['type'] = undefined;
/**
 * @member {Number} id
 */

_Comment["default"].prototype['id'] = undefined;
/**
 * @member {Date} created_on
 */

_Comment["default"].prototype['created_on'] = undefined;
/**
 * @member {Date} updated_on
 */

_Comment["default"].prototype['updated_on'] = undefined;
/**
 * @member {module:model/PullrequestAllOfRenderedTitle} content
 */

_Comment["default"].prototype['content'] = undefined;
/**
 * @member {module:model/User} user
 */

_Comment["default"].prototype['user'] = undefined;
/**
 * @member {Boolean} deleted
 */

_Comment["default"].prototype['deleted'] = undefined;
/**
 * @member {module:model/Comment} parent
 */

_Comment["default"].prototype['parent'] = undefined;
/**
 * @member {module:model/CommentAllOfInline} inline
 */

_Comment["default"].prototype['inline'] = undefined;
/**
 * @member {module:model/CommentAllOfLinks} links
 */

_Comment["default"].prototype['links'] = undefined; // Implement IssueCommentAllOf interface:

/**
 * @member {module:model/Issue} issue
 */

_IssueCommentAllOf["default"].prototype['issue'] = undefined;
var _default = IssueComment;
exports["default"] = _default;