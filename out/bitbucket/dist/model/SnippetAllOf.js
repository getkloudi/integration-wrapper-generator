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
 * The SnippetAllOf model module.
 * @module model/SnippetAllOf
 * @version 1.2.0
 */
var SnippetAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SnippetAllOf</code>.
   * A snippet object.
   * @alias module:model/SnippetAllOf
   */
  function SnippetAllOf() {
    _classCallCheck(this, SnippetAllOf);

    SnippetAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SnippetAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SnippetAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SnippetAllOf} obj Optional instance to populate.
     * @return {module:model/SnippetAllOf} The populated <code>SnippetAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SnippetAllOf();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('title')) {
          obj['title'] = _ApiClient["default"].convertToType(data['title'], 'String');
        }

        if (data.hasOwnProperty('scm')) {
          obj['scm'] = _ApiClient["default"].convertToType(data['scm'], 'String');
        }

        if (data.hasOwnProperty('created_on')) {
          obj['created_on'] = _ApiClient["default"].convertToType(data['created_on'], 'Date');
        }

        if (data.hasOwnProperty('updated_on')) {
          obj['updated_on'] = _ApiClient["default"].convertToType(data['updated_on'], 'Date');
        }

        if (data.hasOwnProperty('owner')) {
          obj['owner'] = _Account["default"].constructFromObject(data['owner']);
        }

        if (data.hasOwnProperty('creator')) {
          obj['creator'] = _Account["default"].constructFromObject(data['creator']);
        }

        if (data.hasOwnProperty('is_private')) {
          obj['is_private'] = _ApiClient["default"].convertToType(data['is_private'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return SnippetAllOf;
}();
/**
 * @member {Number} id
 */


SnippetAllOf.prototype['id'] = undefined;
/**
 * @member {String} title
 */

SnippetAllOf.prototype['title'] = undefined;
/**
 * The DVCS used to store the snippet.
 * @member {module:model/SnippetAllOf.ScmEnum} scm
 */

SnippetAllOf.prototype['scm'] = undefined;
/**
 * @member {Date} created_on
 */

SnippetAllOf.prototype['created_on'] = undefined;
/**
 * @member {Date} updated_on
 */

SnippetAllOf.prototype['updated_on'] = undefined;
/**
 * @member {module:model/Account} owner
 */

SnippetAllOf.prototype['owner'] = undefined;
/**
 * @member {module:model/Account} creator
 */

SnippetAllOf.prototype['creator'] = undefined;
/**
 * @member {Boolean} is_private
 */

SnippetAllOf.prototype['is_private'] = undefined;
/**
 * Allowed values for the <code>scm</code> property.
 * @enum {String}
 * @readonly
 */

SnippetAllOf['ScmEnum'] = {
  /**
   * value: "hg"
   * @const
   */
  "hg": "hg",

  /**
   * value: "git"
   * @const
   */
  "git": "git"
};
var _default = SnippetAllOf;
exports["default"] = _default;