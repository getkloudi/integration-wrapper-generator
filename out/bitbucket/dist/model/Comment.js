"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _CommentAllOf = _interopRequireDefault(require("./CommentAllOf"));

var _CommentAllOfInline = _interopRequireDefault(require("./CommentAllOfInline"));

var _CommentAllOfLinks = _interopRequireDefault(require("./CommentAllOfLinks"));

var _ModelObject = _interopRequireDefault(require("./ModelObject"));

var _PullrequestAllOfRenderedTitle = _interopRequireDefault(require("./PullrequestAllOfRenderedTitle"));

var _User = _interopRequireDefault(require("./User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Comment model module.
 * @module model/Comment
 * @version 1.2.0
 */
var Comment = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Comment</code>.
   * @alias module:model/Comment
   * @extends module:model/ModelObject
   * @implements module:model/ModelObject
   * @implements module:model/CommentAllOf
   * @param type {String} 
   */
  function Comment(type) {
    _classCallCheck(this, Comment);

    _ModelObject["default"].initialize(this, type);

    _CommentAllOf["default"].initialize(this);

    Comment.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Comment, null, [{
    key: "initialize",
    value: function initialize(obj, type) {}
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

        _ModelObject["default"].constructFromObject(data, obj);

        _ModelObject["default"].constructFromObject(data, obj);

        _CommentAllOf["default"].constructFromObject(data, obj);

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
          obj['parent'] = Comment.constructFromObject(data['parent']);
        }

        if (data.hasOwnProperty('inline')) {
          obj['inline'] = _CommentAllOfInline["default"].constructFromObject(data['inline']);
        }

        if (data.hasOwnProperty('links')) {
          obj['links'] = _CommentAllOfLinks["default"].constructFromObject(data['links']);
        }
      }

      return obj;
    }
  }]);

  return Comment;
}();
/**
 * @member {Number} id
 */


Comment.prototype['id'] = undefined;
/**
 * @member {Date} created_on
 */

Comment.prototype['created_on'] = undefined;
/**
 * @member {Date} updated_on
 */

Comment.prototype['updated_on'] = undefined;
/**
 * @member {module:model/PullrequestAllOfRenderedTitle} content
 */

Comment.prototype['content'] = undefined;
/**
 * @member {module:model/User} user
 */

Comment.prototype['user'] = undefined;
/**
 * @member {Boolean} deleted
 */

Comment.prototype['deleted'] = undefined;
/**
 * @member {module:model/Comment} parent
 */

Comment.prototype['parent'] = undefined;
/**
 * @member {module:model/CommentAllOfInline} inline
 */

Comment.prototype['inline'] = undefined;
/**
 * @member {module:model/CommentAllOfLinks} links
 */

Comment.prototype['links'] = undefined; // Implement ModelObject interface:

/**
 * @member {String} type
 */

_ModelObject["default"].prototype['type'] = undefined; // Implement CommentAllOf interface:

/**
 * @member {Number} id
 */

_CommentAllOf["default"].prototype['id'] = undefined;
/**
 * @member {Date} created_on
 */

_CommentAllOf["default"].prototype['created_on'] = undefined;
/**
 * @member {Date} updated_on
 */

_CommentAllOf["default"].prototype['updated_on'] = undefined;
/**
 * @member {module:model/PullrequestAllOfRenderedTitle} content
 */

_CommentAllOf["default"].prototype['content'] = undefined;
/**
 * @member {module:model/User} user
 */

_CommentAllOf["default"].prototype['user'] = undefined;
/**
 * @member {Boolean} deleted
 */

_CommentAllOf["default"].prototype['deleted'] = undefined;
/**
 * @member {module:model/Comment} parent
 */

_CommentAllOf["default"].prototype['parent'] = undefined;
/**
 * @member {module:model/CommentAllOfInline} inline
 */

_CommentAllOf["default"].prototype['inline'] = undefined;
/**
 * @member {module:model/CommentAllOfLinks} links
 */

_CommentAllOf["default"].prototype['links'] = undefined;
var _default = Comment;
exports["default"] = _default;