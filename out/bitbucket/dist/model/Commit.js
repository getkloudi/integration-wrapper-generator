"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Author = _interopRequireDefault(require("./Author"));

var _BaseCommit = _interopRequireDefault(require("./BaseCommit"));

var _CommitAllOf = _interopRequireDefault(require("./CommitAllOf"));

var _CommitAllOfLinks = _interopRequireDefault(require("./CommitAllOfLinks"));

var _Participant = _interopRequireDefault(require("./Participant"));

var _Repository = _interopRequireDefault(require("./Repository"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Commit model module.
 * @module model/Commit
 * @version 1.0.0
 */
var Commit =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Commit</code>.
   * @alias module:model/Commit
   * @implements module:model/BaseCommit
   * @implements module:model/CommitAllOf
   * @param type {String} 
   */
  function Commit(type) {
    _classCallCheck(this, Commit);

    _BaseCommit["default"].initialize(this, type);

    _CommitAllOf["default"].initialize(this);

    Commit.initialize(this, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Commit, null, [{
    key: "initialize",
    value: function initialize(obj, type) {
      obj['type'] = type;
    }
    /**
     * Constructs a <code>Commit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Commit} obj Optional instance to populate.
     * @return {module:model/Commit} The populated <code>Commit</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Commit();

        _BaseCommit["default"].constructFromObject(data, obj);

        _CommitAllOf["default"].constructFromObject(data, obj);

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
          obj['links'] = _CommitAllOfLinks["default"].constructFromObject(data['links']);
        }

        if (data.hasOwnProperty('participants')) {
          obj['participants'] = _ApiClient["default"].convertToType(data['participants'], [_Participant["default"]]);
        }

        if (data.hasOwnProperty('repository')) {
          obj['repository'] = _Repository["default"].constructFromObject(data['repository']);
        }
      }

      return obj;
    }
  }]);

  return Commit;
}();
/**
 * @member {String} type
 */


Commit.prototype['type'] = undefined;
/**
 * @member {module:model/Author} author
 */

Commit.prototype['author'] = undefined;
/**
 * @member {Date} date
 */

Commit.prototype['date'] = undefined;
/**
 * @member {String} hash
 */

Commit.prototype['hash'] = undefined;
/**
 * @member {String} message
 */

Commit.prototype['message'] = undefined;
/**
 * @member {Array.<module:model/BaseCommit>} parents
 */

Commit.prototype['parents'] = undefined;
/**
 * @member {module:model/CommitAllOfLinks} links
 */

Commit.prototype['links'] = undefined;
/**
 * @member {Array.<module:model/Participant>} participants
 */

Commit.prototype['participants'] = undefined;
/**
 * @member {module:model/Repository} repository
 */

Commit.prototype['repository'] = undefined; // Implement BaseCommit interface:

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

_BaseCommit["default"].prototype['parents'] = undefined; // Implement CommitAllOf interface:

/**
 * @member {module:model/CommitAllOfLinks} links
 */

_CommitAllOf["default"].prototype['links'] = undefined;
/**
 * @member {Array.<module:model/Participant>} participants
 */

_CommitAllOf["default"].prototype['participants'] = undefined;
/**
 * @member {module:model/Repository} repository
 */

_CommitAllOf["default"].prototype['repository'] = undefined;
var _default = Commit;
exports["default"] = _default;