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
 * The InlineResponse20037FieldsWorklog model module.
 * @module model/InlineResponse20037FieldsWorklog
 * @version 1.3.1
 */
var InlineResponse20037FieldsWorklog = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineResponse20037FieldsWorklog</code>.
   * @alias module:model/InlineResponse20037FieldsWorklog
   * @param id {String} 
   * @param issueId {String} 
   * @param self {String} 
   * @param started {String} 
   * @param timeSpent {String} 
   * @param timeSpentSeconds {Number} 
   * @param updated {String} 
   */
  function InlineResponse20037FieldsWorklog(id, issueId, self, started, timeSpent, timeSpentSeconds, updated) {
    _classCallCheck(this, InlineResponse20037FieldsWorklog);

    InlineResponse20037FieldsWorklog.initialize(this, id, issueId, self, started, timeSpent, timeSpentSeconds, updated);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineResponse20037FieldsWorklog, null, [{
    key: "initialize",
    value: function initialize(obj, id, issueId, self, started, timeSpent, timeSpentSeconds, updated) {
      obj['id'] = id;
      obj['issueId'] = issueId;
      obj['self'] = self;
      obj['started'] = started;
      obj['timeSpent'] = timeSpent;
      obj['timeSpentSeconds'] = timeSpentSeconds;
      obj['updated'] = updated;
    }
    /**
     * Constructs a <code>InlineResponse20037FieldsWorklog</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineResponse20037FieldsWorklog} obj Optional instance to populate.
     * @return {module:model/InlineResponse20037FieldsWorklog} The populated <code>InlineResponse20037FieldsWorklog</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineResponse20037FieldsWorklog();

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

  return InlineResponse20037FieldsWorklog;
}();
/**
 * @member {module:model/InlineResponse2009Author} author
 */


InlineResponse20037FieldsWorklog.prototype['author'] = undefined;
/**
 * @member {module:model/InlineResponse2009Body} comment
 */

InlineResponse20037FieldsWorklog.prototype['comment'] = undefined;
/**
 * @member {String} id
 */

InlineResponse20037FieldsWorklog.prototype['id'] = undefined;
/**
 * @member {String} issueId
 */

InlineResponse20037FieldsWorklog.prototype['issueId'] = undefined;
/**
 * @member {String} self
 */

InlineResponse20037FieldsWorklog.prototype['self'] = undefined;
/**
 * @member {String} started
 */

InlineResponse20037FieldsWorklog.prototype['started'] = undefined;
/**
 * @member {String} timeSpent
 */

InlineResponse20037FieldsWorklog.prototype['timeSpent'] = undefined;
/**
 * @member {Number} timeSpentSeconds
 */

InlineResponse20037FieldsWorklog.prototype['timeSpentSeconds'] = undefined;
/**
 * @member {module:model/InlineResponse2009Author} updateAuthor
 */

InlineResponse20037FieldsWorklog.prototype['updateAuthor'] = undefined;
/**
 * @member {String} updated
 */

InlineResponse20037FieldsWorklog.prototype['updated'] = undefined;
/**
 * @member {module:model/InlineResponse2009Visibility} visibility
 */

InlineResponse20037FieldsWorklog.prototype['visibility'] = undefined;
var _default = InlineResponse20037FieldsWorklog;
exports["default"] = _default;