"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GroupAllOfLinks = _interopRequireDefault(require("./GroupAllOfLinks"));

var _ModelObject = _interopRequireDefault(require("./ModelObject"));

var _Snippet = _interopRequireDefault(require("./Snippet"));

var _SnippetCommentAllOf = _interopRequireDefault(require("./SnippetCommentAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SnippetComment model module.
 * @module model/SnippetComment
 * @version 1.1.0
 */
var SnippetComment =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>SnippetComment</code>.
   * @alias module:model/SnippetComment
   * @extends module:model/ModelObject
   * @implements module:model/ModelObject
   * @implements module:model/SnippetCommentAllOf
   * @param type {String} 
   */
  function SnippetComment(type) {
    _classCallCheck(this, SnippetComment);

    _ModelObject["default"].initialize(this, type);

    _SnippetCommentAllOf["default"].initialize(this);

    SnippetComment.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SnippetComment, null, [{
    key: "initialize",
    value: function initialize(obj, type) {}
    /**
     * Constructs a <code>SnippetComment</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SnippetComment} obj Optional instance to populate.
     * @return {module:model/SnippetComment} The populated <code>SnippetComment</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SnippetComment();

        _ModelObject["default"].constructFromObject(data, obj);

        _ModelObject["default"].constructFromObject(data, obj);

        _SnippetCommentAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('links')) {
          obj['links'] = _GroupAllOfLinks["default"].constructFromObject(data['links']);
        }

        if (data.hasOwnProperty('snippet')) {
          obj['snippet'] = _Snippet["default"].constructFromObject(data['snippet']);
        }
      }

      return obj;
    }
  }]);

  return SnippetComment;
}();
/**
 * @member {module:model/GroupAllOfLinks} links
 */


SnippetComment.prototype['links'] = undefined;
/**
 * @member {module:model/Snippet} snippet
 */

SnippetComment.prototype['snippet'] = undefined; // Implement ModelObject interface:

/**
 * @member {String} type
 */

_ModelObject["default"].prototype['type'] = undefined; // Implement SnippetCommentAllOf interface:

/**
 * @member {module:model/GroupAllOfLinks} links
 */

_SnippetCommentAllOf["default"].prototype['links'] = undefined;
/**
 * @member {module:model/Snippet} snippet
 */

_SnippetCommentAllOf["default"].prototype['snippet'] = undefined;
var _default = SnippetComment;
exports["default"] = _default;