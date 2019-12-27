"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Account = _interopRequireDefault(require("./Account"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The AuthorAllOf model module.
 * @module model/AuthorAllOf
 * @version 1.1.0
 */
var AuthorAllOf =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>AuthorAllOf</code>.
   * The author of a change in a repository
   * @alias module:model/AuthorAllOf
   */
  function AuthorAllOf() {
    _classCallCheck(this, AuthorAllOf);

    AuthorAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AuthorAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AuthorAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthorAllOf} obj Optional instance to populate.
     * @return {module:model/AuthorAllOf} The populated <code>AuthorAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AuthorAllOf();

        if (data.hasOwnProperty('raw')) {
          obj['raw'] = _ApiClient["default"].convertToType(data['raw'], 'String');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _Account["default"].constructFromObject(data['user']);
        }
      }

      return obj;
    }
  }]);

  return AuthorAllOf;
}();
/**
 * The raw author value from the repository. This may be the only value available if the author does not match a user in Bitbucket.
 * @member {String} raw
 */


AuthorAllOf.prototype['raw'] = undefined;
/**
 * @member {module:model/Account} user
 */

AuthorAllOf.prototype['user'] = undefined;
var _default = AuthorAllOf;
exports["default"] = _default;