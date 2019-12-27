"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Comment = _interopRequireDefault(require("./Comment"));

var _CommentAllOfInline = _interopRequireDefault(require("./CommentAllOfInline"));

var _CommentAllOfLinks = _interopRequireDefault(require("./CommentAllOfLinks"));

var _Pullrequest = _interopRequireDefault(require("./Pullrequest"));

var _PullrequestAllOfRenderedTitle = _interopRequireDefault(require("./PullrequestAllOfRenderedTitle"));

var _PullrequestCommentAllOf = _interopRequireDefault(require("./PullrequestCommentAllOf"));

var _User = _interopRequireDefault(require("./User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PullrequestComment model module.
 * @module model/PullrequestComment
 * @version 1.1.0
 */
var PullrequestComment =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PullrequestComment</code>.
   * @alias module:model/PullrequestComment
   * @implements module:model/Comment
   * @implements module:model/PullrequestCommentAllOf
   * @param type {String} 
   */
  function PullrequestComment(type) {
    _classCallCheck(this, PullrequestComment);

    _Comment["default"].initialize(this, type);

    _PullrequestCommentAllOf["default"].initialize(this);

    PullrequestComment.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PullrequestComment, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>PullrequestComment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PullrequestComment} obj Optional instance to populate.
     * @return {module:model/PullrequestComment} The populated <code>PullrequestComment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PullrequestComment();

        _Comment["default"].constructFromObject(data, obj);

        _PullrequestCommentAllOf["default"].constructFromObject(data, obj);

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

        if (data.hasOwnProperty('pullrequest')) {
          obj['pullrequest'] = _Pullrequest["default"].constructFromObject(data['pullrequest']);
        }
      }

      return obj;
    }
  }]);

  return PullrequestComment;
}();
/**
 * @member {String} type
 */


PullrequestComment.prototype['type'] = undefined;
/**
 * @member {Number} id
 */

PullrequestComment.prototype['id'] = undefined;
/**
 * @member {Date} created_on
 */

PullrequestComment.prototype['created_on'] = undefined;
/**
 * @member {Date} updated_on
 */

PullrequestComment.prototype['updated_on'] = undefined;
/**
 * @member {module:model/PullrequestAllOfRenderedTitle} content
 */

PullrequestComment.prototype['content'] = undefined;
/**
 * @member {module:model/User} user
 */

PullrequestComment.prototype['user'] = undefined;
/**
 * @member {Boolean} deleted
 */

PullrequestComment.prototype['deleted'] = undefined;
/**
 * @member {module:model/Comment} parent
 */

PullrequestComment.prototype['parent'] = undefined;
/**
 * @member {module:model/CommentAllOfInline} inline
 */

PullrequestComment.prototype['inline'] = undefined;
/**
 * @member {module:model/CommentAllOfLinks} links
 */

PullrequestComment.prototype['links'] = undefined;
/**
 * @member {module:model/Pullrequest} pullrequest
 */

PullrequestComment.prototype['pullrequest'] = undefined; // Implement Comment interface:

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

_Comment["default"].prototype['links'] = undefined; // Implement PullrequestCommentAllOf interface:

/**
 * @member {module:model/Pullrequest} pullrequest
 */

_PullrequestCommentAllOf["default"].prototype['pullrequest'] = undefined;
var _default = PullrequestComment;
exports["default"] = _default;