"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _GroupAllOfLinks = _interopRequireDefault(require("./GroupAllOfLinks"));

var _Snippet = _interopRequireDefault(require("./Snippet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SnippetCommentAllOf model module.
 * @module model/SnippetCommentAllOf
 * @version 1.1.2
 */
var SnippetCommentAllOf =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>SnippetCommentAllOf</code>.
   * A comment on a snippet.
   * @alias module:model/SnippetCommentAllOf
   */
  function SnippetCommentAllOf() {
    _classCallCheck(this, SnippetCommentAllOf);

    SnippetCommentAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SnippetCommentAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SnippetCommentAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SnippetCommentAllOf} obj Optional instance to populate.
     * @return {module:model/SnippetCommentAllOf} The populated <code>SnippetCommentAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SnippetCommentAllOf();

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

  return SnippetCommentAllOf;
}();
/**
 * @member {module:model/GroupAllOfLinks} links
 */


SnippetCommentAllOf.prototype['links'] = undefined;
/**
 * @member {module:model/Snippet} snippet
 */

SnippetCommentAllOf.prototype['snippet'] = undefined;
var _default = SnippetCommentAllOf;
exports["default"] = _default;