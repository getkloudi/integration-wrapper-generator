"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Author = _interopRequireDefault(require("./Author"));

var _BaseCommit = _interopRequireDefault(require("./BaseCommit"));

var _Snippet = _interopRequireDefault(require("./Snippet"));

var _SnippetCommitAllOf = _interopRequireDefault(require("./SnippetCommitAllOf"));

var _SnippetCommitAllOfLinks = _interopRequireDefault(require("./SnippetCommitAllOfLinks"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SnippetCommit model module.
 * @module model/SnippetCommit
 * @version 1.1.0
 */
var SnippetCommit =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>SnippetCommit</code>.
   * @alias module:model/SnippetCommit
   * @implements module:model/BaseCommit
   * @implements module:model/SnippetCommitAllOf
   * @param type {String} 
   */
  function SnippetCommit(type) {
    _classCallCheck(this, SnippetCommit);

    _BaseCommit["default"].initialize(this, type);

    _SnippetCommitAllOf["default"].initialize(this);

    SnippetCommit.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SnippetCommit, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>SnippetCommit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SnippetCommit} obj Optional instance to populate.
     * @return {module:model/SnippetCommit} The populated <code>SnippetCommit</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SnippetCommit();

        _BaseCommit["default"].constructFromObject(data, obj);

        _SnippetCommitAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('type')) {
          obj['type'] = _ApiClient["default"].convertToType(data['type'], 'String');
        }

        if (data.hasOwnProperty('author')) {
          obj['author'] = _Author["default"].constructFromObject(data['author']);
        }

        if (data.hasOwnProperty('date')) {
          obj['date'] = _ApiClient["default"].convertToType(data['date'], 'Date');
        }

        if (data.hasOwnProperty('hash')) {
          obj['hash'] = _ApiClient["default"].convertToType(data['hash'], 'String');
        }

        if (data.hasOwnProperty('message')) {
          obj['message'] = _ApiClient["default"].convertToType(data['message'], 'String');
        }

        if (data.hasOwnProperty('parents')) {
          obj['parents'] = _ApiClient["default"].convertToType(data['parents'], [_BaseCommit["default"]]);
        }

        if (data.hasOwnProperty('links')) {
          obj['links'] = _SnippetCommitAllOfLinks["default"].constructFromObject(data['links']);
        }

        if (data.hasOwnProperty('snippet')) {
          obj['snippet'] = _Snippet["default"].constructFromObject(data['snippet']);
        }
      }

      return obj;
    }
  }]);

  return SnippetCommit;
}();
/**
 * @member {String} type
 */


SnippetCommit.prototype['type'] = undefined;
/**
 * @member {module:model/Author} author
 */

SnippetCommit.prototype['author'] = undefined;
/**
 * @member {Date} date
 */

SnippetCommit.prototype['date'] = undefined;
/**
 * @member {String} hash
 */

SnippetCommit.prototype['hash'] = undefined;
/**
 * @member {String} message
 */

SnippetCommit.prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BaseCommit>} parents
 */

SnippetCommit.prototype['parents'] = undefined;
/**
 * @member {module:model/SnippetCommitAllOfLinks} links
 */

SnippetCommit.prototype['links'] = undefined;
/**
 * @member {module:model/Snippet} snippet
 */

SnippetCommit.prototype['snippet'] = undefined; // Implement BaseCommit interface:

/**
 * @member {String} type
 */

_BaseCommit["default"].prototype['type'] = undefined;
/**
 * @member {module:model/Author} author
 */

_BaseCommit["default"].prototype['author'] = undefined;
/**
 * @member {Date} date
 */

_BaseCommit["default"].prototype['date'] = undefined;
/**
 * @member {String} hash
 */

_BaseCommit["default"].prototype['hash'] = undefined;
/**
 * @member {String} message
 */

_BaseCommit["default"].prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BaseCommit>} parents
 */

_BaseCommit["default"].prototype['parents'] = undefined; // Implement SnippetCommitAllOf interface:

/**
 * @member {module:model/SnippetCommitAllOfLinks} links
 */

_SnippetCommitAllOf["default"].prototype['links'] = undefined;
/**
 * @member {module:model/Snippet} snippet
 */

_SnippetCommitAllOf["default"].prototype['snippet'] = undefined;
var _default = SnippetCommit;
exports["default"] = _default;