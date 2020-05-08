"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineObject28 model module.
 * @module model/InlineObject28
 * @version 1.1.0
 */
var InlineObject28 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject28</code>.
   * @alias module:model/InlineObject28
   */
  function InlineObject28() {
    _classCallCheck(this, InlineObject28);

    InlineObject28.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject28, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject28</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject28} obj Optional instance to populate.
     * @return {module:model/InlineObject28} The populated <code>InlineObject28</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject28();

        if (data.hasOwnProperty('author')) {
          obj['author'] = _ApiClient["default"].convertToType(data['author'], Object);
        }

        if (data.hasOwnProperty('comment')) {
          obj['comment'] = _ApiClient["default"].convertToType(data['comment'], Object);
        }

        if (data.hasOwnProperty('properties')) {
          obj['properties'] = _ApiClient["default"].convertToType(data['properties'], [Object]);
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
          obj['updateAuthor'] = _ApiClient["default"].convertToType(data['updateAuthor'], Object);
        }

        if (data.hasOwnProperty('visibility')) {
          obj['visibility'] = _ApiClient["default"].convertToType(data['visibility'], Object);
        }
      }

      return obj;
    }
  }]);

  return InlineObject28;
}();
/**
 * User details. Read only.
 * @member {Object} author
 */


InlineObject28.prototype['author'] = undefined;
/**
 * A comment about the worklog. Optional when creating or updating a worklog.
 * @member {Object} comment
 */

InlineObject28.prototype['comment'] = undefined;
/**
 * Details of properties for the worklog. Optional when creating or updating a worklog.
 * @member {Array.<Object>} properties
 */

InlineObject28.prototype['properties'] = undefined;
/**
 * The datetime on which the worklog effort was started. Required when creating a worklog. Optional when updating a worklog.
 * @member {String} started
 */

InlineObject28.prototype['started'] = undefined;
/**
 * The time spent working on the issue as days (#d), hours (#h), or minutes (#m or #). Required when creating a worklog if timeSpentSeconds isn't provided. Optional when updating a worklog. Cannot be provided if timeSpentSecond is provided.
 * @member {String} timeSpent
 */

InlineObject28.prototype['timeSpent'] = undefined;
/**
 * The time in seconds spent working on the issue. Required when creating a worklog if timeSpent isn't provided. Optional when updating a worklog. Cannot be provided if timeSpent is provided.
 * @member {Number} timeSpentSeconds
 */

InlineObject28.prototype['timeSpentSeconds'] = undefined;
/**
 * User details. Read only.
 * @member {Object} updateAuthor
 */

InlineObject28.prototype['updateAuthor'] = undefined;
/**
 * The group or role to which this item is visible.
 * @member {Object} visibility
 */

InlineObject28.prototype['visibility'] = undefined;
var _default = InlineObject28;
exports["default"] = _default;