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
 * The Note model module.
 * @module model/Note
 * @version 1.0.0
 */
var Note =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Note</code>.
   * Delete a +noteable+ note
   * @alias module:model/Note
   */
  function Note() {
    _classCallCheck(this, Note);

    Note.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Note, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Note</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Note} obj Optional instance to populate.
     * @return {module:model/Note} The populated <code>Note</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Note();

        if (data.hasOwnProperty('attachment')) {
          obj['attachment'] = _ApiClient["default"].convertToType(data['attachment'], 'String');
        }

        if (data.hasOwnProperty('author')) {
          obj['author'] = _UserBasic["default"].constructFromObject(data['author']);
        }

        if (data.hasOwnProperty('body')) {
          obj['body'] = _ApiClient["default"].convertToType(data['body'], 'String');
        }

        if (data.hasOwnProperty('created_at')) {
          obj['created_at'] = _ApiClient["default"].convertToType(data['created_at'], 'String');
        }

        if (data.hasOwnProperty('downvote?')) {
          obj['downvote?'] = _ApiClient["default"].convertToType(data['downvote?'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('noteable_id')) {
          obj['noteable_id'] = _ApiClient["default"].convertToType(data['noteable_id'], 'String');
        }

        if (data.hasOwnProperty('noteable_type')) {
          obj['noteable_type'] = _ApiClient["default"].convertToType(data['noteable_type'], 'String');
        }

        if (data.hasOwnProperty('system')) {
          obj['system'] = _ApiClient["default"].convertToType(data['system'], 'String');
        }

        if (data.hasOwnProperty('updated_at')) {
          obj['updated_at'] = _ApiClient["default"].convertToType(data['updated_at'], 'String');
        }

        if (data.hasOwnProperty('upvote?')) {
          obj['upvote?'] = _ApiClient["default"].convertToType(data['upvote?'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Note;
}();
/**
 * @member {String} attachment
 */


Note.prototype['attachment'] = undefined;
/**
 * @member {module:model/UserBasic} author
 */

Note.prototype['author'] = undefined;
/**
 * @member {String} body
 */

Note.prototype['body'] = undefined;
/**
 * @member {String} created_at
 */

Note.prototype['created_at'] = undefined;
/**
 * @member {String} downvote?
 */

Note.prototype['downvote?'] = undefined;
/**
 * @member {String} id
 */

Note.prototype['id'] = undefined;
/**
 * @member {String} noteable_id
 */

Note.prototype['noteable_id'] = undefined;
/**
 * @member {String} noteable_type
 */

Note.prototype['noteable_type'] = undefined;
/**
 * @member {String} system
 */

Note.prototype['system'] = undefined;
/**
 * @member {String} updated_at
 */

Note.prototype['updated_at'] = undefined;
/**
 * @member {String} upvote?
 */

Note.prototype['upvote?'] = undefined;
var _default = Note;
exports["default"] = _default;