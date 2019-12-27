"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Comment = _interopRequireDefault(require("./Comment"));

var _CommentAllOfInline = _interopRequireDefault(require("./CommentAllOfInline"));

var _CommentAllOfLinks = _interopRequireDefault(require("./CommentAllOfLinks"));

var _PullrequestAllOfRenderedTitle = _interopRequireDefault(require("./PullrequestAllOfRenderedTitle"));

var _User = _interopRequireDefault(require("./User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CommentAllOf model module.
 * @module model/CommentAllOf
 * @version 1.1.0
 */
var CommentAllOf =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CommentAllOf</code>.
   * The base type for all comments. This type should be considered abstract. Each of the \&quot;commentable\&quot; resources defines its own subtypes (e.g. &#x60;issue_comment&#x60;).
   * @alias module:model/CommentAllOf
   */
  function CommentAllOf() {
    _classCallCheck(this, CommentAllOf);

    CommentAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CommentAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CommentAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommentAllOf} obj Optional instance to populate.
     * @return {module:model/CommentAllOf} The populated <code>CommentAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CommentAllOf();

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
      }

      return obj;
    }
  }]);

  return CommentAllOf;
}();
/**
 * @member {Number} id
 */


CommentAllOf.prototype['id'] = undefined;
/**
 * @member {Date} created_on
 */

CommentAllOf.prototype['created_on'] = undefined;
/**
 * @member {Date} updated_on
 */

CommentAllOf.prototype['updated_on'] = undefined;
/**
 * @member {module:model/PullrequestAllOfRenderedTitle} content
 */

CommentAllOf.prototype['content'] = undefined;
/**
 * @member {module:model/User} user
 */

CommentAllOf.prototype['user'] = undefined;
/**
 * @member {Boolean} deleted
 */

CommentAllOf.prototype['deleted'] = undefined;
/**
 * @member {module:model/Comment} parent
 */

CommentAllOf.prototype['parent'] = undefined;
/**
 * @member {module:model/CommentAllOfInline} inline
 */

CommentAllOf.prototype['inline'] = undefined;
/**
 * @member {module:model/CommentAllOfLinks} links
 */

CommentAllOf.prototype['links'] = undefined;
var _default = CommentAllOf;
exports["default"] = _default;