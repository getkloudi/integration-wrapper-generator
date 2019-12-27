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
 * The CommentAllOfInline model module.
 * @module model/CommentAllOfInline
 * @version 1.1.2
 */
var CommentAllOfInline =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CommentAllOfInline</code>.
   * @alias module:model/CommentAllOfInline
   * @param path {String} The path of the file this comment is anchored to.
   */
  function CommentAllOfInline(path) {
    _classCallCheck(this, CommentAllOfInline);

    CommentAllOfInline.initialize(this, path);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CommentAllOfInline, null, [{
    key: "initialize",
    value: function initialize(obj, path) {
      obj['path'] = path;
    }
    /**
     * Constructs a <code>CommentAllOfInline</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommentAllOfInline} obj Optional instance to populate.
     * @return {module:model/CommentAllOfInline} The populated <code>CommentAllOfInline</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CommentAllOfInline();

        if (data.hasOwnProperty('to')) {
          obj['to'] = _ApiClient["default"].convertToType(data['to'], 'Number');
        }

        if (data.hasOwnProperty('from')) {
          obj['from'] = _ApiClient["default"].convertToType(data['from'], 'Number');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CommentAllOfInline;
}();
/**
 * The comment's anchor line in the new version of the file.
 * @member {Number} to
 */


CommentAllOfInline.prototype['to'] = undefined;
/**
 * The comment's anchor line in the old version of the file.
 * @member {Number} from
 */

CommentAllOfInline.prototype['from'] = undefined;
/**
 * The path of the file this comment is anchored to.
 * @member {String} path
 */

CommentAllOfInline.prototype['path'] = undefined;
var _default = CommentAllOfInline;
exports["default"] = _default;