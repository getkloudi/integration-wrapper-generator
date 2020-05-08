"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse2009Author = _interopRequireDefault(require("./InlineResponse2009Author"));

var _InlineResponse2009Body = _interopRequireDefault(require("./InlineResponse2009Body"));

var _InlineResponse2009Visibility = _interopRequireDefault(require("./InlineResponse2009Visibility"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineResponse20049 model module.
 * @module model/InlineResponse20049
 * @version 1.3.0
 */
var InlineResponse20049 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20049</code>.
   * 
   * @alias module:model/InlineResponse20049
   * @param author {module:model/InlineResponse2009Author} 
   * @param comment {module:model/InlineResponse2009Body} 
   * @param id {String} 
   * @param issueId {String} 
   * @param self {String} 
   * @param started {String} 
   * @param timeSpent {String} 
   * @param timeSpentSeconds {Number} 
   * @param updateAuthor {module:model/InlineResponse2009Author} 
   * @param updated {String} 
   * @param visibility {module:model/InlineResponse2009Visibility} 
   */
  function InlineResponse20049(author, comment, id, issueId, self, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility) {
    _classCallCheck(this, InlineResponse20049);

    InlineResponse20049.initialize(this, author, comment, id, issueId, self, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20049, null, [{
    key: "initialize",
    value: function initialize(obj, author, comment, id, issueId, self, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility) {
      obj['author'] = author;
      obj['comment'] = comment;
      obj['id'] = id;
      obj['issueId'] = issueId;
      obj['self'] = self;
      obj['started'] = started;
      obj['timeSpent'] = timeSpent;
      obj['timeSpentSeconds'] = timeSpentSeconds;
      obj['updateAuthor'] = updateAuthor;
      obj['updated'] = updated;
      obj['visibility'] = visibility;
    }
    /**
     * Constructs a <code>InlineResponse20049</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20049} obj Optional instance to populate.
     * @return {module:model/InlineResponse20049} The populated <code>InlineResponse20049</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20049();

        if (data.hasOwnProperty('author')) {
          obj['author'] = _InlineResponse2009Author["default"].constructFromObject(data['author']);
        }

        if (data.hasOwnProperty('comment')) {
          obj['comment'] = _InlineResponse2009Body["default"].constructFromObject(data['comment']);
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('issueId')) {
          obj['issueId'] = _ApiClient["default"].convertToType(data['issueId'], 'String');
        }

        if (data.hasOwnProperty('self')) {
          obj['self'] = _ApiClient["default"].convertToType(data['self'], 'String');
        }

        if (data.hasOwnProperty('started')) {
          obj['started'] = _ApiClient["default"].convertToType(data['started'], 'String');
        }

        if (data.hasOwnProperty('timeSpent')) {
          obj['timeSpent'] = _ApiClient["default"].convertToType(data['timeSpent'], 'String');
        }

        if (data.hasOwnProperty('timeSpentSeconds')) {
          obj['timeSpentSeconds'] = _ApiClient["default"].convertToType(data['timeSpentSeconds'], 'Number');
        }

        if (data.hasOwnProperty('updateAuthor')) {
          obj['updateAuthor'] = _InlineResponse2009Author["default"].constructFromObject(data['updateAuthor']);
        }

        if (data.hasOwnProperty('updated')) {
          obj['updated'] = _ApiClient["default"].convertToType(data['updated'], 'String');
        }

        if (data.hasOwnProperty('visibility')) {
          obj['visibility'] = _InlineResponse2009Visibility["default"].constructFromObject(data['visibility']);
        }
      }

      return obj;
    }
  }]);

  return InlineResponse20049;
}();
/**
 * @member {module:model/InlineResponse2009Author} author
 */


InlineResponse20049.prototype['author'] = undefined;
/**
 * @member {module:model/InlineResponse2009Body} comment
 */

InlineResponse20049.prototype['comment'] = undefined;
/**
 * @member {String} id
 */

InlineResponse20049.prototype['id'] = undefined;
/**
 * @member {String} issueId
 */

InlineResponse20049.prototype['issueId'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20049.prototype['self'] = undefined;
/**
 * @member {String} started
 */

InlineResponse20049.prototype['started'] = undefined;
/**
 * @member {String} timeSpent
 */

InlineResponse20049.prototype['timeSpent'] = undefined;
/**
 * @member {Number} timeSpentSeconds
 */

InlineResponse20049.prototype['timeSpentSeconds'] = undefined;
/**
 * @member {module:model/InlineResponse2009Author} updateAuthor
 */

InlineResponse20049.prototype['updateAuthor'] = undefined;
/**
 * @member {String} updated
 */

InlineResponse20049.prototype['updated'] = undefined;
/**
 * @member {module:model/InlineResponse2009Visibility} visibility
 */

InlineResponse20049.prototype['visibility'] = undefined;
var _default = InlineResponse20049;
exports["default"] = _default;