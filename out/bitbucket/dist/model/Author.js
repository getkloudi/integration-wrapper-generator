"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Account = _interopRequireDefault(require("./Account"));

var _AuthorAllOf = _interopRequireDefault(require("./AuthorAllOf"));

var _ModelObject = _interopRequireDefault(require("./ModelObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Author model module.
 * @module model/Author
 * @version 1.1.0
 */
var Author =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Author</code>.
   * @alias module:model/Author
   * @extends module:model/ModelObject
   * @implements module:model/ModelObject
   * @implements module:model/AuthorAllOf
   * @param type {String} 
   */
  function Author(type) {
    _classCallCheck(this, Author);

    _ModelObject["default"].initialize(this, type);

    _AuthorAllOf["default"].initialize(this);

    Author.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Author, null, [{
    key: "initialize",
    value: function initialize(obj, type) {}
    /**
     * Constructs a <code>Author</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Author} obj Optional instance to populate.
     * @return {module:model/Author} The populated <code>Author</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Author();

        _ModelObject["default"].constructFromObject(data, obj);

        _ModelObject["default"].constructFromObject(data, obj);

        _AuthorAllOf["default"].constructFromObject(data, obj);

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

  return Author;
}();
/**
 * The raw author value from the repository. This may be the only value available if the author does not match a user in Bitbucket.
 * @member {String} raw
 */


Author.prototype['raw'] = undefined;
/**
 * @member {module:model/Account} user
 */

Author.prototype['user'] = undefined; // Implement ModelObject interface:

/**
 * @member {String} type
 */

_ModelObject["default"].prototype['type'] = undefined; // Implement AuthorAllOf interface:

/**
 * The raw author value from the repository. This may be the only value available if the author does not match a user in Bitbucket.
 * @member {String} raw
 */

_AuthorAllOf["default"].prototype['raw'] = undefined;
/**
 * @member {module:model/Account} user
 */

_AuthorAllOf["default"].prototype['user'] = undefined;
var _default = Author;
exports["default"] = _default;