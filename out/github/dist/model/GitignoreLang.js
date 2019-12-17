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
 * The GitignoreLang model module.
 * @module model/GitignoreLang
 * @version 1.3.0
 */
var GitignoreLang =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>GitignoreLang</code>.
   * @alias module:model/GitignoreLang
   */
  function GitignoreLang() {
    _classCallCheck(this, GitignoreLang);

    GitignoreLang.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GitignoreLang, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>GitignoreLang</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GitignoreLang} obj Optional instance to populate.
     * @return {module:model/GitignoreLang} The populated <code>GitignoreLang</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GitignoreLang();

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('source')) {
          obj['source'] = _ApiClient["default"].convertToType(data['source'], 'String');
        }
      }

      return obj;
    }
  }]);

  return GitignoreLang;
}();
/**
 * @member {String} name
 */


GitignoreLang.prototype['name'] = undefined;
/**
 * @member {String} source
 */

GitignoreLang.prototype['source'] = undefined;
var _default = GitignoreLang;
exports["default"] = _default;