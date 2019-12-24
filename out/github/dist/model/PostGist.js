"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PostGistFiles = _interopRequireDefault(require("./PostGistFiles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PostGist model module.
 * @module model/PostGist
 * @version 1.3.3
 */
var PostGist =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>PostGist</code>.
   * @alias module:model/PostGist
   */
  function PostGist() {
    _classCallCheck(this, PostGist);

    PostGist.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PostGist, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PostGist</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostGist} obj Optional instance to populate.
     * @return {module:model/PostGist} The populated <code>PostGist</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PostGist();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('files')) {
          obj['files'] = _PostGistFiles["default"].constructFromObject(data['files']);
        }

        if (data.hasOwnProperty('public')) {
          obj['public'] = _ApiClient["default"].convertToType(data['public'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return PostGist;
}();
/**
 * @member {String} description
 */


PostGist.prototype['description'] = undefined;
/**
 * @member {module:model/PostGistFiles} files
 */

PostGist.prototype['files'] = undefined;
/**
 * @member {Boolean} public
 */

PostGist.prototype['public'] = undefined;
var _default = PostGist;
exports["default"] = _default;