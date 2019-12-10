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
 * The MRNote model module.
 * @module model/MRNote
 * @version 1.0.0
 */
var MRNote =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>MRNote</code>.
   * List issues that will be closed on merge
   * @alias module:model/MRNote
   */
  function MRNote() {
    _classCallCheck(this, MRNote);

    MRNote.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MRNote, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>MRNote</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MRNote} obj Optional instance to populate.
     * @return {module:model/MRNote} The populated <code>MRNote</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MRNote();

        if (data.hasOwnProperty('author')) {
          obj['author'] = _UserBasic["default"].constructFromObject(data['author']);
        }

        if (data.hasOwnProperty('note')) {
          obj['note'] = _ApiClient["default"].convertToType(data['note'], 'String');
        }
      }

      return obj;
    }
  }]);

  return MRNote;
}();
/**
 * @member {module:model/UserBasic} author
 */


MRNote.prototype['author'] = undefined;
/**
 * @member {String} note
 */

MRNote.prototype['note'] = undefined;
var _default = MRNote;
exports["default"] = _default;