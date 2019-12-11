"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _UserBasic = _interopRequireDefault(require("./UserBasic"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The CommitNote model module.
 * @module model/CommitNote
 * @version 1.1.0
 */
var CommitNote =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>CommitNote</code>.
   * Post comment to commit
   * @alias module:model/CommitNote
   */
  function CommitNote() {
    _classCallCheck(this, CommitNote);

    CommitNote.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CommitNote, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CommitNote</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CommitNote} obj Optional instance to populate.
     * @return {module:model/CommitNote} The populated <code>CommitNote</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CommitNote();

        if (data.hasOwnProperty('author')) {
          obj['author'] = _UserBasic["default"].constructFromObject(data['author']);
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('line')) {
          obj['line'] = _ApiClient["default"].convertToType(data['line'], 'String');
        }

        if (data.hasOwnProperty('line_type')) {
          obj['line_type'] = _ApiClient["default"].convertToType(data['line_type'], 'String');
        }

        if (data.hasOwnProperty('note')) {
          obj['note'] = _ApiClient["default"].convertToType(data['note'], 'String');
        }

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }
      }

      return obj;
    }
  }]);

  return CommitNote;
}();
/**
 * @member {module:model/UserBasic} author
 */


CommitNote.prototype['author'] = undefined;
/**
 * @member {String} created_at
 */

CommitNote.prototype['created_at'] = undefined;
/**
 * @member {String} line
 */

CommitNote.prototype['line'] = undefined;
/**
 * @member {String} line_type
 */

CommitNote.prototype['line_type'] = undefined;
/**
 * @member {String} note
 */

CommitNote.prototype['note'] = undefined;
/**
 * @member {String} path
 */

CommitNote.prototype['path'] = undefined;
var _default = CommitNote;
exports["default"] = _default;