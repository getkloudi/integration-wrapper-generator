"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Account = _interopRequireDefault(require("./Account"));

var _ModelObject = _interopRequireDefault(require("./ModelObject"));

var _SnippetAllOf = _interopRequireDefault(require("./SnippetAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Snippet model module.
 * @module model/Snippet
 * @version 1.1.2
 */
var Snippet =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Snippet</code>.
   * @alias module:model/Snippet
   * @extends module:model/ModelObject
   * @implements module:model/ModelObject
   * @implements module:model/SnippetAllOf
   * @param type {String} 
   */
  function Snippet(type) {
    _classCallCheck(this, Snippet);

    _ModelObject["default"].initialize(this, type);

    _SnippetAllOf["default"].initialize(this);

    Snippet.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Snippet, null, [{
    key: "initialize",
    value: function initialize(obj, type) {}
    /**
     * Constructs a <code>Snippet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Snippet} obj Optional instance to populate.
     * @return {module:model/Snippet} The populated <code>Snippet</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Snippet();

        _ModelObject["default"].constructFromObject(data, obj);

        _ModelObject["default"].constructFromObject(data, obj);

        _SnippetAllOf["default"].constructFromObject(data, obj);

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

  return Snippet;
}();
/**
 * @member {Number} id
 */


Snippet.prototype['id'] = undefined;
/**
 * @member {String} title
 */

Snippet.prototype['title'] = undefined;
/**
 * The DVCS used to store the snippet.
 * @member {module:model/Snippet.ScmEnum} scm
 */

Snippet.prototype['scm'] = undefined;
/**
 * @member {Date} created_on
 */

Snippet.prototype['created_on'] = undefined;
/**
 * @member {Date} updated_on
 */

Snippet.prototype['updated_on'] = undefined;
/**
 * @member {module:model/Account} owner
 */

Snippet.prototype['owner'] = undefined;
/**
 * @member {module:model/Account} creator
 */

Snippet.prototype['creator'] = undefined;
/**
 * @member {Boolean} is_private
 */

Snippet.prototype['is_private'] = undefined; // Implement ModelObject interface:

/**
 * @member {String} type
 */

_ModelObject["default"].prototype['type'] = undefined; // Implement SnippetAllOf interface:

/**
 * @member {Number} id
 */

_SnippetAllOf["default"].prototype['id'] = undefined;
/**
 * @member {String} title
 */

_SnippetAllOf["default"].prototype['title'] = undefined;
/**
 * The DVCS used to store the snippet.
 * @member {module:model/SnippetAllOf.ScmEnum} scm
 */

_SnippetAllOf["default"].prototype['scm'] = undefined;
/**
 * @member {Date} created_on
 */

_SnippetAllOf["default"].prototype['created_on'] = undefined;
/**
 * @member {Date} updated_on
 */

_SnippetAllOf["default"].prototype['updated_on'] = undefined;
/**
 * @member {module:model/Account} owner
 */

_SnippetAllOf["default"].prototype['owner'] = undefined;
/**
 * @member {module:model/Account} creator
 */

_SnippetAllOf["default"].prototype['creator'] = undefined;
/**
 * @member {Boolean} is_private
 */

_SnippetAllOf["default"].prototype['is_private'] = undefined;
/**
 * Allowed values for the <code>scm</code> property.
 * @enum {String}
 * @readonly
 */

Snippet['ScmEnum'] = {
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
var _default = Snippet;
exports["default"] = _default;